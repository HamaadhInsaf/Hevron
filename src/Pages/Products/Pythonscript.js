import React, { useState } from 'react';
import '../../CSS/Style.css';
import Productheader from '../../Components/Productheader';
import Footer from '../../Components/Footer';
import { Enlargeimage } from '../../Services/Enlargeimage';

export default function Pythonscript() {
    document.title = "Python Script Debugging"
    const [Enlargedsrc, Setenlargedsrc] = useState('/Images/Products/Python-script-debugging/Picture-1.jpg');
    return (
        <>
            <Productheader />
            <section id='Info'>
                <div id='Enlarge_image' className='Hidden'>
                    <img src={Enlargedsrc} alt='' id='Enlarged_image' />
                </div>
                <div className='Images'>
                    <img src='/Images/Products/Python-script-debugging/Picture-1.jpg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Python-script-debugging/Picture-1.jpg', Setenlargedsrc) } />
                    <img src='/Images/Products/Python-script-debugging/Picture-2.jpeg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Python-script-debugging/Picture-2.jpeg', Setenlargedsrc) } />
                    <img src='/Images/Products/Python-script-debugging/Picture-3.jpg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Python-script-debugging/Picture-3.jpg', Setenlargedsrc) } />
                </div>
                <div id='Description'>
                    <h1>Python Script Debugging</h1>
                    <h4>$$$</h4>
                    <div id='Buttons'>
                        <img src='/Images/Buy-now.png' alt='Buy now' />
                        <img src='/Images/Add-to-cart.png' alt='Add to cart' />
                    </div>
                    <h2>Product Details</h2>
                    <ul>
                        <li>Type: Python File</li>
                        <li>Extension: '.py'</li>
                        <li>Time (est): Depends on the Problem and Size of the Program</li>
                    </ul>
                    <h2>Product Description</h2>
                    <p>Program not working as expected? Don't be so harsh on yourself, even the greatest programmers make mistakes which are hard to fix; so why don't you hire a python expert to do the hard work for you?</p>
                    <p>Once the order has been placed, reply to the confirmation email with your code, describe the problem, and let us handle the rest.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}