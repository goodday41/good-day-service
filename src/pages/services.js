import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Container from 'components/layouts/Container'
import H1 from 'components/common/H1'
import H2 from 'components/common/H2'
import KyouseiIntro from 'components/service/KyouseiIntro'
import KyouseiTopics from 'components/service/KyouseiTopics'
import ServiceIntro from 'components/service/ServiceIntro'
import RoutineIntro from '../components/service/RoutineIntro'
import Styles from '../styles/pages/service.module.scss'

export default function() {
  const isDesktop = useMediaQuery('(min-width: 1080px)')
  const classes = Styles

  return (
    <Layout page="/services" isTop={false}>
      <SEO title="Services" />
      <Container
        body={
          <div>
            <H1 title="サービス" />
            <ServiceIntro {...{ classes, isDesktop }} />
          </div>
        }
      />
      <Container
        body={
          <div>
            <H1 title="共生型サービスについて" />
            <KyouseiIntro {...{ classes, isDesktop }} />
            <H2 title="特徴" />
            <KyouseiTopics {...{ classes }} />
          </div>
        }
      />
      <Container
        body={
          <div>
            <H1 title="1日の流れ" />
            <RoutineIntro {...{ classes, isDesktop }} />
          </div>
        }
      />
    </Layout>
  )
}
