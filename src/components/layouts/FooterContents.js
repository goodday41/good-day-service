import React from 'react'
import { Link } from 'gatsby'
import Styles from '../../styles/components/layouts/FooterContainer.module.scss'

export default () => {
  return (
    <div className={Styles.contentsWrapper}>
      <div className={Styles.company}>
        <h3 className={Styles.companyName}>GOOD ONE 株式会社</h3>
        <p className={Styles.address}>
          〒820-0001
          <br />
          福岡県飯塚市鯰田64番地1
        </p>
        <p className={Styles.number}>TEL: 0948-29-4112</p>
        <p className={Styles.number}>FAX: 0948-29-4144</p>
      </div>
      <div>
        <Link to="/" className={Styles.link}>
          トップ
        </Link>
        <Link to="/services" className={Styles.link}>
          サービス
        </Link>
        <Link to="/access" className={Styles.link}>
          アクセス
        </Link>
        <Link to="/company" className={Styles.link}>
          会社概要
        </Link>
      </div>
    </div>
  )
}
