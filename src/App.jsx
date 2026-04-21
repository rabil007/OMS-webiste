import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout/SiteLayout.jsx'

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx').then((m) => ({ default: m.HomePage })))
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage.jsx').then((m) => ({ default: m.AboutPage })))
const ServicesPage = lazy(() => import('./pages/ServicesPage/ServicesPage.jsx').then((m) => ({ default: m.ServicesPage })))
const FaqsPage = lazy(() => import('./pages/FaqsPage/FaqsPage.jsx').then((m) => ({ default: m.FaqsPage })))
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage.jsx').then((m) => ({ default: m.ContactPage })))
const TeamPage = lazy(() => import('./pages/TeamPage/TeamPage.jsx').then((m) => ({ default: m.TeamPage })))
const SoftwaresPage = lazy(() => import('./pages/SoftwaresPage/SoftwaresPage.jsx').then((m) => ({ default: m.SoftwaresPage })))
const LiveVesselTrackingPage = lazy(() =>
  import('./pages/LiveVesselTrackingPage/LiveVesselTrackingPage.jsx').then((m) => ({ default: m.LiveVesselTrackingPage })),
)
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage/PrivacyPolicyPage.jsx').then((m) => ({ default: m.PrivacyPolicyPage })))
const TermsPage = lazy(() => import('./pages/TermsPage/TermsPage.jsx').then((m) => ({ default: m.TermsPage })))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage.jsx').then((m) => ({ default: m.NotFoundPage })))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/softwares" element={<SoftwaresPage />} />
            <Route path="/live-vessel-tracking" element={<LiveVesselTrackingPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="/404-2" element={<Navigate to="/404" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
