import React from "react"
import { Link } from "react-router"
import Photo from "./Photo"

function PhotoGrid(props) {
  return (
    <div className="photo-grid">
      {props.posts.map((post, i) => (
        <Photo {...props} key={i} i={i} post={post} />
      ))}
    </div>
  )
}

export default PhotoGrid
