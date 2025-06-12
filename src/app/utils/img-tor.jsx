'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function ImgTor({ src, alt, containerClass, quote, scale, fnCinema, cinemaID }) {
  const [loaded, setLoaded] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (loaded && containerRef.current) {
      containerRef.current.classList.remove('opacity-0')
      containerRef.current.classList.add('opacity-100')
    }
  }, [loaded])

  return (
      <div
        className={containerClass}
      >
        <div
          onClick={() => fnCinema(cinemaID)}
          ref={containerRef}
          className="transition-opacity duration-200 opacity-0 w-full h-full l6"
        >
          <Image
            priority
            className=''
            src={src}
            alt={alt}
            fill
            style={{ objectFit: 'cover' }}
            onLoad={() => setLoaded(true)}
          />
        </div>

      </div>
  )
}
