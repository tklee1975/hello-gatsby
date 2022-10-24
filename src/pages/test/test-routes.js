import * as React from "react"
import { Link } from "gatsby"

const kLinkStyleActive = {
  'color': 'orange'
}

const kLinkStyleHover = {
  'color': 'red'
}

// styles
// markup
// This will goto the http://localhost:8000/test/test-routes 
const IndexPage = () => {
  return (
    <main>
      <title>Test Routes</title>
      <h1>Test Routes</h1>
      <h3>Using A Tag</h3>
      <ul>
        <li><a href="/">To Index</a></li>
        <li><a href="/test/test1">To Sub page</a></li>
        <li><a href="www.google.com">External Links (No http) - Fail </a></li>
        <li><a href="https://www.google.com">External Links (with http)</a></li>
      </ul>

      <h3>Using Link Component</h3>
      <ul>
        <li><Link to="/">To Index</Link></li>
        <li><Link to="/test/test1">To Sub page</Link></li>
        <li><Link to="https://www.google.com">External Links</Link></li>
      </ul>

      <h3>Link Styling</h3>
      <ul>
        <li><Link activeStyle={{ color: "red" }} to="/">Inline Style</Link></li>
        <li><Link activeStyle={{ color: "red" }} to="/test/test-routes">Active Style (in active)</Link></li>
        <li><Link activeStyle={kLinkStyleActive} partiallyActive={true}
          to="/">Using Preset Style</Link></li>
        <li><Link className="testLink"
          to="/">Link with Class</Link></li>
      </ul>
    </main>
  )
}

export default IndexPage
