import "./App.css";
import { React } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className='top-header'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7 col-md-6'>
              <ul className='top-header-nav'>
                <li>
                  <a href='about.html'>About</a>
                </li>
                <li>
                  <a href='index.html'>Our Stores</a>
                </li>
                <li>
                  <a href='faq.html'>FAQ's</a>
                </li>
                <li>
                  <a href='contact-us.html'>Contact</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-5 col-md-6'>
              <ul className='top-header-right-nav'>
                <li>
                  <a
                    data-toggle='modal'
                    data-target='#shoppingWishlistModal'
                    href='#'
                  >
                    Wishlist <i className='far fa-heart'></i>
                  </a>
                </li>
                <li>
                  <a href='compare.html'>
                    Compare <i className='fas fa-balance-scale'></i>
                  </a>
                </li>
                <li>
                  <div className='languages-list'>
                    <select>
                      <option value='1'>Eng</option>
                      <option value='2'>Ger</option>
                      <option value='3'>Span</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      <div className='page-title-area'>
        <div className='container'>
          <ul>
            <li>
              <a href='index.html'>Home</a>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className='main-banner item-bg1'>
        <div className='d-table'>
          <div className='d-table-cell'>
            <div className='container'>
              <div className='main-banner-content'>
                <span>New Inspiration 2020</span>
                <h1>CLOTHING MADE FOR YOU!</h1>
                <p>Trending from men and women style collection</p>
                <a className='btn btn-primary' href='#'>
                  Shop Women's
                </a>
                <a className='btn btn-light' href='#'>
                  Shop Men's
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sections*/}
      <Home />
      <Footer />
    </>
  );
}

export default App;
