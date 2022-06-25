import React from "react";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/topbar";
import AddChannel from "../addChannel/addChannel";
import Addclient from "../addclients/addclient";
import Addemployee from "../addemployee/addemployee";
import Addproject from "../addprojects/addproject";
import Project from "../projects/project";

import "./home.css"

export default function Home() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = <Feed />
      
      break
    case "/addChannel":
      Component =<AddChannel />

    
      break


      case "/addClient":
        Component =<Addclient />
  
      
        break

        case "/addemployee":
        Component =<Addemployee />
  
      
        break


        case "/project":
          Component =<Project />
    
        
          break


          case "/addproject":
          Component =<Addproject />
    
        
          break
  }
  return (
    <>
    <Topbar />
    <div className="homeContainer">
    <Sidebar />
    {Component}
    
    
    </div>
    
    </>
    
  )
}
