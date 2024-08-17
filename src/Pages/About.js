import "../CSS/Style.css";
import Aboutheader from "../Components/Aboutheader";
import Footer from "../Components/Footer";

export default function About() {
    return(
        <>
            <Aboutheader />
            <div id="About_paragraph">
                <p id="About">Hevron is an experimental site created by Hamaadh and Thisen. It has the basic features of displaying and viewing products in their respective categories. We will not be working on the emailing, login and sign-up, and adding to cart features. We will not be adding any new features as well since we are stopping support for the website. We wanted to atleast add the cart feature or the login and sign-up feature but we decided to not so that means you can't order anything; but after all, this is just an experimental site.</p>
                <img src="Images/Logo.png" alt="Logo" style={{marginRight: "10%", height: "150px", width: "562.5px"}}/>
            </div>
            <Footer />
        </>
    )
}
