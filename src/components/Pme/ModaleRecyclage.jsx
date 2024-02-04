import React, { useState } from 'react'
import  './modale.css'
import image1 from './images/image_recyclage/recyclage5.jpg'
import ModalVentes from './ModalVentes'
import {Link} from 'react-router-dom'

export default function ModaleReyclage({recyclage}) {

  const redirect = () => window.location.href = `/articles/${recyclage._id}`
  const nothing = () => alert("Veuillez svp choisir un moyen d'échange")

  const [check, setCheck] = useState({
    ventes: '',
    trocs: ''
  })

  return (
<div class="modal fade" id={recyclage?.pseudo} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div style={{width: "700px", right: "90px", top: '70px'}} class="modal-content ">
      <div style={{margin: '0'}} class="modal-header bg-success">
        <h1 style={{margin: '0', padding: '0'}} class="text-white" id="exampleModalLabel">DETAILS PME</h1>

      </div>
      <div class="d-inline-flex modal-body w-100">
            <div className='modale-image'>
                <img src={recyclage?.images?.url} />
            </div>
            <div className="modale-texte">
                <h1>{recyclage?.pseudo}</h1>
                <h2>Recyclage</h2>
                <p><span>Ouvrable {recyclage?.open}jours /7</span></p>
            <p><span>Horaire de travail:   </span>{recyclage?.heur_debut_h}h à {recyclage?.heur_fin_h}</p>
                <p><span>Quartier:   </span>{recyclage?.quartier}</p>
                <p><span>Commune:   </span>{recyclage?.commune}</p>
                <p><span>Email:   </span>{recyclage?.email}</p>
                <p><span>Téléphone:   </span>{recyclage?.tel}</p>
            </div>
      </div>
      <h3 className='text-center mb-3'>Veuillez choisir un moyen d'échange:</h3>
    <form className="d-flex justify-content-center">
        <div class="form-check form-check-inline">
            <input onChange={(e)=> setCheck({...check, ventes: e.target.value})} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="ventes"/>
            <label class="form-check-label text-success" for="inlineRadio1">VENTES</label>
        </div>
        <div class="form-check form-check-inline">
            <input onChange={(e)=> setCheck({...check, trocs: e.target.value})} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="trocs"/>
            <label class="form-check-label text-success" for="inlineRadio2">TROCS</label>
        </div>
    </form>

      <div class="modal-footer">
        <p type="button" class="btn btn-secondary" data-dismiss="modal">Close</p>

        <p onClick={()=> check.trocs === '' && check.ventes === '' ? nothing() : check.trocs === "trocs" ? redirect() : ''} type="button"  
        class={`${check.ventes === "ventes" ? 'btn btn-success rounded modale' : 'btn btn-success around'} `}
      data-target={`${check.ventes === 'ventes' ? `#${recyclage?.ref}` : ''}`}  data-toggle={`${check.ventes === 'ventes' ? 'modal' : ''}`}>Suivant</p>

      </div>
  <ModalVentes recyclage={recyclage}/>
    </div>
  </div>
</div>


  )
}