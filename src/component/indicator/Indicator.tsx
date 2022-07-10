/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import CountUp from '../../utils/CountUp'

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
