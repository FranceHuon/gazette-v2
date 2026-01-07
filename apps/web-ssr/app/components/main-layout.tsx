import { Header } from '@gazette-v2/ui/components/layout/Header'
import { Navigation } from '@gazette-v2/ui/components/layout/Navigation'
import { Link, Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <>
      <Header>
        <Navigation
          brand={(
            <Link to="/" className="font-heading text-xl hover:underline">
              Gazette V2
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
