import React, { useState } from 'react';
import '../../CSS/Style.css';
import Productheader from '../../Components/Productheader';
import Footer from '../../Components/Footer';
import { Enlargeimage } from '../../Services/Enlargeimage';

export default function Bingimage() {
    document.title = "Bing Image Creator"
    const [Enlargedsrc, Setenlargedsrc] = useState('/Images/Products/Bing-image-creator/Picture-1.png');
    return (
        <>
            <Productheader />
            <section id='Info'>
                <div id='Enlarge_image' className='Hidden'>
                    <img src={Enlargedsrc} alt='' id='Enlarged_image' />
                </div>
                <div className='Images'>
                <img src='/Images/Products/Bing-image-creator/Picture-1.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Bing-image-creator/Picture-1.png', Setenlargedsrc) } />
                    <img src='/Images/Products/Bing-image-creator/Picture-2.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Bing-image-creator/Picture-2.png', Setenlargedsrc) } />
                    <img src='/Images/Products/Bing-image-creator/Picture-3.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Bing-image-creator/Picture-3.png', Setenlargedsrc) } />
                </div>
                <div className='Images'>
                    <img src='/Images/Products/Bing-image-creator/Picture-4.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Bing-image-creator/Picture-4.png', Setenlargedsrc) } />
                    <img src='/Images/Products/Bing-image-creator/Picture-5.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Bing-image-creator/Picture-5.png', Setenlargedsrc) } />
                    <img src='/Images/Products/Bing-image-creator/Picture-6.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Bing-image-creator/Picture-6.png', Setenlargedsrc) } />
                </div>
                <div id='Description'>
                    <h1>Bing Image Creator</h1>
                    <h4>$$$</h4>
                    <div id='Buttons'>
                        <img src='/Images/Buy-now.png' alt='Buy now' />
                        <img src='/Images/Add-to-cart.png' alt='Add to cart' />
                    </div>
                    <h2>Product Details</h2>
                    <ul>
                        <li>Type: Image</li>
                        <li>Extension: '.jpg', '.jpeg' or '.png''</li>
                        <li>Size: Depends on File</li>
                        <li>Time (est): Within the day</li>
                    </ul>
                    <h2>Product Description</h2>
                    <p>Bing Image Creator is an awesome free tool which uses the latest Dall E version, but there is a catch for free softwares released by huge companies like Microsoft. The catch for Bing Image Creator is that image genereation is slower without boosts. 100 boosts are refilled for free everyday, but sometimes they might run out or glitch and not refill. That is where we come in, give us your prompt and expectations and we'll send you the image once after it is generated.</p>
                    <p>Enter your email to receive a confirmation email and reply with your prompts (multiple prompts recommended) with your expectations and if possible, send an image which closely resembles your expectations to improve the accuracy of the results sent back to you. After you reply to the email, wait for a day, rarely it wil take 2 days and you will receive an email with multiple images to choose from.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}