import '../CSS/Style.css'

export default function Categoryredirect() {
    var Path = window.location.pathname;
    if (Path.indexOf("tools-and-programs") !== -1) {
        window.location.href = "../../categories/tools-and-programs"
    } else if (Path.indexOf("coding-services") !== -1) {
        window.location.href = "../../categories/coding-services"
    } else if (Path.indexOf("technical-services") !== -1) {
        window.location.href = "../../categories/technical-services"
    } else if (Path.indexOf("ui-and-pictures") !== -1) {
        window.location.href = "../../categories/ui-and-pictures"
    } else if (Path.indexOf("other") !== -1) {
        window.location.href = "../../categories/other"
    } else {
        // window.alert("We encountered an error. Redirecting..")
        // window.location.href = "../"
        setTimeout(() => {
            window.location.href = "../";
        }, 3000);
        return (
            <div id="Error">
                <img src="/Images/Error.png" alt="Error" />
                <h3 align='center'>Error 400 - Bad Request</h3>
            </div>
        )
    }
}