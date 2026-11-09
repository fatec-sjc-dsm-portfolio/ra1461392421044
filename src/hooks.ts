import { useEffect, useRef, useState } from 'react'

export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, visible }
}

export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const anchor = window.innerHeight * 0.6
      const p = (anchor - rect.top) / rect.height
      setProgress(Math.min(1, Math.max(0, p)))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return { ref, progress }
}

export const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`
