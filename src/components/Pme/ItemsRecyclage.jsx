import axios from 'axios'
import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { GlobalState } from '../global/GlobalState'
import { deletePme } from '../redux/actions/AbonneAction'
import image2 from './image2.jpg'
import ModaleReyclage from './ModaleRecyclage'

export default function ItemsRecyclage({recyclage, toggle, research, setChange}) {

  const state = useContext(GlobalState)
  const isAdmin = state.userApi.isAdmin

  const dispatch = useDispatch()
  const onDelete = () =>{
    if(window.confirm("ete vous sur de vouloir supprimer ce produit")){
      dispatch(deletePme(recyclage._id))
      window.location.href = '/'
      axios.post(`/api/destroy`, {public_id: recyclage?.images?.public_id})
    }
  }
  return (
<>
<div  class={`produ col-sm ${research ? '' :  !toggle && `col-md-3 col-lg-3`}} mb-5`}>
<div class="card">
  <img class="card-img-top rounded w-100"  height="200px"  src={recyclage?.images?.url} alt="Card image cap"/>
  <div class="card-body">
  <aside>
        <div className='d-flex justify-content-space-between'>
         <h2 className='h5'>{recyclage?.pseudo}</h2>
         <h2 className="pme-commune">{recyclage.commune}</h2>
        </div>

         <h2 className='activite'>Recyclage</h2>
         <button type="button" class="rounded modale" data-toggle="modal"  data-target={`#${recyclage?.pseudo}`}>
Plus de details
</button>


 </aside> 

 {
  isAdmin === 1 && <div className='justify-space-between mt-5'>
    <p onClick={()=> onDelete()} className='btn btn-primary'>delete</p>
  {/* <Link to={`/createPME/${recyclage._id}`} onClick={()=> setChange(true)}> 
   <p  style={{position: 'absolute', left: '100px'}} className='btn btn-info mr-5'>update</p></Link> */}
  </div>
}
  </div>

</div>
</div>

<ModaleReyclage recyclage={recyclage}/>
</>
  )
}
