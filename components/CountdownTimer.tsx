'use client'

import React, { useState, useEffect } from 'react'

const CountdownTimer = () => {
  // Set release date to a future date (you can adjust this)
  const releaseDate = new Date('2025-06-15T00:00:00Z').getTime()
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = releaseDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [releaseDate])

  return (
    <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-lg p-6 backdrop-blur-sm">
      <h3 className="text-xl font-bold text-white mb-4 text-center">
        Release Countdown
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="bg-red-600/20 border border-red-500/50 rounded-lg p-3">
            <div className="text-2xl md:text-3xl font-bold text-red-400">
              {timeLeft.days}
            </div>
            <div className="text-sm text-gray-300">Days</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-red-600/20 border border-red-500/50 rounded-lg p-3">
            <div className="text-2xl md:text-3xl font-bold text-red-400">
              {timeLeft.hours}
            </div>
            <div className="text-sm text-gray-300">Hours</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-red-600/20 border border-red-500/50 rounded-lg p-3">
            <div className="text-2xl md:text-3xl font-bold text-red-400">
              {timeLeft.minutes}
            </div>
            <div className="text-sm text-gray-300">Minutes</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-red-600/20 border border-red-500/50 rounded-lg p-3">
            <div className="text-2xl md:text-3xl font-bold text-red-400">
              {timeLeft.seconds}
            </div>
            <div className="text-sm text-gray-300">Seconds</div>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-300 mt-4 text-sm">
        Until Showa American Story releases worldwide
      </p>
    </div>
  )
}

export default CountdownTimer 