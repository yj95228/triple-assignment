import Badge from './Badge'

interface BadgeProps {
  imageAlt: string
  imageSrc: string
  text: string
}

export default function BadgeSection() {
  const badgeList: BadgeProps[] = [
    {
      imageAlt: 'play-store',
      imageSrc: 'image/play-store2x.png',
      text: `2018 구글 플레이스토어 올해의 앱 최우수상 수상`,
    },
    {
      imageAlt: 'apple-store',
      imageSrc: 'image/badge-apple4x.png',
      text: `2018 애플 앱스토어 오늘의 여행앱 선정`,
    },
  ]
  return (
    <>
      {badgeList?.map((badge, idx) => (
        <Badge
          key={idx}
          imageAlt={badge.imageAlt}
          imageSrc={badge.imageSrc}
          text={badge.text}
        />
      ))}
    </>
  )
}
