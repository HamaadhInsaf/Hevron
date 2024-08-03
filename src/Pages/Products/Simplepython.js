import React, { useState } from 'react';
import '../../CSS/Style.css';
import Productheader from '../../Components/Productheader';
import Footer from '../../Components/Footer';
import { Enlargeimage } from '../../Services/Enlargeimage';

export default function Simplepython() {
    document.title = "Simple Python Script"
    const [Enlargedsrc, Setenlargedsrc] = useState('/Images/Products/Simple-python-script/Picture-1.jpeg');
    return (
        <>
            <Productheader />
            <section id='Info'>
                <div id='Enlarge_image' className='Hidden'>
                    <img src={Enlargedsrc} alt='' id='Enlarged_image' />
                </div>
                <div className='Images'>
                    <img src='/Images/Products/Simple-python-script/Picture-1.jpeg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Simple-python-script/Picture-1.jpeg', Setenlargedsrc) } />
                    <img src='/Images/Products/Simple-python-script/Picture-2.jpg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Simple-python-script/Picture-2.jpg', Setenlargedsrc) } />
                </div>
                <div id='Description'>
                    <h1>Simple Python Script</h1>
                    <h4>FREE</h4>
                    <div id='Buttons'>
                        <img src='/Images/Buy-now.png' alt='Buy now' />
                        <img src='/Images/Add-to-cart.png' alt='Add to cart' />
                    </div>
                    <h2>Product Details</h2>
                    <ul>
                        <li>Type: Programming</li>
                        <li>Extension: '.py'</li>
                        <li>Time (est): Depends on the Criteria</li>
                    </ul>
                    <h2>Product Description</h2>
                    <p>New to python and trying to get a program done? Don't worry we are here to help you. You can give us a partially completed program or we start from scratch, just give us your goal and we'll acheive it for you!</p>
                    <p>Place the order and reply to the confirmation email about your project and any format or rules to be followed, if possible give a similar peice of code for referrence, and give us any unfinished code if available as plain text or as an attachment.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}