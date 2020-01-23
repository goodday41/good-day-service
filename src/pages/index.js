import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import { fonts } from 'libs/fonts'
import Layout from 'components/layout'
import SEO from 'components/seo'
import H1 from 'components/H1'
import Container from 'components/layouts/Container'
import TopCardList from 'components/index/TopCardList'
import TopSubCardList from 'components/index/TopSubCardList'
import Introduction from 'components/index/Introduction'
import GoodchanIntro from 'components/index/GoodchanIntro'
import EventIntro from 'components/index/EventIntro'
import Evaluation from 'components/index/Evaluation'

const useStyles = makeStyles(theme => ({
  body: {
    fontSize: props => fonts(props.isDesktop).body,
    lineHeight: '32px',
    whiteSpace: 'pre-line',
    margin: '0 0 16px',
  },
  subCard: {
    height: props => (props.isDesktop ? 64 : 'auto'),
  },
}))

export default () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const classes = useStyles({ isDesktop })

  return (
    <Layout page="/">
      <SEO title="Home" />
      <Container>
        <H1>グッドデイサービスについて</H1>
        <Introduction {...{ isDesktop }} />
        <TopCardList {...{ classes, isDesktop }} />
        <TopSubCardList {...{ classes, isDesktop }} />
      </Container>
      <Container>
        <H1>グッドちゃん</H1>
        <GoodchanIntro {...{ classes, isDesktop }} />
      </Container>
      <Container>
        <H1>グッドデイ2大イベント!!</H1>
        <EventIntro {...{ classes, isDesktop }} />
      </Container>

      <Container>
        <H1>ガイドラインに基づく評価</H1>
        <Evaluation {...{ classes }} />
      </Container>
    </Layout>
  )
}
