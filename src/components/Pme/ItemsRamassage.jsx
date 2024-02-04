import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GlobalState } from "../global/GlobalState";
import { deletePme } from "../redux/actions/AbonneAction";
import image1 from "./image1.jpg";
import Modale from "./Modale";
import PmeRamassage from "./PmeRamassage";

export default function ItemsRamassage({
  ramassage,
  toggle,
  research,
  setChange,
}) {
  const [text, setText] = useState("Plus de details");

  const { cart } = useSelector((state) => state);
  const state = useContext(GlobalState);
  const isAdmin = state.userApi.isAdmin;

  console.log(cart);
  const dispatch = useDispatch();

  const onDelete = () => {
    if (window.confirm("ete vous sur de vouloir supprimer ce produit")) {
      dispatch(deletePme(ramassage._id));
      window.location.href = "/";
      axios.post(`/api/destroy`, { public_id: ramassage?.images?.public_id });
    }
  };
  useEffect(() => {
    cart?.map((c) => {
      if (c.id === ramassage._id) {
        setText("Abonne");
      }
    });
  }, [cart]);

  return (
    <>
      <div
        class={`produ col-sm  ${
          research ? "" : !toggle && `col-md-3 col-lg-3`
        }} mb-5`}
      >
        <div class="card">
          <img
            class="card-img-top rounded w-100"
            height="200px"
            src={ramassage?.images?.url}
            alt="Card image cap"
          />
          <div class="card-body">
            <aside>
              <div className="d-flex justify-content-space-between">
                <h2 className="h5">{ramassage?.pseudo}</h2>
                <h2 className="pme-commune">{ramassage.commune}</h2>
              </div>

              <h2 style={{ width: "105px" }} className="activite">
                Ramassage
              </h2>
              <button
                type="button"
                class="rounded modale"
                data-toggle={text === "Abonne" ? "" : "modal"}
                data-target={`#${ramassage?.pseudo}`}
              >
                {text}
              </button>
            </aside>
            {isAdmin === 1 && (
              <div className="justify-space-between mt-5">
                <p onClick={() => onDelete()} className="btn btn-primary">
                  delete
                </p>
                {/* <Link to={`/createPME/${ramassage._id}`} onClick={()=> setChange(true)}> 
   <p  style={{position: 'absolute', left: '100px'}} className='btn btn-info mr-5'>update</p></Link> */}
              </div>
            )}
          </div>
        </div>
      </div>
      <Modale ramassage={ramassage} />
    </>
  );
}
