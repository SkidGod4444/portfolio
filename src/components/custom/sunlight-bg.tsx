'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function SunlightBackground({ children }: { children: ReactNode }) {
  const { theme } = useTheme()
  const [shouldRenderLeaves, setShouldRenderLeaves] = useState(true)

  useEffect(() => {
    // Simple performance check
    const isLowPerfDevice = window.navigator.hardwareConcurrency <= 4
    setShouldRenderLeaves(!isLowPerfDevice)
  }, [])

  return (
    <div className={`min-h-screen ${theme == "dark" ? 'dark' : ''}`}>
      <div id="dappled-light">
        <div id="glow"></div>
        <div id="glow-bounce"></div>
        <div className="perspective">
          {shouldRenderLeaves && (
            <div id="leaves">
              <svg className="w-0 h-0 absolute">
                <defs>
                  <filter id="wind" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="fractalNoise" numOctaves="2" seed="1">
                      <animate attributeName="baseFrequency" dur="16s" keyTimes="0;0.33;0.66;1"
                        values="0.005 0.003;0.01 0.009;0.008 0.004;0.005 0.003" repeatCount="indefinite" />
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic">
                      <animate attributeName="scale" dur="20s" keyTimes="0;0.25;0.5;0.75;1" values="45;55;75;55;45"
                        repeatCount="indefinite" />
                    </feDisplacementMap>
                  </filter>
                </defs>
              </svg>
            </div>
          )}
          <div id="blinds">
            <div className="shutters">
              {[...Array(23)].map((_, i) => (
                <div key={i} className="shutter"></div>
              ))}
            </div>
            <div className="vertical">
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <div id="progressive-blur">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <main className="relative z-10">
        {children}
      </main>
    </div>
  )
}

