import React from 'react'
import Image from 'components/Image'
import Styles from '../../styles/components/layouts/Identity.module.scss'

export default props => {
  const { isDesktop } = props

  const cloud1Style = isDesktop
    ? {
        width: 640,
        height: 200,
      }
    : {
        width: 320,
        height: 100,
      }

  const cloud2Style = isDesktop
    ? {
        width: 266,
        height: 176,
      }
    : {
        width: 133,
        height: 88,
      }

  return (
    <div className={Styles.root}>
      <Image filename="cloud1.png" style={cloud1Style} />
      <div className={Styles.dayBai}>
        <Image filename="cloud2.png" style={cloud2Style} />
      </div>
    </div>
  )
}
