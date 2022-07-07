/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 400px;
  img {
    width: 400px;
  }
`
const style = {
  container: css`
    position: absolute;
    top: 150px;
    height: 338px;
  `,
  logoImage: css`
    width: 400px;
  `,
  logoText: css`
    text-align: center;
    position: absolute;
    z-index: 1;
    transform: translateY(-72px);
    font-family: sans-serif;
    font-size: 15px;
    color: rgba(58, 58, 58, 0.7);
  `,
}

export default function Logo() {
  return (
    <Container css={style.container}>
      <img css={style.logoImage} alt="triple" src="image/triple2x.png" />
      <Container css={style.logoText}>2021년 12월 기준</Container>
    </Container>
  )
}
