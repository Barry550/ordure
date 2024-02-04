import React, { useState } from 'react'
import HistoryTroc from './HistoryTroc'
import HistoryVente from './HistoryVente'

export default function Historique() {

  const [search, setSearch] = useState('history')
  return (
    <div className='abonnement-conteneur'>
        <hr />
    <div className="container">

  
    <select style={{width: '300px', height: '50px', marginLeft: '480px'}}  class="form-select text-white bg-success " aria-label="Default select example"  onChange={(e)=> setSearch(e.target.value)} value={search} id="exampleFormControlSelect1">
      <option style={{fontWeight: 'bold', fontSize: '22px'}} className='h1' value="history">Historique</option>
      <option style={{fontWeight: 'bold', fontSize: '22px'}} className='h1' value="ventes">Ventes</option>
      <option style={{fontWeight: 'bold', fontSize: '22px'}} className='h1' value="trocs">Trocs</option>
     
    </select>

  {
    search === 'history' ? <>
    <HistoryTroc/>
            <HistoryVente/>
    </> : 
    search === "ventes" ? <HistoryVente/> : 
    search === "trocs" ?     <HistoryTroc/> : ''
  }
            
        </div>
  </div>
  )
}
