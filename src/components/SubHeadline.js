import React from 'react'
import { makeStyles } from '@material-ui/core'
import { colors } from 'libs/colors'
import { fonts } from 'libs/fonts'
import { useMediaQuery } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: props => ({
    color: colors.brown,
    fontSize: fonts(props.matches).subHeadline,
    borderBottom: `4px solid ${colors.red}`,
    marginBottom: 16,
    display: 'inline-block',
  }),
}))

export default props => {
  const matches = useMediaQuery('(min-width: 1024px)')
  const classes = useStyles({ matches })
  return (
    <div>
      <h2 className={classes.title}>{props.children}</h2>
    </div>
  )
}
