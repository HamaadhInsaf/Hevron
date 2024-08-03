import React, { useState } from 'react';
import '../../CSS/Style.css';
import Productheader from '../../Components/Productheader';
import Footer from '../../Components/Footer';
import { Enlargeimage } from '../../Services/Enlargeimage';

export default function Complexpython() {
    document.title = "Complex Python Script"
    const [Enlargedsrc, Setenlargedsrc] = useState('/Images/Products/Complex-python-script/Picture-1.jpeg');
    return (
        <>
            <Productheader />
            <section id='Info'>
                <div id='Enlarge_image' className='Hidden'>
                    <img src={Enlargedsrc} alt='' id='Enlarged_image' />
                </div>
                <div className='Images'>
                    <img src='/Images/Products/Complex-python-script/Picture-1.jpeg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Complex-python-script/Picture-1.jpeg', Setenlargedsrc) } />
                    <img src='/Images/Products/Complex-python-script/Picture-2.jpg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Complex-python-script/Picture-2.jpg', Setenlargedsrc) } />
                </div>
                <div id='Description'>
                    <h1>Complex Python Script</h1>
                    <h4>$$$</h4>
                    <div id='Buttons'>
                        <img src='/Images/Buy-now.png' alt='Buy now' />
                        <img src='/Images/Add-to-cart.png' alt='Add to cart' />
                    </div>
                    <h2>Product Details</h2>
                    <ul>
                        <li>Type: Python File</li>
                        <li>Extension: '.py'</li>
                        <li>Size: Few KB</li>
                        <li>Time (est): Depends on the Task</li>
                    </ul>
                    <h2>Product Description</h2>
                    <p>When working on big projects, even expert programmers may get stuck. They may have no idea on how to continue or how to implement something in their code. Maybe a beginner is trying out a complex task and decides to ask for help. We are here to help!</p>
                    <p>Place the order and reply to the confirmation email sent by giving us your task and expectations, if possible similar code for reference, and any partially completed code sent as plain text or as an attachment.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}