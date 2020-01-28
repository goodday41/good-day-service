import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import Layout from 'components/layout'
import SEO from 'components/seo'
import H1 from 'components/common/H1'
import Container from 'components/layouts/Container'
import TopCardList from 'components/index/TopCardList'
import TopSubCardList from 'components/index/TopSubCardList'
import Introduction from 'components/index/Introduction'
import GoodchanIntro from 'components/index/GoodchanIntro'
import EventIntro from 'components/index/EventIntro'
import Evaluation from 'components/index/Evaluation'
import Styles from '../styles/pages/index.module.scss'

export default () => {
  const isDesktop = useMediaQuery('(min-width: 1080px)')
  const classes = Styles

  return (
    <Layout page="/" isTop>
      <SEO title="Home" />
      <Container
        body={
          <div>
            <H1 title="グッドデイサービスについて" />
            <Introduction {...{ isDesktop }} />
            <TopCardList {...{ classes, isDesktop }} />
            <TopSubCardList {...{ classes, isDesktop }} />
          </div>
        }
      />
      <Container
        body={
          <div>
            <H1 title="グッドちゃん" />
            <GoodchanIntro {...{ classes, isDesktop }} />
          </div>
        }
      />
      <Container
        body={
          <div>
            <H1 title="グッドデイ2大イベント!!" />
            <EventIntro {...{ classes, isDesktop }} />
          </div>
        }
      />
      <Container
        body={
          <div>
            <H1 title="評価表" />
            <Evaluation {...{ classes }} />
          </div>
        }
      />
    </Layout>
  )
}
