import React, { useContext } from 'react'
import { GlobalState } from '../global/GlobalState'
import DashbordRecyclage1 from './contenuRecyclage/DashbordRecyclage1'
import DashbordRecyclage2 from './contenuRecyclage/DashbordRecyclage2'
import DashbordRecyclage3 from './contenuRecyclage/DashbordRecyclage3'
import DashbordRecyclage4 from './contenuRecyclage/DashbordRecyclage4'
import FooterDash from './FooterDash/FooterDash'
import Nav1 from './Nav/Nav1'
import Nav2 from './Nav/Nav2'
import NavRecy from './Nav/NavRecy'
import Tableau from './Tableau/Tableau'
import TabTroc from './Tableau/TabTroc'
import TbRecyclage from './Tableau/TbRecyclage'

import Titre from './Titre'

export default function DashBordRecyclage() {

  const state =  useContext(GlobalState)
  const user = state.userApi.user
  return (
    <body class="sb-nav-fixed ">
       <NavRecy/>
        <div id="layoutSidenav">
   
            <div id="layoutSidenav_content">
            <main>
            <div className="container-fluid px-4">
           
                    <div className="row g-6 mb-6">
                        <Titre user={user}/>
                        {/* <DashbordRecyclage1 user={user}/> */}
                        <DashbordRecyclage2 user={user}/>
                        <DashbordRecyclage3 user={user}/>
                        <DashbordRecyclage4 user={user}/>
                    </div>
                       <div className="d-flex mt-5">
                       <TbRecyclage user={user}/>
                        <TabTroc user={user}/>
                       </div>
            </div>
            </main>
         
            </div>
        </div>
                  {/* <footer >
                  <FooterDash/>
                  </footer> */}
    </body>
  )
}
