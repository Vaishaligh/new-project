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
          <a href="#" class="toggle-icon pull-right"><img src="" /></a>
        </li>
        <li>
          <a href="#">our stores</a>
        </li>
        <li>
          <a href="#">my account</a>
        </li>
        <li><a href="#">blog </a></li>
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
          class="collapse navbar-collapse active"
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
          href="#"
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
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="../assets/selectCountry.png"
            /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="../assets/search.svg" alt="" title="" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="../assets/wish.svg" alt="" title="" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
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
              href="#"
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
              href="#"
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
            <a class="nav-link" href="#"
              >Sale<span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
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
        <a class="navbar-brand nuxt-link-active" href="#">
          <img src="../assets/lgo.png" alt="Ahujasons" title="ahujasons" />
        </a>
      </div>

      <div class="right-menu">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
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
            <a class="nav-link" href="#"
              ><span class="sr-only">(current)</span>CRAFTMANSHIP</a
            >
          </li>
        </ul>
      </div>

      <div class="top-icon">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="../assets/search.png" alt="" title="" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="../assets/wishlist.png" alt="" title="" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
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
          <li style="padding-left: 20px;"> <router-link to="/"  >Home</router-link> </li>
          <li style="padding-left: 8px;"><img src="../assets/path.svg" alt="" /></li>
          <li style="padding-left: 8px;">{{ productName }}</li>
        </ol>
      </nav>
    </div>
    <div class="container-fluid product-detail-container">
      <div class="row">
        
        <div class="col-md-8 col-sm-12">
   
          <div
            class="image-box"
            v-for="productImage in productImages"
            :key="productImage.id"
          >
            <img class="card-img-top" :src="productImage.image" alt="" />
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <h1 class="page-title">{{ productName }}</h1>
          <ul class="page-star">
            <li><img src="../assets/Star.svg" alt="" /></li>
            <li><img src="../assets/Star.svg" alt="" /></li>
            <li><img src="../assets/Star.svg" alt="" /></li>
            <li><img src="../assets/Star.svg" alt="" /></li>
            <li><img src="../assets/Star.svg" alt="" /></li>
          </ul>
          <div class="price">
            <p>
              <span class="selling-price"
                ><img src="../assets/Rupees.svg" alt="" style="margin-top:-6px; margin-right: 3px" />{{
                  productSellingPrice
                }}</span
              >
              <span class="discount">{{ productDiscount }}% Off</span>
            </p>
            <p class="mrp-message">
              MRP:<s style="    margin-left: 5px;"
                ><img src="../assets/Rupees.svg" alt="" style="height:11px" />{{ productPrice }}</s
              >(inclusive all of taxes)
            </p>
          </div>
          <div class="short">
            <p style="border-bottom: 1px solid #ccc; padding-bottom:20px">
            <span
              >VIP Club Member get an extra discount of Rs.60 and Free Shipping.
              Learn More</span></p
            >
          </div>
          <div class="color">
            <span>Color : {{ productColor }}</span>
          </div>
          <div class="size-container">
            <div class="size-bg">
              <label for="">Select Size</label>
              <div class="size-box">
                <label
                  class="size select-one-size"
                  v-for="productSize in productSizes"
                  :key="productSize.id"
                  >{{ productSize.size }}</label
                >
              </div>
            </div>
          </div>
          <div class="add-to-cart-container">
            <div class="add-to-cart-btns fixed">
              <button type="button" title="Add to cart" class="add-to-cart btn">
                <i class=""></i>Add to cart
              </button>

              <i class="add-to-wish-btns"><img src="../assets/Heart.svg" /></i>
            </div>
          </div>
          <div class="other-info">
            <h3>Product Details</h3>
            <div>
              <ul>
                <li v-for="productDetail in productDetails"
                :key="productDetail.id">
                  <span>{{productDetail.label}}</span>:
                  <span>{{productDetail.value}}</span>
                </li>
                
              </ul>
            </div>
          </div>
          <div class="other-info down-other-info">
           <div class="location">
          <label for="pin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"
              />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </label>
          <input
            id="pin"
            name="pin"
            type="tel"
            pattern="[0-9]*"
            maxlength="6"
            placeholder="Enter pincode"
          />
          <span>Change Pin</span>
        </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-3" >
      <h4 class="font-medium mb-4" style="text-align: center">Similar Products</h4>

      <div class="row">
       
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
                <s>Rs.{{ productSimilar.price }}</s> Rs.{{
                  productSimilar.selling_price
                }}
                <span style="color: red">{{ productSimilar.discount }}%</span>
              </p>
            </div>
          </div>
        </div>
       
   
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
                  <a href="#">Men</a>
                </li>
                <li class="woman">
                  <a href="#">Woman</a>
                </li>
                <li class="home">
                  <a href="#">Home</a>
                </li>
                <li class="sale">
                  <a href="#">Sale</a>
                </li>
                <li class="collection">
                  <a href="#">Collection</a>
                </li>
              </ul>
            </div>
            <div class="for-dekhtop-view">
              <ul>
                <li class="men">
                  <a href="#">Men</a>
                </li>
                <li class="woman">
                  <a href="#">Woman</a>
                </li>
                <li class="home">
                  <a href="#">Home</a>
                </li>
                <li class="sale">
                  <a href="#">Sale</a>
                </li>
                <li class="collection">
                  <a href="#">Collection</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="customer_menu link_column home-links">
            <h2 class="" v-on:click="isFooter2 = !isFooter2">QUICK LINKS</h2>
            <div class="for-mobile-view" v-if="!isFooter2">
              <ul>
                <li class="men">
                  <a href="#">Ahujasons Export</a>
                </li>
                <li class="woman">
                  <a href="#">Ahujasons Wholesale</a>
                </li>
                <li class="our story">
                  <a href="#">Our Story</a>
                </li>
                <li class="legacy">
                  <a href="#">Legacy</a>
                </li>
                <li class="craftman ship">
                  <a href="#">Craftsman ship </a>
                </li>
                <li class="our store blogs">
                  <a href="#">Our Store Blogs </a>
                </li>
              </ul>
            </div>
            <div class="for-dekhtop-view">
              <ul>
                <li class="men">
                  <a href="#">Ahujasons Export</a>
                </li>
                <li class="woman">
                  <a href="#">Ahujasons Wholesale</a>
                </li>
                <li class="our story">
                  <a href="#">Our Story</a>
                </li>
                <li class="legacy">
                  <a href="#">Legacy</a>
                </li>
                <li class="craftman ship">
                  <a href="#">Craftsman ship </a>
                </li>
                <li class="our store blogs">
                  <a href="#">Our Store Blogs </a>
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
                  <a href="#">Terms and Condition </a>
                </li>
                <li class="woman">
                  <a href="#">Shipping & Delivery</a>
                </li>
                <li class="home">
                  <a href="#">Returns & Cancellation</a>
                </li>
                <li class="sale">
                  <a href="#">Contact us </a>
                </li>
                <li class="collection">
                  <a href="#">Store appointment</a>
                </li>
              </ul>
            </div>
            <div class="for-dekhtop-view">
              <ul>
                <li class="men">
                  <a href="#">Terms and Condition </a>
                </li>
                <li class="woman">
                  <a href="#">Shipping & Delivery</a>
                </li>
                <li class="home">
                  <a href="#">Returns & Cancellation</a>
                </li>
                <li class="sale">
                  <a href="#">Contact us </a>
                </li>
                <li class="collection">
                  <a href="#">Store appointment</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="customer_menu link_column home-links">
            <h2 class="" v-on:click="isFooter4 = !isFooter4">MY PROFILE</h2>
            <div class="for-mobile-view" v-if="!isFooter4">
              <ul>
                <li class="men">
                  <a href="#">My Account </a>
                </li>
                <li class="woman">
                  <a href="#">Track Order</a>
                </li>
                <li class="home">
                  <a href="#">My Cart</a>
                </li>
                <li class="sale">
                  <a href="#">Wishlist </a>
                </li>
                <li class="collection">
                  <a href="#">Order History</a>
                </li>
              </ul>
            </div>
            <div class="for-dekhtop-view">
              <ul>
                <li class="men">
                  <a href="#">My Account </a>
                </li>
                <li class="woman">
                  <a href="#">Track Order</a>
                </li>
                <li class="home">
                  <a href="#">My Cart</a>
                </li>
                <li class="sale">
                  <a href="#">Wishlist </a>
                </li>
                <li class="collection">
                  <a href="#">Order History</a>
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
                  <a target="blank" href="#">
                    <img src="../assets/social.png" />
                  </a>

                  <a target="blank" href="#">
                    <img src="../assets/linkedin.png" />
                  </a>
                  <a target="blank" href="#">
                    <img src="../assets/twitter.png" />
                  </a>
                  <a target="blank" href="#">
                    <img src="../assets/pinterest.png" />
                  </a>
                  <a target="blank" href="#">
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


export default {
  name: "ProductDetailPage",
   
  
  
  data() {

   
  
    return {
        item_id: "",
       isFilterToggle: true,
      isFooter1: true,
      isFooter2: true,
      isFooter3: true,
      isFooter4: true,
      isHidden: false,
      productImages: [],
      productSimilars: [],
      productSizes: [],
      productDetails: [],
          settings: {
     
      snapAlign: 'start',
    },
      
    };
  },
  
 mounted() {
    this.item_id = this.$parent._routerRoot._route.params.item_id
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


      console.warn("product detail api data", response.data.result.visible_attributes);
      this.productImages = response.data.result.gallery;
      this.productName = response.data.result.name;
      this.productSellingPrice = response.data.result.selling_price;
      this.productDiscount = response.data.result.discount;
      this.productPrice = response.data.result.price;
      this.productColor = response.data.result.color;
      this.productSimilars = response.data.result.similar_products;
      this.productSizes = response.data.result.new_size_chart.result;
      this.productDetails = response.data.result.visible_attributes;
    },
     openNav() {
      document.getElementById("mySidenav").style.width = "100%";
    },

    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
     toggleButton() {
      this.detailVisible = !this.detailVisible;
    },
  }
};
</script>
<style lang="css">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/main.scss";
</style>