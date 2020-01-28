import { Link } from 'gatsby'
import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import Logo from 'assets/logo.svg'
import Image from 'components/Image'
import HeaderMenu from 'components/layouts/HeaderMenu'
import Identity from 'components/layouts/Identity'
import Styles from '../../styles/components/layouts/Header.module.scss'

export default props => {
  const { isTop = false } = props
  const isDesktop = useMediaQuery('(min-width: 1080px)')

  const heroStyle = {
    height: isDesktop ? '80vh' : '40vh',
    width: '100vw',
  }

  return (
    <div className={Styles.root}>
      <header className={Styles.header} id="back-to-top-anchor">
        <Link to="/" className={Styles.logoWrapper}>
          <p className={Styles.logoText}>
            高齢者・障がい者・障がい児多世代通所型(共生型)
          </p>
          <Logo className={Styles.logo} />
        </Link>
        <HeaderMenu {...{ ...props, isDesktop }} />
      </header>
      {isTop && (
        <div className={Styles.hero}>
          <Identity {...{ isDesktop }} />
          <Image filename="top_image.jpg" style={heroStyle} />
        </div>
      )}
    </div>
  )
}
