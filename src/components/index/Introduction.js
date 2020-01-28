import React from 'react'
import { Grid } from '@material-ui/core'
import Image from 'components/Image'
import Button from 'components/common/Button'
import H2 from 'components/common/H2'
import Styles from '../../styles/components/index/Introduction.module.scss'

export default ({ isDesktop }) => {
  return (
    <div>
      <Grid
        container
        spacing={isDesktop ? 5 : 0}
        className={Styles.root}
        direction={isDesktop ? 'row-reverse' : 'row'}
      >
        <Grid item xs={isDesktop ? 9 : 12}>
          <p className={Styles.body}>
            {
              'グッドデイサービスは、福岡県飯塚市鯰田にある\n高齢者・障がい者・障がい児'
            }
            <span className={Styles.highlighter}>共生型福祉サービス事業所</span>
            です。
          </p>
          <H2 title="企業理念" />
          <p className={Styles.body + ' ' + Styles.identity}>
            年齡・認知症や障がい等に関わらず家族のような雰囲気を心掛け、ともに支え合い共に助け合い誰もが地域で共に過ごせる様な環境（共生）笑って帰れる様な場所づくりに日々努めていきます。
          </p>
        </Grid>
        <Grid item xs={isDesktop ? 3 : 12}>
          <Image
            filename="falcon.png"
            style={{ width: 200, margin: '0 auto' }}
          />
        </Grid>
      </Grid>
      <Button link="/services" title="サービスの詳細はこちら→" />
    </div>
  )
}
