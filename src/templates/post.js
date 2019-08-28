import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layout'
import PostTags from '../components/PostTags'
import Disqus from 'gatsby-plugin-disqus'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import { formatDate, editOnGithub } from '../utils/global'

export default class PostTemplate extends Component {
  render() {
    const { slug } = this.props.pageContext
    const postNode = this.props.data.markdownRemark
    const post = postNode.frontmatter
    let thumbnail

    if (!post.id) {
      post.id = slug
    }

    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID
    }

    if (post.thumbnail) {
      thumbnail = post.thumbnail.childImageSharp.fixed
    }

    // Disqus
    let disqusConfig = {
      url: `${config.siteUrl+location.pathname}`,
      identifier: post.id,
      title: post.title,
    }

    const date = formatDate(post.date)
    const githubLink = editOnGithub(post)
    const twitterShare = `https://twitter.com/share?text=${encodeURIComponent(post.title)}&url=${
      config.siteUrl
    }/${post.slug}/&via=rafipriatna23`
    const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${
      config.siteUrl
    }/${post.slug}`

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <article className="single container">
          <header className={`single-header ${!thumbnail ? 'no-thumbnail' : ''}`}>
            {thumbnail ? <Img fixed={post.thumbnail.childImageSharp.fixed} /> : null}
            <div className="flex">
              <h1>{post.title}</h1>
              <div className="post-meta">
                <time className="date">{date}</time>
                /
                <a className="github-link" href={githubLink} target="_blank">
                  Edit on Github ✏️
                </a>
              </div>
              <PostTags tags={post.tags} />
            </div>
          </header>
          <div className="post" dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <div>
            {' '}
            <a className="button twitter-button" href={twitterShare} target="_blank">
              Share on Twitter
            </a>
            {' '}
            <a className="button facebook-button" href={facebookShare} target="_blank">
              Share on Facebook
            </a>
          </div>
        </article>
        <aside className="comments">
        <div className="container comments-container">
            <Disqus config={disqusConfig} />
        </div>
      </aside>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        slug
        date
        categories
        tags
        template
      }
      fields {
        slug
        date
      }
    }
  }
`