import React from 'react'
import agent2 from './un.png'


export default function Etape1() {
  return (
    <section className="etape-1">
        <article className="article-etape-1">
            <p className="chiffre">
                1
            </p>
            <h1>Trouver la PME la plus proche de vous</h1>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dot amet. Lorem
            </p>
        </article>
        <aside className="aside-etape-1">
            <img src={agent2} width="200" height="200" alt=""/>
        </aside>
    </section>

  )
}