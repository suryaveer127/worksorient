import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 bg-primary-700 hover:bg-primary-800 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-primary-700/40 transition-all duration-300 hover:-translate-y-1"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  ) : null
}
