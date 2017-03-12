import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const Html = () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>Soshace test task</title>
    </head>
    <body>
      <div id="root" />
      <script src="/bundle/bundle.js" />
    </body>
  </html>
)

const htmlHandler = (req, res) => {
  const html = <Html />

  const staticHTML = renderToStaticMarkup(html)

  res.status(200).send(`<!DOCTYPE html>\n${staticHTML}`)
}

export default htmlHandler
