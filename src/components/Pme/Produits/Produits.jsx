import React from 'react'
import Articles from './Articles'
import ModaleRecy from './ModaleRecy'
import ModalVente from './ModalVente'

export default function Produits({setChange}) {
  return (
    <div className='conteneur'>
        <Articles setChange={setChange}/>
        {/* <ModaleRecy/>
        <ModalVente/> */}
    </div>
  )
}
