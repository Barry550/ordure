import React from 'react'
import image from './fenteingny.png'
import './info.css'
export default function Fenteingny() {
  return (
    <section class="body-1">
        <article class="article-1">
            <h1>FENTEINGNY ?</h1>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
                <br/>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
            </p>
            <button class="button-1">En savoir plus</button>
        </article>
        <aside class="aside-1">
            <img src={image} alt=""/>
        </aside>
    </section> 
  )
}
