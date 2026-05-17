import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import { services } from '../data/services'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-950 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary-800 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">
              Ready to Elevate Your Business?
            </h3>
            <p className="text-primary-200 mt-2 text-base">
              Let's discuss how WorksOrient Technologies can accelerate your growth.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-primary-800 hover:bg-primary-50 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            Start a Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo white />
            <p className="text-primary-300 text-sm leading-relaxed mt-5">
              Empowering businesses with intelligent IT solutions. We combine technical expertise with strategic thinking to deliver technology that drives real results.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Linkedin,  href: '#', label: 'LinkedIn'  },
                { Icon: Twitter,   href: '#', label: 'Twitter'   },
                { Icon: Facebook,  href: '#', label: 'Facebook'  },
                { Icon: Instagram, href: '#', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-primary-700 flex items-center justify-center text-primary-300 hover:bg-primary-700 hover:text-white hover:border-primary-600 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home',        to: '/'        },
                { label: 'About Us',    to: '/about'   },
                { label: 'All Services',to: '/services'},
                { label: 'Contact Us',  to: '/contact' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-primary-300 hover:text-white text-sm flex items-center gap-2 group transition-colors duration-200"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-primary-400" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-3">
              {services.map((svc) => (
                <li key={svc.id}>
                  <Link
                    to={svc.slug}
                    className="text-primary-300 hover:text-white text-sm flex items-center gap-2 group transition-colors duration-200"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-primary-400" />
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-300 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary-400" />
                <span>WorksOrient Technologies Pvt. Ltd.<br />Tower B, Tech Park, Sector 15<br />Gurugram, Haryana – 122001, India</span>
              </li>
              <li className="flex items-center gap-3 text-primary-300 text-sm">
                <Phone size={16} className="flex-shrink-0 text-primary-400" />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 123 456 7890</a>
              </li>
              <li className="flex items-center gap-3 text-primary-300 text-sm">
                <Mail size={16} className="flex-shrink-0 text-primary-400" />
                <a href="mailto:info@worksorient.com" className="hover:text-white transition-colors">info@worksorient.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-400 text-sm">
            © {year} WorksOrient Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
