import React, { useContext } from 'react'
import PmeRowListe from './PmeRowListe'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalState } from '../global/GlobalState'
import { deleteCart } from '../redux/actions/AbonneAction'

export default function PmeListe() {

    const {cart} = useSelector(state => state)

    const state = useContext(GlobalState)

    const user = state.userApi.user
    // const cart = state.userApi.cart

    console.log(cart);

  return (
   <div className='abonnement-conteneur'>
      <hr />
    <div className=' container mt-5'>
<table class="table table-striped">
  <thead>
    <tr>
      <th className='h6 text-center' style={{fontWeight: 'bold'}} scope="col">Logo</th>
      <th className='h6 text-center' style={{fontWeight: 'bold'}} scope="col">Nom</th>
      <th className='h6 text-center' style={{fontWeight: 'bold'}} scope="col">Email</th>
      <th className='h6 text-center' style={{fontWeight: 'bold'}} scope="col">Quartier</th>
      <th className='h6 text-center' style={{fontWeight: 'bold'}} scope="col">Service</th>
      <th className='h6 text-center' style={{fontWeight: 'bold'}} scope="col">Téléphone</th>
      <th className='h6 text-center' style={{fontWeight: 'bold'}} scope="col">Date debut abonnement</th>
      <th className='h6 text-center' style={{fontWeight: 'bold'}} scope="col">Date fin abonnement</th>
      <th className='h6 text-center' style={{fontWeight: 'bold'}} scope="col"> </th>
    </tr>
  </thead>
  <tbody>

    
    {
        cart?.map(c => <PmeRowListe c={c}/>)
    } 
  
  </tbody>
</table>
    </div>
    {/* {
      cart?.length === 0 && <h1 style={{textAlign: 'center'}}>vous n'êtes abonné à aucune PME</h1>
    } */}
   </div>
  )
}
