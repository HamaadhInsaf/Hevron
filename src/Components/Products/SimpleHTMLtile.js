import '../../CSS/Style.css'

export default function SimpleHTMLtile() {
    return (
    <div className='Product_tile'>
        <a href='/products/simple-html-site'>
            <img src='/Images/Products/Simple-HTML-site/Picture-1.png' className='Product_image' alt='' />
            <div className='Product_info'>
                <div className='Product_name'>Simple HTML Site</div>
                <div className='Product_price'>$$$</div>
            </div>
        </a>
    </div>
    )
}