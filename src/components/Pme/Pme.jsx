import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAbonnes, getUsersRequest } from '../redux/actions/AbonneAction'
import ReactLoading from 'react-loading';



import "./pme.css"

import PmeRamassage from './PmeRamassage'
import PmeRecyclage from './PmeRecyclage'


export default function Pme({filtering, filter, research, search, setChange}) {
  // const [search, setSearch] = useState('Toutes les PME')

  const {abonnes} = useSelector(state => state)

  console.log(abonnes?.users?.length);

  return (
    <div className="conteneur">

 {
   research ? '' : <>
        <div className='pme-header'>
            <h1>Des pme a votre disposition pour vos services en <span>ramassage</span> et <span>recyclage</span></h1>
            <p>Choisissez La Pme Qui Vous Convient Et Abonnez Vous</p>
      </div>
   </>
 }

{
  abonnes?.users?.length === 0 && <div style={{marginLeft: '840px'}}>
  <ReactLoading type='spin'  color='black' height={130} width={130} />
</div>
}

      {/* <div className='barre'>
      <form className="formulaire-search  d-inline-flex ">
        <select value={search} onChange={(e)=> setSearch(e.target.value)} className='combo-select' name="" id="">
          <option value='Toutes les PME'>Toute les PME</option>
          <option value='Ramassages'>Ramassages</option>
          <option value='Recyclages'>Recyclages</option>
        </select>
    
      <input className='input-tri form-control' value={search} type='search' aria-label="Search"
              onChange={(e)=>{
                console.log(e.target.value);
                setSearch(e.target.value.toLocaleLowerCase())
                //  setFiltering(e.target.value.length !== 0)
                //  filter(e.target.value)
              }}
      />

      <button class="button-search btn btn-outline-success" type="submit">Search</button>
    </form>
      </div> */}
       
       {
         search === "Toutes les PME" ?  <>
         <PmeRamassage
         setChange={setChange}
          data={filtering ? filter : abonnes?.users} research={research}/>
         <PmeRecyclage
           setChange={setChange}
          data={filtering ? filter : abonnes?.users} research={research}/>
         </> : search === "Ramassages" ? 
         <PmeRamassage 
         setChange={setChange}
         data={filtering ? filter : abonnes?.users} research={research}/> :
          search === "Recyclages" ? 
        <PmeRecyclage 
        setChange={setChange}
          data={filtering ? filter : abonnes?.users} research={research}/> : ''
       }
       
{/* <PmeRamassage data={filtering ? filter : abonnes}/> */}
    

    </div>
  )
}
