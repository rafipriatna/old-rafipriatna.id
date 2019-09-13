import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import ProjectListing from '../components/ProjectListing'
import projects from '../../data/Projects'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'

export default class Index extends Component {
  render() {
    const latestPostEdges = this.props.data.latest.edges
    const popularPostEdges = this.props.data.Populer.edges
    const belajarPostEdges = this.props.data.Belajar.edges
    
    return (
      <Layout>
        <Helmet title={`${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <h2>Hai, saya Rafi!</h2>
            <p>Terima kasih sudah mampir 😁</p>
          </div>
        </div>

        <div className="container">
          <section className="section">
            <h2>Artikel terbaru</h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>
          <div className="bagi-dua">
            <div className="kiri">
              <section className="section">
                <h2>Artikel populer</h2>
                <PostListing simple postEdges={popularPostEdges} />
              </section>
            </div>
            <div className="kanan">
              <section className="section">
                <h2>Belajar bareng</h2>
                <PostListing simple postEdges={belajarPostEdges} />
              </section>
            </div>
          </div>

          <section className="section">
            <h2>Proyek sumber terbuka</h2>
            <ProjectListing projects={projects} />
          </section>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    Populer: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Populer" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    Belajar: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Belajar" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
