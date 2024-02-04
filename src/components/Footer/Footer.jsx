import React from 'react'
import './Footer.css'
import Images from './Images'
import Texte from './Texte'

export default function Footer() {
  return (
<footer>
        <div>
            <p className='p1'>Adresse</p>
            <p className='p2'>Retrouvez-nous</p>
            <Texte/>
            <Images/>
            <p className="numero">Tel: 624893223/621410646</p>
        </div>
    </footer>
  )
}
