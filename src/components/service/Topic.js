import React from 'react'

export default props => {
  const { classes, title, text } = props

  return (
    <div>
      <p className={classes.routine}>{title}</p>
      <p className={classes.bodyTopic}>{text}</p>
    </div>
  )
}
