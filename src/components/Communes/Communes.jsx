import React from 'react'
import './Communes.css'
import Descommune from './Descommune'
import Partenariat from './Partenariat'

export default function Communes() {
  return (
    <div className="body-5 pt-5">
         <h1>Nos PME sont présentes dans les <span class="nb-commune">(5) communes de la capitale</span></h1>
        <Descommune/>
        {/* <h2>En partenariats avec ...</h2> */}
        {/* <Partenariat/> */}
    </div>
  )
}
