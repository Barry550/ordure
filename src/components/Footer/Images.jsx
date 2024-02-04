import React from 'react'
import image from './facebook.png'
import image2 from './twitter.png'
import image3 from './wat.jpeg'

export default function Images() {
  return (
    <div className="images">
                <div>
                    <img src={image} />
                </div>
                <div>
                    <img src={image2} />
                </div>
                <div>
                    <img src={image3} />
                </div>
            </div>
  )
}
