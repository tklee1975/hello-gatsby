import * as React from "react"
                                            // ken: This affect all pages 

// styles
// markup
// This will goto the http://127.0.0.1:5500/public/test/ page 
const IndexPage = () => {
  return (
    <main>
      <title>Testing Page</title>
      <h1>Styled Div Testing</h1>
      <hr></hr>
      <p>Generate from test/global.css</p>
      <hr></hr>
      <li>Reference: <a href='https://www.gatsbyjs.com/docs/how-to/styling/global-css/'>Global CSS</a></li>
    </main>
  )
}

export default IndexPage
