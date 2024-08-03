import React, { useState } from 'react';
import '../../CSS/Style.css';
import Productheader from '../../Components/Productheader';
import Footer from '../../Components/Footer';
import { Enlargeimage } from '../../Services/Enlargeimage';

export default function Wordprocessing() {
    document.title = "Word Processing"
    const [Enlargedsrc, Setenlargedsrc] = useState('/Images/Products/Word-processing/Picture-1.png');
    return (
        <>
            <Productheader />
            <section id='Info'>
                <div id='Enlarge_image' className='Hidden'>
                    <img src={Enlargedsrc} alt='' id='Enlarged_image' />
                </div>
                <div className='Images'>
                    <img src='/Images/Products/Word-processing/Picture-1.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Word-processing/Picture-1.png', Setenlargedsrc) } />
                    <img src='/Images/Products/Word-processing/Picture-2.jpg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Word-processing/Picture-2.jpg', Setenlargedsrc) } />
                    <img src='/Images/Products/Word-processing/Picture-3.jpg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Word-processing/Picture-3.jpg', Setenlargedsrc) } />
                </div>
                <div className='Images'>
                    <img src='/Images/Products/Word-processing/Picture-3.jpg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Word-processing/Picture-3.jpg', Setenlargedsrc) } />
                    <img src='/Images/Products/Word-processing/Picture-4.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Word-processing/Picture-4.png', Setenlargedsrc) } />
                    <img src='/Images/Products/Word-processing/Picture-5.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Word-processing/Picture-5.png', Setenlargedsrc) } />
                </div>
                <div id='Description'>
                    <h1>Word Processing</h1>
                    <h4>$$$</h4>
                    <div id='Buttons'>
                        <img src='/Images/Buy-now.png' alt='Buy now' />
                        <img src='/Images/Add-to-cart.png' alt='Add to cart' />
                    </div>
                    <h2>Product Details</h2>
                    <ul>
                        <li>Type: Word Document</li>
                        <li>Extension: '.docx' or '.odt'</li>
                        <li>Size: Depends on the File</li>
                        <li>Time (est): 1-2 days</li>
                    </ul>
                    <h2>Product Description</h2>
                    <p>Want to submit some documents but cannot get it right? We can edit your documents or even start from scratch to get your professionalism a mile ahead. If needed we can even submit a document that include an email message with a professional tone if you aren't sure how to approach a person formally.</p>
                    <p>Reply to the confirmation email sent after the order is placed with the type of document (Report, letter, email, etc) and provide us with a house style or format. Once we have done please review the document and make necessary changes or contact us to make the changes.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}