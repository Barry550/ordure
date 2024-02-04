import React from 'react'

export default function ItemsVentes({vente, user}) {
  return (
<tr>
    <td className="pt-3">{vente?.name}</td>
    <td className="pt-3">{vente?.email}</td>
    <td className="pt-3">{vente?.tel}</td> 
    <td className="pt-3">{vente?.quartier}</td>
    <td className="pt-3">{vente?.commune}</td>
    <td className="pt-3">{vente?.qty}</td>
    <td className="pt-3">{vente?.montant}</td>
    <td className="pt-3">{new Date(user?.updatedAt).toLocaleDateString()}</td>
</tr>
  )
}
