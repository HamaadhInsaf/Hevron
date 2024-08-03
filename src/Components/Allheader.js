import '../CSS/Style.css';
import Navbar from './Navbar';

export default function Allheader() {
    return (
        <section id='Header'>
            <Navbar />
            <img src="/Images/All-tab.png" alt="All products tab" id='Tab' />
            <div id='Textbox'>
                <p>Here are</p>
                <h1>All our Products</h1>
                <p>To Check Out</p>
            </div>
        </section>
    )
}