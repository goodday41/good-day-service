import React from 'react'
import Button from 'components/common/Button'
import ServiceCardList from 'components/service/ServiceCardList'

export default props => {
  const { classes, isDesktop } = props
  return (
    <div>
      <div className={classes.top}>
        <p className={classes.body}>
          グッドデイサービスでは以下の<b>4つのサービス</b>を提供しています。
          {'\n'}
          平日はもちろん、土曜・祝日もご利用いただけます！{'\n'}
          (日曜・年末年始(12/30 ~ 1/3) はお休みです。)
        </p>
      </div>
      <ServiceCardList {...props} />
      <div className={classes.end}>
        {isDesktop ? (
          <p className={classes.bodyBold}>
            ご利用料金の詳細等については、以下の電話番号にご連絡ください！
          </p>
        ) : (
          <>
            <p className={classes.bodyBold}>ご利用料金の詳細等については、</p>
            <p className={classes.bodyBold}>以下の電話番号にご連絡ください！</p>
          </>
        )}
      </div>
      <Button link="tel:0948-29-4112" title="0948-29-4112" />
    </div>
  )
}
