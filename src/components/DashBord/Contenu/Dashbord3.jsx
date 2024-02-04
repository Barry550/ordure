import React, { useContext, useState } from 'react'
import { GlobalState } from '../../global/GlobalState'
import ModalHistoryMensuel from '../ModalHistoryMensuel'

export default function Dashbord3() {

    const state = useContext(GlobalState)
    const [tmois, setTmois] = useState([])
    const user = state.userApi.user
  return (
   <>
    <div className="col-xl-4 col-sm-6 col-12">
    <div className="card shadow border-0">
        <div className="card-body">
            <div className="row">
                <div className="col"> <span
                        className="h6 font-semibold text-muted text-sm d-block mb-2">Historiques</span> <span className="h3 font-bold mb-0">{tmois?.length === 0 ? "0" : tmois?.length}</span> </div>
                <div className="col-auto">
                    <div className="icon icon-shape bg-info text-white text-lg rounded-circle"> <i
                            className="bi bi-clock-history"></i> </div>
                </div>
            </div>
            <div className="mt-2 mb-0 text-sm">
                 {/* <span
                    className="badge badge-pill bg-soft-danger text-danger me-2"> <i
                        className="bi bi-arrow-down me-1"></i>-5% </span> */}
                         <span
                    className="text-nowrap text-xs text-muted">Historique du payement des Abonnements mensuels</span> </div>
        </div>
        <div className="card-footer d-flex align-items-center justify-content-between text-dark">
           
        <button type="button" class="text-dark" data-toggle="modal" data-target="#exampleModal">
        <a className="text-dark" href="#">Voir les détails</a>
    </button>
            <div className="small text-dark"><i className="fas fa-angle-right"></i></div>
        </div>
    </div>
</div>
    <ModalHistoryMensuel setTmois={setTmois} tmois={tmois}/>
   </>
  )
}
