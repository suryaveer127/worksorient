export default function Logo({ className = '', white = false }) {
  return (
    <div className={`flex items-center gap-3 flex-shrink-0 ${className}`}>

      {/* Icon always wrapped in white rounded box */}
      <div className="bg-white rounded-xl p-1.5 flex-shrink-0 shadow-sm">
        <img
          src="/logo.png"
          alt="WorksOrient Technologies logo"
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* Company name + tagline text */}
      <div className="flex flex-col leading-none">
        <span className={`font-heading font-extrabold text-lg tracking-wide ${white ? 'text-white' : 'text-primary-900'}`}>
          WORKSORIENT
        </span>
        <span className={`font-heading font-bold text-[11px] tracking-[0.18em] opacity-80 ${white ? 'text-white' : 'text-primary-900'}`}>
          TECHNOLOGIES
        </span>
        <span className={`font-body font-medium text-[9px] tracking-[0.22em] uppercase mt-0.5 ${white ? 'text-primary-300' : 'text-primary-600'}`}>
          Intelligent IT Solutions
        </span>
      </div>

    </div>
  )
}
