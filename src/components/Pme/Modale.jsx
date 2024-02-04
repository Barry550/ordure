import React, { useContext, useEffect, useState } from 'react'
import  './modale.css'
import image1 from './image1.jpg'
import axios from 'axios'
import { GlobalState } from '../global/GlobalState'
import {useDispatch, useSelector} from 'react-redux'
import { abonneToi, addCart, deleteCart, desabonne, getCart, saveCart } from '../redux/actions/AbonneAction'
import { Link } from 'react-router-dom'


export default function Modale({ramassage}) {

  const {token} = useContext(GlobalState)
  const state = useContext(GlobalState)
  const uid = state.userApi.uid
  const user = state.userApi.user
  const isLogged = state.userApi.isLogged
  const isAdmin = state.userApi.isAdmin

  const redirect = () =>{
    if(!isLogged){
     alert("Veuillez vous connectez ou enregistez vous pour vous abonné a cette PME")
      return    window.location.href = `connexion`
    } 
    window.location.href = `/abonnement/${ramassage._id}`
  }

  const dispatch = useDispatch()

  const {cart} = useSelector(state => state)

  const [toggle, setToggle] = useState(true)

  const abonne = async() =>{
    dispatch(addCart(ramassage, token))
    dispatch(getCart(token))
  }

  return (
<div class="modal fade" id={ramassage?.pseudo} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div style={{width: "700px", right: "90px"}} class="modal-content ">
      <div style={{margin: '0'}} class="modal-header bg-success ">
        <h1 style={{margin: '0', padding: '0'}} class="text-white" id="exampleModalLabel">DETAILS PME </h1> <p className='text-info h4'>{!toggle ? 'Vous etes abonne a cette PME' : ''}</p>
      </div>
      <div class="d-inline-flex modal-body w-100">
            <div className='modale-image'>
                <img src={ramassage?.images?.url} />
            </div>
            <div className="modale-texte">
                <h1>{ramassage?.pseudo}</h1>
                <h2 style={{width: '135px'}}>Ramassage</h2>
                <p><span>Ouvrable {ramassage?.open}jours /7</span></p>
                <p><span>Horaire de travail:   </span>{ramassage?.heur_debut_h}h à {ramassage?.heur_fin_h}h</p>
                <p><span>Quartier:   </span>{ramassage?.quartier}</p>
                <p><span>Commune:   </span>{ramassage?.commune}</p>
                <p><span>Email:   </span>{ramassage?.email}</p>
                <p><span>Téléphone:   </span>{ramassage?.tel}</p>
  
            </div>
      
      </div>
      <div class="modal-footer">
        <p type="button"  class="btn btn-secondary" data-dismiss="modal">Close</p>
      
{
  isAdmin === 0 && <Link to={!isLogged ? '/connexion' : `/abonnement/${ramassage._id}`} type="button" onClick={()=> redirect()} class={ 'btn btn-success around'}> { "S'abonner"}</Link> 
}
          {/* <p type="button" onClick={()=> desabonneToi()} class={'btn btn-danger around'}> {'Se desabonne'}</p> */}
        

{/* <p type="button" onClick={()=> abonne()} class={ 'btn btn-success around'}> { "S'abonner"}</p> : */}

        </div>
    </div>
  </div>
</div>


  )
}

