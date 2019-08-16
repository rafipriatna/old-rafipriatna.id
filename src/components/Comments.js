import React, { Component } from 'react'
import Disqus from 'gatsby-plugin-disqus'
import config from '../../data/SiteConfig'
import post from '../templates/post'

export default class Comments extends Component {
  render() {
    let disqusConfig = {
      url: `${config.siteUrl+post.id}`,
      identifier: post.id,
      title: post.title,
    }
    return (
      <aside className="comments">
        <div className="container comments-container">
            <Disqus config={disqusConfig} />
        </div>
      </aside>
    )
  }
}