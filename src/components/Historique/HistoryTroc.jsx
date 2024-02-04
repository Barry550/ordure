import React, { useContext } from 'react'
import { GlobalState } from '../global/GlobalState';
import ItemsTrocs from './ItemsTrocs';

export default function HistoryTroc() {
  const state = useContext(GlobalState)

  const user = state.userApi.user
  console.log(user?.historyTroc);

return (
<>
<div className="mt-5">
     <h1>Trocs</h1>
     <hr/>
 </div>
<table class="table table-striped mt-5">
  
<thead>
  <tr>
    <th scope="col">logo</th>
    <th scope="col">Entreprise</th>
    <th scope="col">Quantité</th>
    <th scope="col">Email</th>
    <th scope="col">Téléphone</th>
    <th scope="col">Date</th>
  </tr>
</thead>
<tbody>
  
{
   user?.historyTroc?.map(troc => <ItemsTrocs troc={troc} user={user}/> )
}

</tbody>
</table>
</>
)
}
