import React from 'react'
import { useParams } from 'react-router-dom'
import abonne from '../logo/abonne.jpeg'
import valider from '../logo/valider.jpeg'
import desabonne from '../logo/desabonne.jpeg'

export default function Corps({abonne}) {

  // const {ramassage, recyclage} = useParams()

  // console.log("ramassage: ",ramassage);


  // console.log("recyclage: ",recyclage);
  return (
    <tbody>

      <tr>
      <td>{abonne.pseudo}</td>
      <td>{abonne.email}</td>
      <td>{abonne.quartier}</td>
      <td>{abonne.commune}</td>
      <td>{abonne.tel}</td>
    
    </tr>


  
 
  
    
    </tbody>
  )
}
