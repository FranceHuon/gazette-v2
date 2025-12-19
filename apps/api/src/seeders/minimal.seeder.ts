import { EntityManager } from '@mikro-orm/core'
import { Seeder } from '@mikro-orm/seeder'
import { hashPassword } from 'better-auth/crypto'
import { Account, User } from '../modules/auth/auth.entity'

/**
 * MinimalSeeder creates just a single user with a single post for quick testing
 */
export class MinimalSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // Create user
    const user = new User()
    user.name = 'Test User'
    user.email = 'test@example.com'
    user.emailVerified = true
    await em.persistAndFlush(user)

    // Create account with password
    const account = new Account()
    account.user = user
    account.providerId = 'credential'
    account.accountId = crypto.randomUUID()
    account.password = await hashPassword('Password123!')
    await em.persistAndFlush(account)
  }
}
