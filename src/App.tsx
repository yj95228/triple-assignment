/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import BadgeSection from './component/badge/BadgeSection'
import Indicator from './component/Indicator'
import Logo from './component/Logo'

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
    <div className="App">
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
    </div>
  )
}

export default App
