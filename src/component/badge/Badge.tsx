/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const FlexContainer = styled.div`
  display: flex;
`
const style = {
  outerContainer: css`
    justify-content: center;
    margin-right: 39px;
  `,
  badgeImg: css`
    height: 54px;
    margin-right: 10px;
  `,
  badgeText: css`
    width: 160px;
    line-height: 22px;
    word-break: keep-all;
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
    color: rgba(58, 58, 58, 0.8);
  `,
}

interface BadgeProps {
  imageAlt: string
  imageSrc: string
  text: string
}

export default function Badge({ imageAlt, imageSrc, text }: BadgeProps) {
  return (
    <FlexContainer css={style.outerContainer}>
      <img css={style.badgeImg} alt={imageAlt} src={imageSrc} />
      <FlexContainer css={style.badgeText}>{text}</FlexContainer>
    </FlexContainer>
  )
}
