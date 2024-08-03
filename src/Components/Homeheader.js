import '../CSS/Style.css';
import Navbar from './Navbar';

export default function Homeheader() {
    return (
        <section id='Header'>
            <Navbar />
            <img src="/Images/Home-tab.png" alt="Home tab" id='Tab' />
            <div id='Textbox'>
                <p>Shop</p>
                <h1>Anywhere.</h1>
                <h1>Anytime.</h1>
            </div>
        </section>
    )
}