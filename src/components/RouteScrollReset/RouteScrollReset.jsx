import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Resets window scroll position to top on every route change.
 * Drop this anywhere inside <BrowserRouter>.
 */
export function RouteScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}
