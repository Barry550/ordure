import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { GlobalState } from '../global/GlobalState'
import Dashbord1 from './Contenu/Dashbord1'
import Dashbord2 from './Contenu/Dashbord2'
import Dashbord3 from './Contenu/Dashbord3'
import Dashbord4 from './Contenu/Dashbord4'
import FooterDash from './FooterDash/FooterDash'
import Nav1 from './Nav/Nav1'
import Nav2 from './Nav/Nav2'
import Tableau from './Tableau/Tableau'

import Titre from './Titre'

export default function DashBord() {

  const state = useContext(GlobalState)
  const user = state.userApi.user
  const {abonnes} = useSelector(state => state)
  const [filtering, setFiltering] = useState(false)
  const [filter, setFilter] = useState(false)

  const ResultFilter = (input) => {

    const result =  user?.abonnes?.filter(item =>{
      console.log("items:",item?.pseudo);
      const name = item?.pseudo.toLowerCase()
      const term = input?.toLowerCase()
      return name.indexOf(term) !== -1
    })
  
    console.log("result", result);
  
    setFilter(result);
  }
  
  return (
    <body class="sb-nav-fixed">
       <Nav1 filter={ResultFilter} setFiltering={setFiltering} />
        <div id="layoutSidenav">
   
            <div id="layoutSidenav_content">
            <main>
            <div className="container-fluid px-4">
           
                    <div className="row g-6 mb-6">
                    <div>
    <h1 className="mt-4">{user?.pseudo}</h1>         
    </div>
                        {/* <Dashbord1/> */}
                        <Dashbord2/>
                        <Dashbord3/>
                        <Dashbord4/>
                    </div>
                        <Tableau filtering={filtering} filter={filter}/>
                        
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
