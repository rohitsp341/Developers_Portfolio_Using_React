import React from 'react'
import vg from "../assets/images/2person.jpg"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>

    <div className='home' id="Home">
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all You Doubt</p>

        </main>
    </div>

    <div className='home2' >
        <img src={vg} alt="Graphics"/>
        <div>
            <p>We are your one and only solution to the tech problems you face every day . We are loading tech company whose aim is to Increase the problem solution ability in children.</p>
        </div>
    </div>

    <div className='home3' id='About'>
        <div>
            <h1>
                    Who are you ?
            </h1>
            <p>
            If you have a specific question or topic in mind, feel free to ask, and I'll do my best to provide information or assist you within the scope of my training. If you're looking for specific datasets, you might want to explore publicly available data repositories or contact relevant organizations that provide such data.
            </p>
        </div>
    </div>
    <div className='home4' id='Brands'>
        <div>
            <h1>Brand</h1>
                <article>
                    <div style={{
                        animationDelay:"0.5s",
                    }}> 
                        <AiFillGoogleCircle/>
                        <p>Google</p>

                    </div>

                    <div style={{
                        animationDelay:"0.5s",
                    }}> 
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>

                    </div>

                    <div style={{
                        animationDelay:"0.7s",
                    }}> 
                        <AiFillYoutube/>
                        <p>YouTube</p>

                    </div>


                    <div style={{
                        animationDelay:"1s",
                    }}> 
                        <AiFillInstagram/>
                        <p>Instagram</p>

                    </div>

                </article>
            
        </div>

    </div>
    </>
  )
}

export default Home