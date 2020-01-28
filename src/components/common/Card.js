import React from 'react'
import { Grid } from '@material-ui/core'
import Image from 'components/Image'
import H2 from 'components/common/H2'

export default props => {
  const { title, imageSrc, isWide, isSub, body } = props
  const itemWidth = isSub || !isWide ? 12 : 6

  return (
    <div style={{ marginBottom: isSub ? 24 : 56 }}>
      {title && <H2 title={title} />}
      <Grid container spacing={2} direction={isWide ? 'row-reverse' : 'row'}>
        <Grid item xs={itemWidth}>
          {body}
        </Grid>
        <Grid item xs={itemWidth}>
          <Image filename={imageSrc} />
        </Grid>
      </Grid>
    </div>
  )
}
