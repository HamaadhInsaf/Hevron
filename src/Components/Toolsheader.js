import '../CSS/Style.css'
import Navbar from './Navbar'

export default function Toolsheader() {
    return (
    <section id='Header'>
        <Navbar />
        <img src="/Images/Categories-tab.png" alt="Categories tab" id='Tab' />
        <div id="Textbox">
            <p>There are Many</p>
            <h1>Tools and Programs</h1>
            <p>Available for Use</p>
        </div>
    </section>
    )
}