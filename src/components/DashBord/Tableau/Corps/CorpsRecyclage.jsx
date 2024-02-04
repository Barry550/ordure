import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import abonne from '../logo/abonne.jpeg'
import valider from '../logo/valider.jpeg'
import desabonne from '../logo/desabonne.jpeg'
import { useDispatch } from 'react-redux'

import { GlobalState } from '../../../global/GlobalState'
import { valideVente } from '../../../redux/actions/AbonneAction'

export default function CorpsRecyclage({vente}) {
  const state = useContext(GlobalState)

  // const user = state.userApi.user

  console.log(vente);

  const dispatch = useDispatch()
  const decharge = async() =>{
   await dispatch(valideVente(vente))
  }

  return (
    <tbody>

  <tr>
      <td>{vente?.name}</td>
      <td>{vente?.email}</td>
      <td>{vente?.quartier}</td>
      <td>{vente?.commune}</td>
      <td>{vente?.tel}</td>
      {/* <td> 
        <button onClick={()=> decharge()}  className='btn btn-success'>en attente</button >
      </td> */}
     
    </tr>
    
    </tbody>
  )
}
