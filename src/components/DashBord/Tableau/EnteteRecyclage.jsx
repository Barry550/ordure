import React from 'react'
import { useSelector } from 'react-redux'
import Corps from './Corps/Corps'
import CorpsRecyclage from './Corps/CorpsRecyclage'

export default function EnteteRecyclage({user}) {

   const {ventes} = useSelector(state => state)

  return (
       <table style={{width: "900px", fontSize: '18px'}}  className='table table-striped'>
                             <thead className='thead-dark'>
                                     <tr>
                                        <th scope='col'>Pseudo </th>
                                        <th scope='col'>Email</th>
                                        <th scope='col'>Quartier</th>
                                        <th scope='col'>Commune</th>
                                        <th style={{width: '100px'}} scope='col'>Téléphone</th>
                                        {/* <th scope='col'>Décharge</th> */}
                                        {/* <th scope='col'>Abonnés</th> */}
                                     </tr>
                                 </thead>
                                {
                                   ventes?.map(vente =>  <CorpsRecyclage vente={vente}/> )
                                }
            </table>
                     
  )
}
