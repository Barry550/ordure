import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { GlobalState } from '../global/GlobalState'
import { deleteCart, desabonne } from '../redux/actions/AbonneAction'

export default function PmeRowListe({c}) {
  const {token} = useContext(GlobalState)
  const state = useContext(GlobalState)

  const uid = state.userApi.uid
  const user = state.userApi.user

  function addDaysToDate(date, days){
    var res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
}

var tmpdate = new Date(user?.updatedAt)


  console.log(c);
    const dispatch = useDispatch()

    const desabonneToi = () =>{
        dispatch(desabonne(c.id, uid))
        dispatch(deleteCart(c.id, token))
    }

  return (

    <tr>
        <td key={c?.id}><img width='90px' height="95px" src={c?.images?.url} alt="logo" /></td>
        <td className="pt-5 text-center h6">{c?.name}</td>
        <td className="pt-5 text-center h6">{c?.email}</td>
        <td className="pt-5 text-center h6">{c?.quartier}</td>
        <td className="pt-5 text-center h6">{c?.service}</td>
        <td className="pt-5 text-center h6">{c?.tel}</td> 
        <td className="pt-5 text-center h6">{new Date(user?.updatedAt).toLocaleDateString()}</td> 
        {
          c?.service === "Mariage" || c?.service === "Baptême" || c?.service === "Concert" ?         
          <td className="pt-5 text-center h6">{addDaysToDate(tmpdate, 1).toLocaleDateString()}</td> : 
          <td className="pt-5 text-center h6">{addDaysToDate(tmpdate, 30).toLocaleDateString()}</td> 
        }

        <td className="pt-3">
      <p type="button" onClick={()=> desabonneToi()} class={'btn btn-danger around'}> {'Se desabonne'}</p>
      </td>
    </tr>
   
     

  )
}
