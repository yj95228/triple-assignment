/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'

function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

const style = {
  container: css`
    margin-left: 623px;
    padding-top: 150px;
  `,
  text: css`
    font-size: 36px;
    height: 40px;
    margin-bottom: 20px;
    letter-spacing: -1px;
    color: rgb(58, 58, 58);
  `,
}

function CountUp(end: number, start = 0, duration = 2000) {
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

export default function Indicator() {
  const travelerNum = 700
  const reviewNum = 100
  const itineraryNum = 470

  return (
    <div css={style.container}>
      <div css={style.text}>
        <strong>{CountUp(travelerNum)}만 명</strong>의 여행자
      </div>
      <div css={style.text}>
        <strong>{CountUp(reviewNum)}만 개</strong>의 여행 리뷰
      </div>
      <div css={style.text}>
        <strong>{CountUp(itineraryNum)}만 개</strong>의 여행 일정
      </div>
    </div>
  )
}
