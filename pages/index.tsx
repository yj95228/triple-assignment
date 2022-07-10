/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'

import BadgeSection from '../src/component/badge/BadgeSection'
import Indicator from '../src/component/indicator/Indicator'
import Logo from '../src/component/logo/Logo'

const fadeKeyframes = keyframes`
  0% {
    transform: translateY(20px);    
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`
const OuterContainer = styled.div`
  width: 1040px;
  height: auto;
  margin: 0px auto;
  position: relative;
`

const FadeAnimation = styled('div')<{ delay: number }>`
  opacity: 0;
  animation: ${fadeKeyframes} 700ms ease-in-out forwards;
  animation-delay: ${(props) => props.delay}ms;
`

function App() {
  return (
    <Link href="/">
      <OuterContainer>
        <FadeAnimation delay={0}>
          <Logo />
        </FadeAnimation>
        <FadeAnimation delay={100}>
          <Indicator />
        </FadeAnimation>
        <FadeAnimation delay={200}>
          <BadgeSection />
        </FadeAnimation>
      </OuterContainer>
    </Link>
  )
}

export default App
