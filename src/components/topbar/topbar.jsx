import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import './topbar.css'

export default function Topbar() {
  return (
    <div className='topbarContainer'>

        <div className="tpLft">
            
            <NotificationsActiveOutlinedIcon className='navnotfication'/>


        </div>

        <div className="tpRght">
         <div className="searchbar">
         <input className='searchinput' placeholder='بحث' />
          <SearchIcon className='searchicon'/>
         </div>
        </div>

    </div>
  )
}
