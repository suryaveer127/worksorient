import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import { services } from '../data/services'

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location    = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const navLinkClass = ({ isActive }) =>
    `animated-underline font-medium text-sm transition-colors duration-200 ${
      isActive ? 'text-primary-700 font-semibold' : 'text-gray-700 hover:text-primary-700'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-black/5'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink to="/"        className={navLinkClass}>Home</NavLink>
            <NavLink to="/about"   className={navLinkClass}>About Us</NavLink>

            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(v => !v)}
                className={`flex items-center gap-1 font-medium text-sm transition-colors duration-200 ${
                  location.pathname.startsWith('/services')
                    ? 'text-primary-700 font-semibold'
                    : 'text-gray-700 hover:text-primary-700'
                }`}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[600px] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 p-6 grid grid-cols-2 gap-2">
                  <div className="col-span-2 mb-2">
                    <Link
                      to="/services"
                      className="flex items-center justify-between p-3 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors duration-200 group"
                    >
                      <div>
                        <p className="font-semibold text-primary-800 text-sm">All Services</p>
                        <p className="text-xs text-primary-600 mt-0.5">View our complete service catalogue</p>
                      </div>
                      <ArrowRight size={16} className="text-primary-600 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  {services.map((svc) => {
                    const Icon = svc.icon
                    return (
                      <Link
                        key={svc.id}
                        to={svc.slug}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors duration-200 group"
                      >
                        <div className="mt-0.5 p-2 rounded-lg bg-primary-100 group-hover:bg-primary-700 transition-colors duration-200">
                          <Icon size={16} className="text-primary-700 group-hover:text-white transition-colors duration-200" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 text-sm group-hover:text-primary-700 transition-colors">{svc.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{svc.short}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>

            <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="btn-primary text-sm">
              Get a Free Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-primary-700 hover:bg-primary-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-100 mt-2 pt-4 space-y-1">
            <NavLink to="/"      className="block px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 transition-colors">Home</NavLink>
            <NavLink to="/about" className="block px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 transition-colors">About Us</NavLink>

            {/* Mobile services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(v => !v)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 transition-colors"
              >
                <span>Services</span>
                <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary-100 pl-4">
                  <NavLink to="/services" className="block px-3 py-2 text-sm font-semibold text-primary-700 hover:bg-primary-50 rounded-lg transition-colors">
                    All Services
                  </NavLink>
                  {services.map((svc) => (
                    <NavLink
                      key={svc.id}
                      to={svc.slug}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
                    >
                      {svc.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/contact" className="block px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 transition-colors">Contact Us</NavLink>
            <div className="pt-3 px-4">
              <Link to="/contact" className="btn-primary w-full justify-center text-sm">
                Get a Free Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
