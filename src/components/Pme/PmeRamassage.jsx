import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';
import ItemsRamassage from './ItemsRamassage'


export default function PmeRamassage({data, toggle, commune, research, setChange}) {

  const [taille, setTaille] = useState()

  const {abonnes} = useSelector(state => state)
  const [loading, setLoading] = useState(false)

  console.log(abonnes?.users?.length);

  if(loading) return <div>
  <div style={{marginLeft: '770px', marginTop: '350px'}}>
       <ReactLoading type='spin'  color='black' height={130} width={130} />
   </div>
 </div>


  return (
    <div style={{width: '100%', backgroundColor: '#f6f6f6'}}>
  
  {
     !toggle &&  <div className="separateur-2 ">
     <h1>Entreprises de ramassages</h1>
     <hr/>
 </div>
   }
  
     
   <div className={toggle && 'container'}>
   <div className="row d-flex  contenu-3 d-inline-flex">

    {/* {

       <div style={{marginLeft: '540px'}}>
          <ReactLoading type='spin'  color='black' height={130} width={130} />
      </div>
      

    } */}
   {
    <>
     {
      !toggle ?  <>
       {
       data?.map(ramassage =>
        ramassage?.role  === 3 && 
        <ItemsRamassage setChange={setChange} ramassage={ramassage} toggle={toggle} research={research}/>
     )
     }
      </>
      :
    
    <>
    
    {
       data?.map(ramassage =>
        ramassage?.commune  === commune &&  ramassage?.role  === 3 && 
         <ItemsRamassage setChange={setChange}
         ramassage={ramassage} toggle={toggle}/>
     )
     }</>
    }
    </>


   }





     </div>
   </div>

    </div>
  )
}
