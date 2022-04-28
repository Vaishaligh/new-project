<template>
  <div>
    <!-- top header start -->

    <div class="top-header-strip">
      <div class="top-header-strip-left">
        <p>COMPLIMENTARY GIFT BOX PACKING ON ALL PRE-PAID ORDERS</p>
      </div>
      <div class="top-header-strip-right">
        <ul>
          <li class="flegDrop">
            <a class="toggle-icon pull-right"><img src="" /></a>
          </li>
          <li>
            <a>our stores</a>
          </li>
          <li>
            <a>my account</a>
          </li>
          <li><a>blog </a></li>
        </ul>
      </div>
    </div>
    <!-- top header end -->
    <!--header start -->
    <div class="top-header for-mobile-view">
      <nav class="header navbar-light">
        <div>
          <button
            type="button"
            class="navbar-toggler collapsed"
            @click="openNav()"
          >
            <span class="navbar-toggler-icon"> </span>
          </button>
          <div
            id="mySidenav"
            class="collapse navbar-collapse"
            :class="isHidden ? 'active' : ''"
          >
            <div class="mobile-menu-container">
              <div class="mobile-heading">
                <h2>
                  <img
                    src="../assets/login-mobile-icon.png"
                    class="profile-icon"
                  />
                </h2>
                <div class="close" @click="closeNav()">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </div>
                <ul id="login-hide" class="navbar-nav mobile-top-nav">
                  <li class="nav-item dropdown">
                    <a style="width: 100%">Login </a>
                  </li>
                </ul>
              </div>
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a class="nav-link font-bold dropdown_toggle">Women</a>
                  <div class="dropdown-menu dropdown-main"></div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link font-bold dropdown_toggle">Men</a>
                  <div class="dropdown-menu dropdown-main"></div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link font-bold dropdown_toggle">Decor</a>
                  <div class="dropdown-menu dropdown-main"></div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link font-bold dropdown_toggle"
                    >Online Exclusive Sale</a
                  >
                  <div class="dropdown-menu dropdown-main"></div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link font-bold dropdown_toggle">Our Story</a>
                  <div class="dropdown-menu dropdown-main"></div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link font-bold dropdown_toggle">Craftmanship</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="top-logo-m">
          <a
            class="navbar-brand mobile-logo nuxt-link-exact-active nuxt-link-active"
          >
            <img
              src="../assets/mobile-logo.svg"
              alt="Ahujasons"
              title="ahujasons"
            />
          </a>
        </div>

        <div class="top-icon">
          <ul class="navbar-nav">
            <li class="nav-item country">
              <a class="nav-link"> <img src="../assets/selectCountry.png" /></a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <img src="../assets/search.svg" alt="" title="" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <img src="../assets/wish.svg" alt="" title="" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <img src="../assets/cart.svg" alt="" title="" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="top-header for-dekhtop-view">
      <nav class="header navbar-light">
        <div class="left-menu">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Women
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Men
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Sale<span class="sr-only"></span></a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Collection
              </a>
            </li>
          </ul>
        </div>
        <div class="top-logo">
          <a class="navbar-brand nuxt-link-active">
            <img src="../assets/lgo.png" alt="Ahujasons" title="ahujasons" />
          </a>
        </div>

        <div class="right-menu">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Our Story
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><span class="sr-only"></span>CRAFTMANSHIP</a>
            </li>
          </ul>
        </div>

        <div class="top-icon">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link">
                <img src="../assets/search.png" alt="" title="" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <img src="../assets/wishlist.png" alt="" title="" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <img src="../assets/cart.png" alt="" title="" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <!--header end -->

    <!--product details section -->
    <div id="container">
      <div class="product-detailmain">
        <nav class="detail-page-breadcrumb">
          <ol class="breadcrumb">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li style="padding-left: 8px">
              <img src="../assets/path.svg" alt="" />
            </li>
            <li style="padding-left: 8px">{{ productName }}</li>
          </ol>
        </nav>
      </div>
      <div class="container-fluid product-detail-container">
        <div class="row m-0" v-if="productImages.length">
          <div class="col-md-8 col-sm-12 p-0" style="position: relative">
           <a href="javascript:void(0)"> <img class="share-img" src="../assets/Share.svg" /></a>
            <VueSlickCarousel v-bind="settings">
              <!-- <div class="image-container"> -->

              <div
                class="image-box"
                v-for="productImage in productImages"
                :key="productImage.id"
              >
                <img class="card-img-top" :src="productImage.image" alt="" />
              </div>

              <!-- </div> -->
            </VueSlickCarousel>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="productDetail">
              <h1 class="page-title">{{ productName }}</h1>

              <ul class="page-star">
                <li><img src="../assets/Star.svg" alt="" /></li>
                <li><img src="../assets/Star.svg" alt="" /></li>
                <li><img src="../assets/Star.svg" alt="" /></li>
                <li><img src="../assets/Star.svg" alt="" /></li>
                <li><img src="../assets/halfstar.svg" alt="" /></li>
                <li><img src="../assets/(10).svg" alt="" /></li>
                <li><img src="../assets/Arrow.svg" alt="" /></li>
              </ul>

              <div class="price">
                <span class="selling-price"
                  ><img
                    src="../assets/Rupees.svg"
                    alt=""
                    style="margin-top: -6px; margin-right: 3px"
                  />{{ productSellingPrice }}</span
                >
                <span v-if="productDiscount != 0" class="discount"
                  >{{ productDiscount }}% Off</span
                >

                <p
                  v-if="productSellingPrice != productPrice"
                  class="mrp-message"
                >
                  MRP:<s style="margin: 5px"
                    ><img
                      src="../assets/Rupees.svg"
                      alt=""
                      style="height: 10px"
                    />{{ productPrice }}</s
                  >(inclusive all of taxes)
                </p>
              </div>
              <div class="short-desc">
                <div class="short">
                  <p>VIP Club Member get an extra discount of Rs.60 and Free Shipping.<span v-if="readMore">Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Turpis egestas pretium aenean pharetra magna ac
    placerat. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Sed cras ornare arcu dui. Aliquam vestibulum
    morbi blandit cursus. Adipiscing elit ut aliquam purus sit amet. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Ut etiam sit amet
    nisl purus in mollis. Eu mi bibendum neque egestas congue quisque egestas diam in. Pellentesque adipiscing
    commodo elit at imperdiet dui accumsan sit.</span> <a href="javascript:void(0)" @click="readMore =! readMore">
    <span v-if="readMore">Read Less</span>
    <span v-else>Read More...</span>
  </a>
    
 
  </p>

  
                </div>
              </div>
              <div class="color">
                <div class="product-color">
                  <span>COLORS: </span>
                  <span v-if="selectedColor" class="selected-color">{{
                    selectedColor
                  }}</span>
                </div>


                <div class="product-color-img">
                  <div
                    class="single-color"
                    v-for="color in colorVarient"
                    :key="color.id"
                  >
                    <div
                    :class="{'active' : selectedColor === color.color_name}"
                      class="product-info-color-img"
                      @click="changeColor(color.color_name)"

                    >
                      <img  style="height: 71px" :src="color.image_url" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="size-product">
               
                  <label for="">Size: </label>
                  <label v-if="selectedSize" class="">{{ selectedSize }}</label>
                  <label style="float: right"
                    ><a href=""
                      ><b style="text-decoration: underline">Size chart</b></a
                    ></label
                  >
                  <div class="product-size">
                    <label
                    
                      class=""
                      v-for="productSize in productSizes"
                      :key="productSize.id"
                      @click="changeSize(productSize.size)"
                      >
                      <span class="size" :class="{'active': selectedSize === productSize.size }">{{ productSize.size }}</span></label
                    >
                  </div>
               
              </div>
              <div class="add-to-cart-container">
                <div class="add-to-cart-btns fixed">
                  <button
                    type="button"
                    title="Add to cart"
                    class="add-to-cart btn"
                  >
                    <i class=""></i>Add to cart
                  </button>

                  <i class="add-to-wish-btns"
                    ><img src="../assets/Heart.svg"
                  /></i>
                </div>
              </div>
              <div class="other-info">
                <h3 v-on:click="isProductDetail = !isProductDetail">
                  Product Details
                </h3>

                <ul v-if="!isProductDetail">
                  <li
                    v-for="productDetail in productDetails"
                    :key="productDetail.id"
                  >
                    <span>{{ productDetail.label }}</span
                    >:
                    <span>{{ productDetail.value }}</span>
                  </li>
                </ul>
              </div>
              <div class="other-info">
                <h3
                  v-on:click="isProductInformation = !isProductInformation"
                  style="padding-top: 20px"
                  class="p-info"
                >
                  Product Information
                </h3>

                <p v-if="!isProductInformation">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div class="other-info down-other-info">
                <div class="location">
                  <img src="../assets/location.svg" />

                  <input
                    id="pin"
                    name=""
                    type="tel"
                    pattern="[0-9]*"
                    maxlength="6"
                    placeholder="Enter pincode"
                  />
                  <span>Change Pincode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container" style="margin-top: 5%;">
        <h4 class="font-medium mb-4" style="text-align: center">
          Similar Products
        </h4>

        <div class="row product-image-section" v-if="productSimilars.length">
          <VueSlickCarousel v-bind="settings1">
            <div
              class="col-md-3 col-sm-6 col-xs-6 col-6 new-class"
              v-for="productSimilar in productSimilars"
              :key="productSimilar.id"
            >
              <div class="slide-box">
                <div class="product-box">
                  <a class="view-detail" @click="viewDetail(product.url_key)">
                    View Detail
                  </a>
                  <img
                    class="card-img-top"
                    :src="productSimilar.image"
                    alt="Card image cap"
                  />
                  <a class="wishlist"><img src="../assets/wish.png" /></a>
                </div>
                <div class="card-body">
                  <p class="card-title">
                    <a href="">{{ productSimilar.name }}</a>
                  </p>
                  <p class="card-text">
                   
                   <span class="selling-price-p"> Rs.{{ productSimilar.selling_price }}</span>
                     <s 
                      v-if="
                        productSimilar.price != productSimilar.selling_price
                      "
                      >Rs.{{ productSimilar.price }}</s
                    >
                    <span v-if="productSimilar.discount != 0" class="discount-p"
                      >{{ productSimilar.discount }}%</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>

    <!--footer start -->

    <footer id="footer" class="section-bg">
      <div class="footer_main_container">
        <div class="footer_text_content">
          <span></span>
        </div>

        <div class="footerLogo">
          <div class="footerLogoWrap">
            <img src="../assets/flogo.png" />
          </div>
        </div>
        <div class="social-mob for-mobile-view">
          <div class="customer_menu link_column home-links">
            <h2>Follow Us</h2>
            <div class="mobile-view">
              <ul>
                <li>
                  <a target=""><img src="../assets/facebook.svg" /></a>
                </li>
                <li>
                  <a target=""><img src="../assets/instagram.svg" /></a>
                </li>
                <li>
                  <a target=""><img src="../assets/linkedin.svg" /></a>
                </li>
                <li>
                  <a target=""><img src="../assets/pinterest.svg" /></a>
                </li>
                <li>
                  <a target=""><img src="../assets/twitter.svg" /></a>
                </li>
                <li>
                  <a target=""><img src="../assets/youtube.svg" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-btm-center for-mobile-view">
          <div class="homepage_newsletter">
            <div class="block newsletter">
              <div class="title text-left">
                <strong>Subscribe to our newsletter </strong>
              </div>
              <div class="content">
                <form class="form subscribe">
                  <div class="field newsletter">
                    <div class="control">
                      <input
                        name="email"
                        type="text"
                        id="newsletter"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  <div class="actions">
                    <button id="Submit" title="Subscribe" class="action">
                      <span>Subscribe</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-links-container">
          <div class="footer_links">
            <div class="customer_menu link_column home-links">
              <h2 class="" v-on:click="isFooter1 = !isFooter1">Shop</h2>
              <div class="for-mobile-view" v-if="!isFooter1">
                <ul>
                  <li class="men">
                    <a>Men</a>
                  </li>
                  <li class="woman">
                    <a>Woman</a>
                  </li>
                  <li class="home">
                    <a>Home</a>
                  </li>
                  <li class="sale">
                    <a>Sale</a>
                  </li>
                  <li class="collection">
                    <a>Collection</a>
                  </li>
                </ul>
              </div>
              <div class="for-dekhtop-view">
                <ul>
                  <li class="men">
                    <a>Men</a>
                  </li>
                  <li class="woman">
                    <a>Woman</a>
                  </li>
                  <li class="home">
                    <a>Home</a>
                  </li>
                  <li class="sale">
                    <a>Sale</a>
                  </li>
                  <li class="collection">
                    <a>Collection</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="customer_menu link_column home-links">
              <h2 class="" v-on:click="isFooter2 = !isFooter2">QUICK LINKS</h2>
              <div class="for-mobile-view" v-if="!isFooter2">
                <ul>
                  <li class="men">
                    <a>Ahujasons Export</a>
                  </li>
                  <li class="woman">
                    <a>Ahujasons Wholesale</a>
                  </li>
                  <li class="our story">
                    <a>Our Story</a>
                  </li>
                  <li class="legacy">
                    <a>Legacy</a>
                  </li>
                  <li class="craftman ship">
                    <a>Craftsman ship </a>
                  </li>
                  <li class="our store blogs">
                    <a>Our Store Blogs </a>
                  </li>
                </ul>
              </div>
              <div class="for-dekhtop-view">
                <ul>
                  <li class="men">
                    <a>Ahujasons Export</a>
                  </li>
                  <li class="woman">
                    <a>Ahujasons Wholesale</a>
                  </li>
                  <li class="our story">
                    <a>Our Story</a>
                  </li>
                  <li class="legacy">
                    <a>Legacy</a>
                  </li>
                  <li class="craftman ship">
                    <a>Craftsman ship </a>
                  </li>
                  <li class="our store blogs">
                    <a>Our Store Blogs </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="customer_menu link_column home-links">
              <h2 class="" v-on:click="isFooter3 = !isFooter3">
                CUSTOMER SERVICE
              </h2>
              <div class="for-mobile-view" v-if="!isFooter3">
                <ul>
                  <li class="men">
                    <a>Terms and Condition </a>
                  </li>
                  <li class="woman">
                    <a>Shipping & Delivery</a>
                  </li>
                  <li class="home">
                    <a>Returns & Cancellation</a>
                  </li>
                  <li class="sale">
                    <a>Contact us </a>
                  </li>
                  <li class="collection">
                    <a>Store appointment</a>
                  </li>
                </ul>
              </div>
              <div class="for-dekhtop-view">
                <ul>
                  <li class="men">
                    <a>Terms and Condition </a>
                  </li>
                  <li class="woman">
                    <a>Shipping & Delivery</a>
                  </li>
                  <li class="home">
                    <a>Returns & Cancellation</a>
                  </li>
                  <li class="sale">
                    <a>Contact us </a>
                  </li>
                  <li class="collection">
                    <a>Store appointment</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="customer_menu link_column home-links">
              <h2 class="" v-on:click="isFooter4 = !isFooter4">MY PROFILE</h2>
              <div class="for-mobile-view" v-if="!isFooter4">
                <ul>
                  <li class="men">
                    <a>My Account </a>
                  </li>
                  <li class="woman">
                    <a>Track Order</a>
                  </li>
                  <li class="home">
                    <a>My Cart</a>
                  </li>
                  <li class="sale">
                    <a>Wishlist </a>
                  </li>
                  <li class="collection">
                    <a>Order History</a>
                  </li>
                </ul>
              </div>
              <div class="for-dekhtop-view">
                <ul>
                  <li class="men">
                    <a>My Account </a>
                  </li>
                  <li class="woman">
                    <a>Track Order</a>
                  </li>
                  <li class="home">
                    <a>My Cart</a>
                  </li>
                  <li class="sale">
                    <a>Wishlist </a>
                  </li>
                  <li class="collection">
                    <a>Order History</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="gh_logo_bottom for-mobile-view mobile-copyright">
              <p>Copyright © 2021 by Ahujasons | Powered by GreenHonchos</p>
            </div>
          </div>
          <div class="footer-btm-center for-dekhtop-view">
            <div class="homepage_newsletter">
              <div class="block newsletter">
                <div class="title text-left">
                  <h3>SIGN UP AND SAVE</h3>
                  <strong
                    >Subscribe to our newsletter and get 10% off your first
                    purchase</strong
                  >
                </div>
                <div class="content">
                  <form id="newsletter-validate-detail" class="form subscribe">
                    <div class="field newsletter">
                      <div class="control">
                        <input
                          name="email"
                          type="text"
                          id="newsletter"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                    <div class="actions">
                      <button id="Submit" title="Subscribe" class="action">
                        <span>Subscribe</span>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="socialIcons">
                  <h3>GIVE US A FOLLOW</h3>
                  <div class="socialIconsWrap">
                    <a target="blank">
                      <img src="../assets/social.png" />
                    </a>

                    <a target="blank">
                      <img src="../assets/linkedin.png" />
                    </a>
                    <a target="blank">
                      <img src="../assets/twitter.png" />
                    </a>
                    <a target="blank">
                      <img src="../assets/pinterest.png" />
                    </a>
                    <a target="blank">
                      <img src="../assets/youtube.png" />
                    </a>
                  </div>
                </div>
                <div class="gh_logo_bottom">
                  <p>Copyright © 2021 by Ahujasons | Powered by GreenHonchos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!--footer end -->
  </div>
</template>
<script>
import axios from "axios";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "ProductDetailPage",

  components: { VueSlickCarousel },

  data() {
    return {
       readMore: false,
      item_id: "",
      isFilterToggle: true,
      detailVisible: false,
      isFooter1: true,
      isFooter2: true,
      isFooter3: true,
      isFooter4: true,
      isHidden: false,
      isProductDetail: true,
      isProductInformation: true,
      productImages: [],
      productSimilars: [],
      productSizes: [],
      productDetails: [],
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [

          {
            breakpoint: 767,
            settings: {
               dots: false,
              slidesToShow: 1.2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
        
        ],
      },
      settings1: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
         
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2.3,
              slidesToScroll: 1,
             
              arrows: false,
              infinite: false,
            },
          },
         
        ],
      },
      selectedColor: "",
      selectedSize: 0,
      colorVarient: [
        {
          image_url:
            "https://wforwoman.gumlet.io/product/21AUW16786-117537/665/21AUW16786-117537_1.JPG",
          color_name: "Blue",
        },
        {
          image_url:
            "https://wforwoman.gumlet.io/product/21AUW16783-117388/665/21AUW16783-117388.jpg",
          color_name: "Pink",
        },
        {
          image_url:
            "https://wforwoman.gumlet.io/product/20AUW13770-114732/665/20AUW13770-114732_1.JPG",
          color_name: "Black",
        },
      ],
    };
  },

  mounted() {
    this.item_id = this.$parent._routerRoot._route.params.item_id;
    this.getProductDetails();
  },
  methods: {
    async getProductDetails() {
      let response = await axios.get(
        "https://pim.wforwoman.com/pim/pimresponse.php/",
        {
          params: {
            service: "product",
            store: 1,
            url_key: this.item_id,
          },
        }
      );

      console.warn("product detail api data", response.data.result);
      this.productImages = response.data.result.gallery;
      this.productName = response.data.result.name;
      this.productDescription = response.data.result.description;
      this.productSellingPrice = response.data.result.selling_price;
      this.productDiscount = response.data.result.discount;
      this.productPrice = response.data.result.price;
      this.productColor = response.data.result.color;
      this.productSimilars = response.data.result.similar_products;
      this.productSizes = response.data.result.new_size_chart.result;
      this.productDetails = response.data.result.visible_attributes;
    },
    openNav() {
      // document.getElementById("mySidenav").style.width = "100%";
      this.isHidden = true;
    },

    closeNav() {
      // document.getElementById("mySidenav").style.width = "0";
      this.isHidden = false;
    },
    toggleButton() {
      this.detailVisible = !this.detailVisible;
    },
    changeColor(color) {
      this.selectedColor = color;
    },
    changeSize(productSize) {
      this.selectedSize = productSize;
    },
  },
};
</script>
<style lang="css">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/main.scss";
</style>
