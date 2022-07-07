/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

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
  let travelerNum = 700
  let reviewNum = 100
  let itineraryNum = 470
  // TODO: 애니메이션으로 숫자 증가 효과
  travelerNum--
  reviewNum--
  itineraryNum--
  return (
    <div css={style.container}>
      <div css={style.text}>
        <strong>{travelerNum}만 명</strong>의 여행자
      </div>
      <div css={style.text}>
        <strong>{reviewNum}만 개</strong>의 여행 리뷰
      </div>
      <div css={style.text}>
        <strong>{itineraryNum}만 개</strong>의 여행 일정
      </div>
    </div>
  )
}
