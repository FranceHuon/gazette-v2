import { Header } from '@gazette-v2/ui/components/layout/Header'
import { Navigation } from '@gazette-v2/ui/components/layout/Navigation'
import { Link, Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <>
      <Header>
        <Navigation
          brand={(
            <Link to="/" className="text-3xl font-bold uppercase tracking-wider text-brand-red hover:text-red-600">
              Gazette
            </Link>
          )}
          sections={[
            {
              items: [
                { to: '/articles', label: 'Articles' },
                { to: '/medias', label: 'Médias' },
                { to: '/settings', label: 'Paramètres' },
              ],
            },
          ]}
        />
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
