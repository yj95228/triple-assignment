import { useState, useEffect } from 'react'

function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

export default function CountUp(end: number, start = 0, duration = 2000) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    let currentNum = start
    const frame = 1000 / 60
    const interval = duration / frame
    const counter = setInterval(() => {
      const rate = easeOutExpo(++currentNum / interval)
      const currentCount = Math.round(end * rate)
      setCount(currentCount)

      if (currentNum === interval) {
        clearInterval(counter)
      }
    }, frame)
  }, [end, start, duration])

  return count
}
