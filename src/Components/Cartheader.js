import '../CSS/Style.css';
import Navbar from './Navbar';

export default function Cartheader() {
    return (
        <section id='Otherheader'>
            <Navbar />
            <img src="/Images/Cart-tab.png" alt="Cart tab" id='Tab' />
        </section>
    )
}