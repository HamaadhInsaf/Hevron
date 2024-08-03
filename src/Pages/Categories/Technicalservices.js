import '../../CSS/Style.css'
import Technicalheader from '../../Components/Technicalheader';
import Categorypane from '../../Components/Categorypane'
import Footer from '../../Components/Footer';
import Freesoftwaretile from '../../Components/Products/Freesoftwaretile';
import Bingimagetile from '../../Components/Products/Bingimagetile';
import Paidsoftwaretile from '../../Components/Products/Paidsoftwaretile';
import Minorphotoshoptile from '../../Components/Products/Minorphotoshoptile';
import Presentationtile from '../../Components/Products/Presentationtile';
import Wordprocessingtile from '../../Components/Products/Wordprocessingtile';
import Onlineservicetile from '../../Components/Products/Onlineservicetile'

export default function Technicalservices() {
    document.title = "Technical Services"
    return (
        <>
            <Technicalheader />
            <p id='Title'>Technical Services</p>
            <section id='Details'>
                <div className='Row'>
                    <Categorypane />
                    <div id='Product_tiles_container'>
                        <div>
                            <Freesoftwaretile />
                            <Bingimagetile />
                            <Onlineservicetile />
                        </div>
                        <div>
                            <Paidsoftwaretile />
                            <Presentationtile />
                        </div>
                        <div>
                            <Minorphotoshoptile />
                            <Wordprocessingtile />
                        </div>
                    </div>
                </div>
                <a id='All_link' href='./all-products'>All Products</a>
            </section>
            <Footer />
        </>
    )
}