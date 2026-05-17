import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { services, processSteps } from '../data/services'

export default function ServiceDetailTemplate({ serviceId }) {
  const svc = services.find(s => s.id === serviceId)
  if (!svc) return null

  const Icon    = svc.icon
  const related = services.filter(s => s.id !== serviceId).slice(0, 3)

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          HERO — image1 on the right
      ══════════════════════════════════════════════════════════ */}
      <section className="relative pt-36 pb-24 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-40" />
        <div className="orb w-96 h-96 bg-primary-500 -top-20 -right-20" />
        <div className="orb w-72 h-72 bg-emerald-400 bottom-0 left-10" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-primary-300 mb-8"
          >
            <Link to="/"         className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-primary-500" />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight size={14} className="text-primary-500" />
            <span className="text-white font-medium">{svc.title}</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left: text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/20"
              >
                <Icon size={28} className="text-white" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
              >
                {svc.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-primary-200 text-lg mt-6 leading-relaxed"
              >
                {svc.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-wrap gap-4 mt-10"
              >
                <Link to="/contact" className="btn-white">
                  Get Started <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn-outline border-white/40 text-white hover:bg-white hover:text-primary-800">
                  All Services
                </Link>
              </motion.div>
            </div>

            {/* Right: image1 */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Decorative ring */}
                <div className={`absolute -inset-3 rounded-3xl bg-gradient-to-br ${svc.color} opacity-40 blur-sm`} />
                <img
                  src={svc.image1}
                  alt={svc.title}
                  className="relative w-full max-w-lg mx-auto rounded-2xl object-cover shadow-2xl aspect-[4/3]"
                />
                {/* Floating icon badge */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm leading-none">{svc.title}</p>
                    <p className="text-gray-400 text-xs mt-0.5">WorksOrient Technologies</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FEATURES & BENEFITS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection variant="fadeLeft">
              <span className="section-tag">What's Included</span>
              <h2 className="section-title mt-2">Key Features &amp; Capabilities</h2>
              <p className="text-gray-500 mt-4 leading-relaxed">
                Our {svc.title} service is comprehensive by design. Here's what you get when you partner with WorksOrient Technologies.
              </p>
              <ul className="mt-8 space-y-4">
                {svc.features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100 hover:border-primary-300 transition-colors duration-200"
                  >
                    <CheckCircle2 size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{f}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection variant="fadeRight">
              <span className="section-tag">Why It Matters</span>
              <h2 className="section-title mt-2">Business Benefits</h2>
              <p className="text-gray-500 mt-4 leading-relaxed">
                Beyond the technical deliverables, our {svc.title} service creates real, measurable business impact.
              </p>
              <div className="mt-8 space-y-6">
                {svc.benefits.map((b, i) => (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex gap-5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-700 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-700/25">
                      <span className="font-bold text-white text-sm">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900">{b.title}</h4>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{b.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MID-PAGE — image2 with text overlay
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <AnimatedSection variant="fadeLeft">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/20">
                <img
                  src={svc.image2}
                  alt={`${svc.title} in action`}
                  className="w-full object-cover aspect-[4/3]"
                />
                {/* Gradient overlay at the bottom */}
                <div className={`absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent`} />
                {/* Bottom label */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-primary-800 font-semibold text-sm px-4 py-2 rounded-full shadow-lg">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${svc.color}`} />
                    {svc.title} — WorksOrient Technologies
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection variant="fadeRight">
              <span className="section-tag">Our Expertise</span>
              <h2 className="section-title mt-2">{svc.title} in Real-World Action</h2>
              <p className="text-gray-500 mt-5 leading-relaxed">
                Our team brings hands-on experience across industries, delivering {svc.title.toLowerCase()} solutions that go beyond theory — built to solve real business challenges and produce tangible outcomes from day one.
              </p>

              {/* Tech tags */}
              <div className="mt-8">
                <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-4">Technologies &amp; Tools</p>
                <div className="flex flex-wrap gap-2">
                  {svc.technologies.map(t => (
                    <span
                      key={t}
                      className="px-4 py-1.5 bg-white border border-primary-200 rounded-full text-primary-800 font-medium text-sm shadow-sm hover:bg-primary-700 hover:text-white hover:border-primary-700 transition-all duration-300 cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-primary mt-10 inline-flex">
                Talk to an Expert <ArrowRight size={18} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <span className="section-tag">Our Approach</span>
            <h2 className="section-title">How We Deliver {svc.title}</h2>
            <p className="section-subtitle mx-auto">
              A proven four-phase process that keeps your project on track from start to finish.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 hidden lg:block" />
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.step} variant="fadeUp" delay={i * 0.12}>
                <div className="relative text-center px-4">
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary-700 to-primary-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-700/30 z-10">
                    <span className="font-heading font-black text-2xl text-white">{step.step}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          RELATED SERVICES
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-12">
            <span className="section-tag">Explore More</span>
            <h2 className="section-title">Related Services</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((r, i) => {
              const RIcon = r.icon
              return (
                <AnimatedSection key={r.id} variant="fadeUp" delay={i * 0.1}>
                  <Link
                    to={r.slug}
                    className="group bg-white rounded-2xl p-8 border border-gray-100 card-hover shadow-sm block h-full"
                  >
                    <div className="service-icon-wrap w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                      <RIcon size={22} className="text-primary-700" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-gray-900 group-hover:text-primary-700 transition-colors mb-2">{r.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{r.short}</p>
                    <span className="inline-flex items-center gap-1 text-primary-700 text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </Link>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-700 relative overflow-hidden">
        <div className="orb w-72 h-72 bg-primary-500 -right-10 -top-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="zoomIn">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
              Ready to Get Started with {svc.title}?
            </h2>
            <p className="text-primary-200 mt-4 text-lg max-w-xl mx-auto">
              Talk to our {svc.title.toLowerCase()} experts today and discover what's possible for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link to="/contact" className="btn-white">
                Request a Free Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
