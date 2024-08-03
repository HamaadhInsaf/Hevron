import '../CSS/Style.css';
import Allheader from '../Components/Allheader';
import Categorypane from '../Components/Categorypane';
import Footer from '../Components/Footer';
import Testemailtile from '../Components/Products/Testemailtile';
import Adobecracktile from '../Components/Products/Adobecracktile';
import Bingimagetile from '../Components/Products/Bingimagetile';
import Freesoftwaretile from '../Components/Products/Freesoftwaretile';
import Paidsoftwaretile from '../Components/Products/Paidsoftwaretile';
import SimpleHTMLtile from '../Components/Products/SimpleHTMLtile';
import Simplepythontile from '../Components/Products/Simplepythontile';
import Pythonscripttile from '../Components/Products/Pythonscripttile';
import Minorphotoshoptile from '../Components/Products/Minorphotoshoptile';
import Complexpythontile from '../Components/Products/Complexpythontile';
import Hevrondoubtstile from '../Components/Products/Hevrondoubtstile';
import Hevronvideotile from '../Components/Products/Hevronvideotile';
import Onlineservicetile from '../Components/Products/Onlineservicetile';
import Presentationtile from '../Components/Products/Presentationtile';
import Pythonflasktile from '../Components/Products/Pythonflasktile';
import Wordprocessingtile from '../Components/Products/Wordprocessingtile';

export default function Allproducts() {
    document.title = "All Products"
    return (
        <>
            <Allheader />
            <p id='Title'>All Products</p>
            <section id='Details'>
                <div className='Row'>
                    <Categorypane />
                    <div id='Product_tiles_container'>
                        <div>
                            <Testemailtile />
                            <Adobecracktile />
                            <Bingimagetile />
                            <Complexpythontile />
                            <Onlineservicetile />
                        </div>
                        <div>
                            <Freesoftwaretile />
                            <Paidsoftwaretile />
                            <Simplepythontile />
                            <Hevrondoubtstile />
                            <Presentationtile />
                            <Wordprocessingtile />
                        </div>
                        <div>
                            <Pythonscripttile />
                            <SimpleHTMLtile />
                            <Minorphotoshoptile />
                            <Hevronvideotile />
                            <Pythonflasktile />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}