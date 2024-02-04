import React, { useContext } from 'react'
import { GlobalState } from '../global/GlobalState'
import PaymentJour from './PaymentJour'

export default function ModalHistoryJour({setTjour}) {

  return (
    <div class="modal fade" id="example" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div style={{width: "900px", right: "90px"}}  class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Historique des Abonnement pour une journée</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
         <PaymentJour setTjour={setTjour}/> 
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
