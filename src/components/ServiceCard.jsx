import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon
  return (
    <AnimatedSection variant="fadeUp" delay={index * 0.08}>
      <Link
        to={service.slug}
        className="group block bg-white rounded-2xl p-8 border border-gray-100 card-hover shadow-sm h-full"
      >
        {/* Icon */}
        <div className="service-icon-wrap w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-6">
          <Icon size={26} className="text-primary-700" />
        </div>

        {/* Content */}
        <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {service.short}
        </p>

        {/* Link */}
        <span className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
          Learn More <ArrowRight size={16} />
        </span>
      </Link>
    </AnimatedSection>
  )
}
