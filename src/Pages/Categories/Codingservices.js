import '../../CSS/Style.css'
import Codingheader from '../../Components/Codingheader'
import Categorypane from '../../Components/Categorypane'
import Footer from '../../Components/Footer';
import Simplepythontile from '../../Components/Products/Simplepythontile';
import SimpleHTMLtile from '../../Components/Products/SimpleHTMLtile';
import Pythonscripttile from '../../Components/Products/Pythonscripttile';
import Complexpythontile from '../../Components/Products/Complexpythontile';
import Pythonflasktile from '../../Components/Products/Pythonflasktile';

export default function Codingservices() {
    document.title = "Coding Services"
    return (
        <>
            <Codingheader />
            <p id='Title'>Coding Services</p>
            <section id='Details'>
                <div className='Row'>
                    <Categorypane />
                    <div id='Product_tiles_container'>
                        <div>
                            <Simplepythontile />
                            <Pythonscripttile />
                        </div>
                        <div>
                            <Complexpythontile />
                            <SimpleHTMLtile />
                        </div>
                        <div>
                            <Pythonflasktile />
                        </div>
                    </div>
                </div>
                <a id='All_link' href='./all-products'>All Products</a>
            </section>
            <Footer />
        </>
    )
}