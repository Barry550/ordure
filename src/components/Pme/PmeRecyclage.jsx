import React from 'react'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'
import image6 from './image6.jpg'
import image7 from './gestion-des-dechets.jpg'
import ItemsRecyclage from './ItemsRecyclage'
import ModaleReyclage from './ModaleRecyclage'

export default function PmeRecyclage({data, toggle, commune, research, setChange}) {
  return (
    <div style={{width: '100%', backgroundColor: '#f6f6f6'}}>

    {
    !toggle &&  <div className="separateur-2 ">
    <h1>Entreprises de recyclages</h1>
    <hr/>
    </div>
  }

  <div className={toggle && 'container'}>

  <div className="row contenu-3 d-inline-flex">

{
!toggle ?  <>
{
data?.map(recyclage =>
recyclage?.role  === 2 && 
<ItemsRecyclage setChange={setChange} recyclage={recyclage}  toggle={toggle} research={research}/>
)
}
</>:

<>

{
data?.map(recyclage =>
recyclage?.commune  === commune &&  recyclage?.role  === 2 &&  
<ItemsRecyclage 
  setChange={setChange}
recyclage={recyclage} toggle={toggle} />
)
}</>
}

</div>
  </div>
    </div>
  )
}

