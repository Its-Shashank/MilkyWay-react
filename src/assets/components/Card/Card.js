import React from 'react'
import '../../scss/home.scss'
import { Twitter, Instagram, Facebook, LinkedIn } from '@material-ui/icons'

function Card() {
  return (
      <div id="user">
        
        <div>
          <h3 id="user-subheader">
            We have been using MilkyWay for quite a long time
            and it has never ever disappointed us.
          </h3>
        </div>

        <div id="styleUserCard">
          <div className="user-photo">
          </div>
          <div className='social-icons'>
            <Facebook />
            <LinkedIn />
            <Twitter />
          </div>
          
          <h4 id="user-header">Mike Ross</h4>

        </div>
      </div>
  )
}
export default Card