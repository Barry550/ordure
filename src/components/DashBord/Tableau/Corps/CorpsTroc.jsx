import React from 'react'

export default function CorpsTroc({troc}) {


  const decharge = () =>{
    
    }
  return (
    <tbody>

    <tr>
    <td><img width='90px' src={troc?.images?.url} alt="logo" /></td>
        <td>{troc?.name}</td>
        <td>{troc?.email}</td>
        <td>{troc?.quartier}</td>
        <td>{troc?.commune}</td>
        <td>{troc?.tel}</td>
        {/* <td>  
            <button onClick={()=> decharge()} className='btn btn-success'>en attente</button ></td> */}
    </tr>
  
    
    </tbody>
  )
}
