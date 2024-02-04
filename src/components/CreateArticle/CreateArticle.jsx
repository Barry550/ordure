import React,{useContext, useEffect, useState} from 'react'
import axios from 'axios'
import '../CreatePME/createPME.css'
import ItemsRecyclage from '../Pme/ItemsRecyclage'
import { useDispatch, useSelector } from 'react-redux'
import { createPme, createTroc, getAbonnes, get_Object_Troc, updatePme, updateTroc } from '../redux/actions/AbonneAction'
import { useHistory, useParams } from 'react-router-dom'
import { GlobalState } from '../global/GlobalState'
import ReactLoading from 'react-loading';

export default function CreatePME() {

  const state = useContext(GlobalState)
  const isAdmin = state.userApi.isAdmin
  const user = state.userApi.user

  const {trocsObject} = useSelector(state => state)

  const [loading, setLoading] = useState(false)
  const [onEdit, setOnEdit] = useState(false)
  const [trocs, setTrocs] = useState()
  const dispatch = useDispatch()
  const history = useHistory()
  const params = useParams()

    const [items, setItems] = useState({
       desc: '',
       weight: '',
       images: ''
      })

      useEffect(()=>{
        if(params.id){
          console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhh", params.id);
          setOnEdit(true)
            trocsObject?.map(troc => {
            if(troc._id === params.id){
              setTrocs(troc)
              setItems({
                desc: troc.desc,
                weight: troc.weight,
                images: troc.images,
              })
            }
          })
        }else{
          setOnEdit(false)
          // setProduct(initState)
          setItems({...items, images:false})
        }
      },[params.id, trocsObject, trocs])

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
            dispatch(updateTroc(items, trocs._id))
          }else{
            alert('cree avec success')
            await dispatch(createTroc(items)).then(dispatch(get_Object_Troc()))
            // window.location.href = '/'
          }

 
     window.location.href = '/articles'
         
        } catch (err) {
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
  <div  className="container mt-5">

  <div className="row">
    <div className="col-sm create_product">
        <div className="upload">
        <input type="file" name="file" id="file_up" onChange={handleUpload}/>
     {
       loading ? <div id="file_img"> 
       <div style={{marginLeft: '150px', marginTop: '150px'}}>
        <ReactLoading type='spin'  color='black' height={130} width={130} />
    </div>
     </div>  : 
       <div id="file_img" style={styleUpload}>
       <img src={items.images ? items.images.url : ''} alt=""/>
       <span onClick={handleDestroy} style={{position: "absolute", top: "70px", fontSize: "30px", left: "395px", cursor: "pointer"}} class="badge croix badge-secondaryr">X</span>
     </div>
     }
        </div>
      </div>

<form  className='col-sm p-5' onSubmit={(e)=> submit(e)}>


<div class="form-group">
   <label for="inputAddress">description</label>
   <textarea cols="100"  required defaultValue={items.desc} onChange={(e)=>setItems({...items, desc: e.target.value})} type="text" class="form-control" id="inputAddress" placeholder=""/>
   </div>

  <div className="form-group w-25 mb-3">
     <label for="first_name">Quantité</label>
     <input required onChange={(e)=> setItems({...items, weight: e.target.value})} value={items.weight} type="number" className="form-control" id="first_name" name="nom" />
  </div> 




    <button type="submit" class="btn btn-primary">{onEdit ? "Mise à jour" : "Crée"}</button>
  </form>
    </div>

  
  </div>
  )
}
