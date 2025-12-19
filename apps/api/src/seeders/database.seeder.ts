/* eslint-disable no-console */

import { Dictionary, EntityManager } from '@mikro-orm/core'
import { Seeder } from '@mikro-orm/seeder'
import { AuthSeeder } from './auth.seeder'

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const context: Dictionary = {}

    // Run AuthSeeder first to create users
    await new AuthSeeder().run(em, context)
    console.info('AuthSeeder done')
  }
}
