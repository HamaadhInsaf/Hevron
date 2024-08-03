import '../../CSS/Style.css'

export default function Wordprocessingtile() {
    return (
    <div className='Product_tile'>
        <a href='/products/word-processing'>
            <img src='/Images/Products/Word-processing/Picture-1.png' className='Product_image' alt='' />
            <div className='Product_info'>
                <div className='Product_name'>Word Processing</div>
                <div className='Product_price'>$$$</div>
            </div>
        </a>
    </div>
    )
}