import React from 'react'
import Styles from '../../styles/components/common/Button.module.scss'

export default props => {
  const { link, target, title } = props
  return (
    <div className={Styles.buttonWapper}>
      <a className={Styles.button} href={link} target={target}>
        {title}
      </a>
    </div>
  )
}
