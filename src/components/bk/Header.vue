<template>
  <!-- Start of Header -->
  <header class="header primary-bg-color white-scheme header-type-2">
    <div class="header-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-sm-12 col-md-12 col-lg-3 align-self-center">
            <div class="logo">
              <a href="index.html">
                <img src="images/logo4.png" alt="Logo" class="img-fluid" />
              </a>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-9">
            <div class="header-right">
              <div class="row align-items-center">
                <div
                  class="col-9 col-sm-9 col-md-9 col-lg-6 col-xl-7 order-2 order-sm-2 order-md-2 order-lg-1"
                >
                  <div class="header-search-area">
                    <div class="search-categories">
                      <form action="#">
                        <div class="search-form-input">
                          <select id="select" name="select" class="nice-select">
                            <option>All Categories</option>
                            <option>Gamepad</option>
                            <option>Laptop</option>
                            <option>Mobile</option>
                            <option>Cell Phones</option>
                            <option>Phone Cases</option>
                            <option>Cell Phones</option>
                            <option>SmartWatch</option>
                            <option>Tvs</option>
                            <option>D-Series TVs</option>
                            <option>LED TVs</option>
                            <option>OLED TVs</option>
                            <option>Video Games</option>
                            <option>Controllers</option>
                            <option>PC Gamepads</option>
                            <option>Xbox 360</option>
                            <option>Shop</option>
                            <option>Earbud</option>
                            <option>Keyboard</option>
                            <option>Watches</option>
                            <option>Blazers</option>
                            <option>Microphones</option>
                          </select>
                          <div class="search-wrapper">
                            <input type="text" placeholder="Search" />
                            <button class="header-search-btn" type="submit">
                              <i class="ion ion-ios-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <!-- end of header-search-area -->
                </div>
                <div
                  class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-5 order-1 order-sm-1 order-md-1 order-lg-2"
                >
                  <ul class="list-inline">
                    <li class="top-links list-inline-item">
                      <div class="btn-group">
                        <button class="btn-link dropdown-toggle">
                          My Account
                          <i class="fa fa-angle-down"></i>
                        </button>
                        <div class="dropdown-menu">
                          <ul>
                            <li>
                              <a href="register.html">Register</a>
                            </li>
                            <li>
                              <a href="login.html">Login</a>
                            </li>
                            <li>
                              <a href="cart.html">Shopping Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li class="language list-inline-item">
                      <div class="btn-group">
                        <button class="btn-link dropdown-toggle">
                          <img src="images/en-gb.png" alt="Icons" /> English
                          <i class="fa fa-angle-down"></i>
                        </button>
                        <div class="dropdown-menu">
                          <ul>
                            <li>
                              <a href="#">
                                <img src="images/en-gb.png" alt="Icons" /> English
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="images/fr-fr.png" alt="Icons" /> French
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li class="currency list-inline-item">
                      <div class="btn-group">
                        <button class="btn-link dropdown-toggle">
                          USD
                          <i class="fa fa-angle-down"></i>
                        </button>
                        <div class="dropdown-menu">
                          <ul>
                            <li>
                              <a href="#">€ Euro</a>
                            </li>
                            <li>
                              <a href="#">£ Pound Sterling</a>
                            </li>
                            <li>
                              <a href="#">$ US Dollar</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <!-- end of list-inline -->
                  <div class="header-cart-area">
                    <div class="header-cart">
                      <div class="btn-group">
                        <button class="btn-link dropdown-toggle icon-cart">
                          <i class="pe-7s-cart"></i>
                          <span class="cart-text">My Cart</span>
                        </button>
                        <div class="dropdown-menu">
                          <div class="shopping-cart-content">
                            <ul class="list-unstyled">
                              <li class="single-cart-item media">
                                <div class="shopping-cart-img mr-4">
                                  <a href="#">
                                    <img class="img-fluid" alt="Cart Item" src="images/cart-1.jpg" />
                                    <span class="product-quantity">1x</span>
                                  </a>
                                </div>
                                <div class="shopping-cart-title media-body">
                                  <h4>
                                    <a href="#">Donec Ac Tempus</a>
                                  </h4>
                                  <p class="cart-price">$120.00</p>
                                  <div class="product-attr">
                                    <span>Size: S</span>
                                    <span>Color: Black</span>
                                  </div>
                                </div>
                                <div class="shopping-cart-delete">
                                  <a href="#">
                                    <i class="ion ion-md-close"></i>
                                  </a>
                                </div>
                              </li>
                              <li class="single-cart-item media">
                                <div class="shopping-cart-img mr-4">
                                  <a href="#">
                                    <img class="img-fluid" alt="Cart Item" src="images/cart-2.jpg" />
                                    <span class="product-quantity">2x</span>
                                  </a>
                                </div>
                                <div class="shopping-cart-title media-body">
                                  <h4>
                                    <a href="#">Aliquam Consequat</a>
                                  </h4>
                                  <p class="cart-price">$200.00</p>
                                  <div class="product-attr">
                                    <span>Color: White</span>
                                    <span>Accessories: Yes</span>
                                  </div>
                                </div>
                                <div class="shopping-cart-delete">
                                  <a href="#">
                                    <i class="ion ion-md-close"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                            <div class="shopping-cart-total">
                              <h4>
                                Sub-Total :
                                <span>$320.00</span>
                              </h4>
                              <h4>
                                Total :
                                <span>$320.00</span>
                              </h4>
                            </div>
                            <div class="shopping-cart-btn">
                              <a class="default-btn" href="cart.html">view cart</a>
                              <a class="default-btn" href="checkout.html">checkout</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end of header-cart-area -->
                </div>
              </div>
            </div>
            <!-- end of header-right -->
          </div>
        </div>
        <!-- end of row -->
      </div>
      <!-- end of container -->
    </div>
    <!-- end of header-area -->

    <!-- Start of Main and Mobile Navigation -->
    <div class="main-nav-area transparent-nav">
      <div class="container">
        <nav id="main_nav" class="stellarnav">
          <ul class="text-left">
            <li>
              <a href="index.html">
                <span>Home</span>
              </a>
              <ul>
                <li>
                  <a href="index.html">Home Page 1</a>
                </li>
                <li>
                  <a href="index-2.html">Home Page 2</a>
                </li>
                <li>
                  <a href="index-3.html">Home Page 3</a>
                </li>
                <li>
                  <a href="index-4.html">Home Page 4</a>
                </li>
              </ul>
            </li>
            <li class="mega" data-columns="3">
              <a href="my-account.html">
                <span>Pages</span>
              </a>
              <ul class="mega-container">
                <li>
                  <a href="my-account.html" class="mega-menu-title">
                    <h3>Inner pages 01</h3>
                  </a>
                  <ul>
                    <li>
                      <a href="my-account.html">My Account</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="register.html">Register</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" class="mega-menu-title">
                    <h3>Inner pages 02</h3>
                  </a>
                  <ul>
                    <li>
                      <a href="cart.html">Cart Page</a>
                    </li>
                    <li></li>
                    <li>
                      <a href="checkout.html">Checkout Page</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist Page</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" class="mega-menu-title">
                    <h3>Inner pages 03</h3>
                  </a>
                  <ul>
                    <li>
                      <a href="compare.html">Product Compare</a>
                    </li>
                    <li>
                      <a href="faqs.html">FAQs Page</a>
                    </li>
                    <li>
                      <a href="404.html">404 Page</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="shop-grid.html">
                <span>Shop Pages</span>
              </a>
              <ul>
                <li>
                  <a href="shop-grid.html">Shop Grid</a>
                </li>
                <li>
                  <a href="shop-list.html">Shop List</a>
                </li>
                <li>
                  <a href="shop-right-sidebar.html">Shop Right Sidebar</a>
                </li>
                <li>
                  <a href="shop-fullwidth.html">Shop Full Width</a>
                </li>
                <li>
                  <a href="single-product.html">Single Product Page</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="blog.html">
                <span>Blog Pages</span>
              </a>
              <ul>
                <li>
                  <a href="blog.html">Blog FullWidth</a>
                </li>
                <li>
                  <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                </li>
                <li>
                  <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                </li>
                <li>
                  <a href="blog-details.html">Blog Details</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">
                <span>About Us</span>
              </a>
            </li>
            <li>
              <a href="contact.html">
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- end of container -->
    </div>
    <!-- End of Main and Mobile Navigation -->
  </header>
  <!-- End of Header -->
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
