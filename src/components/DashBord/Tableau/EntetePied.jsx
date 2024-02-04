import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GlobalState } from '../../global/GlobalState'
import Corps from './Corps/Corps'

export default function EntetePied({data}) {

   const state = useContext(GlobalState)
   const user = state.userApi.user

   const [ramassage, setRamassage] = useState([])

   console.log(user);
   const {abonnes} = useSelector(state => state)

   useEffect(()=>{
      abonnes?.users?.map(abonne => {
         user?.abonnes?.map(use => {
            if(abonne._id === use){
               setRamassage([abonne])
            }
         })
      })
   },[abonnes, user])

   console.log(ramassage);

  return (
         <table style={{width: "1000px", fontSize: '25px', boxShadow: '0 15px 15px'}}  className='table table-striped'>
                             <thead className='thead-dark'>
                                     <tr>
                                        <th scope='col'>Nom </th>
                                        <th scope='col'>Email</th>
                                        <th scope='col'>Quartier</th>
                                        <th scope='col'>Commune</th>
                                        <th style={{width: '300px'}} scope='col'>Téléphone</th>
                                        {/* <th scope='col'>Abonnés</th> */}
                                        {/* <th scope='col'>Abonnés</th> */}
                                     </tr>
                                 </thead>
                                 {
                                  
                                    data?.map(abonne => <Corps abonne={abonne} ramassage="ramassage" recyclage="recyclage"/>   )
                                 }
                              
                        </table>
                     
  )
}
