import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import Kontak from '../components/Kontak'
import config from '../../data/SiteConfig'

export default class KontakPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Kontak – ${config.siteTitle}`} />
        <div className="container">
          <Kontak />
        </div>
      </Layout>
    )
  }
}
