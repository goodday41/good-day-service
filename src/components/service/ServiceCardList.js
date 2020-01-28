import React from 'react'
import Card from 'components/common/Card'

const cardContents = [
  {
    title: '地域密着型通所介護',
    offerTime: '9:30 ~ 16:30',
    target: '介護認定で要介護1~5の認定を受けた方',
    imageSrc: 'service1.jpeg',
  },
  {
    title: '生活介護',
    offerTime: '9:30 ~ 16:30',
    target:
      '18歳以上で常時介護等の支援が必要な方で\n介護給付受給者証をお持ちの方',
    imageSrc: 'service2.jpeg',
  },
  {
    title: '放課後等デイサービス',
    offerTime: '平日：15:00 ~ 17:30\n学休日：9:30 ~ 16:30',
    target:
      '障がい等お持ちの主に6歳から18歳までの\n学校に通っている子で、通所給付受給者証をお持ちの方',
    imageSrc: 'service3.jpeg',
  },
  {
    title: '児童発達支援',
    offerTime: '9:30 ~ 15:30',
    target: '障がい等お持ちの未就学の子で、\n通所給付受給者証をお持ちの方',
    imageSrc: 'service4.jpeg',
  },
]

export default ({ classes, isDesktop }) => {
  return cardContents.map(content => (
    <Card
      key={content.title}
      title={content.title}
      imageSrc={content.imageSrc}
      isWide={isDesktop}
      body={
        <div>
          <p className={classes.body}>
            提供時間
            <span
              className={classes.bodyBold}
            >{`\n${content.offerTime}\n\n`}</span>
          </p>
          <p className={classes.body}>対象者{'\n'}</p>
          <p className={classes.target}>{content.target}</p>
        </div>
      }
    />
  ))
}
