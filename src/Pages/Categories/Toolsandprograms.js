import '../../CSS/Style.css'
import Toolsheader from '../../Components/Toolsheader'
import Categorypane from '../../Components/Categorypane';
import Footer from '../../Components/Footer';
import Adobecracktile from '../../Components/Products/Adobecracktile';
import Freesoftwaretile from '../../Components/Products/Freesoftwaretile';
import Paidsoftwaretile from '../../Components/Products/Paidsoftwaretile';

export default function Toolsandprograms() {
    document.title = "Tools and Programs"
    return (
        <>
            <Toolsheader />
            <p id='Title'>Tools and Programs</p>
            <section id='Details'>
                <div className='Row'>
                    <Categorypane />
                    <div id='Product_tiles_container'>
                        <div>
                            <Adobecracktile />
                        </div>
                        <div>
                            <Freesoftwaretile />
                        </div>
                        <div>
                            <Paidsoftwaretile />
                        </div>
                    </div>
                </div>
                <a id='All_link' href='./all-products'>All Products</a>
            </section>
            <Footer />
        </>
    )
}