import React from 'react'
import Button from 'components/common/Button'
import FooterContents from 'components/layouts/FooterContents'
import Styles from '../../styles/components/layouts/Footer.module.scss'

export default () => {
  return (
    <div>
      <h3 className={Styles.caption}>お問い合わせはこちら</h3>
      <Button link="tel:0948-29-4112" title="0948-29-4112" />
      <footer className={Styles.footer}>
        <FooterContents />
      </footer>
    </div>
  )
}
