import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalState } from '../../global/GlobalState';

export default function NavRecy({setFiltering, filter}) {

    const state = useContext(GlobalState)
    const uid = state.userApi.uid
  return (
    <div> <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    
    <a className="navbar-brand ps-3" href="index.html">Gestion-Ordure</a>
   
    <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i
            className="fas fa-bars"></i></button>
    
    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        {/* <div className="input-group">
            <input 
                onChange={(e)=>{
                    console.log(e.target.value);
                     setFiltering(e.target.value.length !== 0)
                     filter(e.target.value)
                  }}
            className="form-control" type="text" placeholder="Recherche..." aria-label="Recherche ..."
                aria-describedby="btnNavbarSearch" />
            <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i
                    className="fas fa-search"></i></button>
        </div> */}
    </form>

    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">
            <Link to={`/createPME/${uid}`}  className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false"><i className="fas h3 fa-user fa-fw"></i></Link>
        </li>
    </ul>
</nav></div>
  )
}
