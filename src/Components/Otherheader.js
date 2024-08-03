import '../CSS/Style.css'
import Navbar from './Navbar'

export default function Otherheader() {
    return (
    <section id='Header'>
        <Navbar />
        <img src="/Images/Categories-tab.png" alt="Categories tab" id='Tab' />
        <div id="Textbox">
            <p>If you Just Wanna Mess Around</p>
            <h1>Others</h1>
            <p>Is the Place for You</p>
        </div>
    </section>
    )
}