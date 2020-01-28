import React from 'react'
import { Link } from 'gatsby'
import Styles from '../../styles/components/layouts/HeaderMenu.module.scss'

export default props => {
  const { currentPage, pageLinks } = props

  return (
    <div className={Styles.root}>
      {pageLinks.map(link => (
        <Link
          key={link.to}
          to={link.to}
          className={
            currentPage && link.to === currentPage.toString()
              ? Styles.linkCurrent
              : Styles.linkOther
          }
        >
          {link.title}
        </Link>
      ))}
    </div>
  )
}
