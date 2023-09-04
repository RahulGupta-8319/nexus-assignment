import './App.css';
import Navbar from './components/Navbar';
import Front from './components/Front';
import AboutProducts from './components/AboutProducts';
import Products from './components/Products';
import {AboutProductsData} from './data/aboutProductsData'
import Quotes from './components/Quotes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Front />
      <Products />
      <AboutProducts AboutProductsData={AboutProductsData[0]} />
      <AboutProducts AboutProductsData={AboutProductsData[1]} />
      <AboutProducts AboutProductsData={AboutProductsData[2]} />
      <AboutProducts AboutProductsData={AboutProductsData[3]} />
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
