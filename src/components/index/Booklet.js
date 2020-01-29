import React from 'react'
import { withPrefix } from 'gatsby'
import Button from 'components/common/Button'

export default props => {
  const { classes } = props
  return (
    <div>
      <p className={classes.body}>
        パンフレットダウンロードはこちら。印刷してお使いください。
      </p>
      <Button
        title="パンフレットダウンロード"
        link={withPrefix('/good-day-service.pdf')}
        target="_blank"
      />
    </div>
  )
}
