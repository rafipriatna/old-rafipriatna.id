import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <a href="https://twitter.com/rafipriatna23" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://instagram.com/rafipriatna" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://github.com/rafipriatna" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a
          href="https://github.com/rafipriatna/rafipriatna.id"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source
        </a>
      </footer>
    )
  }
}