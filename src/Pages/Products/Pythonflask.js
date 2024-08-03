import React, { useState } from 'react';
import '../../CSS/Style.css';
import Productheader from '../../Components/Productheader';
import Footer from '../../Components/Footer';
import { Enlargeimage } from '../../Services/Enlargeimage';

export default function Pythonflask() {
    document.title = "Python Flask Site"
    const [Enlargedsrc, Setenlargedsrc] = useState('/Images/Products/Python-flask-site/Picture-1.png');
    return (
        <>
            <Productheader />
            <section id='Info'>
                <div id='Enlarge_image' className='Hidden'>
                    <img src={Enlargedsrc} alt='' id='Enlarged_image' />
                </div>
                <div className='Images'>
                    <img src='/Images/Products/Python-flask-site/Picture-1.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Python-flask-site/Picture-1.png', Setenlargedsrc) } />
                    <img src='/Images/Products/Python-flask-site/Picture-2.jpeg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Python-flask-site/Picture-2.jpeg', Setenlargedsrc) } />
                    <img src='/Images/Products/Python-flask-site/Picture-3.jpg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Python-flask-site/Picture-3.jpg', Setenlargedsrc) } />
                </div>
                <div id='Description'>
                    <h1>Python Flask Site</h1>
                    <h4>$$$</h4>
                    <div id='Buttons'>
                        <img src='/Images/Buy-now.png' alt='Buy now' />
                        <img src='/Images/Add-to-cart.png' alt='Add to cart' />
                    </div>
                    <h2>Product Details</h2>
                    <ul>
                        <li>Type: Python File</li>
                        <li>Extension: '.py'</li>
                        <li>Time (est): Depends on the Criteria</li>
                    </ul>
                    <h2>Product Description</h2>
                    <p>Get a website that is created with HTML but is run with python. With a python flask, you can have many backend processes without using Javascript. So if you are a HTML expert but not a python expert, we are here to help.</p>
                    <p>Once the order is placed, reply to the order confirmation by sending the HTML and CSS code as an attachment file and not in the email body because there could be issues with understanding multiple HTML and CSS files. Note that Javascript files will not be accepted because python can be used instead.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}