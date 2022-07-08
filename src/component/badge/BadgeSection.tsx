/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import Badge from './Badge'

const style = {
  rowContainer: css`
    display: flex;
    flex-direction: row;
    margin: 50px 0px 140px 623px;
  `,
}

interface BadgeProps {
  imageAlt: string
  imageSrc: string
  store: string
  award: string
}

export default function BadgeSection() {
  const badgeList: BadgeProps[] = [
    {
      imageAlt: 'play-store',
      imageSrc: 'image/play-store2x.png',
      store: '2018 구글 플레이스토어',
      award: '올해의 앱 최우수상 수상',
    },
    {
      imageAlt: 'apple-store',
      imageSrc: 'image/badge-apple4x.png',
      store: '2018 애플 앱스토어',
      award: '오늘의 여행앱 선정',
    },
  ]
  return (
    <div css={style.rowContainer}>
      {badgeList?.map((badge, idx) => (
        <Badge
          key={idx}
          imageAlt={badge.imageAlt}
          imageSrc={badge.imageSrc}
          store={badge.store}
          award={badge.award}
        />
      ))}
    </div>
  )
}
