import React from 'react'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
import vg from '../assets/2.jpg'

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>Tech Bazar</h1>
                    <p>Solution To all Your Problems</p>
                </main>
            </div>

            <div className='home2'>
                <img src={vg} alt='Graphics' />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloremque minus suscipit magnam, iusto assumenda saepe architecto dolores sapiente, nam ut ea consequuntur est ex tempora illum sint fugit ab?
                    </p>
                </div>

            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we are ?</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet ad voluptatem officiis nobis et, nesciunt veniam? Eaque nihil vitae optio facere incidunt nesciunt debitis voluptas ipsum fugit autem ducimus nam magnam quod dolorum ex assumenda aut, dignissimos in dolor maxime totam quibusdam ut, tempora molestias? Repudiandae, expedita quia architecto autem dolores quasi, saepe asperiores esse sint, omnis quaerat laborum! Illum dolorum ipsum vitae eveniet!</p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div
                        style={{
                            animationDelay:"0.3s"
                        }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                    </div>

                        <div
                        style={{
                            animationDelay:"0.5s"
                        }}>
                     <AiFillAmazonCircle/>
                    <p>Amazon</p>
                    </div>

                        <div
                        style={{
                            animationDelay:"0.7s"
                        }}>
                     <AiFillYoutube/>
                    <p>Youtube</p>
                    </div>

                        <div
                        style={{
                            animationDelay:"1s"
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