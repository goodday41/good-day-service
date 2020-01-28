import React from 'react'
import Styles from '../../styles/components/layouts/Container.module.scss'

export default props => {
  const { body } = props
  return <div className={Styles.root}>{body}</div>
}
