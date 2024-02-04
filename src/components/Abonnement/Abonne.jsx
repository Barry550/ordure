import React, { useState, useEffect, useContext } from "react";
import "./Abonnement.css";
// import {Link, useParams} from 'react-router-dom'
// import Menu from '../Header/Menu'
// import {useDispatch, useSelector} from 'react-redux'
// import axios from 'axios'
import PayPalBtn from "../../PaypalBtn";
// import { abonneToi, addCart } from '../redux/actions/AbonneAction'
import Footer from "../Footer/Footer";
import { GlobalState } from "../global/GlobalState";

export default function Abonnement() {
  //   const { token } = useContext(GlobalState);
  //   const state = useContext(GlobalState);

  const [entite, setEntite] = useState([
    {
      ets: "Maisons",
      total: 35000,
      des: "Fréquence de service: ",
      fre: "3 fois /semaine",
      tel: "620 00 00 00",
    },

    {
      ets: "Entreprises",
      total: 100000,
      des: "Fréquence de service: ",
      fre: "Jours ouvrables",
      tel: "620 00 00 00",
    },

    {
      ets: "Restaurants",
      total: 150000,
      des: "Fréquence de service: ",
      fre: "Tous les jours",
      tel: "620 00 00 00",
    },
  ]);

  const [jour, setJour] = useState([
    {
      ets: "Mariage",
      total: 25000,
      des: "Fréquence de service: ",
      fre: "8h à 20h",
      tel: "620 00 00 00",
    },

    {
      ets: "Baptême",
      total: 35000,
      des: "Fréquence de service: ",
      fre: "8h à 20h",
      tel: "620 00 00 00",
    },

    {
      ets: "Concert",
      total: 300000,
      des: "Fréquence de service: ",
      fre: "8h à 20h",
      tel: "620 00 00 00",
    },
  ]);

  const transSuccess = async () => {
    alert("Abonner vous dabord a une PME");
    window.location = "/pme";
  };

  return (
    <div className="abonnement-conteneur">
      <hr />

      <h1 className="abonnement-titre">
        {" "}
        Un abonnement à la hauteur de vos moyens
      </h1>
      <div className="conteneur2-abonnement  d-inline-flex">
        <div className="blocs-service">
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="abonnement-tarif display-4">Prix des services</h1>
          </div>

          <div className="blocs1 card-deck mb-3 text-center ">
            <p className="p1 text-center lead">
              Nous vous proposons de vous débarrasser de vos ordures en toute
              sécurité en souscrivant à nos services mensuels
            </p>

            {entite.map((ent) => (
              <div className="bloc-1 card mb-4 shadow-sm d-inline-flex ms-5">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">{ent.ets}</h4>
                </div>
                <div className="card-body">
                  <h1 className="prix card-title pricing-card-title">
                    {ent.total} FG <small className="text-muted">/ mois</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>{ent.des}</li>
                    <li>{ent.fre}</li>
                    <li>Tel: {ent.tel}</li>
                  </ul>
                  <button
                    onClick={() => transSuccess()}
                    type="button"
                    className="btn btn-lg btn-block btn-success"
                  >
                    Souscrire <i class="lab la-paypal"></i>
                  </button>
                  {/*         
                <PayPalBtn
                    transSuccess={transSuccess}
                    total={ent.total}
                /> */}
                </div>
              </div>
            ))}
          </div>

          <div className="blocs-2 card-deck mb-3 text-center ">
            <p className="p2 lead">
              Nous vous proposons aussi des prestations de service journalière
              pour des cas de cérémonies
            </p>

            {jour.map((j) => (
              <div className="bloc-4 card mb-4 shadow-sm d-inline-flex ms-5">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">{j.ets}</h4>
                </div>
                <div className="card-body">
                  <h1 className="prix card-title pricing-card-title">
                    {j.total}FG <small className="text-muted">/ jour</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>{j.des}</li>
                    <li>{j.fre}</li>
                    <li>Tel: {j.tel}</li>
                  </ul>
                  <button
                    onClick={() => transSuccess()}
                    type="button"
                    className="btn btn-lg btn-block btn-success"
                  >
                    Souscrire <i class="lab la-paypal"></i>
                  </button>
                  <PayPalBtn transSuccess={transSuccess} total={j.total} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
