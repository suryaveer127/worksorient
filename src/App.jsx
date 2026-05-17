import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home          from './pages/Home'
import About         from './pages/About'
import Services      from './pages/Services'
import Contact       from './pages/Contact'
import ITConsulting       from './pages/services/ITConsulting'
import SoftwareDevelopment from './pages/services/SoftwareDevelopment'
import CloudSolutions      from './pages/services/CloudSolutions'
import Cybersecurity       from './pages/services/Cybersecurity'
import DataAnalytics       from './pages/services/DataAnalytics'
import NetworkSolutions    from './pages/services/NetworkSolutions'

function PageWrapper({ children }) {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])
  return <div className="page-transition">{children}</div>
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <PageWrapper>
          <Routes>
            <Route path="/"                            element={<Home />} />
            <Route path="/about"                       element={<About />} />
            <Route path="/services"                    element={<Services />} />
            <Route path="/services/it-consulting"      element={<ITConsulting />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/cloud-solutions"    element={<CloudSolutions />} />
            <Route path="/services/cybersecurity"      element={<Cybersecurity />} />
            <Route path="/services/data-analytics"     element={<DataAnalytics />} />
            <Route path="/services/network-solutions"  element={<NetworkSolutions />} />
            <Route path="/contact"                     element={<Contact />} />
          </Routes>
        </PageWrapper>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
