import React from 'react'
import './hero.css'
import CountUp from 'react-countup'
import {HiLocationMarker} from 'react-icons/hi'
const Hero = () => {
  return (
      <div className='paddings innerWidth flexCenter hero-container'>
      <div className="flexColStart hero-left">
        <div className="title">
            <div className="orangeCircle"/>

            
            <h1>Discover<br></br>
                Most Suitable<br></br>
                Property</h1>
        </div>

        <div className='secondaryText hero-disc'>Find a variety of properties that suit you very easilty<br></br>
        Forget all difficulties in finding a residence for you</div>
        <div className="flexCenter searchbar">
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type="text"/>
            <button className='button'> Search</button>
        </div>



         <div className='flexCenter stats'>
          <div className='flexColCenter stat'>
           <span>
          <CountUp start={8800} end={9000} duration={4} />
          <span>+</span>
          </span>
          <span className='secondaryText'>Premium Product</span>
            </div>

            <div className='flexColCenter stat'>
           <span>
          <CountUp start={8150} end={2000} duration={4} />
          <span>+</span>
          </span>
          <span className='secondaryText'>Happy Customers</span>
            </div>

            <div className='flexColCenter stat'>
           <span>
          <CountUp  end={30}  />
          <span>+</span>
          </span>
          <span className='secondaryText'>Award Winning</span>
            </div>


         </div>
         
        </div> 


        <div className="hero-right">
            <div className="img-container">
            <img src="./hero-image.png" alt="hero"  />                
            </div>

        </div>
      </div>
  )
}

export default Hero;