'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function ImgTor({ src, alt, containerClass, quote }) {
  const [loaded, setLoaded] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (loaded && containerRef.current) {
      containerRef.current.classList.remove('opacity-0')
      containerRef.current.classList.add('opacity-100')
    }
  }, [loaded])

  return (
    <div>
      <div
        className={containerClass}
      >
        <div
          ref={containerRef}
          className="transition-opacity duration-1000 opacity-0 w-full h-full"
        >
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: 'cover' }}
            onLoad={() => setLoaded(true)}
          />
        </div>

      </div>
      {
        !quote || quote.trim() === ''
          ? null
          : 
          <div
            className='mb-5 mt-1'
          >
            <p>
              {quote}
            </p>
          </div>
      }
    </div>
  )
}