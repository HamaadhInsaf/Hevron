import React, { useState } from 'react';
import '../../CSS/Style.css';
import Productheader from '../../Components/Productheader';
import Footer from '../../Components/Footer';
import { Enlargeimage } from '../../Services/Enlargeimage';

export default function Hevrondoubts() {
    document.title = "Hevron Doubts"
    const [Enlargedsrc, Setenlargedsrc] = useState('/Images/Products/Hevron-doubts/Picture-1.jpg');
    return (
        <>
            <Productheader />
            <section id='Info'>
                <div id='Enlarge_image' className='Hidden'>
                    <img src={Enlargedsrc} alt='' id='Enlarged_image' />
                </div>
                <div className='Images'>
                    <img src='/Images/Products/Hevron-doubts/Picture-1.jpg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Hevron-doubts/Picture-1.jpg', Setenlargedsrc) } />
                    <img src='/Images/Products/Hevron-doubts/Picture-2.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Hevron-doubts/Picture-2.png', Setenlargedsrc) } />
                </div>
                <div id='Description'>
                    <h1>Hevron Doubts</h1>
                    <h4>FREE</h4>
                    <div id='Buttons'>
                        <img src='/Images/Buy-now.png' alt='Buy now' />
                        <img src='/Images/Add-to-cart.png' alt='Add to cart' />
                    </div>
                    <h2>Product Details</h2>
                    <ul>
                        <li>Time (est): Within 1-2 Days</li>
                    </ul>
                    <h2>Product Description</h2>
                    <p>Found an error or have some suggestions? We are happy to take a look into it. If you are new and unfamiliar, let us help you get around the website with ease.</p>
                    <p>It is very simple to get in touch with us. Just simply reply to the email sent with your problem or suggestion and we will see what we can do about it.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}