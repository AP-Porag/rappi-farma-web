<template>
  <div>
    <!-- <section class="ms__banner--part">
      <div class="container slick-slider-relative">
        <VueSlickCarousel :arrows="true" v-bind="sliderOneBanner" :dots="false" v-if="categories.length">
          <div class="ms__banner--items" v-for="(banner,index) in categories" :key="banner.id">
            <NuxtLink :to="`/producto?category=`+banner.slug">
              <img :data-src="banner.banner"  class="img-fluid" alt="" v-lazy-load>
            </NuxtLink>
          </div>
        </VueSlickCarousel>
      </div>
    </section> -->
      <!-- sub catagoris -->
      <section class="ms__catagoriesFilter--part ic-section-space">
        <div class="container">
          <div class="row g-4">
            <!-- <div class="col-lg-3">
              <a href="#" class="d-lg-none">Catagories Name Filter</a>
              <div class="ic__catagoriesFilter--overlay"></div>
              <div class="ms__catagoriesFilter--left">
                <a href="#" class="catagoriesFilter--closed">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
                </a>
                <h5>Catagories Name</h5>
                <ul class="ms__catagoriesnav">
                  <li class="ms__catagorisItems" v-for="(category,index) in categories" :key="category.id">
                      <NuxtLink :to="`/producto?category=`+category.slug">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                         {{category.name}}</NuxtLink>
                      <ul class="ms__catagoriesSub-nav" v-if="category.brands.length > 0">
                        <li v-if="category.brands.length > 0" v-for="(brand,index) in category.brands" :key="brand.id">
                          <nuxtLink :to="`/producto?brand=`+brand.slug">
                            {{brand.name}}
                          </nuxtLink>
                        </li>
                      </ul>
                  </li>
                </ul>
              </div>
            </div> -->
            <div class="col-lg-12">
              <div class="ms__catagoriesFilter--right">
<!--                <div class="row">-->
<!--                  <div class="col-lg-6">-->
<!--                    <h5 class="subCatagories__title">Drugstore</h5>-->
<!--                    <ul class="page&#45;&#45;navigation">-->
<!--                      <li>-->
<!--                        <a href="#">Health and medicines / </a>-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        <a href="#">Health and medicines / </a>-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        <a href="#">Drugstore</a>-->
<!--                      </li>-->
<!--                    </ul>-->
<!--                  </div>-->
<!--                  <div class="col-lg-6">-->
<!--                    <div class="ms__filter&#45;&#45;search">-->
<!--                      <button class="ic-btn" @click="filterBox = !filterBox">-->
<!--                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 14v6l-4 2v-8L4 5V3h16v2l-6 9zM6.404 5L12 13.394 17.596 5H6.404z"/></svg>-->
<!--                         Filter search</button>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->

                <div class="row g-2">
                  <!-- <ProductoProduct class="col-lg-12" v-for="product in products" :key="product.id" :product="product" /> -->


                    <div class="ms__bestDeal--items big-card">
                        <div class="figure position-relative mb-0 p-1">
                          <div class="ms__bestDeal--img ms__beatuy--img">
                              <!-- <nuxt-link :to="`/producto/${product.slug}`">
                                <img class="img" :data-src="`${product.thumb}`" alt="" v-lazy-load>
                              </nuxt-link> -->

                              <nuxt-link to="#">
                                <img class="img img-fluid" data-src="https://rappi-farma-admin.asrafporag.me/storage/products/068724.png" alt="" v-lazy-load>
                              </nuxt-link>
                          </div>
                          <div class="ms__bestDeal--information">
                              <NuxtLink to="#"><h6 class="title">asdfsdfsdf</h6></NuxtLink>
                              <!-- <NuxtLink to="#"><p class="discription">fsadfsdfsdaf</p></NuxtLink> -->

                              <p class="small-price">$250</p>

                          </div>
                        </div>
                        <!-- <div class="ms__card--btn">
                              <a href="#" class="btn btn-primary btn-md w-100" @click.prevent="$nuxt.$emit('eventAddToCart', item)">Add to cart</a>
                          </div> -->
                          <div class="ms__card--btn">
                            <div class="ms-increment-decrement"> 
                                <a href="#">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-9h10v2H7v-2z"/></svg>
                                </a>
                                <input type="text">
                                <a href="#">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/></svg>
                                </a>
                            </div>
                            <div class="addTo-cart">
                              <a href="#" class="addToCart">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"/></svg>
                              </a>
                              <a href="#" class="addToCart" @click.prevent="$nuxt.$emit('eventAddToCart', item)">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>
                              </a>
                            </div>
                          </div>
                      </div>
                    
                  <infinite-loading v-if="products.length" spinner="bubbles" @infinite="infiniteScroll"></infinite-loading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- sub catagoris -->
      <div class="ic__shopping--overlay" :class="{active:filterBox}" @click="filterBox = !filterBox"></div>
    <div class="ic__shopping--cart" :class="{active:filterBox}">
        <div class="ic__shopping--top">
            <button class="ic__cart--closed" @click="filterBox = !filterBox">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
            </button>
            <h5>Filter Search</h5>
            <div class="ms__filter--buttons">
              <h3>Brand:</h3>
              <ul>
                <li>
                  <button>Allegro</button>
                </li>
                <li>
                  <button>love</button>
                </li>
                <li>
                  <button>bamboo bath</button>
                </li>
                <li>
                  <button>Jade</button>
                </li>
                <li>
                  <button class="active">Allegro</button>
                </li>
                <li>
                  <button>love</button>
                </li>
                <li>
                  <button>bamboo bath</button>
                </li>
                <li>
                  <button>Jade</button>
                </li>
                <li>
                  <button>Allegro</button>
                </li>
                <li>
                  <button>love</button>
                </li>
                <li>
                  <button>bamboo bath</button>
                </li>
                <li>
                  <button>Jade</button>
                </li>
                <li>
                  <button>Allegro</button>
                </li>
                <li>
                  <button>love</button>
                </li>
                <li>
                  <button>bamboo bath</button>
                </li>
                <li>
                  <button>Jade</button>
                </li>

              </ul>
            </div>
        </div>
        <div class="ic__shopping--bottom text-center">
            <a href="#" class="ic-btn">Filter</a>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "_slug",
  data: ()=>({
    sliderOneBanner: {
      autoplay:true,
      speed: 1000,
    },
    sliderOneSetting: {
      arrows: true,
      dots: true,
      autoplay:true,
      slidesToShow: 8,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            "slidesToShow": 6,
            "slidesToScroll": 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            "slidesToShow": 4,
            "slidesToScroll": 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            "slidesToShow": 3,
            "slidesToScroll": 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            "slidesToShow": 2,
            "slidesToScroll": 1
          }
        }
      ]
    },
    // subCatagoriesSlider: {
    //   arrows: true,
    //   dots: true,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // },
    filterBox:false,
    products:[],
    page: 1,
    keywords:null,
    category_slug : null,
    brand_slug:null,
    categories:[],
  }),
  created() {

  },
  watch: {
    '$route.query'(newValue){
      // console.log(newValue)
      // console.log('change hoise')
      // console.log(newValue.category)
      // console.log(newValue.brand)
      if (typeof newValue.category !== 'undefined'){
        this.category_slug = newValue.category;
        this.brand_slug = null;
      }
      if (typeof newValue.brand !== 'undefined'){
        this.category_slug = null;
        this.brand_slug = newValue.brand;
      }
      // console.log('category : '+this.category_slug)
      // console.log('brand : '+this.brand_slug)

      this.getAllProducts();
    }
  },
  mounted() {
    this.category_slug = this.$route.query.category != null ? this.$route.query.category : null;
    this.brand_slug = this.$route.query.brand != null ? this.$route.query.brand : null;
    this.getKeyWordsFromLocalstorage()
    this.getAllProducts();
    localStorage.removeItem('rappiKywords');
    this.loadCategoryDataWithBrand();
  },
  methods:{
    async getAllProducts() {
      try {
        const response = await this.$axios.get(`/product?page=${this.page}&keywords=${this.keywords}&category=${this.category_slug}&brand=${this.brand_slug}`);
        this.products = response.data.data.items;
      }catch (e) {
        console.log(e.message)
      }
    },
    infiniteScroll($state) {
      setTimeout(() => {
        this.page++; // next page

        try {
          this.$axios.get(`/product?page=${this.page}&keywords=${this.keywords}&category=${this.category_slug}&brand=${this.brand_slug}`)
            .then(response => {
              if (response.data.data.items.length > 1) { // check if any left
                response.data.data.items.forEach(product => this.products.push(product));
                // push it into the items array so we can display the data
                $state.loaded();
              } else {
                $state.complete();
              }
            })
            .catch(err => {
              console.log(err);
            });
        }catch (e) {
          console.log(e.message)
        }

      }, 1000);
    },
    getKeyWordsFromLocalstorage(){
      let keywords = localStorage.getItem('rappiKywords');
      if (keywords != ''){
        this.keywords = keywords;
      }else {
        localStorage.removeItem('rappiKywords');
      }
    },
    async loadCategoryDataWithBrand(){
      try {
        const response = await this.$axios.get('/category/front/category-brand');
        this.categories = response.data.data.items
      }catch (e) {
        console.log(e.message)
      }
    },
  }
}
</script>

<style lang="scss">
.ic__catagoriesFilter--overlay {
    &.active {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      z-index: 9;
    }
}
.ms__filter--search {
  text-align: right;
  @media #{$max991}{
    margin-bottom: 30px;
    text-align: left;
  }
}
.ic__shopping--overlay {
  &.active {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.4);
    z-index: 9;
  }
}
.ms__filter--buttons {
  padding-top: 30px;
  height: 345px;
  overflow-y: auto;
  h3 {
    padding-bottom: 20px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    li {
      button {
        padding: 7px 9px;
        border-radius: 32px;
        border: 1px solid #333;
        background-color: #fff;
        transition: 0.3s;
        &:hover {
          background-color: $primary;
          color: #fff;
          border: 1px solid $primary;
        }
        &.active {
          background-color: $primary;
          color: #fff;
          border: 1px solid $primary;
        }
      }
    }
  }
}
.ic__shopping--cart {
  @include d-flex();
  flex-wrap: nowrap;
  flex-direction: column;
  @include justify-content(space-between);
  padding: 40px;
  width: 480px;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0px 14px 40px rgba(115, 115, 115, 0.15);
  z-index: 999;
  transform: translateX(150%);
  @include transition-linear(0.6s);

  @media #{$max480} {
    width: 338px;
    padding: 20px;
  }
  @media #{$max374} {
    width: 100%;
    padding: 20px;
  }

  @media #{$max1440} {
    gap: 104px;
    overflow-y: auto;
  }

  &.active {
    transform: translateX(0);
  }

  .ic__shopping--top {
    position: relative;

    .ic__cart--closed {
      position: absolute;
      top: 0;
      right: 20px;
      svg {
        width: 18px;
        fill: $secondary;
      }
      i {
        font-size: 20px;
        color: $error-500;
      }
    }

    h5 {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      color: $ebony-clay;
      padding-bottom: 20px;
    }
  }
}

  .ms__subCatagories--part {
    .slick-slider {
      .slick-slide {
        padding: 0;
      }
    }
    .ms__subCatagories-items {
      height: 334px;
      @media #{$max767} {
        height: 170px;
      }
      img {
        height: 100%;
      }
    }
  }
  .ms__catagoriesFilter--left {
    padding: 20px;
    box-shadow: $box-shadow;
    position: relative;
    @include bd-radius(6px);
    @media #{$max991} {
      position: absolute;
      top: 0;
      left: 0;
      background: #fff;
      height: 100%;
      z-index: 999;
      width: 300px;
      transform: translateX(-100%);
      transition: 0.4s;
      &.active {
        transform: translateX(0);
      }
    }
    .catagoriesFilter--closed {
        position: absolute;
        top: 10px;
        right: 10px;
        @media (min-width: 992px) {
          display: none;
        }
      }

    h5 {
      padding-bottom: 20px;
    }
    .ms__catagoriesnav {
      @media #{$max991} {
      height: 100%;
      overflow-y: auto;
    }
      .ms__catagorisItems {
       > a {
          color: $black;
          font-size: 16px;
          font-weight: 500;
        }
        .ms__catagoriesSub-nav {
          padding: 10px 20px 10px 35px;
          li {
              a {
                position: relative;
                font-size: 14px;
                color: $gray-deep;
                @include transition(0.3s);
                &::before {
                  content: "";
                  display: inline-block;
                  vertical-align: middle;
                  width: 12px;
                  height: 2px;
                  margin: 0 3px 2px 1px;
                  background-color: $gray-deep;
                  @include transition(0.3s);
                }
                &:hover {
                  color: $primary;
                  &::before {
                    width: 14px;
                  }
                }
              }
            }
            &:not(:last-child){
              padding-bottom: 8px;
            }
        }
      }
    }
  }
  .ms__catagoriesFilter--right {
    .subCatagories__title {
      padding-bottom: 15px;
    }
    .page--navigation {
      @include d-flex();
      gap: 4px;
      padding-bottom: 20px;
      li {
        a {
          font-size: 14px;
          color: $black;
        }
      }
    }
  }




  // new product card
  .ms__bestDeal--items {
    background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #e9eaed;
  box-shadow: $box-shadow;
  height: 100%;
  display: flex;
    flex-direction: column;
    justify-content: space-between;
  &.big-card {
    display: flex;
    flex-direction: row;
    align-items: center;

    .figure{
      display: flex;
      gap: 20px;
      // .ms__bestDeal--img {
      //   height: 70px;
      //   width: 70px;
      //   flex: 0 0 auto;
      //   @media (max-width: 480px) {
      //     height: 50px;
      //     width: 50px;
      //   }
      // }
    }
    .ms__card--btn {
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
      @media (max-width: 991px) {
        display: flex;
        flex-direction: column;
      }
      @media (max-width: 480px) {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
      }
      .ms-increment-decrement {
        display: flex;
        align-items: center;
        margin-right: 70px;
        gap: 10px;
        @media (max-width: 991px) {
          margin-right: 0px;
          order: 2;
          display: none;
        }
        @media (max-width: 480px) {
          margin-right: 0px;
          order: 1;
        }
        input {
          text-align: center;
          width: 63px!important;
        }
      }
      .addTo-cart {
        display: flex;
        align-items: center;
        gap: 20px;
        @media (max-width: 991px) {
          order: 1;
        }
        @media (max-width: 480px) {
          order: 2;
        }
      }
      .addToCart {
        flex: 0 0 auto;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid $primary;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        transition: .3s;
        svg {
          width: 16px;
          fill: $primary;
        }
        font-size: 14px;
        &:hover {
          background-color: $primary;
          color: #000;
        }
      }
    }
  }
}
</style>
