import React from 'react'
import './ModalVente.css'
export default function ModalVente() {
  return (
    <div className='vente-conteneur'>
        <h1 className='titre-vente text-center bg-success'>Transformer vos ordures en argent</h1>
        <div className="sous-modale-vente">
            <h2>Vendez vos déchets plastiques à <span>1500FG le kilo</span> </h2>
        </div>
        <div className='input-vente d-inline-flex'>
            <div className=' '>
             <label for="">Quantité de déchet</label>
            <input type="text" className="form-control" name="quantité" />
            </div>
             <div className='t'> 
             <label for="">Prix total</label>
             <input type="text" className="form-control" name="quantité" />
             </div>
             
        </div>
        <button className='b-valide'>Valider</button>
        <div className='pied-vente'></div>
    </div>
  )
}
