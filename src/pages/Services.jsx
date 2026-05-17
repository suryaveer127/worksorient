import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import { services, processSteps } from '../data/services'

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="End-to-end IT solutions designed to accelerate growth, drive efficiency, and secure your digital future."
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* ── Introduction ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="fadeUp">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">A Complete IT Solutions Ecosystem</h2>
            <p className="section-subtitle mx-auto mt-4">
              Whether you're a startup building from scratch or an enterprise modernizing legacy systems, WorksOrient Technologies has the expertise and the team to make it happen. Explore our six core service areas below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {services.map((svc, i) => {
              const Icon = svc.icon
              const isEven = i % 2 === 0
              return (
                <AnimatedSection key={svc.id} variant={isEven ? 'fadeLeft' : 'fadeRight'} delay={0.1}>
                  <div className={`grid lg:grid-cols-2 gap-10 items-center bg-primary-50 rounded-3xl p-10 border border-primary-100`}>
                    {/* Text */}
                    <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                      {/* Icon + title */}
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-14 h-14 rounded-2xl bg-primary-700 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-700/30">
                          <Icon size={26} className="text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-primary-500 uppercase tracking-widest">Service {String(i + 1).padStart(2, '0')}</p>
                          <h3 className="font-heading font-bold text-2xl text-gray-900">{svc.title}</h3>
                        </div>
                      </div>

                      <p className="text-gray-500 leading-relaxed">{svc.description}</p>

                      {/* Features */}
                      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {svc.features.slice(0, 4).map(f => (
                          <li key={f} className="flex items-start gap-2 text-gray-600 text-sm">
                            <CheckCircle2 size={15} className="text-primary-600 flex-shrink-0 mt-0.5" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to={svc.slug}
                        className="inline-flex items-center gap-2 mt-8 btn-primary"
                      >
                        Explore {svc.title} <ArrowRight size={16} />
                      </Link>
                    </div>

                    {/* Service image */}
                    <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                      <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary-900/15 aspect-video">
                        <img
                          src={svc.image1}
                          alt={svc.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent`} />
                        {/* Bottom badge */}
                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                          <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center shadow-lg`}>
                            <Icon size={18} className="text-white" />
                          </div>
                          <span className="bg-white/90 backdrop-blur-sm text-primary-900 font-semibold text-xs px-3 py-1.5 rounded-full shadow">
                            {svc.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">Our Delivery Process</h2>
            <p className="section-subtitle mx-auto">
              Every engagement follows our proven four-phase process, ensuring consistency, quality, and predictability.
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

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-primary-950 to-primary-800 relative overflow-hidden">
        <div className="orb w-80 h-80 bg-primary-500 -bottom-10 -right-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="zoomIn">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-primary-200 mt-4 text-lg max-w-xl mx-auto">
              Our consultants will assess your business needs and recommend the right combination of services — at no cost.
            </p>
            <Link to="/contact" className="btn-white mt-8 inline-flex">
              Get a Free Assessment <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
