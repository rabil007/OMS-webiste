import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout/SiteLayout.jsx'
import { HomePage } from './pages/HomePage/HomePage.jsx'
import { AboutPage } from './pages/AboutPage/AboutPage.jsx'
import { ServicesPage } from './pages/ServicesPage/ServicesPage.jsx'
import { FaqsPage } from './pages/FaqsPage/FaqsPage.jsx'
import { ContactPage } from './pages/ContactPage/ContactPage.jsx'
import { TeamPage } from './pages/TeamPage/TeamPage.jsx'
import { SoftwaresPage } from './pages/SoftwaresPage/SoftwaresPage.jsx'
import { LiveVesselTrackingPage } from './pages/LiveVesselTrackingPage/LiveVesselTrackingPage.jsx'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage/PrivacyPolicyPage.jsx'
import { TermsPage } from './pages/TermsPage/TermsPage.jsx'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}
