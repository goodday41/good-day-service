import React from 'react'
import Styles from '../../styles/components/common/H1.module.scss'

export default props => {
  const { title } = props
  return (
    <div>
      <h1 className={Styles.title}>{title}</h1>
    </div>
  )
}
