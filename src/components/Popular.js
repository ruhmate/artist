import React from 'react'
import { useGlobalContext } from '../context'

export default function Popular(){
    return (
        
        <section classname='section'>
            <div className='section-titli'>
            <h3>Popular Artists</h3> 
            <div class="row">
            <div class="column">
            <img src="https://wallpapercave.com/wp/wp1822238.jpg" alt="Maroon 5"/>
            <br></br>
             <img src="https://wallpapercave.com/wp/wp5355522.jpg" alt="Lady Gaga" />
            </div>
            <div class="column">
            <img src="https://wallpapercave.com/wp/wp1874757.jpg" alt="Chainsmokers" />
            <br></br>
             <img src="https://wallpapercave.com/wp/wp4933003.jpg" alt="Singer" />
            </div>
            <div class="column">
             <img src="https://wallpapercave.com/wp/wp2155529.png" alt="Future" />
             <br></br>
             <img src="https://wallpapercave.com/wp/wp6356841.jpg" alt="Zayn Malik" />
            </div>
            <div class="column">
             <img src="https://wallpapercave.com/wp/wp6522941.jpg" alt="BTS" />
             <br></br>
             <img src="https://wallpapercave.com/wp/wp8503462.jpg" alt="Ariana" />
            </div>
            <br></br>
            <br></br>
            </div>
            </div>
        </section>
  

    )
}
