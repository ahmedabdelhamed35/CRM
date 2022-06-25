import React from 'react'
import './share.css'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import postWriter from '../../assets/6.png'

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={postWriter} />
          <input
            placeholder="ما اللذى يدور فى رأسك"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                
                    <AddAPhotoIcon className='shareIcons' />
                </div>
                <div className="shareOption">
                   
                    <AddReactionIcon className='shareIcons'/>
                </div>
                
            </div>
            <button className="shareButton">أضافه</button>
        </div>
      </div>
    </div>
  )
}
