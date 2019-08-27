import React, { Component } from 'react'

export default class Kontak extends Component {
  render() {
    return (
      <>
        <h1>Stay in Touch</h1>
        <ul>
          <li>
            <strong>Twitter</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/rafipriatna23">
              rafipriatna23
            </a>
          </li>
          <li>
            <strong>Instagram</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/rafipriatna">
              rafipriatna
            </a>
          </li>
          <li>
          <strong>Telegram</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://t.me/rafipriatna">
              rafipriatna
            </a>
          </li>
        </ul>
      </>
    )
  }
}