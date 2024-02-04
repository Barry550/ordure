import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { GlobalState } from '../../global/GlobalState'
import { deleteTroc, historyTrocs, trocs } from '../../redux/actions/AbonneAction'
import image1 from './douze-l.jpg'

export default function ItemsArticles({t, setChange}) {

  const {abonnes} = useSelector(state => state)
  const [article, setArticle] = useState([])
  const state = useContext(GlobalState)
  const {token} = useContext(GlobalState)
  const isLogged = state.userApi.isLogged
  const isAdmin = state.userApi.isAdmin
  const user = state.userApi.user
  const params = useParams()
  const dispatch = useDispatch()

  const onDelete = () =>{
    if(window.confirm("ete vous sur de vouloir supprimer ce produit")){
      dispatch(deleteTroc(t._id))
      axios.post(`/api/destroy`, {public_id: t?.images?.public_id})
    }
    // window.location.href = '/'
  }

  useEffect(()=>{
    if(params){
      abonnes?.users?.map(abonne => {
        if(abonne._id === params.id) {
          setArticle(abonne)
          console.log("ppp: ", abonne);
        }
      })
    }
    
  },[params, abonnes, article])
  
  console.log(article);

  const redirect = async () =>{
    if(!isLogged){
     alert("Veuillez vous connectez ou enregistez vous pour vous abonné a cette PME")
      return    window.location.href = `connexion`
    } 

    window.location.href = `/history`
    alert('votre choix a ete valider avec success')
    dispatch(historyTrocs(token, article?.pseudo, article?.email, article?.tel, article?.quartier, article?.commune,t?.weight, t?.images))
  await dispatch(trocs(article?._id, t?.images, user?.pseudo, t?.weight, user?.email , user?.tel, user?.quartier, user?.commune, user?._id))
    
  }
  return (
    <section className="produ col-sm col-md-3 mb-3">
     <div className="card">
        <img className='card-img-top rounded w-100' height="270px"  src={t?.images?.url}/>
     <div className="card-body">
    <aside>
        <div className='article-info d-inline-flex'>
        <p style={{textAlign: 'justify'}} className='article-nom'>{t.desc}</p>
        </div>
        <div className='d-flex justify-content-between'>
      {
        isAdmin === 0 &&   <div onClick={()=> redirect()} className="btn btn-success">choisir</div>
      }
   
        <div className='h4'>{t.weight} kg</div>
  
        </div>
        {
  isAdmin === 1 && <div className='justify-space-between mt-5'>
    <p onClick={()=> onDelete()} className=' text-dark btn btn-primary'>delete</p>
  <Link style={{width: '30px'}} to={`/createArticle/${t._id}`} onClick={()=> setChange(true)}> 
   <p  style={{left: '100px'}} className='btn btn-info mr-5'>update</p></Link>
  </div>
}
    </aside>
    </div>
        </div>
</section>

  )
}
