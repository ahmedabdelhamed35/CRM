import React from 'react'
import './posts.css'
import profile from '../../assets/mask1.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ReplyIcon from '@mui/icons-material/Reply';

export default function Posts() {
    return (
        <div>
            

            <div className='posts'>
                <div className="postWrapper">
                    <div className="postsTop">
                        <img className="shareProfileImg" src={profile} />
                        <h6 className='author'>
                            أسامه مجدى
                            <br />
                            <p className='time'>منذ ساعه</p>
                        </h6>
                        <br />


                    </div>

                    <div className="contentContainer">
                        <p className='content'>محتاج شقه متكرر فى الشيخ زايد بادجت 2 ونص كاش بحرى نص تشطيب </p>
                    </div>

                    <div className="postBottom">

                        <div className='rr'>
                           
                            <FavoriteBorderIcon />
                        </div>

                        <div className='rr'>

                         
                            <ChatBubbleIcon />
                        </div>

                        <div className="rr">
                            <ReplyIcon />
                        </div>


                    </div>


                </div>

            </div>
        </div>

    )
}
