import React from 'react'
import "./sidebar.css"
import SpeedIcon from '@mui/icons-material/Speed';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import StoreIcon from '@mui/icons-material/Store';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ProfileImg from '../../assets/6.png'



export default function Sidebar() {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };


  const [open2, setOpen2] = React.useState(false);

  const handleClick2 = () => {
    setOpen2(!open2);
  };


  const [open3, setOpen3] = React.useState(false);

  const handleClick3 = () => {
    setOpen3(!open3);
  };


  return (
    <div className='sideBar'>
      <div className="sideWrapper">
        <ul className='sidebarList'>

{/*----------------------profile-------------------------------------*/}

        <li className='sidebarprofileItem'>
          <img src={ProfileImg} />
          <h5>أحمد محمد</h5>
          <p className='disc'>مندوب مبيعات</p>

        </li>

{/*------------------------Home page list title----------------------*/}
          <li className='sidebarItem'>
            <SpeedIcon className='sidebarIcon' />
            <span className='sidebarListtext'>الرئيسيه</span>
          </li>
{/*----------------------------Clients-------------------------------*/}
          <li className='thenistedItems'
            sx={{ width: '100%' }}
            component="nav"
            aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleClick}>
              <GroupsOutlinedIcon className='sidebarIcon' />
              <span className='sidebarListtext'>العملاء</span>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton >
                  <span className='sidebarListtextnest'>جميع العملاء</span>
                </ListItemButton>
              </List>
              <List component="div" disablePadding>
                <ListItemButton >
                  <span className='sidebarListtextnest'>العملاء الجدد</span>
                </ListItemButton>
              </List>

              <List component="div" disablePadding>
                <ListItemButton >
                  <span className='sidebarListtextnest'>العملاء المحذوفه</span>
                </ListItemButton>
              </List>
              <List component="div" disablePadding>
                <ListItemButton >
                  <span className='sidebarListtextnest'>اضافة عميل جديد</span>
                </ListItemButton>
              </List>
              <List component="div" disablePadding>
                <ListItemButton >
                  <span className='sidebarListtextnest'>استيراد عملاء</span>
                </ListItemButton>
              </List>
              <List component="div" disablePadding>
                <ListItemButton >
                  <span className='sidebarListtextnest'>تصدير عملاء</span>
                </ListItemButton>
              </List>
            </Collapse>
          </li>
{/*------------------------- projects -------------------------------------*/}
          <li className='thenistedItems'
            sx={{ width: '100%' }}
            component="nav"
            aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleClick2}>
              <StoreIcon className='sidebarIcon' />
              <span className='sidebarListtext'>المشاريع</span>
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton >
                  <span className='sidebarListtextnest'>عرض المشاريع</span>
                </ListItemButton>
              </List>
              <List component="div" disablePadding>
                <ListItemButton >
                  <span className='sidebarListtextnest'>اضافة مشروع جديد</span>
                </ListItemButton>
              </List>
            </Collapse>
          </li>
 {/*-------------------------------reports---------------------------------------*/}
          <li className='sidebarItem'>
            <FeedOutlinedIcon className='sidebarIcon' />
            <span className='sidebarListtext'>تقارير فريق المبيعات</span>
          </li>
 {/*-------------------------employees-----------------------------------------------*/}
          <li className='thenistedItems'
            sx={{ width: '100%' }}
            component="nav"
            aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleClick3}>
              <BadgeOutlinedIcon className='sidebarIcon' />
              <span className='sidebarListtext'>الموظفين</span>
              {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton >
                  <span className='sidebarListtextnest'>اضافة موظف جديد</span>
                </ListItemButton>
              </List>
              <List component="div" disablePadding>
                <ListItemButton >
                  <span className='sidebarListtextnest'>تعديل بيانات الموظفين</span>
                </ListItemButton>
              </List>
            </Collapse>
          </li>



          <li className='sidebarItem'>
            <AddCircleOutlineOutlinedIcon className='sidebarIcon' />
            <span className='sidebarListtext'>اضافة قناه</span>
          </li>

          <li className='sidebarItem'>
            <SettingsIcon className='sidebarIcon' />
            <span className='sidebarListtext'>الاعدادات</span>
          </li>

          <li className='sidebarItem'>
            <LogoutIcon className='sidebarIcon' />
            <span className='sidebarListtext'>تسجيل خروج</span>
          </li>



        </ul>
      </div>
    </div>
  )
}
