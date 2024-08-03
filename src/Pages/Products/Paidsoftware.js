import React, { useState } from 'react';
import '../../CSS/Style.css';
import Productheader from '../../Components/Productheader';
import Footer from '../../Components/Footer';
import { Enlargeimage } from '../../Services/Enlargeimage';

export default function Paidsoftware() {
    document.title = "Paid Software Recommendation"
    const [Enlargedsrc, Setenlargedsrc] = useState('/Images/Products/Paid-software-recommendation/Picture-1.png');
    return (
        <>
            <Productheader />
            <section id='Info'>
                <div id='Enlarge_image' className='Hidden'>
                    <img src={Enlargedsrc} alt='' id='Enlarged_image' />
                </div>
                <div className='Images'>
                    <img src='/Images/Products/Paid-software-recommendation/Picture-1.png' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Paid-software-recommendation/Picture-1.png', Setenlargedsrc) } />
                    <img src='/Images/Products/Paid-software-recommendation/Picture-2.jpeg' alt='' className='Thumbnail' onClick={ () => Enlargeimage('/Images/Products/Paid-software-recommendation/Picture-2.jpeg', Setenlargedsrc) } />
                </div>
                <div id='Description'>
                    <h1>Paid Software Recommendation</h1>
                    <h4>$$$</h4>
                    <div id='Buttons'>
                        <img src='/Images/Buy-now.png' alt='Buy now' />
                        <img src='/Images/Add-to-cart.png' alt='Add to cart' />
                    </div>
                    <h2>Product Details</h2>
                    <ul>
                        <li>Time (est): Depends on the Criteria</li>
                    </ul>
                    <h2>Product Description</h2>
                    <p>Need a premium software but cannot find one or is there too many? We can find you the software you need for within your budget, and help you choose the best one if you have selected a few.</p>
                    <p>Place the order and reply to the confirmation email of the order by giving the purpose of you needing the program, your needs and expectations, your budget, and if you wouldn't mind getting a software that is a bit over the budget. Depending on the critea given, it may take some time to find softwares that match; but your recommendations will be sent via email within 7 days.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}