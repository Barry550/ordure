import React, { useContext } from 'react'
import { GlobalState } from '../../global/GlobalState'
import EntetePied from './EntetePied'

export default function({filtering, filter}) {

  const state = useContext(GlobalState)
  const user = state.userApi.user
  return (
    <div className="card-body">
    <table id="datatablesSimple">
         <EntetePied  data={filtering ? filter : user?.abonnes}/>    
</table>
</div>
  )
}
