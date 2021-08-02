import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  color: '#aaf',
  marginBottom: 64,
  maxWidth: 320,
}

// markup
// This will goto the http://127.0.0.1:5500/public/test/ page 
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Testing Page</title>
      <h1 style={headingStyles}>Another Gatsby page</h1>
      <hr></hr>
      <p>Generate from test.js</p>
    </main>
  )
}

export default IndexPage
