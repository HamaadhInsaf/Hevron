import '../../CSS/Style.css'

export default function Presentationtile() {
    return (
    <div className='Product_tile'>
        <a href='/products/presentation'>
            <img src='/Images/Products/Presentation/Picture-1.png' className='Product_image' alt='' />
            <div className='Product_info'>
                <div className='Product_name'>Presentation</div>
                <div className='Product_price'>$$$</div>
            </div>
        </a>
    </div>
    )
}