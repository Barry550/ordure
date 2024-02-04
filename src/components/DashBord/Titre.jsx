import React from 'react'

export default function Titre({user}) {
  return (
      <div>
    <h1 className="mt-4">{user?.pseudo}</h1>         
    </div>
  )
}
