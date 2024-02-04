import React, { useState, useEffect, useContext } from 'react' 
import './Abonnement.css'
import {Link, useParams} from 'react-router-dom'
import Menu from '../Header/Menu'
import Footer from '../Footer/Footer'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import PayPalBtn from '../../PaypalBtn'
import { abonneToi, addCart, addPayement } from '../redux/actions/AbonneAction'
import { GlobalState } from '../global/GlobalState'

export default function Abonnement() {

    const {token} = useContext(GlobalState)
    const state = useContext(GlobalState)

    const uid = state.userApi.uid
    const user = state.userApi.user


    const [ramassage, setRamassage] = useState([])
    const params = useParams()

    const dispatch = useDispatch()


    const {abonnes} = useSelector(state => state)
    const [entite, setEntite] = useState([
        {
            ets: 'Maisons',
            total: 35000,
            des: "Fréquence de service: ",
            fre: "3 fois /semaine",
            tel: '620 00 00 00'
        },

        {
            ets: 'Entreprises',
            total: 100000,
            des: "Fréquence de service: ",
            fre: "Jours ouvrables",
            tel: '620 00 00 00'
        },

        {
            ets: 'Restaurants',
            total: 150000,
            des: "Fréquence de service: ",
            fre: "Tous les jours",
            tel: '620 00 00 00'
        },

    ])

    const [jour, setJour] = useState([
        {
            ets: 'Mariage',
            total: 25000,
            des: "Fréquence de service: ",
            fre: "8h à 20h",
            tel: '620 00 00 00'
        },

        {
            ets: 'Baptême',
            total: 35000,
            des: "Fréquence de service: ",
            fre: "8h à 20h",
            tel: '620 00 00 00'
        },

        {
            ets: 'Concert',
            total: 300000,
            des: "Fréquence de service: ",
            fre: "8h à 20h",
            tel: '620 00 00 00'
        },

    ])

    useEffect(()=>{
        if(params){
            abonnes?.users?.map(abonne =>{
                if(abonne._id === params.id){
                    setRamassage(abonne)
                }
            })
        }
    },[abonnes])
   

      const transSuccess = async(payment, total, service) =>{

        const {paymentID} = payment

        console.log(paymentID);
        console.log(total);
        console.log(service);

        console.log(ramassage);

        dispatch(abonneToi(ramassage._id, user))
       await dispatch(addCart(ramassage._id, ramassage?.images,ramassage?.pseudo, ramassage?.email, ramassage?.quartier, ramassage?.commune, ramassage?.tel, service, token))

        // dispatch(addCart(ramassage, service, token))
        dispatch(addPayement(ramassage._id, paymentID, user.pseudo, total, service, user?._id))
    
        alert("felicitation vous êtes désormais abonne a cette PME")

        window.location = '/pmeliste'
    }
    
  return (
    <div className='abonnement-conteneur'>
        <hr />
       
       <h1 className='abonnement-titre'> Un abonnement à la hauteur de vos moyens</h1>
      <div className='conteneur2-abonnement  d-inline-flex'>         
      
    <div className="blocs-service">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="abonnement-tarif display-4">Prix des services</h1>
        </div>
  
        <div className="blocs1 card-deck mb-3 text-center ">
        <p className="p1 text-center lead">
            Nous vous proposons de vous débarrasser de vos ordures en toute sécurité en souscrivant à nos services mensuels
        </p>

        {
            entite.map(ent =>    <div  className="bloc-1 card mb-4 shadow-sm d-inline-flex ms-5">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{ent.ets}</h4>
            </div>
            <div className="card-body">
             <h1 className="prix card-title pricing-card-title">{ent.total} FG <small className="text-muted">/ mois</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                    <li>{ent.des}</li>
                    <li>{ent.fre}</li>
                    <li>Tel: {ent.tel}</li>
                </ul>
        
                <PayPalBtn
                    transSuccess={transSuccess}
                    total={ent.total}
                    service={ent.ets}
                />
                
            </div>
        </div>)
        }
   
        </div>

        <div className="blocs-2 card-deck mb-3 text-center ">
        <p className="p2 lead">
            Nous vous proposons aussi des prestations de service journalière pour des cas de cérémonies
        </p>

      {
          jour.map(j => <div className="bloc-4 card mb-4 shadow-sm d-inline-flex ms-5">
          <div className="card-header">
              <h4 className="my-0 font-weight-normal">{j.ets}</h4>
          </div>
          <div className="card-body">
              <h1 className="prix card-title pricing-card-title">{j.total}FG <small className="text-muted">/ jour</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                  <li>{j.des}</li>
                  <li>{j.fre}</li>
                  <li>Tel: {j.tel}</li>
              </ul>
              {/* <button type="button" className="btn btn-lg btn-block btn-success">Souscrire <i class="lab la-paypal"></i></button> */}
              <PayPalBtn
              transSuccess={transSuccess}
                total={j.total}
                service={j.ets}
              />
          </div>
   </div>)
      }

        </div>
        
    </div>
    </div>
            <Footer/>

    </div>
   
  )
}
