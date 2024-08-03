import '../CSS/Style.css';

export default function Navbar() {
    //Functions
    function Menushow() {
        const Links = document.getElementById("Links")
        Links.style.right = "0";
    }
    function Menuhide() {
        const Links = document.getElementById("Links")
        Links.style.right = "-200px";
    }
    function Categoryshow() {
        const Categorylist = document.getElementById("Category_list")
        Categorylist.style.right = "0";
    }
    function Categoryhide() {
        const Categorylist = document.getElementById("Category_list")
        Categorylist.style.right = "-300px";
    }
    function Toolsredirect() {
        window.location.href = "categories/tools-and-programs"
    }
    function Codingredirect() {
        window.location.href = "categories/coding-services"
    }
    function Technicalredirect() {
        window.location.href = "categories/technical-services"
    }
    function UIredirect() {
        window.location.href = "categories/ui-and-pictures"
    }
    function Otherredirect() {
        window.location.href = "categories/other"
    }
    //Inline styles
    const Categoryhidestyle = {
        size: '50px',
        color: 'white',
        cursor: 'pointer',
    }
    const Categoriesstyle = {
        size: '100px',
        color: 'white',
        marginLeft: '7px',
        fontFamily: '"RocknRoll One", sans-serif',
    }
    const hrstyle = {
        width: '70%',
        marginLeft: '18px',
    }
    const Toolsstyle = {
        color: 'white',
        cursor: 'pointer',
    }
    const Codingstyle = {
        marginLeft: '17px',
        color: 'white',
        cursor: 'pointer',
    }
    const Technicalstyle = {
        marginLeft: '10px',
        color: 'white',
        cursor: 'pointer',
    }
    const UIstyle = {
        color: 'white',
        cursor: 'pointer',
        marginLeft: '20px',
    }
    const Otherstyle = {
        color: 'white',
        cursor: 'pointer',
        marginLeft: '55px',
    }
    // Return
    return (
        <nav>
            <a href="/"><img src="/Images/Logo.png" alt="Logo" id='Logo' /></a>
            <div id='Links'>
                <i className='Menu_icon fa fa-times' onClick={ Menuhide } id='Special1'></i>
                <ul>
                    <li><a href="#categories"><i className='fa fa-th-list' onClick={ Categoryshow }></i></a></li>
                    <ul id='Category_list'>
                        <i className='fa fa-times' onClick={ Categoryhide } style={ Categoryhidestyle }></i>
                        <li style={ Categoriesstyle }><b><u>Categories</u></b></li>
                        {/* Tools and Programs */}
                        <li id='Tools_category' style={ Toolsstyle } onClick={ Toolsredirect }>Tools and Programs</li>
                        <hr style={ hrstyle } />
                        {/* Coding Services */}
                        <li id='Coding_services' style={ Codingstyle } onClick={ Codingredirect }>Coding Services</li>
                        <hr style={ hrstyle } />
                        {/* Technical Services */}
                        <li id='Technical_category' style={ Technicalstyle } onClick={ Technicalredirect }>Technical Services</li>
                        <hr style={ hrstyle } />
                        {/* UI and Pictures */}
                        <li id='UI_category' style={ UIstyle } onClick={ UIredirect }>UI and Pictures</li>
                        <hr style={ hrstyle } />
                        {/* Other */}
                        <li id='Other_category' style={ Otherstyle } onClick={ Otherredirect }>Other</li>
                    </ul>
                    <li><a href="/cart"><i className='fa fa-shopping-cart'></i></a></li>
                    <li><a href="/about"><i className='fa fa-info-circle'></i></a></li>
                    <li><a href="/account"><i className='fa fa-user'></i></a></li>
                </ul>
            </div>
            <i className='Menu_icon fa fa-bars' onClick={ Menushow } id='Special2'></i>
        </nav>
    )
}