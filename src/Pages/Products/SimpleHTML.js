import React, { useState } from 'react';
import '../../CSS/Style.css';
import Productheader from '../../Components/Productheader';
import Footer from '../../Components/Footer';
import { Enlargeimage } from '../../Services/Enlargeimage';

export default function SimpleHTML() {
    document.title = "Simple HTML Site"
    const [Enlargedsrc, Setenlargedsrc] = useState('/Images/Products/Simple-HTML-site/Picture-1.png');
    return (
        <>
            <Productheader />
            <section id='Info'>
                <div id='Enlarge_image' className='Hidden'>
                    <img src={Enlargedsrc} alt='' id='Enlarged_image' />
                </div>
                <div className='Images'>
                    <img src='/Images/Products/Simple-HTML-site/Picture-1.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Simple-HTML-site/Picture-1.png', Setenlargedsrc) } />
                    <img src='/Images/Products/Simple-HTML-site/Picture-2.jpg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Simple-HTML-site/Picture-2.jpg', Setenlargedsrc) } />
                </div>
                <div id='Description'>
                    <h1>Simple HTML Site</h1>
                    <h4>$$$</h4>
                    <div id='Buttons'>
                        <img src='/Images/Buy-now.png' alt='Buy now' />
                        <img src='/Images/Add-to-cart.png' alt='Add to cart' />
                    </div>
                    <h2>Product Details</h2>
                    <ul>
                        <li>Type: HTML File and CSS File</li>
                        <li>Extension: '.html' and '.css'</li>
                        <li>Time (est): Depends on the Task</li>
                        <li>Other Information: Website Will Not Always Match Expectations</li>
                    </ul>
                    <h2>Product Description</h2>
                    <p>Create an outstanding website with HTML and CSS but please let us do the hard work. Creating a wonderful website can be challenging, especially for beginners - so give us your ideas and we will do it for you. Note that Javascript will not be done to keep it simple.</p>
                    <p>Place the order and reply to the confirmation email with your ideas and expectations and if available, send the code that has already been completed as plain text or as an attachment. Remember order will be cancelled if Javascript is included.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}