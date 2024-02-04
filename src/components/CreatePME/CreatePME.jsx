import React,{useContext, useEffect, useState} from 'react'
import axios from 'axios'
import './createPME.css'
import ItemsRecyclage from '../Pme/ItemsRecyclage'
import { useDispatch, useSelector } from 'react-redux'
import { createPme, getAbonnes, updatePme } from '../redux/actions/AbonneAction'
import { useHistory, useParams } from 'react-router-dom'
import { GlobalState } from '../global/GlobalState'
import ReactLoading from 'react-loading';

export default function CreatePME() {

  const state = useContext(GlobalState)
  const isAdmin = state.userApi.isAdmin

  const [loading, setLoading] = useState(false)
  const [onEdit, setOnEdit] = useState(false)
  const [abonns, setAbonnes] = useState()
  const dispatch = useDispatch()
  const history = useHistory()
  const params = useParams()
  const {abonnes} = useSelector(state => state)
    const [items, setItems] = useState({
        pseudo: '',
        ref: '',
        email: '@gmail.com',
        password: 'doums6059',
        quartier: 'nongo',
        commune: 'ratoma',
        tel: '620 66 66 66',
        open: '7',
        heur_debut_h: '8',
        heur_debut_m: '00',
        heur_fin_h: '20',
        heur_fin_m: '00',
        images: '',
        role: 3
      })

      useEffect(()=>{
        if(params.id){
          console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhh", params.id);
          setOnEdit(true)
          abonnes?.users?.map(abonne => {
            if(abonne._id === params.id){
              setAbonnes(abonne)
              setItems({
                pseudo: abonne.pseudo,
                ref: abonne.ref,
                email: abonne.email,
                password: abonne.password,
                quartier: abonne.quartier,
                commune: abonne.commune,
                tel: abonne.tel,
                open: abonne.open,
                heur_debut_h: abonne.heur_debut_h,
                heur_debut_m: abonne.heur_debut_m,
                heur_fin_h: abonne.heur_fin_h,
                heur_fin_m: abonne.heur_fin_m,
                images: abonne.images,
              })
            }
          })
        }else{
          setOnEdit(false)
          // setProduct(initState)
          setItems({...items, images:false})
        }
      },[params.id, abonnes, abonns])

      const handleUpload = async (e) =>{
        e.preventDefault()
        try {
          const file = e.target.files[0]
    
          if(!file) return alert("file not exist")
    
          if(file.size > 1024 * 1024)
            return alert("size too large!")
    
          if(file.type !== 'image/jpeg' && file.type !== 'image/png')  
            return alert("file format is incorrect")
    
          let formData = new FormData()
          formData.append('file', file)
    
          setLoading(true)
          const res = await axios.post('/api/upload', formData, {
            headers: {'content-type': 'multipart/form-data'}
          })
    
          setLoading(false)
          setItems({...items, images: res.data});
          // setImages(res.data);
        } catch (err) {
          alert(err.response.data.msg)
        }
      }


  const handleDestroy = async () =>{
    try {
      setLoading(true)
      await axios.post(`/api/destroy`, {public_id: items.images.public_id})
      setLoading(false)
      setItems({...items, images: false});
    } catch (err) {
      alert(err.response.data.msg)
    }
  }

  const styleUpload = {
    display: items.images ? "block" : "none"
  }
    
    
      const submit = async (e) =>{
        e.preventDefault()

        try {      

          if(onEdit){
            // window.location.href = '/'
            dispatch(updatePme(items, abonns._id))
          }else{
            await dispatch(createPme(items)).then(dispatch(getAbonnes()))
          }

          window.location.href = '/'
         
        } catch (err) {
          if(err.response.data.msg.ref){
            alert(err.response.data.msg.ref)
          }
          if(err.response.data.msg.pseudo){
            alert(err.response.data.msg.pseudo)
          }
           if(err.response.data.msg.email){
            alert(err.response.data.msg.email)
          }
          if(err.response.data.msg.password){
            alert(err.response.data.msg.password)
          }
        }
    }

  return (
  <div  className="container">

  <div className="row">
    <div className="col-sm create_product">
        <div className="upload">
        <input type="file" name="file" id="file_up" onChange={handleUpload}/>
     {
       loading ? <div id="file_img"> 
         <div style={{marginLeft: '150px', marginTop: '150px'}}>
          <ReactLoading type='spin'  color='black' height={130} width={130} />
      </div>
       </div> : 
       <div id="file_img" style={styleUpload}>
       <img src={items.images ? items.images.url : ''} alt=""/>
       <span onClick={handleDestroy} style={{position: "absolute", top: "70px", fontSize: "30px", left: "395px", cursor: "pointer"}} class="badge croix badge-secondaryr">X</span>
     </div>
     }
        </div>
      </div>

<form  className='col-sm p-5' onSubmit={(e)=> submit(e)}>
   <div className="form-group mb-3">
     <label for="first_name">Reference</label>
     <input required disabled={isAdmin  === 1 ? false : true}
     onChange={(e)=> setItems({...items, ref: e.target.value})} value={items.ref} type="text" className="form-control" id="first_name" name="nom" />

   </div> 

        <div className="form-group mb-3">
     <label for="first_name">Nom de l'entreprise</label>
     <input required onChange={(e)=> setItems({...items, pseudo: e.target.value})} value={items.pseudo} type="text" className="form-control" id="first_name" name="nom" />
  </div> 

  <div className="form-group mb-3">
     <label for="first_name">Email address</label>
     <input required onChange={(e)=> setItems({...items, email: e.target.value})} value={items.email}  type="email" className="form-control" id="first_name" name="nom" />
  </div> 

  <div className="form-group mb-3">
     <label for="first_name">Password</label>
     <input required  onChange={(e)=> setItems({...items, password: e.target.value})} value={items.password} type="text"className="form-control" id="first_name" name="nom" />
  </div> 

    <div className="form-group mb-3">
     <label for="first_name">Quartier</label>
     <input required onChange={(e)=> setItems({...items, quartier: e.target.value})} value={items.quartier} type="text" className="form-control" id="first_name" name="nom" />
  </div> 

  <div className="form-group mb-3">
     <label for="first_name">Commune</label>
     <input required onChange={(e)=> setItems({...items, commune: e.target.value})} value={items.commune} type="text" className="form-control" id="first_name" name="nom" />
  </div> 

  <div className="form-group mb-3">
     <label for="first_name">Telephone</label>
     <input required onChange={(e)=> setItems({...items, tel: e.target.value})} value={items.tel} type="text" className="form-control" id="first_name" name="nom" />
  </div> 


  <div className="form-group mb-3">
     <label for="first_name">Ouvrabilité</label>
     <input required onChange={(e)=> setItems({...items, open: e.target.value})} value={items.open} placeholder="nombre de jour ouvrable" type="number" className="form-control" id="first_name" name="nom" />
  </div> 

  <div className="form-group mb-3">
     <label for="first_name">Heure Début</label>
     <div className="d-flex">
     <div>  <input required onChange={(e)=> setItems({...items, heur_debut_h: e.target.value})} value={items.heur_debut_h} type="number" placeholder='heure' className="form-control w-50 col-sm-3" id="first_name" name="nom" /></div>
  
     </div>
  </div> 

  <div className="form-group mb-3">
     <label for="first_name">Heure Fin</label>
     <div className="d-flex">
     <div>  <input required onChange={(e)=> setItems({...items, heur_fin_h: e.target.value})} value={items.heur_fin_h} type="number" placeholder='heure' className="form-control w-50 col-sm-3" id="first_name" name="nom" /></div>
   
     </div>
  </div> 

{
  isAdmin === 1 &&     <div className="form-group mb-3">
  <label for="first_name">Choisir la PME</label>
  <div className="d-flex justify-content-center">
     <div class="form-check form-check-inline">
         <input required onChange={(e)=> setItems({...items, role: e.target.value})} value={2} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
         <label class="form-check-label text-success" for="inlineRadio1">2 - RECYCLAGE</label>
     </div>
     <div class="form-check form-check-inline">
         <input required onChange={(e)=> setItems({...items, role: e.target.value})} value={3}  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"/>
         <label class="form-check-label text-success" for="inlineRadio2">3 - RAMASSAGE</label>
     </div>
 </div>
</div> 
}

    <button type="submit" class="btn btn-primary">{onEdit ? "Mise à jour" : "Crée"}</button>
  </form>
    </div>

  
  </div>
  )
}
