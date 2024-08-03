import React, { useState } from 'react';
import '../../CSS/Style.css';
import Productheader from '../../Components/Productheader';
import Footer from '../../Components/Footer';
import { Enlargeimage } from '../../Services/Enlargeimage';

export default function Testemail() {
    document.title = "Test Email"
    const [Enlargedsrc, Setenlargedsrc] = useState('/Images/Products/Test-email/Picture-1.png');
    return (
        <>
            <Productheader />
            <section id='Info'>
                <div id='Enlarge_image' className='Hidden'>
                    <img src={Enlargedsrc} alt='' id='Enlarged_image' />
                </div>
                <div className='Images'>
                    <img src='/Images/Products/Test-email/Picture-1.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Test-email/Picture-1.png', Setenlargedsrc) } />
                    <img src='/Images/Products/Test-email/Picture-2.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Test-email/Picture-2.png', Setenlargedsrc) } />
                    <img src='/Images/Products/Test-email/Picture-3.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Test-email/Picture-3.png', Setenlargedsrc) } />
                </div>
                <div id='Description'>
                    <h1>Test Email</h1>
                    <h4>$$$</h4>
                    <div id='Buttons'>
                        <img src='/Images/Buy-now.png' alt='Buy now' />
                        <img src='/Images/Add-to-cart.png' alt='Add to cart' />
                    </div>
                    <h2>Product Details</h2>
                    <ul>
                        <li>Time (est): 1-5 minutes</li>
                    </ul>
                    <h2>Product Description</h2>
                    <p>This is a one-time test email service. We have emailing services and you can test the service by using the one-time email service.</p>
                    <p>When you place the order of this product, you will need to enter your email address so that you can receive the email; once you have entered the email, open your inbox and check if the email has arrived (check spam as well), and if the email has not been delivered, re-order the product and make sure to carefully enter the correct email address.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}