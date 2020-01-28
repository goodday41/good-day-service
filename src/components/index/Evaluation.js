import React from 'react'
import Button from 'components/common/Button'

export default props => {
  const { classes } = props
  const contents = [
    {
      title: '児童発達支援',
      selfEval:
        'https://drive.google.com/drive/folders/1wjxj3Pac0fLBh08G8oVpGkJ6VbT3lQSP?usp=sharing',
      parentsEval:
        'https://drive.google.com/drive/folders/1VxtKquDyIzFda0iK-IY_u7sG7j0ukURS?usp=sharing',
    },
    {
      title: '放課後等デイサービス',
      selfEval:
        'https://drive.google.com/drive/folders/1y9s4fveeDIrx0WIEYaQ7UHucgrDMJ1tg?usp=sharing',
      parentsEval:
        'https://drive.google.com/drive/folders/14PFfYiBL13rGGGzzt839vs5AhP3NmdXg?usp=sharing',
    },
  ]
  return (
    <div>
      <p className={classes.body}>
        厚生労働省が定めたガイドラインに基づく評価表です。{'\n'}
        外部サイト(Google Drive) に移動します。
      </p>
      {contents.map(c => (
        <div key={c.title}>
          <h2>{c.title}</h2>
          <div style={{ display: 'flex' }}>
            <Button link={c.selfEval} target="_blank" title="自己評価" />
            <Button
              link={c.parentsEval}
              target="_blank"
              title="保護者等からの評価"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
