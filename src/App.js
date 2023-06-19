// import logo from './logo.svg';
import './App.css';
import './styles.css'
// import Test from './components/Test.js';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Gallery from './pages/Gallery'
import Cart from './pages/Cart'
import { Route, Routes } from "react-router-dom"



function App() {
  return (
    <>
      {/* <Test /> */}
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Test/>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>