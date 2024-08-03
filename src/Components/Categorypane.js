import '../CSS/Style.css';

export default function Categorypane() {
    return (
        <div id='Category_pane'>
            <h3>Categories</h3>
            <div>
                <span><a href='categories/tools-and-programs'>Tools and Programs</a></span>
            </div>
            <div>
                <span><a href='categories/coding-services'>Coding Services</a></span>
            </div>
            <div>
                <span><a href='categories/technical-services'>Technical Services</a></span>
            </div>
            <div>
                <span><a href='categories/ui-and-pictures'>UI and Pictures</a></span>
            </div>
            <div>
                <span><a href='categories/other'>Other</a></span>
            </div>
        </div>
    )
}