import React from "react";

const Navbar = () => {
  return (
    <>
      <div className='navbar-area'>
        <div id='navbar' className='comero-nav'>
          <div className='container'>
            <nav className='navbar navbar-expand-md navbar-light'>
              <a className='navbar-brand' href='index.html'>
                <img src='' alt='logo' />
              </a>
              <button
                className='navbar-toggler navbar-toggler-right collapsed'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
              >
                <ul className='navbar-nav'>
                  <li className='nav-item p-relative'>
                    <a className='nav-link active' href='#'>
                      Home <i className='fas fa-chevron-down'></i>
                    </a>
                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <a className='nav-link active' href='index.html'>
                          Home One
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='shop-style-two.html'>
                          Home Two
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='shop-style-three.html'>
                          Home Three
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='shop-style-four.html'>
                          Home Four
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='shop-style-five.html'>
                          Home Five
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='shop-style-six.html'>
                          Home Six
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='shop-style-seven.html'>
                          Home Seven
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='shop-style-eight.html'>
                          Home Eight
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='shop-style-nine.html'>
                          Home Nine
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='shop-style-ten.html'>
                          Home Ten
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='shop-style-eleven.html'>
                          Home Eleven
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='covid-19.html'>
                          Covid-19<span className='new'>New</span>
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='grocery.html'>
                          Grocery<span className='new'>New</span>
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='electronics.html'>
                          Electronics<span className='new'>New</span>
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='furniture.html'>
                          Furniture<span className='new'>New</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item megamenu'>
                    <a className='nav-link' href='#'>
                      Shop <i className='fas fa-chevron-down'></i>
                    </a>
                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <div className='container'>
                          <div className='row'>
                            <div className='col'>
                              <h6 className='submenu-title'>
                                Collection Layouts
                              </h6>
                              <ul className='megamenu-submenu'>
                                <li>
                                  <a href='collections-style-one.html'>
                                    Collections Type 1
                                  </a>
                                </li>
                                <li>
                                  <a href='collections-style-two.html'>
                                    Collections Type 2
                                  </a>
                                </li>
                                <li>
                                  <a href='category-left-sidebar.html'>
                                    Left Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href='category-left-sidebar-with-block.html'>
                                    Left Sidebar With HTML Block
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar.html'>
                                    Right Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar-with-block.html'>
                                    Right Sidebar With HTML Block
                                  </a>
                                </li>
                                <li>
                                  <a href='category-without-sidebar.html'>
                                    Without Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href='category-sidebar-fullwidth.html'>
                                    With Sidebar Full Width
                                  </a>
                                </li>
                                <li>
                                  <a href='category-without-sidebar-fullwidth.html'>
                                    Without Sidebar Full Width
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='col'>
                              <h6 className='submenu-title'>Other Pages</h6>
                              <ul className='megamenu-submenu'>
                                <li>
                                  <a href='cart.html'>Cart</a>
                                </li>
                                <li>
                                  <a href='checkout.html'>Checkout</a>
                                </li>
                                <li>
                                  <a href='compare.html'>Compare</a>
                                </li>
                                <li>
                                  <a href='login.html'>Login</a>
                                </li>
                                <li>
                                  <a href='signup.html'>Signup</a>
                                </li>
                                <li>
                                  <a href='customer-service.html'>
                                    Customer Service
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='col'>
                              <h6 className='submenu-title'>Top Brands</h6>
                              <ul className='megamenu-submenu top-brands'>
                                <li>
                                  <a href='#'>
                                    <img src='' alt='image' />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <img src='' alt='image' />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <img src='' alt='image' />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <img src='' alt='image' />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <img src='' alt='image' />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <img src='' alt='image' />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item megamenu'>
                    <a className='nav-link' href='#'>
                      Women&#x27;s <i className='fas fa-chevron-down'></i>
                    </a>
                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <div className='container'>
                          <div className='row'>
                            <div className='col'>
                              <h6 className='submenu-title'>Clothing</h6>
                              <ul className='megamenu-submenu'>
                                <li>
                                  <a href='category-without-sidebar-fullwidth.html'>
                                    Coats
                                  </a>
                                </li>
                                <li>
                                  <a href='category-sidebar-fullwidth.html'>
                                    Jackets
                                  </a>
                                </li>
                                <li>
                                  <a href='category-left-sidebar.html'>
                                    Blazers
                                  </a>
                                </li>
                                <li>
                                  <a href='category-left-sidebar-with-block.html'>
                                    Dresses
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar.html'>
                                    Trousers
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar-with-block.html'>
                                    Jeans
                                  </a>
                                </li>
                                <li>
                                  <a href='category-without-sidebar.html'>
                                    Sweatshirts
                                  </a>
                                </li>
                                <li>
                                  <a href='category-sidebar-fullwidth.html'>
                                    T-Shirts
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='col'>
                              <h6 className='submenu-title'>Shoes</h6>
                              <ul className='megamenu-submenu'>
                                <li>
                                  <a href='category-without-sidebar-fullwidth.html'>
                                    Trainers
                                  </a>
                                </li>
                                <li>
                                  <a href='category-left-sidebar.html'>Boots</a>
                                </li>
                                <li>
                                  <a href='category-left-sidebar-with-block.html'>
                                    Heels
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar.html'>
                                    Flats
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar-with-block.html'>
                                    Heeled Sandals
                                  </a>
                                </li>
                                <li>
                                  <a href='category-without-sidebar.html'>
                                    Platforms
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='col'>
                              <h6 className='submenu-title'>Accessories</h6>
                              <ul className='megamenu-submenu'>
                                <li>
                                  <a href='category-left-sidebar.html'>Bags</a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar.html'>
                                    Glasses
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar-with-block.html'>
                                    Jewellery
                                  </a>
                                </li>
                                <li>
                                  <a href='category-without-sidebar.html'>
                                    iPhone Cases
                                  </a>
                                </li>
                                <li>
                                  <a href='category-sidebar-fullwidth.html'>
                                    Gadgets
                                  </a>
                                </li>
                                <li>
                                  <a href='category-sidebar-fullwidth.html'>
                                    Hats &amp; Beanie
                                  </a>
                                </li>
                                <li>
                                  <a href='category-without-sidebar-fullwidth.html'>
                                    Purses
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='col'>
                              <ul className='megamenu-submenu'>
                                <li>
                                  <div className='aside-trending-products'>
                                    <img
                                      src='_next/static/images/category-products-img2-e7ea87b43560995fa16feb78dd9ff0f4.jpg'
                                      alt='image'
                                    />
                                    <div className='category'>
                                      <h4>Top Trending</h4>
                                    </div>
                                    <a href='#'></a>
                                  </div>
                                  <div className='aside-trending-products'>
                                    <img
                                      src='_next/static/images/category-products-img3-f1dfa0804556727a50db24417d716257.jpg'
                                      alt='image'
                                    />
                                    <div className='category'>
                                      <h4>Popular Products</h4>
                                    </div>
                                    <a href='#'></a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item megamenu'>
                    <a className='nav-link' href='#'>
                      Men&#x27;s <i className='fas fa-chevron-down'></i>
                    </a>
                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <div className='container'>
                          <div className='row'>
                            <div className='col'>
                              <h6 className='submenu-title'>Clothing</h6>
                              <ul className='megamenu-submenu'>
                                <li>
                                  <a href='category-left-sidebar.html'>Coats</a>
                                </li>
                                <li>
                                  <a href='category-left-sidebar-with-block.html'>
                                    Jackets
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar.html'>
                                    Jeans
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar-with-block.html'>
                                    T-Shirts
                                  </a>
                                </li>
                                <li>
                                  <a href='category-sidebar-fullwidth.html'>
                                    Sweatshirts
                                  </a>
                                </li>
                                <li>
                                  <a href='category-without-sidebar.html'>
                                    Knitwear
                                  </a>
                                </li>
                                <li>
                                  <a href='category-sidebar-fullwidth.html'>
                                    Shirts
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='col'>
                              <h6 className='submenu-title'>Shoes</h6>
                              <ul className='megamenu-submenu'>
                                <li>
                                  <a href='category-without-sidebar-fullwidth.html'>
                                    Trainers
                                  </a>
                                </li>
                                <li>
                                  <a href='category-sidebar-fullwidth.html'>
                                    Boots
                                  </a>
                                </li>
                                <li>
                                  <a href='category-left-sidebar.html'>Heels</a>
                                </li>
                                <li>
                                  <a href='category-left-sidebar-with-block.html'>
                                    Flats
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar.html'>
                                    Heeled Sandals
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar-with-block.html'>
                                    Sandals
                                  </a>
                                </li>
                                <li>
                                  <a href='category-left-sidebar-with-block.html'>
                                    Platforms
                                  </a>
                                </li>
                                <li>
                                  <a href='category-without-sidebar.html'>
                                    Heeled Sandals
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='col'>
                              <h6 className='submenu-title'>Accessories</h6>
                              <ul className='megamenu-submenu'>
                                <li>
                                  <a href='category-without-sidebar.html'>
                                    Bags
                                  </a>
                                </li>
                                <li>
                                  <a href='category-left-sidebar.html'>
                                    Backpacks
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar.html'>
                                    Glasses
                                  </a>
                                </li>
                                <li>
                                  <a href='category-left-sidebar.html'>
                                    Earrings
                                  </a>
                                </li>
                                <li>
                                  <a href='category-sidebar-fullwidth.html'>
                                    iPhone Cases
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar.html'>
                                    Mobile Accessories
                                  </a>
                                </li>
                                <li>
                                  <a href='category-without-sidebar-fullwidth.html'>
                                    Socks
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='col'>
                              <ul className='megamenu-submenu'>
                                <li>
                                  <div className='aside-trending-products'>
                                    <img
                                      src='_next/static/images/category-products-img2-e7ea87b43560995fa16feb78dd9ff0f4.jpg'
                                      alt='image'
                                    />
                                    <div className='category'>
                                      <h4>Top Trending</h4>
                                    </div>
                                    <a href='#'></a>
                                  </div>
                                  <div className='aside-trending-products'>
                                    <img
                                      src='_next/static/images/category-products-img3-f1dfa0804556727a50db24417d716257.jpg'
                                      alt='image'
                                    />
                                    <div className='category'>
                                      <h4>Popular Products</h4>
                                    </div>
                                    <a href='#'></a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item megamenu'>
                    <a className='nav-link' href='#'>
                      Today&#x27;s Deals <i className='fas fa-chevron-down'></i>
                    </a>
                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <div className='container'>
                          <div className='row'>
                            <div className='col'>
                              <h6 className='submenu-title'>Clothing</h6>
                              <ul className='megamenu-submenu'>
                                <li>
                                  <a href='category-left-sidebar.html'>Coats</a>
                                </li>
                                <li>
                                  <a href='category-left-sidebar-with-block.html'>
                                    Jackets
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar.html'>
                                    Jeans
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar-with-block.html'>
                                    T-Shirts
                                  </a>
                                </li>
                                <li>
                                  <a href='category-sidebar-fullwidth.html'>
                                    Sweatshirts
                                  </a>
                                </li>
                                <li>
                                  <a href='category-without-sidebar.html'>
                                    Knitwear
                                  </a>
                                </li>
                                <li>
                                  <a href='category-sidebar-fullwidth.html'>
                                    Shirts
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='col'>
                              <h6 className='submenu-title'>Shoes</h6>
                              <ul className='megamenu-submenu'>
                                <li>
                                  <a href='category-without-sidebar-fullwidth.html'>
                                    Trainers
                                  </a>
                                </li>
                                <li>
                                  <a href='category-sidebar-fullwidth.html'>
                                    Boots
                                  </a>
                                </li>
                                <li>
                                  <a href='category-left-sidebar.html'>Heels</a>
                                </li>
                                <li>
                                  <a href='category-left-sidebar-with-block.html'>
                                    Flats
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar.html'>
                                    Heeled Sandals
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar-with-block.html'>
                                    Sandals
                                  </a>
                                </li>
                                <li>
                                  <a href='category-left-sidebar-with-block.html'>
                                    Platforms
                                  </a>
                                </li>
                                <li>
                                  <a href='category-without-sidebar.html'>
                                    Heeled Sandals
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='col'>
                              <h6 className='submenu-title'>Accessories</h6>
                              <ul className='megamenu-submenu'>
                                <li>
                                  <a href='category-without-sidebar.html'>
                                    Bags
                                  </a>
                                </li>
                                <li>
                                  <a href='category-left-sidebar.html'>
                                    Backpacks
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar.html'>
                                    Glasses
                                  </a>
                                </li>
                                <li>
                                  <a href='category-left-sidebar.html'>
                                    Earrings
                                  </a>
                                </li>
                                <li>
                                  <a href='category-sidebar-fullwidth.html'>
                                    iPhone Cases
                                  </a>
                                </li>
                                <li>
                                  <a href='category-right-sidebar.html'>
                                    Mobile Accessories
                                  </a>
                                </li>
                                <li>
                                  <a href='category-without-sidebar-fullwidth.html'>
                                    Socks
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='col'>
                              <ul className='megamenu-submenu'>
                                <li>
                                  <div className='aside-trending-products'>
                                    <img
                                      src='_next/static/images/category-products-img2-e7ea87b43560995fa16feb78dd9ff0f4.jpg'
                                      alt='image'
                                    />
                                    <div className='category'>
                                      <h4>Top Trending</h4>
                                    </div>
                                    <a href='#'></a>
                                  </div>
                                  <div className='aside-trending-products'>
                                    <img
                                      src='_next/static/images/category-products-img3-f1dfa0804556727a50db24417d716257.jpg'
                                      alt='image'
                                    />
                                    <div className='category'>
                                      <h4>Popular Products</h4>
                                    </div>
                                    <a href='#'></a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item p-relative'>
                    <a className='nav-link' href='#'>
                      Pages <i className='fas fa-chevron-down'></i>
                    </a>
                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <a className='nav-link' href='about.html'>
                          About Us
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='sizing-guide.html'>
                          Sizing Guide
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='gallery.html'>
                          Gallery
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='#' className='nav-link'>
                          Account
                        </a>
                        <ul className='dropdown-menu'>
                          <li className='nav-item'>
                            <a className='nav-link' href='login.html'>
                              Login
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a className='nav-link' href='signup.html'>
                              Signup
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a className='nav-link' href='cart.html'>
                              Cart
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='cart.html'>
                          Cart
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='checkout.html'>
                          Checkout
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='compare.html'>
                          Compare
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='customer-service.html'>
                          Customer Service
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='login.html'>
                          Login
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='signup.html'>
                          Signup
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='faq.html'>
                          FAQs
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='error.html'>
                          Error 404
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='contact-us.html'>
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item p-relative'>
                    <a className='nav-link' href='#'>
                      Blog <i className='fas fa-chevron-down'></i>
                    </a>
                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <a className='nav-link' href='blog.html'>
                          Blog Grid (3 in Row)
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='blog2.html'>
                          Blog Grid (2 in Row)
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='blog3.html'>
                          Blog Grid (1 in Row)
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='blog-details.html'>
                          Blog Details
                        </a>
                        <a className='nav-link' href='blog-details-two.html'>
                          Blog Details Two
                        </a>
                        <a className='nav-link' href='blog-details-three.html'>
                          Blog Details Three
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className='others-option'>
                  <div className='option-item'>
                    <i
                      className='search-btn fas fa-search'
                      style={{ display: "block" }}
                    ></i>
                    <i className='close-btn fas fa-times '></i>
                    <div
                      className='search-overlay search-popup'
                      style={{ display: "none" }}
                    >
                      <div className='search-box'>
                        <form className='search-form'>
                          <input
                            type='text'
                            className='search-input'
                            name='search'
                            placeholder='Search'
                          />
                          <button className='search-button' type='submit'>
                            <i className='fas fa-search'></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className='option-item'>
                    <a href='login.html'>Login</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
