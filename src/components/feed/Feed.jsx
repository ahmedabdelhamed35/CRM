import React from 'react'
import Posts from '../posts/posts'
import Share from '../share/share'
import "./feed.css"

export default function Feed() {
  return (
      <div className='feeds'>
      <div className="feedWrapper">
        <p className='title'>الرئيسيه</p>
        <Share />

        <h4 className='poststitle'>احدث المنشورات</h4>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
    </div>
  )
}
