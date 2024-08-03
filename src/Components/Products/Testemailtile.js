import '../../CSS/Style.css'

export default function Testemailtile() {
    return (
    <div className='Product_tile'>
        <a href='/products/test-email'>
            <img src='/Images/Products/Test-email/Picture-1.png' className='Product_image' alt='' />
            <div className='Product_info'>
                <div className='Product_name'>Test Email</div>
                <div className='Product_price'>FREE</div>
            </div>
        </a>
    </div>
    )
}