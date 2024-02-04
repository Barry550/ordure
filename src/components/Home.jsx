import React, { useState } from 'react'
import Info from './Info/Info';
import './../index.css'
import Footer from './Footer/Footer';
import Filter from './Filter/Filter';
import Etapes from './Etapes/Etapes'
import Communes from './Communes/Communes';
import Header from './Header/Header';
import PmeRamassage from './Pme/PmeRamassage';
import PmeRecyclage from './Pme/PmeRecyclage';
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';

export default function Home({filtering, filtere, abonnes}) {

  const [pme, setPme] = useState('')
  // const {abonnes} = useSelector(state => state)
  const [filter, setFilter] = useState(false)
  const [toggle , setToggle] = useState(false)
  const [commune, setCommune] = useState()
  const [loading, setLoading] = useState(false)

  // const {abonnes}

  console.log(abonnes['ratoma']);


  // if(loading) return <div>
  //  <div style={{marginLeft: '770px', marginTop: '350px'}}>
  //       <ReactLoading type='spin'  color='black' height={130} width={130} />
  //   </div>
  // </div>

  return (
<>
<div className='container-principal'>
      <Header/>
      <Filter pme={pme} setPme={setPme} setToggle={setToggle} setCommune={setCommune}/>
      {
        !toggle ? <>
    
    <Info/>
        <Etapes/>
      <Communes/> 
  
        </> : <>

      {
        pme === "ramassage" ? 
         <PmeRamassage 
         commune={commune} toggle={toggle} data={filtering ? filter : abonnes?.users}/> :
        pme === "recyclage" ? 
        <PmeRecyclage 
         commune={commune} toggle={toggle} data={filtering ? filter : abonnes?.users}/> : ''
       }

        <Info/>
        <Etapes/>
      <Communes/>
        
        </>
      }
    
   
      <Footer/>
    </div>
    {/* {
      abonnes?.users?.length === 0 &&  <div style={{marginLeft: '770px', marginTop: '350px'}}>
      <ReactLoading type='spin'  color='black' height={130} width={130} />
  </div>
    } */}
</>
  )
}
