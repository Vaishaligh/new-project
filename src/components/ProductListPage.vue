<template>
  <div>
    <topHeader />
    <!-- product section start -->

    <div id="container">
      <div class="container-fluid product-list-main">
        <div class="container-fluid d-inline-block">
          <div class="col-md-12 product-cntr">
            <div class="item">
              <h1>Women Pashima shawls</h1>
              <p class="product-item">{{ count }} items</p>
            </div>
          </div>
        </div>
        <div v-if="loading" style="text-align: center">
          <img class="loader" src="../assets/load.png" />
        </div>
        <div class="container-fluid d-inline-block">
          <div class="row for-dekhtop-view">
            <div class="col-lg-2 col-sm-6">
              <div
                class="sidebar-header"
                v-on:click="isFilterToggle = !isFilterToggle"
              >
                <h3 v-on:click="toggleButton()">
                  <p class="hideFilterWrap">
                    <img src="../assets/filter-icon.svg" />{{
                      detailVisible ? "Hide Filter" : "Show Filter"
                    }}
                  </p>
                </h3>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="applied-filter">
                <ul class="" style="">
                  <li v-for="data in selectedFilters" :key="data.label">
                    <span>{{ data.filt.value }}</span>
                    <a class="remove">
                      <i
                        class="fa fa-close"
                        @click="clearFilter(data.filt, 'example')"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-sm-6">
              <div class="product-sort">
                <select class="sortnew" v-model="selected" @change="sorting">
                  <option selected>SORT BY</option>
                  <option
                    v-for="sorting in sort"
                    :key="sorting.id"
                    :value="sorting"
                  >
                    {{ sorting.label }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="row" v-if="selectedFilters.length > 0">
            <div class="applied-filter">
              <ul class="" @click="clearAll">
                <li style="margin-left: 20px">
                  <span>Clear All</span>
                  <a class="remove">
                    <i class="fa fa-close"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row sortFilter for-mobile-view">
            <div class="col-lg-6 col-sm-6">
              <div
                class="sidebar-header"
                v-on:click="isFilterToggle = !isFilterToggle"
              >
                <h3 v-on:click="toggleButton()">
                  <p class="hideFilterWrap">
                    <img src="../assets/filter-icon.svg" />{{
                      detailVisible ? "Hide Filter" : "Show Filter"
                    }}
                  </p>
                </h3>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="product-sort">
                <select class="sortnew-m" v-model="selected" @change="sorting">
                  <option :selected="true">SORT BY</option>
                  <option
                    v-for="sorting in sort"
                    :key="sorting.id"
                    :value="sorting"
                  >
                    {{ sorting.label }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid d-inline-block">
          <div class="row">
            <div class="col-lg-2 col-md-4" v-if="!isFilterToggle">
              <nav id="sidebar" class="sidebar">
                <div class="accordion" id="filterAccordion">
                  <div
                    class="accordion-item"
                    v-for="(filter, index) in filters"
                    :key="index"
                  >
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed noselect"
                        type="button"
                        data-bs-toggle="collapse"
                        :data-bs-target="'#' + filter.id"
                        aria-expanded="true"
                        :aria-controls="filter.id"
                        @click="toggleCurrentFilter(index)"
                      >
                        {{ filter.filter_lable }}
                      </button>
                    </h2>
                    <div
                      :id="filter.id"
                      class="accordion-collapse"
                      data-bs-parent="#filterAccordion"
                      v-if="isOptionFilter == index"
                    >
                      <li
                        class="list-unstyled"
                        v-for="option in filter.options"
                        :key="option.value_key"
                      >
                        <label
                          ><input
                            type="checkbox"
                            class="checkbox"
                            :id="option.value_key"
                            @change="
                              filterProduct($event, option, filter.filter_lable)
                            "
                            :checked="checkedFilters(option)"
                          /><span
                            >{{ option.value }} ({{ option.total }})</span
                          ></label
                        >
                      </li>
                    </div>
                  </div>
                </div>
                <div class="row sortFilter for-mobile-view">
                  <div class="col-lg-6 col-sm-6">
                    <div
                      class="sidebar-header"
                      v-on:click="isFilterToggle = !isFilterToggle"
                    >
                      <h3 v-on:click="toggleButton()">
                        <p class="hideFilterWrap">
                          <img src="../assets/filter-icon.svg" />{{
                            detailVisible ? "Hide Filter" : "Show Filter"
                          }}
                        </p>
                      </h3>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <div class="product-sort">
                      <select
                        class="sortnew-m"
                        v-model="selected"
                        @change="sorting"
                      >
                        <option :selected="true">SORT BY</option>
                        <option
                          v-for="sorting in sort"
                          :key="sorting.id"
                          :value="sorting"
                        >
                          {{ sorting.label }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div class="col-lg-10 col-md-8" v-if="isFilterToggle == false">
              <div class="col-md-12 product-list">
                <div class="container-fluid d-inline-block">
                  <div class="row">
                    <div
                      class="col-md-3 col-sm-6 col-xs-6 col-6 new-class"
                      v-for="product in products"
                      :key="product.id"
                    >
                      <div class="slide-box">
                        <div class="product-box">
                          <router-link
                            class="view-detail"
                            :to="`/productdetailpage/${product.url_key} `"
                          >
                            View Detail
                          </router-link>

                          <img
                            class="card-img-top"
                            :src="product.image"
                            alt="Card image cap"
                          />
                          <a class="wishlist"
                            ><img src="../assets/wish.png"
                          /></a>
                        </div>
                        <div class="card-body">
                          <p class="card-title productname">
                            {{ product.name }}
                          </p>
                          <p class="card-text">
                            <s v-if="product.price != product.selling_price"
                              >Rs.{{ product.price }}</s
                            >
                            Rs.{{ product.selling_price }}
                            <span
                              v-if="product.discount != 0"
                              style="color: red"
                              >{{ product.discount }}%</span
                            >
                          </p>
                          <p class="card-text" style="color: green">
                            {{ product.stock_status }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12" v-if="isFilterToggle == true">
              <div class="col-md-12 product-list">
                <div class="container-fluid d-inline-block">
                  <div class="row">
                    <div
                      class="col-md-3 col-sm-6 col-xs-6 col-6 new-class"
                      v-for="product in products"
                      :key="product.id"
                    >
                      <div class="slide-box">
                        <div class="product-box">
                          <router-link
                            class="view-detail"
                            :to="`/productdetailpage/${product.url_key} `"
                          >
                            View Detail
                          </router-link>

                          <img
                            class="card-img-top"
                            :src="product.image"
                            alt="Card image cap"
                          />

                          <a class="wishlist"
                            ><img src="../assets/wish.png"
                          /></a>
                        </div>
                        <div class="card-body">
                          <p class="card-title productname">
                            {{ product.name }}
                          </p>

                          <p class="card-text">
                            <s v-if="product.price != product.selling_price"
                              >Rs.{{ product.price }}</s
                            >
                            Rs.{{ product.selling_price }}
                            <span
                              v-if="product.discount != 0"
                              style="color: red"
                              >{{ product.discount }}%</span
                            >
                          </p>

                          <p class="card-text" style="color: green">
                            {{ product.stock_status }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product_error">{{ error_message }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- product section end -->
    <!--pagination start -->
    <div class="container-fluid">
      <span class="page-count"
        >Page {{ pageNumber }} to {{ Math.ceil(count / 20) }}</span
      >
      <ul class="pagination">
        <li
          class="page-item"
          :class="pageNumber == page ? 'active-p' : ''"
          v-for="page in getNumbers(
            pageNumber,
            pageNumber + 6 > Math.ceil(count / 20)
              ? Math.ceil(count / 20)
              : pageNumber + 6
          )"
          @click="pageChange(page)"
          :key="page"
        >
          <a class="page-1" :aria-label="page">{{ page }}</a>
        </li>
        <li class="">....</li>
        <li class="page-item">
          <a class="" aria-label="Next" @click="pageChange(Math.ceil(count / 20))">{{ Math.ceil(count / 20) }}</a>
        </li>
      </ul>
    </div>

    <!--pagination end -->
    <!--footer start -->

    <FooterPage />
    <!--footer end -->
  </div>
</template>
<script>
import axios from "axios";
import TopHeader from "./TopHeader.vue";
import FooterPage from "./FooterPage.vue";
export default {
  name: "ProductListPage",
  components: {
    TopHeader,
    FooterPage,
  },
  data() {
    return {
      loading: false,
      selected: "SORT BY",
      products: [],
      filters: [],
      sort: [],
      isFilter: false,
      isOptionFilter: false,
      isFilterToggle: true,

      detailVisible: false,
      error_message: "",
      selectedFilters: [],
      pageNumber: 1,
      count: 0,
      moreData: {
        page: 1,
        count: 20,
        sort_by: "",
        sort_dir: "desc",
        filter: this.$route.query.filter || "",
      },
    };
  },
  async mounted() {
    this.apiCall(this.moreData);
    if (this.moreData.filter) {
      let arr = this.moreData.filter.split(/-|,/);
      arr.forEach((ele, index) => {
        if (index % 2 == 0)
          this.selectedFilters.push({
            filt: {
              value: arr[index + 1],
              value_key: arr[index + 1].toLowerCase(),
              code: ele,
            },
          });
      });
    }
    if (this.selectedFilters.length != 0) {
      this.detailVisible = true;
      this.isFilterToggle = false;
    }
  },
  methods: {
    checkedFilters(key) {
      let x;
      this.selectedFilters.forEach((ele) => {
        if (ele.filt.value_key == key.value_key) {
          x = true;
        }
      });
      if (x == true) {
        return true;
      } else return false;
    },
    toggleCurrentFilter(index) {
      if (this.isOptionFilter == index) {
        this.isOptionFilter = null;
      } else {
        this.isOptionFilter = index;
      }
    },
    getNumbers: function (start, stop) {
      return new Array(stop - start).fill(start).map((n, i) => n + i);
    },

    pageChange(index) {
      this.pageNumber = index;
      this.moreData.page = index;
      this.apiCall(this.moreData);
    },
    clearAll() {
      this.filters = [];
      this.moreData.filter = "";
      this.selectedFilters = [];
      this.apiCall(this.moreData);
    },

    async apiCall(moreData) {
      this.$router.push({
        query: {
          ...(moreData.page && { page: `${moreData.page}` }),
          ...(moreData.count && { count: `${moreData.count}` }),
          ...(moreData.sort_by && { sort_by: `${moreData.sort_by}` }),
          ...(moreData.sort_dir && { sort_dir: `${moreData.sort_dir}` }),
          ...(moreData.filter && { filter: `${moreData.filter}` }),
        },
      });
      this.loading = true;
      let resp = await axios.get(
        "https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas",
        {
          params: {
            page: `${moreData.page}`,
            count: `${moreData.count}`,
            sort_by: `${moreData.sort_by}`,
            sort_dir: `${moreData.sort_dir}`,
            filter: `${moreData.filter}`,
          },
        }
      );
      console.warn("api data", resp.data.result.products);

      if (resp.data.response.success_message === "success") {
        this.count = resp.data.result.count;
        this.products = resp.data.result.products;
        if (this.filters.length === 0) {
          this.filters = resp.data.result.filters;
          this.sort = resp.data.result.sort;
          this.sort.forEach((element) => {
            if (element.label === "Price") {
              element.label = "Price(Low to High)";
              element.sortBy = "asc";
            } else {
              element.sortBy = "desc";
            }
          });
          this.sort.push({
            code: "selling_price",
            label: "Price(High to Low)",
            sortBy: "desc",
          });
        }
      } else {
        this.products = [];
        this.error_message = resp.data.response.error_message;
      }
      this.loading = false;
    },
    toggleButton() {
      this.detailVisible = !this.detailVisible;
    },
    sorting() {
      this.moreData.sort_by = this.selected.code;
      this.moreData.sort_dir = this.selected.sortBy;
      this.apiCall(this.moreData);
    },
    clearFilter(filter, heading) {
      var event = document.getElementById(filter.value_key);
      event.checked = false;
      var para = {
        target: {
          checked: event.checked,
        },
      };
      this.filterProduct(para, filter, heading);
    },
    filterProduct(checkbox, filter, heading) {
      console.log(heading);
      var newArr = JSON.parse(JSON.stringify(filter));
      if (heading === "Price" || heading === "Category") {
        newArr.value = newArr.value.replaceAll(" ", "+");
      }
      if (checkbox?.target?.checked) {
        var comaSeparate = "";
        if (this.moreData.filter !== "") {
          comaSeparate = ",";
        }
        console.log("New filter", filter.value);
        this.moreData.filter = `${this.moreData.filter}${comaSeparate}${newArr.code}-${newArr.value}`;
        console.log(this.moreData.filter);
        this.apiCall(this.moreData);
        var tempfilter = {
          filt: {
            value: filter.value,
            value_key: filter.value_key,
            code: filter.code,
          },
        };
        this.selectedFilters.push(tempfilter);
      } else {
        this.selectedFilters.map((ele, index) => {
          if (ele.filt.value === filter.value) {
            this.selectedFilters.splice(index, 1);
          }
        });
        this.moreData.filter = this.moreData.filter.replaceAll(
          newArr.code + "-" + newArr.value,
          ""
        );
        const last = this.moreData.filter.charAt(
          this.moreData.filter.length - 1
        );
        const first = this.moreData.filter.charAt(0);
        if (last === "," || first === ",") {
          this.moreData.filter =
            last === ","
              ? this.moreData.filter.slice(0, -1)
              : this.moreData.filter.slice(1, this.moreData.filter.length);
        } else {
          this.moreData.filter = this.moreData.filter.replaceAll(",,", ",");
        }
        this.apiCall(this.moreData);
      }
    },
    viewDetail() {
      //   this.$router.push('/productdetailpage');
      //   this.$router.push({ path: '/productdetailpage', params: { url_key: key } });
    },
  },
};
</script>
<style lang="css">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/main.scss";
</style>
