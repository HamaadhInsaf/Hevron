import '../CSS/Style.css';
import Homeheader from '../Components/Homeheader';
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

export default function Home() {
    document.title = "Hevron"
    return (
        <>
            <Homeheader />
            <p id='Title'>Featured Products</p>
            <section id='Details'>
                <div className='Row'>
                    <Categorypane />
                    <div id='Product_tiles_container'>
                        <div>
                            <Testemailtile />
                            <Adobecracktile />
                            <Bingimagetile />
                        </div>
                        <div>
                            <Freesoftwaretile />
                            <Paidsoftwaretile />
                            <Simplepythontile />
                        </div>
                        <div>
                            <Pythonscripttile />
                            <SimpleHTMLtile />
                            <Minorphotoshoptile />
                        </div>
                    </div>
                </div>
                <a id='All_link' href='./all-products'>All Products</a>
            </section>
            <Footer />
        </>
    )
}