import React from 'react'
import agent2 from './deux.png'

export default function Etape2() {
  return (
    <section className="etape-2">
        <aside className="aside-etape-2">
            <img src={agent2} width="200" height="200" alt=""/>
        </aside>
        <article className="article-etape-2">
            <p className="chiffre">
                2
            </p>
            <h1>Trouver la PME la plus proche de vous</h1>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dot amet. Lorem
            </p>
        </article>
    </section>
  )
}