import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, CheckCircle2, ChevronLeft, ChevronRight,
  Quote, Zap, Shield, TrendingUp, Users,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import ServiceCard from '../components/ServiceCard'
import CounterCard from '../components/CounterCard'
import { services, stats, testimonials, processSteps, techLogos } from '../data/services'

/* ── Hero rotating words ── */
const HERO_WORDS = ['Growth', 'Innovation', 'Efficiency', 'Security', 'Success']

/* ── Why choose us items ── */
const WHY_US = [
  { icon: Zap,        title: 'Rapid Delivery',      desc: 'Agile processes that bring your vision to life faster without compromising quality.' },
  { icon: Shield,     title: 'Enterprise Security',  desc: 'Every solution is built with security-first principles from the ground up.'         },
  { icon: TrendingUp, title: 'Proven ROI',           desc: 'Measurable outcomes — our clients average a 3x return on their technology investment.' },
  { icon: Users,      title: 'Dedicated Support',    desc: '24/7 expert support with a dedicated account manager for every engagement.'          },
]

export default function Home() {
  const [wordIdx,  setWordIdx]  = useState(0)
  const [testimIdx, setTestimIdx] = useState(0)

  /* Rotate hero word every 2.5 s */
  useEffect(() => {
    const id = setInterval(() => setWordIdx(i => (i + 1) % HERO_WORDS.length), 2500)
    return () => clearInterval(id)
  }, [])

  const prevTestim = () => setTestimIdx(i => (i - 1 + testimonials.length) % testimonials.length)
  const nextTestim = () => setTestimIdx(i => (i + 1) % testimonials.length)

  return (
    <>
      {/* ════════════════════════════════ HERO ════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
        {/* Bg pattern */}
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />

        {/* Orbs */}
        <div className="orb w-[600px] h-[600px] bg-primary-500 -top-40 -right-40" />
        <div className="orb w-[400px] h-[400px] bg-emerald-400 bottom-0 left-0" style={{ animationDelay: '4s' }} />
        <div className="orb w-[300px] h-[300px] bg-primary-300 top-1/2 right-1/4" style={{ animationDelay: '2s' }} />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary-800/60 border border-primary-600/50 text-primary-200 text-sm font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Intelligent IT Solutions Since 2012
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1]"
            >
              Technology That<br />
              Drives Your{' '}
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIdx}
                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0,  rotateX: 0    }}
                    exit={{    opacity: 0, y: -20, rotateX: 90   }}
                    transition={{ duration: 0.45 }}
                    className="gradient-text inline-block"
                    style={{ perspective: '400px' }}
                  >
                    {HERO_WORDS[wordIdx]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-primary-200 text-lg md:text-xl mt-8 leading-relaxed max-w-lg"
            >
              WorksOrient Technologies empowers modern businesses with end-to-end IT solutions — from consulting and software development to cloud, security, and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link to="/services" className="btn-white">
                Explore Services <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline border-white/50 text-white hover:bg-white hover:text-primary-800">
                Free Consultation
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-6 mt-12"
            >
              {[
                '500+ Projects',
                '200+ Clients',
                '12+ Years',
              ].map(badge => (
                <div key={badge} className="flex items-center gap-2 text-primary-200 text-sm">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: floating card visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            {/* Main card */}
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {services.slice(0, 4).map((svc, i) => {
                  const Icon = svc.icon
                  return (
                    <motion.div
                      key={svc.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="bg-white/10 rounded-2xl p-5 border border-white/10 hover:bg-white/20 transition-all duration-300 cursor-default"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary-600/50 flex items-center justify-center mb-3">
                        <Icon size={20} className="text-white" />
                      </div>
                      <p className="font-semibold text-white text-sm">{svc.title}</p>
                    </motion.div>
                  )
                })}
              </div>

              {/* Floating stat pill */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center">
                  <TrendingUp size={18} className="text-primary-700" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm leading-none">+40% ROI</p>
                  <p className="text-gray-400 text-xs mt-0.5">Average Client Return</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 size={18} className="text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm leading-none">99.9% Uptime</p>
                  <p className="text-gray-400 text-xs mt-0.5">Service Availability</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-300"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-primary-400 to-transparent"
          />
        </motion.div>
      </section>

      {/* ════════════════════════════════ SERVICES ════════════════════════════════ */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection variant="fadeUp">
              <span className="section-tag">What We Do</span>
              <h2 className="section-title">Comprehensive IT Services<br />Built for Modern Business</h2>
              <p className="section-subtitle mx-auto mt-4">
                From strategy to execution, our full suite of technology services covers every aspect of your digital journey.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <ServiceCard key={svc.id} service={svc} index={i} />
            ))}
          </div>

          <AnimatedSection variant="fadeUp" delay={0.4} className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════ STATS ════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-700 relative overflow-hidden">
        <div className="orb w-96 h-96 bg-primary-500 -top-20 -left-20" />
        <div className="orb w-64 h-64 bg-emerald-400 bottom-0 right-10" style={{ animationDelay: '2s' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} variant="zoomIn" delay={i * 0.1}>
                <CounterCard {...s} delay={i * 0.2} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ DIGITAL TRANSFORMATION ════════════════════════════════ */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <AnimatedSection variant="fadeLeft">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/20">
              <img
                src="/Digital%20Conversion.jpg"
                alt="Digital Transformation"
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-primary-800 font-semibold text-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
                  Digital Transformation
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: text */}
          <AnimatedSection variant="fadeRight">
            <span className="section-tag">Digital Transformation</span>
            <h2 className="section-title mt-2">
              Accelerate Your Digital Conversion Journey
            </h2>
            <p className="text-gray-500 mt-5 leading-relaxed">
              Digital transformation isn't just about technology — it's about reimagining how your business operates, delivers value, and competes in a connected world. WorksOrient Technologies guides you through every stage of that journey.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                'End-to-end digital strategy and roadmap planning',
                'Legacy system modernization and cloud migration',
                'Intelligent process automation and optimization',
                'Data-driven decision making at enterprise scale',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                  <CheckCircle2 size={16} className="text-primary-600 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link to="/services" className="btn-primary">
                Start Your Transformation <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════ ABOUT SNIPPET ════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left image — Trusted Partner photo */}
          <AnimatedSection variant="fadeLeft">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/20">
                <img
                  src="/Trusted%20Partner.jpg"
                  alt="WorksOrient Technologies – Your Trusted IT Partner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/30 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary-700 text-white rounded-2xl p-5 shadow-xl">
                <p className="font-bold text-3xl">12+</p>
                <p className="text-primary-200 text-xs mt-1">Years of Excellence</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right text */}
          <AnimatedSection variant="fadeRight">
            <span className="section-tag">About Us</span>
            <h2 className="section-title mt-2">Your Trusted Partner in Digital Transformation</h2>
            <p className="text-gray-500 mt-5 leading-relaxed">
              Founded in 2012, WorksOrient Technologies has been at the forefront of delivering cutting-edge IT solutions to businesses across industries. We combine deep technical expertise with a genuine understanding of business challenges to deliver outcomes that matter.
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed">
              With a team of 50+ certified engineers and consultants, we partner with clients from startups to Fortune 500 companies — solving complex problems and building technology that scales.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                'ISO 27001 Certified Security Practices',
                'Agile & DevOps-driven delivery methodology',
                'Dedicated account management & 24/7 support',
                'Transparent pricing with no hidden costs',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                  <CheckCircle2 size={18} className="text-primary-600 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link to="/about" className="btn-primary">
                Learn Our Story <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════ WHY CHOOSE US ════════════════════════════════ */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection variant="fadeUp">
              <span className="section-tag">Why WorksOrient</span>
              <h2 className="section-title">What Sets Us Apart</h2>
              <p className="section-subtitle mx-auto">
                We don't just deliver technology — we deliver results, relationships, and peace of mind.
              </p>
            </AnimatedSection>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} variant="fadeUp" delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-8 border border-gray-100 card-hover shadow-sm h-full text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary-50 group-hover:bg-primary-700 flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <Icon size={28} className="text-primary-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ HOW WE WORK ════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection variant="fadeUp">
              <span className="section-tag">Our Process</span>
              <h2 className="section-title">How We Deliver Excellence</h2>
              <p className="section-subtitle mx-auto">
                A proven, structured approach that ensures every project is delivered on time, within scope, and beyond expectations.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector line */}
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

      {/* ════════════════════════════════ TECHNOLOGIES ════════════════════════════════ */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-10">
            <p className="text-gray-400 font-medium text-sm uppercase tracking-widest">Technologies & Platforms We Work With</p>
          </AnimatedSection>

          {/* Scrolling marquee */}
          <div className="overflow-hidden relative">
            <div className="flex gap-8 animate-[marquee_25s_linear_infinite]">
              {[...techLogos, ...techLogos].map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-8 py-4 bg-white rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm shadow-sm hover:border-primary-300 hover:text-primary-700 transition-all duration-300 cursor-default"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ TESTIMONIALS ════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection variant="fadeUp">
              <span className="section-tag">Client Success Stories</span>
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-subtitle mx-auto">
                Don't take our word for it — hear directly from the businesses we've helped transform.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection variant="fadeUp" delay={0.2}>
            <div className="relative max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimIdx}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{    opacity: 0, x: -40 }}
                  transition={{ duration: 0.45 }}
                  className="bg-gradient-to-br from-primary-50 to-white border border-primary-100 rounded-3xl p-10 md:p-14 shadow-lg text-center"
                >
                  <Quote size={48} className="text-primary-200 mx-auto mb-6" />
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium italic">
                    "{testimonials[testimIdx].text}"
                  </p>
                  <div className="flex items-center justify-center gap-4 mt-10">
                    <div className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center text-white font-bold text-sm">
                      {testimonials[testimIdx].avatar}
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900">{testimonials[testimIdx].name}</p>
                      <p className="text-gray-500 text-sm">{testimonials[testimIdx].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevTestim}
                  className="w-11 h-11 rounded-full border-2 border-primary-200 flex items-center justify-center text-primary-700 hover:bg-primary-700 hover:text-white hover:border-primary-700 transition-all duration-300"
                >
                  <ChevronLeft size={20} />
                </button>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimIdx(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === testimIdx ? 'w-6 h-2 bg-primary-700' : 'w-2 h-2 bg-primary-200 hover:bg-primary-400'
                    }`}
                  />
                ))}
                <button
                  onClick={nextTestim}
                  className="w-11 h-11 rounded-full border-2 border-primary-200 flex items-center justify-center text-primary-700 hover:bg-primary-700 hover:text-white hover:border-primary-700 transition-all duration-300"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════ FINAL CTA ════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-primary-950 to-primary-800 relative overflow-hidden">
        <div className="orb w-96 h-96 bg-primary-500 -bottom-20 -right-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="zoomIn">
            <span className="inline-block bg-primary-800 text-primary-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Get Started Today
            </span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight">
              Let's Build Something<br />
              <span className="gradient-text">Extraordinary Together</span>
            </h2>
            <p className="text-primary-200 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
              Schedule a free 30-minute consultation with one of our IT experts and discover how WorksOrient Technologies can drive your business forward.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-10">
              <Link to="/contact" className="btn-white">
                Book Free Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-outline border-white/40 text-white hover:bg-white hover:text-primary-800">
                Browse Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
