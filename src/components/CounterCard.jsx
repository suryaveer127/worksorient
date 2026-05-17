import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function CounterCard({ value, suffix, label, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div ref={ref} className="counter-card text-center px-8 py-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
      <div className="font-heading font-extrabold text-5xl md:text-6xl text-white mb-2">
        {inView ? (
          <CountUp end={value} duration={2.5} delay={delay} suffix={suffix} />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <p className="text-primary-200 font-medium text-base">{label}</p>
    </div>
  )
}
