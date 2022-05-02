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
        <div class="humberger-menu">
          <button
            type="button"
            class="navbar-toggler collapsed"
            @click="openNav()"
          >
            <span class="navbar-toggler-icon"> </span>
          </button>
          <div
            @click="closeNav()"
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
                    <a style="">Login </a>
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
  </div>
</template>
<script>
export default {
  name: "TopHeader",

  data() {
    return {
      isHidden: false,
    };
  },
  methods: {
    openNav() {
      // document.getElementById("mySidenav").style.width = "100%";
      this.isHidden = true;
    },

    closeNav() {
      // document.getElementById("mySidenav").style.width = "0";
      this.isHidden = false;
    },
  },
};
</script>

<style lang="css">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/main.scss";
</style>
