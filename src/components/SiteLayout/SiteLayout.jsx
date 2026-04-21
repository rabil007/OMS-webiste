import { Outlet } from 'react-router-dom'
import { SiteHeader } from '../SiteHeader/SiteHeader.jsx'
import { SiteFooter } from '../SiteFooter/SiteFooter.jsx'

export function SiteLayout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
