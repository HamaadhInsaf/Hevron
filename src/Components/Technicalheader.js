import '../CSS/Style.css'
import Navbar from './Navbar'

export default function Technicalheader() {
    return (
    <section id='Header'>
        <Navbar />
        <img src="/Images/Categories-tab.png" alt="Categories tab" id='Tab' />
        <div id="Textbox">
            <p>We Offer Many</p>
            <h1>Technical Services</h1>
            <p>For Your Convenience</p>
        </div>
    </section>
    )
}