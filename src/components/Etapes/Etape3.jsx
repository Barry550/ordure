import React from 'react'
import agent2 from './trois.png'

export default function Etape3() {
  return (
    <section class="etape-3">
            <article className="article-etape-3">
                <p class="chiffre">
                    3
                </p>
                <h1>Trouver la PME la plus proche de vous</h1>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dot amet. Lorem
                </p>
            </article>
            <aside className="aside-etape-3">
                <img src={agent2} width="200" height="200" alt=""/>
            </aside>
        </section>
  )
}
