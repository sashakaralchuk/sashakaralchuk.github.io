import * as React from "react"
import { Helmet } from 'react-helmet'

import "./styles.sass"

import faviconImage from '../images/favicon.png';

const IndexPage = () => {
  return (
    <main className="container">

      <Helmet
        title="Developer - Sasha Karalchuk"
        link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${faviconImage}` }
        ]}
      />

      <h1 className="_48R48Black">Developer Sasha Karalchuk</h1>

      <h3 className="_30R30Black">Apps</h3>
      <ul>
          <li className="_18R24Black">
              <h4 style={{display: 'inline'}}>Suburb Drive</h4> |<span> </span>
              <a className="link" target="_blank" href="https://play.google.com/store/apps/details?id=com.sashakaralchuk.suburbdrive">store link</a> |<span> </span>
              <a className="link" target="_blank" href="./apps/suburb-drive/privacy-policy.txt">privacy policy</a>
          </li>
          <li className="_18R24Black">
              <h4 style={{display: 'inline'}}>idle arrow</h4> |<span> </span>
              <a className="link" target="_blank" href="https://play.google.com/store/apps/details?id=com.sashakaralchuk.idlearrow">store link</a> |<span> </span>
              <a className="link" target="_blank" href="./apps/idle-arrow/privacy-policy.txt">privacy policy</a>
          </li>
          <li className="_18R24Black">
              <h4 style={{display: 'inline'}}>idle circle</h4> |<span> </span>
              <a className="link" target="_blank" href="https://play.google.com/store/apps/details?id=com.sashakaralchuk.idlecircle">store link</a> |<span> </span>
              <a className="link" target="_blank" href="./apps/idle-circle/privacy-policy.txt">privacy policy</a>
          </li>
      </ul>

      <h3 className="_30R30Black">Contacts</h3>
      <ul>
          <li className="_18R24Black">
            <a className="link" href = "mailto:sasha.karalchuk@gmail.com">sasha.karalchuk@gmail.com</a>
          </li>
          <li className="_18R24Black">
            <a className="link" href="tel:+375291413664">+375(29)141-36-64</a>
          </li>
      </ul>
    </main>
  )
}

export default IndexPage
