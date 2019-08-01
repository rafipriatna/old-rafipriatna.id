import React, { Component } from 'react'
import coffee from '../images/coffee.svg'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              {/* <img className="avatar" src={tania} alt="Tania Rascia" /> */}
            </div>
            <div>
              <p>
                {`Saya Rafi, seorang developer amatir biasanya ngembangin web. Saya suka membuat projek
              sumber terbuka yang tersedia di halaman Github saya.`}
              </p>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}