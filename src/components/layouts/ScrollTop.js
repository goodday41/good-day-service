import React from 'react'
import { Zoom, useScrollTrigger, useMediaQuery } from '@material-ui/core'
import Image from 'components/Image'
import Styles from '../../styles/components/layouts/ScrollTop.module.scss'

export default () => {
  const isDesktop = useMediaQuery('(min-width: 1080px)')

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
  })

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={Styles.root}>
        <Image
          filename="up_icon.png"
          style={
            isDesktop
              ? {
                  height: 96,
                  width: 96,
                }
              : {
                  height: 72,
                  width: 72,
                }
          }
        />
      </div>
    </Zoom>
  )
}
