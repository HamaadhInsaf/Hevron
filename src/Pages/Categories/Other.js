import '../../CSS/Style.css'
import Otherheader from '../../Components/Otherheader'
import Categorypane from '../../Components/Categorypane'
import Footer from '../../Components/Footer';
import Testemailtile from '../../Components/Products/Testemailtile';
import Hevrondoubtstile from '../../Components/Products/Hevrondoubtstile';

export default function Other() {
    document.title = "Other"
    return (
        <>
            <Otherheader />
            <p id='Title'>Other Products</p>
            <section id='Details'>
                <div className='Row'>
                    <Categorypane />
                    <div id='Product_tiles_container'>
                        <div>
                            <Testemailtile />
                        </div>
                        <div>
                            <Hevrondoubtstile />
                        </div>
                    </div>
                </div>
                <a id='All_link' href='./all-products'>All Products</a>
            </section>
            <Footer />
        </>
    )
}