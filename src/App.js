import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './CSS/Style.css';
import Home from './Pages/Home';
import Toolsandprograms from './Pages/Categories/Toolsandprograms';
import Categoryredirect from './Services/Categoryredirect';
import Codingservices from './Pages/Categories/Codingservices';
import Technicalservices from './Pages/Categories/Technicalservices';
import UIandpictures from './Pages/Categories/UIandpictures';
import Other from './Pages/Categories/Other';
import Adobecrack from './Pages/Products/Adobecrack';
import Bingimage from './Pages/Products/Bingimage';
import Complexpython from './Pages/Products/Complexpython';
import Freesoftware from './Pages/Products/Freesoftware';
import Hevrondoubts from './Pages/Products/Hevrondoubts';
import Minorphotoshop from './Pages/Products/Minorphotoshop';
import Onlineservice from './Pages/Products/Onlineservice'
import Paidsoftware from './Pages/Products/Paidsoftware';
import Presentation from './Pages/Products/Presentation';
import Pythonflask from './Pages/Products/Pythonflask';
import Pythonscript from './Pages/Products/Pythonscript';
import SimpleHTML from './Pages/Products/SimpleHTML';
import Simplepython from './Pages/Products/Simplepython';
import Testemail from './Pages/Products/Testemail';
import Wordprocessing from './Pages/Products/Wordprocessing';
import Hevronvideo from './Pages/Products/Hevronvideo';
import Allproducts from './Pages/Alllproducts';
import Account from './Pages/Account';
import Cart from './Pages/Cart';
import About from './Pages/About';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Categories */}
                {/* Home */}
                <Route index element={<Home />} />
                <Route path='/home' element={<Home />} />
                {/* Tools and programs */}
                <Route path='/tools-and-programs' element={<Toolsandprograms />} />
                <Route path='/categories/tools-and-programs' element={<Toolsandprograms />} />
                <Route path='/categories/categories/tools-and-programs' element={<Categoryredirect />} />
                <Route path='/products/categories/tools-and-programs' element={<Categoryredirect />} />
                {/* Coding services */}
                <Route path='/coding-services' element={<Codingservices />} />
                <Route path='/categories/coding-services' element={<Codingservices />} />
                <Route path='/categories/categories/coding-services' element={<Categoryredirect />} />
                <Route path='/products/categories/coding-services' element={<Categoryredirect />} />
                {/* Technical services */}
                <Route path='/technical-services' element={<Technicalservices />} />
                <Route path='/categories/technical-services' element={<Technicalservices />} />
                <Route path='/categories/categories/technical-services' element={<Categoryredirect />} />
                <Route path='/products/categories/technical-services' element={<Categoryredirect />} />
                {/* UI and pictures */}
                <Route path='/ui-and-pictures' element={<UIandpictures />} />
                <Route path='/categories/ui-and-pictures' element={<UIandpictures />} />
                <Route path='/categories/categories/ui-and-pictures' element={<Categoryredirect />} />
                <Route path='/products/categories/ui-and-pictures' element={<Categoryredirect />} />
                {/* Other */}
                <Route path='/other' element={<Other />} />
                <Route path='/categories/other' element={<Other />} />
                <Route path='/categories/categories/other' element={<Categoryredirect />} />
                <Route path='/products/categories/other' element={<Categoryredirect />} />
                {/* All products */}
                <Route path='/all-products' element={<Allproducts />} />
                <Route path='/categories/all-products' element={<Allproducts />} />
                {/*Other navbar icons*/}
                {/*Account*/}
                <Route path='/account' element={<Account />} />
                {/*Cart*/}
                <Route path='/cart' element={<Cart />} />
                {/*About*/}
                <Route path='/about' element={<About />} />
                {/* Product pages */}
                {/* Adobe crack softwares */}
                <Route path='/adobe-crack-softwares' element={<Adobecrack />} />
                <Route path='/products/adobe-crack-softwares' element={<Adobecrack />} />
                {/* Bing image creator */}
                <Route path='/bing-image-creator' element={<Bingimage />} />
                <Route path='/products/bing-image-creator' element={<Bingimage />} />
                {/* Complex python script */}
                <Route path='/complex-python-script' element={<Complexpython />} />
                <Route path='/products/complex-python-script' element={<Complexpython />} />
                {/* Free software recommendation */}
                <Route path='/free-software-recommendation' element={<Freesoftware />} />
                <Route path='/products/free-software-recommendation' element={<Freesoftware />} />
                {/* Hevron doubts */}
                <Route path='/hevron-doubts' element={<Hevrondoubts />} />
                <Route path='/products/hevron-doubts' element={<Hevrondoubts />} />
                {/* Minor photoshop tweaks */}
                <Route path='/minor-photoshop-tweaks' element={<Minorphotoshop />} />
                <Route path='/products/minor-photoshop-tweaks' element={<Minorphotoshop />} />
                {/* Online service recommendation */}
                <Route path='/online-service-recommendation' element={<Onlineservice />} />
                <Route path='/products/online-service-recommendation' element={<Onlineservice />} />
                {/* Paid software recommendation */}
                <Route path='/paid-software-recommendation' element={<Paidsoftware />} />
                <Route path='/products/paid-software-recommendation' element={<Paidsoftware />} />
                {/* Presentation */}
                <Route path='/presentation' element={<Presentation />} />
                <Route path='/products/presentation' element={<Presentation />} />
                {/* Python flask site */}
                <Route path='/python-flask-site' element={<Pythonflask />} />
                <Route path='/products/python-flask-site' element={<Pythonflask />} />
                {/* Python script debugging */}
                <Route path='/python-script-debugging' element={<Pythonscript />} />
                <Route path='/products/python-script-debugging' element={<Pythonscript />} />
                {/* Simple HTML site */}
                <Route path='/simple-html-site' element={<SimpleHTML />} />
                <Route path='/products/simple-html-site' element={<SimpleHTML />} />
                {/* Simple python script */}
                <Route path='/simple-python-script' element={<Simplepython />} />
                <Route path='/products/simple-python-script' element={<Simplepython />} />
                {/* Test email */}
                <Route path='/test-email' element={<Testemail />} />
                <Route path='/products/test-email' element={<Testemail />} />
                {/* Word processing */}
                <Route path='/word-processing' element={<Wordprocessing />} />
                <Route path='/products/word-processing' element={<Wordprocessing />} />
                {/* Hevron prototype video */}
                <Route path='/hevron-video' element={<Hevronvideo />} />
                <Route path='/products/hevron-video' element={<Hevronvideo />} />
            </Routes>
        </BrowserRouter>
    )
}