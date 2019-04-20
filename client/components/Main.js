import React from "react"
import { Link } from "react-router"

function Main(props) {
  return (
    <div>
      <h1>
        <Link to="/">Reduxstragram</Link>
      </h1>
      {React.cloneElement(props.children, props)}
    </div>
  )
}

export default Main
