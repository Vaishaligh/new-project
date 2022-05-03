<template>
    <div>
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
              <h2 class="" v-on:click="isFooter1 = !isFooter1"
              :class="!isFooter1? 'openfooter' : ''">Shop</h2>
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
              <h2 class="" v-on:click="isFooter2 = !isFooter2"
              :class="!isFooter2? 'openfooter' : ''">QUICK LINKS</h2>
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
              <h2 class="" v-on:click="isFooter3 = !isFooter3"
              :class="!isFooter3? 'openfooter' : ''">
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
              <h2 class="" v-on:click="isFooter4 = !isFooter4"
              :class="!isFooter4? 'openfooter' : ''">MY PROFILE</h2>
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
    </div>
</template>

<script>
export default {
    name: "FooterPage",

    data(){
        return{
             isFooter1: true,
                isFooter2: true,
                isFooter3: true,
                isFooter4: true,
        }
    }
}
</script>