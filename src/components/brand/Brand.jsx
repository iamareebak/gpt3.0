import React from 'react'
import './brand.css';
import { googlelogo, slacklogo, atlassianlogo, dropboxlogo, shopifylogo } from './imports.jsx'

const Brand = () => {
  return (
    // <div>Brand</div>
    <div className="gpt3__brand">
      
        <div>
          <img src={googlelogo} alt="Google Logo" />
        </div>
        <div>
          <img src={slacklogo} alt="Slack Logo" />
        </div>
        <div>
          <img src={atlassianlogo} alt="Atlassian Logo" />
        </div>
        <div>
          <img src={dropboxlogo} alt="Dropbox Logo" />
        </div>
        <div>
          <img src={shopifylogo} alt="Shopify Logo" />
        </div>

    </div>
  )
}

export default Brand