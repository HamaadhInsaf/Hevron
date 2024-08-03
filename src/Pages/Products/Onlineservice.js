import React, { useState } from 'react';
import '../../CSS/Style.css';
import Productheader from '../../Components/Productheader';
import Footer from '../../Components/Footer';
import { Enlargeimage } from '../../Services/Enlargeimage';

export default function Complexpython() {
    document.title = "Online Service Recommendation"
    const [Enlargedsrc, Setenlargedsrc] = useState('/Images/Products/Online-service-recommendation/Picture-1.jpg');
    return (
        <>
            <Productheader />
            <section id='Info'>
                <div id='Enlarge_image' className='Hidden'>
                    <img src={Enlargedsrc} alt='' id='Enlarged_image' />
                </div>
                <div className='Images'>
                    <img src='/Images/Products/Online-service-recommendation/Picture-1.jpg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Online-service-recommendation/Picture-1.jpg', Setenlargedsrc) } />
                    <img src='/Images/Products/Online-service-recommendation/Picture-2.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Online-service-recommendation/Picture-2.png', Setenlargedsrc) } />
                </div>
                <div id='Description'>
                    <h1>Online Service Recommedation</h1>
                    <h4>$$$</h4>
                    <div id='Buttons'>
                        <img src='/Images/Buy-now.png' alt='Buy now' />
                        <img src='/Images/Add-to-cart.png' alt='Add to cart' />
                    </div>
                    <h2>Product Details</h2>
                    <ul>
                        <li>Time (est): Depends on the Criteria</li>
                    </ul>
                    <h2>Product Description</h2>
                    <p>Need to get a job done but do not have the right tools? We can help you find one. From document unlockers to cloud hosting to torrent video streaming, we can find a service that is free or paid.</p>
                    <p>Place the order and reply to the confirmation sent to your inbox (check spam) and list what type of service you are looking for and whether it needs to be a free or paid service.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}