import { useState, useEffect } from "react";
import "../CSS/Style.css"
import Accountheader from "../Components/Accountheader"
import Footer from "../Components/Footer"

export default function Account() {
    const [Currentdate, Setcurrentdate] = useState(new Date());
    useEffect(() => {
        const Intervalid = setInterval(() => {
            Setcurrentdate(new Date())
        }, 1000);
        return () => clearInterval(Intervalid);
    }, []);
    return (
        <>
            <Accountheader />
            <div id="Account">
                <img src="/Images/Account.png" alt="Account" />
                <h2>Guest</h2>
                <br/>
                <h3>Current Session Time:</h3>
                <p id="Date">{Currentdate.toLocaleString("en-US", {year: "numeric", month: "long", day: "2-digit", weekday: "long", timeZoneName: "long", hour: "numeric", minute: "numeric", second: "numeric"})}</p>
            </div>
            <Footer />
        </>
    )
}