import React, { useState } from 'react';
import '../../CSS/Style.css';
import Productheader from '../../Components/Productheader';
import Footer from '../../Components/Footer';
import { Enlargeimage } from '../../Services/Enlargeimage';

export default function Hevronvideo() {
    document.title = "Hevron site prototype video"
    const [Enlargedsrc, Setenlargedsrc] = useState('/Images/Products/Hevron-video/Picture-1.jpg');
    return (
        <>
            <Productheader />
            <section id='Info'>
                <div id='Enlarge_image' className='Hidden'>
                    <img src={Enlargedsrc} alt='' id='Enlarged_image' />
                </div>
                <div className='Images'>
                    <img src='/Images/Products/Hevron-video/Picture-1.jpg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Hevron-video/Picture-1.jpg', Setenlargedsrc) } />
                    <img src='/Images/Products/Hevron-video/Picture-2.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Hevron-video/Picture-2.png', Setenlargedsrc) } />
                    <img src='/Images/Products/Hevron-video/Picture-3.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Hevron-video/Picture-3.png', Setenlargedsrc) } />
                </div>
                <div id='Description'>
                    <h1>Hevron site prototype video</h1>
                    <h4>FREE</h4>
                    <div id='Buttons'>
                        <img src='/Images/Buy-now.png' alt='Buy now' />
                        <img src='/Images/Add-to-cart.png' alt='Add to cart' />
                    </div>
                    <h2>Product Details</h2>
                    <ul>
                        <li>Type: Video</li>
                        <li>Extension: '.mp4'</li>
                        <li>Time (est): Within the day</li>
                    </ul>
                    <h2>Product Description</h2>
                    <p>This is a video of the prototype of the Hevron website created in HTML. Check this video out to take a look at the website before it was converted to React and try to find out the changes that have been made.</p>
                    <p>Once the order has been placed, you will get an email with the video attached to the email and you can view it online or download on your device.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}