import React from 'react'
import './etapes.css'
import Etape1 from './Etape1'
import Etape2 from './Etape2'
import Etape3 from './Etape3'

export default function Etapes() {
  return (
    <div className="body-4">
          <h3>Comment Ça marche ?</h3>
          <Etape1/>
         <Etape2/>
         <Etape3/>
      </div>
  )
}