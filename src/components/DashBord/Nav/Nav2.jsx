import React from 'react'

export default function Nav2() {
  return (
    <div id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">Principal</div>
                        <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Tableau de bord
                        </a>
                        <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-users"></i></div>
                            Abonnés
                        </a>
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                            data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-dollar-sign"></i></div>
                            Details de paiement
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="#">Paiement effectué</a>
                                <a className="nav-link" href="#">Paiement reçu</a>
                            </nav>
                        </div>

                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                            data-bs-target="#collapseLayouts2" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-list"></i></div>
                            Rapports
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseLayouts2" aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="#">
                                    <div className="sb-nav-link-icon"><i className="fas fa-users"></i></div> Clients
                                </a>
                                <a className="nav-link" href="#">
                                    <div className="sb-nav-link-icon"><i className="fas fa-location-dot"></i></div> Zones
                                </a>
                                <a className="nav-link" href="#">
                                    <div className="sb-nav-link-icon"><i className="fas fa-truck"></i></div> services
                                </a>
                            </nav>
                        </div>
                        <div className="sb-sidenav-menu-heading">Sécondaires</div>
                        <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-bell"></i></div>
                            Notifications
                        </a>
                        <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-envelope-open"></i></div>
                            Contactez-nous
                        </a>

                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Connecté en tant que :</div>
                    Administrateur
                </div>
            </nav>
    </div>
  )
}
