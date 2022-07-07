/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'
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
const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px 0px 140px 623px;
`
const style = {
  fadeAnimation: css`
    animation: ${fadeKeyframes} 700ms ease-in;
  `,
}

function App() {
  return (
    <div className="App">
      <OuterContainer css={style.fadeAnimation}>
        <Logo />
        <Indicator />
        <InnerContainer>
          <BadgeSection />
        </InnerContainer>
      </OuterContainer>
    </div>
  )
}

export default App
