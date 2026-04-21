import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { SiteHeader } from '../SiteHeader/SiteHeader.jsx'
import { SiteFooter } from '../SiteFooter/SiteFooter.jsx'
import { OmsChat } from '../OmsChat/OmsChat.jsx'
import { ScrollToTop } from '../ScrollToTop/ScrollToTop.jsx'
import { RouteScrollReset } from '../RouteScrollReset/RouteScrollReset.jsx'
import { ScrollProgress } from '../ScrollProgress/ScrollProgress.jsx'
import styles from './SiteLayout.module.css'

export function SiteLayout() {
  const location = useLocation()

  return (
    <div className={styles.shell}>
      <ScrollProgress />
      {/* Resets scroll position on every navigation */}
      <RouteScrollReset />

      <SiteHeader />

      {/*
        key={location.key} forces React to remount this div on every
        route change, which re-triggers the CSS fadeIn animation.
      */}
      <main className={styles.main}>
        <div key={location.key} className={styles.pageWrapper}>
          <Outlet />
        </div>
      </main>

      <SiteFooter />

      {/* Global floating widgets */}
      <ScrollToTop />
      <OmsChat />
    </div>
  )
}
