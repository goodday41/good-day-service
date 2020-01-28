import React from 'react'
import KyouseiServiceCard from 'components/service/KyouseiServiceCard'

export default props => {
  const { classes } = props
  return (
    <div>
      <KyouseiServiceCard {...props} />
      <p className={classes.bodyTopic}>
        以降私たちは「
        <span className={classes.bodyHighlighter}>
          年齡・認知症や障がい等に関わらず、家族のような雰囲気
        </span>
        」の理念のもと、
        <span className={classes.bodyBold}>令和元年11月1日</span>
        より共生型にて「
        <span className={classes.bodyHighlighter}>児童発達支援</span>
        」と「
        <span className={classes.bodyHighlighter}>放課後等デイサービス</span>
        」の指定を受け、高齢者・障がい者・障がい児、誰もが利用できるデイサービス事業所として運営しております。今後は、障がい等のない子供も利用できる様に検討しております。
      </p>
    </div>
  )
}
