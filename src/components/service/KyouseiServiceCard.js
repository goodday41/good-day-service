import React from 'react'
import Card from 'components/common/Card'

export default ({ classes, isDesktop }) => {
  return (
    <Card
      imageSrc={'kyousei.jpeg'}
      isWide={isDesktop}
      body={
        <div>
          <p className={classes.bodyBoldTopic}>
            年齢や障がいの有無にかかわらず誰もが住み慣れた地域でサービスを受けられる場所を「
            <span className={classes.bodyHighlighter}>共生型サービス</span>
            」と言います。
          </p>
          <p className={classes.body}>
            平成5年7月より富山県にて「家庭的な雰囲気のもとで、一体的にケアを必要とする人たちに在宅サービスを提供したい」という思いから誕生した「富山型」が始まりです。
            グッドデイサービスは平成27年の開設時から高齢者向けデイサービスでしたが、平成30年度の制度改正によって共生型サービスが位置づけられた事により、福岡県は筑豊地区初で平成30年11月より「共生型生活介護」の指定がおりました。
          </p>
        </div>
      }
    />
  )
}
