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
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>Hello Gatsby</h1>
      <hr></hr>
      <p>First Try</p>
    </main>
  )
}

export default IndexPage
