import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import { GlobalState } from "../global/GlobalState";
import ReactLoading from "react-loading";
import "./connexion.css";

export default function Connexion() {
  const history = useHistory();
  const state = useContext(GlobalState);
  const isAdmin = state.userApi.isAdmin;
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    console.log("datatttttttttttt: ", data);
    try {
      // setLoading(true);
      const res = await axios.post(`/user/login`, { ...data });
      // setLoading(false);
      console.log(res);
      localStorage.setItem("fristLogin", true);
      window.location = "/";

      //  isAdmin === 0 ?  history.push('/') :
      //  isAdmin === 2 ? history.push(`/${res.data._id}`)  :
      //  isAdmin === 3 ?  history.push(`/${res.data._id}`)  : ''

      // isAdmin === 0 && history.push('/')

      // isAdmin === 2 && history.push(`/${res.data._id}`)
      // isAdmin === 3 && history.push(`/${res.data._id}`)
    } catch (err) {
      if (err.response.data.msg?.email) {
        alert(err.response.data.msg?.email);
      } else {
        alert(err.response.data.msg?.password);
      }
    }
  };

  return (
    <>
      {/* <Link to="/" className='btn btn-success mt-5' style={{marginLeft: '20px'}}> Fenteingny</Link> */}

      <div className="Formulaire">
        {/* <ReactLoading type='bars'  color='blue' height={30} width={30} />
  <ReactLoading type='cylon'  color='black' height={30} width={30} />
  <ReactLoading type='spin'  color='black' height={30} width={30} />
  <ReactLoading type='spinningBubbles'  color='black' height={30} width={30} />
  <ReactLoading type='spokes'  color='black' height={30} width={30} /> */}

        <form onSubmit={(e) => submit(e)}>
          <h1 className="titre-inscription">Déjà inscrit</h1>
          <div class="form-group mb-3">
            <label for="exampleInputEmail1">Email address</label>
            <input
              required
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-secondary">
              Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre...
            </small>
          </div>
          <div class="form-group mb-3">
            <label for="exampleInputPassword1">Mot de passe </label>
            <input
              required
              value={data.password}
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
              type={toggle ? "text" : "password"}
              className="form-control"
              id="exampleInputPassword1"
            />
            {!toggle ? (
              <i
                onClick={() => setToggle(!toggle)}
                style={{ position: "absolute", left: "1075px", top: "615px" }}
                class="las h2 la-eye"
              ></i>
            ) : (
              <i
                onClick={() => setToggle(!toggle)}
                style={{ position: "absolute", left: "1075px", top: "615px" }}
                class="lar h2 la-eye-slash"
              ></i>
            )}
          </div>
          <button
            type="submit"
            className="button-inscription btn btn-dark mb-4"
          >
            {/* <span style={{ display: "flex", justifyContent: "center" }}>
              <ReactLoading type="spin" color="white" height={30} width={30} />
            </span> */}
            {/* {JSON.stringify({ data })} */}
            Connexion
          </button>
          <h4 className="titre2-inscription ">Vous n'avez pas de compte</h4>
          <Link to="/compte" type="submit" className="button2-inscription btn">
            Inscrivez-vous
          </Link>
        </form>
        {/* <Footer/> */}
      </div>
    </>
  );
}
