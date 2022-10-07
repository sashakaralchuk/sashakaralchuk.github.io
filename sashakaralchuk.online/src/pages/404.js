import * as React from "react"
import { Link } from "gatsby"

import "./styles.sass"


const NotFoundPage = () => {
  return (
    <main className="container">
      <h1 className="_30R30Black">Page not found</h1>
      <Link className="_18R24Black link" to="/">Go home</Link>.
    </main>
  )
}

export default NotFoundPage
