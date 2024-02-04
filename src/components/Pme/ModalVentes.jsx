import React, { useEffect, useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { GlobalState } from '../global/GlobalState'
import { historyVentes, ventes } from '../redux/actions/AbonneAction'

export default function ModalVentes({recyclage}) {

  const dispatch = useDispatch()
  const [qty, setQty] = useState(1)
  const [price, setPrice] = useState()
  const state = useContext(GlobalState)
  const isLogged = state.userApi.isLogged
  const user = state.userApi.user
  const {token} = useContext(GlobalState)

  // console.log(user);

  // const [data, setData] = useState({
  //   name: user?.pseudo,
  //   email: user?.email,
  //   tel: user?.tel,
  //   quartier: user?.quartier,
  //   commune: user?.commune,
  // })
  useEffect(()=>{
    setPrice(qty * 1500)
  },[qty, price])

  const redirect = async () =>{
    if(!isLogged){
     alert("Veuillez vous connectez ou enregistez vous pour vous abonné a cette PME")
      return  window.location.href = `connexion`
    } 
    
    alert("Votre opration a ete un success")

    console.log("qqqqqqqqq", typeof qty);

    window.location = '/history'
    
    dispatch(historyVentes(token, recyclage?.pseudo, recyclage?.email, recyclage?.tel,recyclage?.quartier, recyclage?.commune, price, qty ))
    
    await dispatch(ventes(recyclage._id, user?.pseudo, user?.email, user?.tel, user?.quartier, user?.commune, price, qty, user?._id ))
 
  }

  return (

    <div class="modal fade" id={recyclage?.ref} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-success  ">
            <h4 class="modal-title text-center text-white" id="exampleModalLabel"> Transformer vos ordures en argent</h4>

          </div>
          <div class="modal-body">
            <h2>Vendez vos déchets plastiques à <span>1500FG le kilo</span> </h2>
          </div>

          <form>
  <div class="row mx-3 my-3">
    <div class="col">
      <input defaultValue="1" type="number" required onChange={(e)=>{
        setQty(e.target.value);
      }} class="form-control" placeholder="Quantité de déchet"/>
    </div>
    <div class="h4 col">
      {price} FG
      {/* <input type="text" class="form-control" placeholder="Prix total"/> */}
    </div>
  </div>
</form>
          <div class="modal-footer">
            <p type="button" class="btn btn-secondary" data-dismiss="modal">Close</p>

            <button style={{position: 'absolute', left: '400px', top: '220px'}} type="button" disabled={price === 0 ? true : false} class="btn btn-success" onClick={()=> redirect()}>Valider</button>
          </div>
        </div>
      </div>
    </div>
  )
}
