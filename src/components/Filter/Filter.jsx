
import React ,{useState} from 'react'
import Communes from '../Communes/Communes'
import PmeRamassage from '../Pme/PmeRamassage'
import './Filter.css'

export default function Filter({setCommune, setToggle, setPme, pme}) {

  const list = ["matoto", "ratoma", "matam","dixinn","kaloum"]

  return (
  <div className="input-0">
      
    <h2>Trouvez la PME la plus proche de vous</h2>
        <div className="input-1">
            <label for="pays">Votre commune</label>

                <select onChange={(e)=>{
                  console.log(e.target.value);
                   
                 if(e.target.value === "Commune"){
               
                  setToggle(false)
                 }else {
                   setToggle(true)
                  setCommune(e.target.value)
                 }
                } } className="custom-select " name="pays" id="pays">
                        <option value="Commune">commune</option>
                        {
                          list.map((com, index) => (<>
                             <option value={com}>{com}</option>
                          </>))
                        }
                     
                        {/* <option value="matoto">Matoto</option>
                        <option value="matam">Matam</option>
                        <option value="dixin">Dixin</option>
                        <option value="kaloum">Kaloum</option> */}
                </select>
        </div>

        <div className="input-2">
        <label for="pays">Service</label><br />
            <select value={pme} onChange={(e)=> {
                 setPme(e.target.value)
            }
              
            } className="custom-select" name="pays" id="pays">
                    <option value="">Choisir la PME</option>
                    <option value="ramassage">Ramassage</option>
                    <option value="recyclage">Recyclage</option>                   
            </select>
        </div>
        <button className="button-rechercher">Rechercher</button>


    </div>
  )
}

