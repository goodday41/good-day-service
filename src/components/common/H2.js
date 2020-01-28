import React from 'react'
import Styles from '../../styles/components/common/H2.module.scss'

export default props => {
  const { title } = props
  return (
    <div>
      <h2 className={Styles.title}>{title}</h2>
    </div>
  )
}
