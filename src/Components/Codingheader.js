import '../CSS/Style.css'
import Navbar from './Navbar'

export default function Codingheader() {
    return (
    <section id='Header'>
        <Navbar />
        <img src="/Images/Categories-tab.png" alt="Categories tab" id='Tab' />
        <div id="Textbox">
            <p>Our Experts Offer</p>
            <h1>Coding Services</h1>
            <p>For Anyone Who is Finding a Program Difficult</p>
        </div>
    </section>
    )
}