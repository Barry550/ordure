import React from 'react'
import { useSelector } from 'react-redux'
import CorpsTroc from './Corps/CorpsTroc'

export default function TabTroc({user}) {

    const {trocs} = useSelector(state => state)
  return (
    <div className="card-body">

    <table id="">
    <table style={{width: "500px", fontSize: '20px'}}  className='table table-striped'>
                             <thead className='thead-dark'>
                                     <tr>
                                        <th scope='col'>Images</th>
                                        <th scope='col'>Pseudo</th>
                                        <th scope='col'>Email</th>
                                        <th scope='col'>Quartier</th>
                                        <th scope='col'>Commune</th>
                                        <th style={{width: '100px'}} scope='col'>Téléphone</th>
                                        {/* <th scope='col'>Décharge</th> */}
                                        {/* <th scope='col'>Abonnés</th> */}
                                     </tr>
                                 </thead>
                                 {
                                     trocs?.map(troc => <CorpsTroc troc={troc}/> )
                                 }
                        </table>
</table>
</div>
  )
}
