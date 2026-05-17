import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, CheckCircle2, Send, Linkedin, Twitter, Facebook } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const OFFICES = [
  {
    city: 'Gurugram (HQ)',
    address: 'Tower B, Tech Park, Sector 15\nGurugram, Haryana – 122001, India',
    phone: '+91 123 456 7890',
    email: 'info@worksorient.com',
  },
  {
    city: 'Mumbai',
    address: 'Level 12, BKC Business Hub\nBandra Kurla Complex\nMumbai, Maharashtra – 400051',
    phone: '+91 987 654 3210',
    email: 'mumbai@worksorient.com',
  },
]

const CONTACT_INFO = [
  { icon: Phone, label: 'Phone',        value: '+91 123 456 7890',       href: 'tel:+911234567890'       },
  { icon: Mail,  label: 'Email',        value: 'info@worksorient.com',    href: 'mailto:info@worksorient.com' },
  { icon: Clock, label: 'Working Hours',value: 'Mon – Fri: 9 AM – 7 PM IST', href: null                  },
]

const SUBJECTS = [
  'General Inquiry',
  'IT Consulting',
  'Software Development',
  'Cloud Solutions',
  'Cybersecurity',
  'Data Analytics',
  'Network Solutions',
  'Partnership Opportunity',
  'Other',
]

const INITIAL_FORM = {
  firstName: '',
  lastName:  '',
  email:     '',
  company:   '',
  phone:     '',
  subject:   '',
  message:   '',
}

export default function Contact() {
  const [form,      setForm]      = useState(INITIAL_FORM)
  const [errors,    setErrors]    = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required'
    if (!form.lastName.trim())  e.lastName  = 'Last name is required'
    if (!form.email.trim())     e.email     = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.subject)          e.subject   = 'Please select a subject'
    if (!form.message.trim())   e.message   = 'Message is required'
    else if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
    setForm(INITIAL_FORM)
  }

  const fieldClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
      errors[field]
        ? 'border-red-400 bg-red-50 focus:ring-red-200'
        : 'border-gray-200 bg-gray-50 focus:ring-primary-200 focus:border-primary-400 focus:bg-white'
    }`

  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Have a project in mind? Let's talk. Our team is ready to listen, advise, and deliver."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      {/* ── Contact Content ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">

          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection variant="fadeLeft">
              <h2 className="font-heading font-bold text-3xl text-gray-900">Let's Start a Conversation</h2>
              <p className="text-gray-500 mt-4 leading-relaxed">
                Whether you have a specific project requirement, want a free technology assessment, or simply want to explore how WorksOrient can help your business — we're here to help.
              </p>
            </AnimatedSection>

            {/* Contact details */}
            <AnimatedSection variant="fadeLeft" delay={0.1}>
              <div className="space-y-4">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100">
                    <div className="w-10 h-10 rounded-xl bg-primary-700 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider">{label}</p>
                      {href ? (
                        <a href={href} className="font-medium text-gray-800 hover:text-primary-700 transition-colors text-sm mt-0.5 block">
                          {value}
                        </a>
                      ) : (
                        <p className="font-medium text-gray-800 text-sm mt-0.5">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Office addresses */}
            <AnimatedSection variant="fadeLeft" delay={0.2}>
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-4">Our Offices</h3>
              <div className="space-y-4">
                {OFFICES.map((office) => (
                  <div key={office.city} className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={16} className="text-primary-600" />
                      <span className="font-semibold text-primary-700 text-sm">{office.city}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{office.address}</p>
                    <div className="mt-3 space-y-1">
                      <p className="text-gray-500 text-xs">{office.phone}</p>
                      <p className="text-gray-500 text-xs">{office.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Social links */}
            <AnimatedSection variant="fadeLeft" delay={0.3}>
              <h3 className="font-heading font-semibold text-gray-900 mb-3">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { Icon: Linkedin, label: 'LinkedIn',  href: '#' },
                  { Icon: Twitter,  label: 'Twitter',   href: '#' },
                  { Icon: Facebook, label: 'Facebook',  href: '#' },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-11 h-11 rounded-full border-2 border-primary-200 flex items-center justify-center text-primary-700 hover:bg-primary-700 hover:text-white hover:border-primary-700 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <AnimatedSection variant="fadeRight">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-xl shadow-gray-100 p-8 md:p-10">

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={40} className="text-primary-700" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">Message Sent!</h3>
                      <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out. One of our consultants will get back to you within 1 business day.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-8 btn-primary"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      noValidate
                    >
                      <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">Send Us a Message</h3>
                      <p className="text-gray-500 text-sm mb-8">Fill in the form below and we'll respond within 24 hours.</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* First Name */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            placeholder="John"
                            className={fieldClass('firstName')}
                          />
                          {errors.firstName && <p className="mt-1.5 text-red-500 text-xs">{errors.firstName}</p>}
                        </div>

                        {/* Last Name */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            placeholder="Smith"
                            className={fieldClass('lastName')}
                          />
                          {errors.lastName && <p className="mt-1.5 text-red-500 text-xs">{errors.lastName}</p>}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Business Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className={fieldClass('email')}
                          />
                          {errors.email && <p className="mt-1.5 text-red-500 text-xs">{errors.email}</p>}
                        </div>

                        {/* Company */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                          <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Acme Corporation"
                            className={fieldClass('company')}
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className={fieldClass('phone')}
                          />
                        </div>

                        {/* Subject */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Subject <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className={`${fieldClass('subject')} cursor-pointer`}
                          >
                            <option value="">Select a topic…</option>
                            {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                          {errors.subject && <p className="mt-1.5 text-red-500 text-xs">{errors.subject}</p>}
                        </div>

                        {/* Message */}
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Your Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell us about your project, goals, or challenges…"
                            className={`${fieldClass('message')} resize-none`}
                          />
                          <div className="flex justify-between mt-1">
                            {errors.message
                              ? <p className="text-red-500 text-xs">{errors.message}</p>
                              : <span />
                            }
                            <p className="text-gray-400 text-xs text-right">{form.message.length} chars</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <button
                          type="submit"
                          disabled={loading}
                          className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <>
                              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                              </svg>
                              Sending…
                            </>
                          ) : (
                            <><Send size={18} /> Send Message</>
                          )}
                        </button>
                        <p className="text-center text-gray-400 text-xs mt-4">
                          By submitting, you agree to our Privacy Policy. We respect your data and will never share it.
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Map placeholder ── */}
      <section className="h-80 bg-gradient-to-br from-primary-100 to-primary-50 relative flex items-center justify-center overflow-hidden border-y border-primary-200">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(to right,#1d5928 1px,transparent 1px),linear-gradient(to bottom,#1d5928 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative text-center">
          <MapPin size={48} className="text-primary-700 mx-auto mb-4 animate-bounce" />
          <p className="font-heading font-bold text-primary-800 text-xl">WorksOrient Technologies</p>
          <p className="text-primary-600 mt-1">Tower B, Tech Park, Sector 15 – Gurugram, Haryana</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 btn-primary text-sm"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </>
  )
}
