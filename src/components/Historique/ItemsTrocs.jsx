import React from 'react'

export default function ItemsTrocs({troc, user}) {
  return (
    <tr>
    <td><img width='90px' src={troc?.images?.url} alt="logo" /></td>
    <td className="pt-3">{troc?.name}</td>
    <td className="pt-3">{troc?.weight}</td> 
    <td className="pt-3">{troc?.email}</td>
    <td className="pt-3">{troc?.tel}</td>
    <td className="pt-3">{new Date(user?.updatedAt).toLocaleDateString()}</td>
</tr>
  )
}
