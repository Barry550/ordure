import React, { useContext } from 'react'
import { GlobalState } from '../global/GlobalState'
import ItemsVentes from './ItemsVentes';

export default function HistoryVente() {

    const state = useContext(GlobalState)

    const user = state.userApi.user
    console.log(user?.historyVente);

  return (
<>
<div className="mt-5">
     <h1>Ventes</h1>
     <hr/>
 </div>
<table class="table table-striped mt-5">
  <thead>
    <tr>
      <th scope="col">Entreprise</th>
      <th scope="col">Email</th>
      <th scope="col">Téléphone</th>
      <th scope="col">Quartier</th>
      <th scope="col">Commune</th>
      <th scope="col">Quantité</th>
      <th scope="col">Montant</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    
 {
     user?.historyVente?.map(vente => <ItemsVentes vente={vente} user={user}/> )
 }
  
  </tbody>
</table>
</>
  )
}
