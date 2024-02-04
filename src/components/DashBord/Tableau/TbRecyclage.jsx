import React from 'react'
import EntetePied from './EntetePied'
import EnteteRecyclage from './EnteteRecyclage'

export default function TbRecyclage({user}) {
  return (
    <div className="card-body">

    <table id="">
         <EnteteRecyclage user={user}/>    
</table>
</div>
  )
}
