import React, { useState } from 'react';
import '../../CSS/Style.css';
import Productheader from '../../Components/Productheader';
import Footer from '../../Components/Footer';
import { Enlargeimage } from '../../Services/Enlargeimage';

export default function Freesoftware() {
    document.title = "Free Software Recommedation"
    const [Enlargedsrc, Setenlargedsrc] = useState('/Images/Products/Free-software-recommendation/Picture-1.png');
    return (
        <>
            <Productheader />
            <section id='Info'>
                <div id='Enlarge_image' className='Hidden'>
                    <img src={Enlargedsrc} alt='' id='Enlarged_image' />
                </div>
                <div className='Images'>
                    <img src='/Images/Products/Free-software-recommendation/Picture-1.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Free-software-recommendation/Picture-1.png', Setenlargedsrc) } />
                    <img src='/Images/Products/Free-software-recommendation/Picture-2.jpeg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Free-software-recommendation/Picture-2.jpeg', Setenlargedsrc) } />
                </div>
                <div id='Description'>
                    <h1>Free Software Recommedation</h1>
                    <h4>FREE</h4>
                    <div id='Buttons'>
                        <img src='/Images/Buy-now.png' alt='Buy now' />
                        <img src='/Images/Add-to-cart.png' alt='Add to cart' />
                    </div>
                    <h2>Product Details</h2>
                    <ul>
                        <li>Type: Compressed Folder or Application</li>
                        <li>Extension: '.rar', '.zip' or '.exe'</li>
                        <li>Time (est): Depends on the Criteria</li>
                        <li>Other Information: Crack Software Can Also Be Found</li>
                    </ul>
                    <h2>Product Description</h2>
                    <p>Need a software but on a budget? We can find you the software you need for free, or atleast are cheap. If you are willing to even get a crack version of a software, you may let us know and will try to get a paid software for free for you.</p>
                    <p>Place the order and reply to the confirmation email of the order by giving the purpose of you needing the program, your needs and expectations, if you don't mind paying a little, and if you wouldn't mind getting a crack software. Depending on the critea given, it may take some time to find softwares that match; but your recommendations will be sent via email within 7 days.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}