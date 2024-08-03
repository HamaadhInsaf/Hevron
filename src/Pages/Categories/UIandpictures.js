import '../../CSS/Style.css'
import UIheader from '../../Components/UIheader'
import Categorypane from '../../Components/Categorypane'
import Footer from '../../Components/Footer';
import Bingimagetile from '../../Components/Products/Bingimagetile';
import Hevronvideotile from '../../Components/Products/Hevronvideotile';

export default function UIandpictures() {
    document.title = "UI and Pictures"
    return (
        <>
            <UIheader />
            <p id='Title'>UI and Pictures</p>
            <section id='Details'>
                <div className='Row'>
                    <Categorypane />
                    <div id='Product_tiles_container'>
                        <div>
                            <Bingimagetile />
                        </div>
                        <div>
                            <Hevronvideotile />
                        </div>
                    </div>
                </div>
                <a id='All_link' href='./all-products'>All Products</a>
            </section>
            <Footer />
        </>
    )
}