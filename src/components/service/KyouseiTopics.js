import React from 'react'
import H2 from 'components/common/H2'
import Topic from 'components/service/Topic'

const firstTopics = [
  {
    title: '1. 小規模',
    text: '利用定員は18人程度として、家庭的な雰囲気を重視しています。',
  },
  {
    title: '2. 多機能',
    text: '高齢者・障がい者・障がい児を含め、誰でも受け入れ対応いたします。',
  },
  {
    title: '3. 地域密着',
    text: '自然豊かな場所に立地し、地域との交流もさかんです。',
  },
]

export default props => {
  const { classes } = props
  return (
    <div>
      <p className={classes.bodyTopic}>
        対象者ごとに施設を限定し、住宅地から離れた場所で提供されるような従来のデイサービスに対し、共生型(富山型)デイサービスは以下の3つをコンセプトに運営しております。
      </p>
      {firstTopics.map(t => (
        <Topic key={t.title} classes={classes} title={t.title} text={t.text} />
      ))}
      <H2 title="代表からのメッセージ" />
      <p className={classes.bodyTopic}>
        アットホームな雰囲気で、対象を限定せず子ども〜お年寄りまで様々な年代の方と過ごす事ができ、より多くの「人」と関わりがもてます。
        ひと昔前の日本の地域コミュニティーの様なお互いに協力し合いながら、助け合い精神で子育てや人付き合いをする、いろんな人達が一緒に楽しく過ごす等々の地域密着のデイサービス（コミュニティデイサービス）を提供していきます。
        グッドデイでは、なにげない普通の日常生活と変わらない事していきます〜。
        普段味わえない様な事が経験ができるかも…{'\n'}
        それは、あなた次第！！！（笑）
      </p>
      <p className={classes.body}>
        皆様で、コンパクトに１つの場所で担えて、地域で必要とされる{'\n'}
        身近なデイを作りましょ〜〜〜〜〜〜〜。
      </p>
    </div>
  )
}
