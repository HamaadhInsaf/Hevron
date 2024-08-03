import '../CSS/Style.css'
import Navbar from './Navbar'

export default function UIheader() {
    return (
    <section id='Header'>
        <Navbar />
        <img src="/Images/Categories-tab.png" alt="Categories tab" id='Tab' />
        <div id="Textbox">
            <p>There are plenty of</p>
            <h1>UI and Pictures</h1>
            <p>To Add to Your Gallery</p>
        </div>
    </section>
    )
}