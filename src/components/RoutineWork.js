import React from 'react'
import Timeline from 'assets/timeline.svg'
import { makeStyles } from '@material-ui/styles'
import { colors } from 'libs/colors'

const useStyles = makeStyles(theme => ({
  timeline: {
    width: props => (props.isDesktop ? 58 : 29),
    height: props => (props.isDesktop ? 40 : 20),
    fill: colors.red,
    margin: '24px 0',
  },
  children: { marginBottom: 16 },
}))

export default props => {
  const { classes, isDesktop, title, children, isEnd } = props
  const innerClasses = useStyles({ isDesktop })
  const [_title, time] = title.split(' ')

  return (
    <div>
      <p className={classes.routine}>
        {_title}
        {time && (
          <span className={classes.highlighter}>
            {(isDesktop ? ' ' : '\n') + time}
          </span>
        )}
      </p>
      {children}
      {!isEnd && <Timeline className={innerClasses.timeline} />}
    </div>
  )
}
