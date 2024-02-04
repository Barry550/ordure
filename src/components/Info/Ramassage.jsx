import React from 'react'
import agent from './img-ramassage.png'
export default function Ramassage() {
  return (
    <section className="body-2">
    <article className="article-2">
        <h3>NOS SERVICES</h3>
        <hr/>
        <br/>
        <h1>Ramassage et collecte de déchets</h1>
        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
            <br/>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        </p>
        <button className="button-2">Rechercher</button>
    </article>
    <aside className="aside-2">
        <img src={agent} alt=""/>
    </aside>
</section>
  )
}
