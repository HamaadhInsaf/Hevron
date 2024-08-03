import React, { useState } from 'react';
import '../../CSS/Style.css';
import Productheader from '../../Components/Productheader';
import Footer from '../../Components/Footer';
import { Enlargeimage } from '../../Services/Enlargeimage';

export default function Adobecrack() {
    document.title = "Adobe Crack Softwares"
    const [Enlargedsrc, Setenlargedsrc] = useState('/Images/Products/Adobe-crack-softwares/Picture-1.png');
    return (
        <>
            <Productheader />
            <section id='Info'>
                <div id='Enlarge_image' className='Hidden'>
                    <img src={Enlargedsrc} alt='' id='Enlarged_image' />
                </div>
                <div className='Images'>
                    <img src='/Images/Products/Adobe-crack-softwares/Picture-1.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Adobe-crack-softwares/Picture-1.png', Setenlargedsrc) } />
                    <img src='/Images/Products/Adobe-crack-softwares/Picture-2.jpeg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Adobe-crack-softwares/Picture-2.jpeg', Setenlargedsrc) } />
                    <img src='/Images/Products/Adobe-crack-softwares/Picture-3.jpeg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Adobe-crack-softwares/Picture-3.jpeg', Setenlargedsrc) } />
                </div>
                <div id='Description'>
                    <h1>Adobe Crack Softwares Download</h1>
                    <h4>$$$</h4>
                    <div id='Buttons'>
                        <img src='/Images/Buy-now.png' alt='Buy now' />
                        <img src='/Images/Add-to-cart.png' alt='Add to cart' />
                    </div>
                    <h2>Product Details</h2>
                    <ul>
                        <li>Type: Compressed folder</li>
                        <li>Extension: '.rar'</li>
                        <li>Size: Depends on File</li>
                        <li>Time (est): Depends on File</li>
                    </ul>
                    <h2>Product Description</h2>
                    <p>Adobe has many wonderful softwares for different purposes. They continue to add new features and there are plugins available for them as well! However, their prices may be overwhelming for some users. That's why we offer the software for free! You can order any Adobe software in bulk or order just one. If you are lucky, you may be able to get the latest version.</p>
                    <p>Just place the order and enter your email so that we can contact you regarding which software or softwares you need. Once the email has been delivered (check spam as well), reply to the email with what Adobe software you need and we will provide you with a link to download.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}