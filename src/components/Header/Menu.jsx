import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './menu.css'
import logo_dechet3 from './logo_dechet3.jpg'
import { GlobalState } from '../global/GlobalState'
import { getAbonnes, getUsersRequest } from '../redux/actions/AbonneAction'
import { useDispatch } from 'react-redux'
// import '../../../public/Maax'

export default function Menu({filter,setFiltering, setResearch, search, setSearch, setChange}) {

    const state = useContext(GlobalState)

    const dispatch = useDispatch()

    const isLogged = state.userApi.isLogged
    const isAdmin = state.userApi.isAdmin

    console.log(isLogged);

    const deconnect = () =>{
        localStorage.removeItem('fristLogin')
        localStorage.removeItem('id')
        window.location = '/'
    }


//   useEffect(()=>{
//     const getUser = async () =>{
//       const res = await getUsersRequest(search)
//       console.log("jjjjjjjjjjjjjj", res);
  
//     }
//     getUser()
//     dispatch(getAbonnes(search))
//   },[search])

    
  return (
    <div className='header-1'>
     <nav>
         <div className="menu d-inline-flex justify-content-around pt-3">
         <div className="nom">
            <ul style={{listStyle: 'none'}}>
                <li>
                     <Link to="/"><img src={logo_dechet3}/>Fenteingny</Link>
                </li>
            </ul>
        </div>
        <div className="onglet">
        <ul style={{listStyle: 'none'}} className='d-flex justify-content-end h4 '>
      {
          isAdmin === 0 &&   
         <li>

<div style={{
    borderTopRightRadius: '18px',
    borderBottomRightRadius: '18px'
}} class="col-sm-12  mx-10 mr-5" >
      <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
      <div class="input-group">
      <select value={search} onChange={(e)=> setSearch(e.target.value)} className='combo-select'>
                    <option value="Toutes les PME">Toutes le PME</option>
                    <option value="Ramassages">Ramassages</option>
                    <option value="Recyclages">Recyclages</option>
                </select>
        <input
         onChange={(e)=>{
            console.log(e.target.value);
            // setSearch(e.target.value.toLocaleLowerCase())
             setFiltering(e.target.value.length !== 0)
             filter(e.target.value)
             setResearch(e.target.value.length !== 0 && true)
          }}
        type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder=""/>
      </div>
    </div>
         </li>
      }

{
          isAdmin === 1 &&   
         <li>

<div style={{
    borderTopRightRadius: '18px',
    borderBottomRightRadius: '18px'
}} class="col-sm-12  mx-10 mr-5" >
      <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
      <div class="input-group">
      <select value={search} onChange={(e)=> setSearch(e.target.value)} className='combo-select'>
                    <option value="Toutes les PME">Toutes le PME</option>
                    <option value="Ramassages">Ramassages</option>
                    <option value="Recyclages">Recyclages</option>
                </select>
        <input
         onChange={(e)=>{
            console.log(e.target.value);
            // setSearch(e.target.value.toLocaleLowerCase())
             setFiltering(e.target.value.length !== 0)
             filter(e.target.value)
             setResearch(e.target.value.length !== 0 && true)
          }}
        type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder=""/>
      </div>
    </div>
         </li>
      }
                
    {
        isAdmin === 0  &&  <li>
                 <Link to="/pme">PME</Link>
             </li>

    }

{
        isAdmin === 1  &&  <li>
                 <Link to="/">PME</Link>
             </li>

    }

{
        isAdmin === 1  &&  <li>
                 <Link onClick={()=> setChange(false)} to="/createPME">crée une PME</Link>
             </li>

    }


{
        isAdmin === 3  &&  <li>
                 <Link to="/createPME"></Link>
             </li>

    }

{
        isAdmin === 2  &&  <li>
                 <Link to="/createPME"></Link>
             </li>

    }
         
                {/* <li>
                    <Link to="/abonnement">Abonnement</Link>
                </li> */}

            {
                isAdmin === 0  &&   <li>
                    <Link to="/abonne">Abonnement</Link>
                </li>


            }
{
    isLogged && isAdmin === 0 &&
  <>
    {
   isAdmin === 0  && <li>
        <Link to="/pmeliste">Mes PME</Link>
    </li>
    }
    <li>
        <Link to="/history">Historique</Link>
    </li>

  </>
    
}

{
        isAdmin === 1 && <li>
                    <Link  to="/articles">articles</Link>
                    <Link onClick={()=> setChange(false)} to="/createArticle">crée un article</Link>
        </li>
    }

{
    !isLogged ? 
    <li>
        <Link to="/connexion">Se connecter</Link>
    </li> :
    
    <li>
        <Link  onClick={()=> deconnect()}>Deconnexion</Link>
    </li>
}

                
            </ul>
        </div>
             

         </div>
   
     </nav>
     </div>
  )
}


  {/* <div className="barre">
              <form action="" className="formulaire-search d-inline-flex">

                <select className='combo-select'>
                    <option value="ramassage">Ramassages</option>
                    <option value="recyclage">Recyclages</option>
                </select>

              <input  className='input-tri form-control'  type="search" name="" id="" 
          onChange={(e)=>{
           console.log(e.target.value);
           // setSearch(e.target.value.toLocaleLowerCase())
            setFiltering(e.target.value.length !== 0)
            filter(e.target.value)
            setResearch(e.target.value.length !== 0 && true)
         }}
/>
              </form>
          </div> */}