import React, { useState } from 'react';
import '../../CSS/Style.css';
import Productheader from '../../Components/Productheader';
import Footer from '../../Components/Footer';
import { Enlargeimage } from '../../Services/Enlargeimage';

export default function Presentation() {
    document.title = "Presentation"
    const [Enlargedsrc, Setenlargedsrc] = useState('/Images/Products/Presentation/Picture-1.png');
    return (
        <>
            <Productheader />
            <section id='Info'>
                <div id='Enlarge_image' className='Hidden'>
                    <img src={Enlargedsrc} alt='' id='Enlarged_image' />
                </div>
                <div className='Images'>
                    <img src='/Images/Products/Presentation/Picture-1.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Presentation/Picture-1.png', Setenlargedsrc) } />
                    <img src='/Images/Products/Presentation/Picture-2.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Presentation/Picture-2.png', Setenlargedsrc) } />
                    <img src='/Images/Products/Presentation/Picture-3.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Presentation/Picture-3.jpg', Setenlargedsrc) } />
                </div>
                <div className='Images'>
                    <img src='/Images/Products/Presentation/Picture-4.jpeg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Presentation/Picture-4.jpeg', Setenlargedsrc) } />
                    <img src='/Images/Products/Presentation/Picture-5.jpg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Presentation/Picture-5.jpg', Setenlargedsrc) } />
                </div>
                <div id='Description'>
                    <h1>Presentation</h1>
                    <h4>$$$</h4>
                    <div id='Buttons'>
                        <img src='/Images/Buy-now.png' alt='Buy now' />
                        <img src='/Images/Add-to-cart.png' alt='Add to cart' />
                    </div>
                    <h2>Product Details</h2>
                    <ul>
                        <li>Type: Powerpoint Presentation</li>
                        <li>Extension: '.pptx'</li>
                        <li>Size: Depends on the File</li>
                        <li>Time (est): Depends on the Task</li>
                    </ul>
                    <h2>Product Description</h2>
                    <p>We can make presentations for all sorts of scenarios, whether it is a school project or a office report we can do it! We can use Microsoft Powerpoint or any other online presentation services like Canva or Prezi.</p>
                    <p>Reply to the confirmation email sent by us when placing the order with your requirements, like the purpose such as an office meeting or a family get-together, any house styles needed to be followed, slide order, or any other info. Depending on the task, it may take from a few days to few weeks. After the presentation is sent back, make suitable adjustments according to your liking or let us know an we'll help.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}