import React, { useState } from 'react';
import '../../CSS/Style.css';
import Productheader from '../../Components/Productheader';
import Footer from '../../Components/Footer';
import { Enlargeimage } from '../../Services/Enlargeimage';

export default function Minorphotoshop() {
    document.title = "Minor Photoshop Tweaks"
    const [Enlargedsrc, Setenlargedsrc] = useState('/Images/Products/Minor-photoshop-tweaks/Picture-1.png');
    return (
        <>
            <Productheader />
            <section id='Info'>
                <div id='Enlarge_image' className='Hidden'>
                    <img src={Enlargedsrc} alt='' id='Enlarged_image' />
                </div>
                <div className='Images'>
                    <img src='/Images/Products/Minor-photoshop-tweaks/Picture-1.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Minor-photoshop-tweaks/Picture-1.png', Setenlargedsrc) } />
                    <img src='/Images/Products/Minor-photoshop-tweaks/Picture-2.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Minor-photoshop-tweaks/Picture-2.png', Setenlargedsrc) } />
                    <img src='/Images/Products/Minor-photoshop-tweaks/Picture-3.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Minor-photoshop-tweaks/Picture-3.png', Setenlargedsrc) } />
                    </div>
                    <div className='Images'>
                    <img src='/Images/Products/Minor-photoshop-tweaks/Picture-4.jpg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Minor-photoshop-tweaks/Picture-4.jpg', Setenlargedsrc) } />
                    <img src='/Images/Products/Minor-photoshop-tweaks/Picture-5.jpeg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Minor-photoshop-tweaks/Picture-5.jpeg', Setenlargedsrc) } />
                    <img src='/Images/Products/Minor-photoshop-tweaks/Picture-6.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Minor-photoshop-tweaks/Picture-6.png', Setenlargedsrc) } />
                </div>
                <div id='Description'>
                    <h1>Minor Photoshop Tweaks</h1>
                    <h4>$$$</h4>
                    <div id='Buttons'>
                        <img src='/Images/Buy-now.png' alt='Buy now' />
                        <img src='/Images/Add-to-cart.png' alt='Add to cart' />
                    </div>
                    <h2>Product Details</h2>
                    <ul>
                        <li>Type: Photoshop File and Image</li>
                        <li>Extension: '.psd' and '.png'</li>
                        <li>Size: Depends on the File</li>
                        <li>Time (est): 1 - 2 days</li>
                    </ul>
                    <h2>Product Description</h2>
                    <p>Need an image edited? We can help with our latest version of Photoshop! Whether you want to remove or add a object, remove or add a background, or just sharpen or blur any parts of the image - Photoshop can do it!</p>
                    <p>Reply to the order confirmation email by sending your image (if available, send the .psd file as well) and instructions on what to do. Once the image is sent, review the image and let us know if there are anymore adjustments to be made.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}