import React from 'react'

export default function DashbordRecyclage3({user}){

    
  return (
    <div className="col-xl-3 col-sm-6 col-12">
    <div className="card shadow border-0">
        <div className="card-body">
            <div className="row">
                <div className="col"> <span
                        className="h6 font-semibold text-muted text-sm d-block mb-2">Ventes</span> <span className="h3 font-bold mb-0">{user?.ventes?.length === 0 ? "0" : user?.ventes?.length}</span> </div>
                <div className="col-auto">
                    <div className="icon icon-shape bg-info text-white text-lg rounded-circle"> <i
                            className="bi bi-clock-history"></i> </div>
                </div>
            </div>
            <div className="mt-2 mb-0 text-sm"> 
      
                        <span
                    className="text-nowrap text-xs text-muted">Listes des ventes</span> </div>
        </div>
        {/* <div className="card-footer d-flex align-items-center justify-content-between text-dark">
            <a className="small text-dark stretched-link" href="#">Voir les détails</a>
            <div className="small text-dark"><i className="fas fa-angle-right"></i></div>
        </div> */}
    </div>
</div>
  )
}
