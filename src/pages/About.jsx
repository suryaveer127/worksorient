import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Award, Target, Eye, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import { teamMembers, stats } from '../data/services'
import CounterCard from '../components/CounterCard'

const VALUES = [
  { icon: Target, title: 'Innovation',    desc: 'We constantly push the boundaries of technology to deliver forward-thinking solutions that keep our clients ahead of the curve.' },
  { icon: Heart,  title: 'Integrity',     desc: 'Honesty and transparency are at the core of every client relationship. We say what we do, and do what we say.'               },
  { icon: Award,  title: 'Excellence',    desc: 'We hold ourselves to the highest standards of technical quality and customer service, without exception.'                    },
  { icon: Eye,    title: 'Collaboration', desc: 'We work as a true extension of your team, aligning our goals with yours and celebrating shared success.'                    },
]

const TIMELINE = [
  { year: '2012', title: 'Company Founded',        desc: 'WorksOrient Technologies was established with a mission to democratize access to enterprise-grade IT solutions for growing businesses.' },
  { year: '2015', title: 'First 100 Clients',      desc: 'We reached the milestone of 100 satisfied clients across India, expanding our service portfolio to include cloud and data solutions.' },
  { year: '2018', title: 'International Expansion', desc: 'Opened delivery centers serving clients in the UK, UAE, and North America, growing the team to 30 engineers.'                       },
  { year: '2021', title: 'ISO 27001 Certified',    desc: 'Achieved ISO 27001 certification, affirming our commitment to world-class information security management.'                          },
  { year: '2024', title: '500+ Projects Delivered', desc: 'Crossed the landmark of 500 successfully delivered projects with a 98% client satisfaction rate.'                                  },
]

export default function About() {
  return (
    <>
      <PageHero
        title="About WorksOrient Technologies"
        subtitle="We are a team of passionate technologists on a mission to help businesses thrive in the digital age."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* ── Our Story ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection variant="fadeLeft">
            <span className="section-tag">Our Story</span>
            <h2 className="section-title mt-2">Built on a Belief That Technology Should Work for You</h2>
            <p className="text-gray-500 mt-5 leading-relaxed">
              WorksOrient Technologies was founded in 2012 by a group of technology professionals who believed that every business — regardless of size — deserves access to world-class IT expertise. We saw too many companies struggling with outdated systems, unreliable vendors, and technology investments that didn't deliver results.
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed">
              We set out to change that. Over the past 12+ years, we've grown from a small consulting firm to a full-service IT solutions provider with a team of 50+ certified engineers, analysts, and consultants serving clients across India and internationally.
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Today, WorksOrient Technologies is trusted by companies across healthcare, finance, retail, manufacturing, and more — delivering solutions that are not just technically sound, but strategically aligned to business goals.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fadeRight">
            <div className="relative space-y-6">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-5"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-700/30">
                      <span className="font-bold text-white text-xs">{item.year}</span>
                    </div>
                    {i < TIMELINE.length - 1 && (
                      <div className="w-px flex-1 bg-primary-100 mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h4 className="font-heading font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-700 relative overflow-hidden">
        <div className="orb w-96 h-96 bg-primary-500 -top-20 -right-20" />
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

      {/* ── Mission & Vision ── */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <span className="section-tag">Our Direction</span>
            <h2 className="section-title">Mission & Vision</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection variant="fadeLeft">
              <div className="bg-white rounded-3xl p-10 border border-primary-100 shadow-sm h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary-700 flex items-center justify-center mb-6">
                  <Target size={28} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-500 leading-relaxed">
                  To empower businesses of all sizes with intelligent, reliable, and scalable IT solutions that drive measurable growth, enhance operational efficiency, and create sustainable competitive advantage in a rapidly evolving digital landscape.
                </p>
                <ul className="mt-6 space-y-3">
                  {['Deliver measurable business outcomes', 'Build long-term client partnerships', 'Make enterprise technology accessible'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                      <CheckCircle2 size={16} className="text-primary-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeRight">
              <div className="bg-primary-700 rounded-3xl p-10 h-full text-white">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <Eye size={28} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4">Our Vision</h3>
                <p className="text-primary-100 leading-relaxed">
                  To be the most trusted IT solutions partner in Asia, recognized globally for our technical excellence, innovation-driven approach, and the transformative impact we create for our clients and communities.
                </p>
                <ul className="mt-6 space-y-3">
                  {['Lead technology innovation regionally', 'Foster a culture of continuous learning', 'Be the benchmark for IT service excellence'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-primary-100 text-sm">
                      <CheckCircle2 size={16} className="text-primary-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <span className="section-tag">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle mx-auto">
              These principles guide every decision, every project, and every relationship we build.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} variant="fadeUp" delay={i * 0.1}>
                <div className="group text-center p-8 bg-primary-50 rounded-2xl border border-primary-100 card-hover h-full">
                  <div className="w-16 h-16 rounded-2xl bg-white group-hover:bg-primary-700 border border-primary-200 flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-sm">
                    <Icon size={26} className="text-primary-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <span className="section-tag">The People Behind the Work</span>
            <h2 className="section-title">Meet Our Leadership Team</h2>
            <p className="section-subtitle mx-auto">
              Experienced professionals united by a shared passion for technology and a commitment to client success.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.name} variant="fadeUp" delay={i * 0.08}>
                <div className="group bg-white rounded-2xl p-8 border border-gray-100 card-hover shadow-sm text-center">
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-700 to-primary-500 flex items-center justify-center mx-auto mb-5 text-white font-bold text-xl shadow-lg shadow-primary-700/25 group-hover:scale-105 transition-transform duration-300">
                    {member.initials}
                  </div>
                  <h4 className="font-heading font-bold text-gray-900 text-lg">{member.name}</h4>
                  <p className="text-primary-600 font-medium text-sm mt-1">{member.role}</p>
                  <p className="text-gray-400 text-xs mt-2">{member.years}+ Years Experience</p>
                  {/* Decorative line */}
                  <div className="w-8 h-0.5 bg-primary-200 group-hover:w-16 group-hover:bg-primary-600 mx-auto mt-4 transition-all duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-700 relative overflow-hidden">
        <div className="orb w-72 h-72 bg-primary-500 -right-10 -top-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="zoomIn">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
              Ready to Work With a Team That Cares?
            </h2>
            <p className="text-primary-200 mt-4 text-lg max-w-xl mx-auto">
              Let's start a conversation about how we can help your business grow.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link to="/contact" className="btn-white">
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-outline border-white/40 text-white hover:bg-white hover:text-primary-800">
                Our Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
