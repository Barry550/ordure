import React from 'react'
import image1 from './image1.jpg'
import './modaleRecy.css'

export default function ModaleRecy() {
  return (
    <div className='recy-conteneur'>
  
        <h1 className='titre-recy'>Details pme</h1>
        <div className="sous-modale d-inline-flex">
            <div className='recy-image'>
                <img src={image1} />
            </div>
            <div className="recy-texte">
                <h1>Sodia Plast</h1>
                <h2>Recyclage</h2>
                <p><span>Ouvrable 7jours /7</span></p>
                <p><span>Horaire de travail:   </span>08h à 17h30</p>
                <p><span>Adresse:   </span>Belle vue, C/Dixinn</p>
                <p><span>Email:   </span>sodia@gmail.com</p>
                <div className='echange'>
                    <p>Veuillez choisir un moyen d'échange:</p>
                    <div className="bouton-radios d-inline-flex">
                <div className='b_radio1'>
                    <input  type="radio" name='radio' id='radio1' checked />
                    <label  for='radio1'>Ventes</label>
                </div>
                <div className='b_radio2'>
                <input  type="radio" name='radio' id='radio2'/>
                    <label  for='radio2'>Trocs</label>
                </div>
                </div>
                </div>
                
                <button className='recy-button'>Suivant</button>
              
            </div>
        </div>
        <div className="pied-modaleRecy"></div>

</div>
  )
}
