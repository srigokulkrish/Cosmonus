'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function RouteProgress() {
  const pathname = usePathname()
  const [width, setWidth] = useState(0)
  const [visible, setVisible] = useState(false)
  const ramp = useRef(null)
  const bail = useRef(null)

  useEffect(() => {
    const clear = () => {
      clearInterval(ramp.current)
      clearTimeout(bail.current)
    }

    const start = () => {
      clear()
      setVisible(true)
      setWidth(12)
      // Ease toward 90% without ever arriving — the real navigation finishes it.
      ramp.current = setInterval(() => {
        setWidth((w) => (w >= 90 ? w : w + (90 - w) * 0.14))
      }, 120)
      // If a navigation never lands, don't leave the bar stranded.
      bail.current = setTimeout(() => finish(), 10000)
    }

    const finish = () => {
      clear()
      setWidth(100)
      bail.current = setTimeout(() => {
        setVisible(false)
        setWidth(0)
      }, 240)
    }

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0) return
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return

      const link = e.target instanceof Element ? e.target.closest('a[href]') : null
      if (!link || link.target === '_blank' || link.hasAttribute('download')) return

      const url = new URL(link.href, window.location.href)
      if (url.origin !== window.location.origin) return
      if (url.pathname === window.location.pathname) return

      start()
    }

    document.addEventListener('click', onClick)
    window.addEventListener('cx:route-done', finish)
    return () => {
      clear()
      document.removeEventListener('click', onClick)
      window.removeEventListener('cx:route-done', finish)
    }
  }, [])

  useEffect(() => {
    window.dispatchEvent(new Event('cx:route-done'))
  }, [pathname])

  return (
    <div
      className={`route-progress${visible ? ' is-active' : ''}`}
      style={{ width: `${width}%` }}
      role="progressbar"
      aria-label="Loading page"
      aria-hidden={!visible}
    />
  )
}
