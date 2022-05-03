<template>
  <div>
    <TopHeader />

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
            <a href="javascript:void(0)">
              <img class="share-img" src="../assets/Share.svg"
            /></a>
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
                  <p>
                    VIP Club Member get an extra discount of Rs.60 and Free
                    Shipping.<span v-if="readMore"
                      >Ligula ullamcorper malesuada proin libero nunc consequat
                      interdum varius. Turpis egestas pretium aenean pharetra
                      magna ac placerat. Sed egestas egestas fringilla phasellus
                      faucibus scelerisque eleifend donec. Sed cras ornare arcu
                      dui. Aliquam vestibulum morbi blandit cursus. Adipiscing
                      elit ut aliquam purus sit amet. Aenean sed adipiscing diam
                      donec adipiscing tristique risus nec. Ut etiam sit amet
                      nisl purus in mollis. Eu mi bibendum neque egestas congue
                      quisque egestas diam in. Pellentesque adipiscing commodo
                      elit at imperdiet dui accumsan sit.</span
                    >
                    <a href="javascript:void(0)" @click="readMore = !readMore">
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
                      :class="{ active: selectedColor === color.color_name }"
                      class="product-info-color-img"
                      @click="changeColor(color.color_name)"
                    >
                      <img style="height: 71px" :src="color.image_url" alt="" />
                      <span class="check-icon"></span>
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
                    <span
                      class="size"
                      :class="{ active: selectedSize === productSize.size }"
                      >{{ productSize.size }}</span
                    ></label
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
                <h3
                  v-on:click="isProductDetail = !isProductDetail"
                  :class="!isProductDetail ? 'openDetail' : ''"
                >
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
                  :class="!isProductInformation ? 'openDetail' : ''"
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
                    type="number"
                    placeholder="Enter pincode"
                    max="999"
                    onkeypress="if (this.value.length > 5) return false;"
                  />
                  <span>Change Pincode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container" style="margin-top: 5%">
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
                    <span class="selling-price-p">
                      Rs.{{ productSimilar.selling_price }}</span
                    >
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

    <FooterPage />
    <!--footer end -->
  </div>
</template>
<script>
import axios from "axios";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import TopHeader from "./TopHeader.vue";
import FooterPage from "./FooterPage.vue";

export default {
  name: "ProductDetailPage",

  components: { VueSlickCarousel, TopHeader, FooterPage },

  data() {
    return {
      readMore: false,
      item_id: "",

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
