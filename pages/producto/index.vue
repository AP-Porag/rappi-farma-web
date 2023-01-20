<template>
  <div>
      <section class="ms__subCatagories--part ic-section-space">
        <div class="container slick-slider-relative">
          <VueSlickCarousel :arrows="true" :dots="false" setting="subCatagoriesSlider">
            <div>
              <NuxtLink to="#">
                <img data-src="https://lh3.googleusercontent.com/Q2MjL643kWHqHISyvOUdYmgG84o0Y6ajsrpzai3kpO2ka14NpNLtAiUBTxboO0EXNeZBdIVVeUUyRfppTz1SYeI2k_fyYmJ_XWhaoeXJJ_TIy51-=s1366-rw"  class="img-fluid" alt="" v-lazy-load>
              </NuxtLink>
            </div>
            <div>
                <NuxtLink to="#">
                  <img data-src="https://lh3.googleusercontent.com/Q2MjL643kWHqHISyvOUdYmgG84o0Y6ajsrpzai3kpO2ka14NpNLtAiUBTxboO0EXNeZBdIVVeUUyRfppTz1SYeI2k_fyYmJ_XWhaoeXJJ_TIy51-=s1366-rw"  class="img-fluid" alt="" v-lazy-load>
                </NuxtLink>
            </div>
            </VueSlickCarousel>
        </div>
      </section>
      <!-- sub catagoris -->
      <section class="ms__catagoriesFilter--part ic-section-space">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-3">
              <a href="#" class="d-lg-none">Catagories Name Filter</a>
              <div class="ic__catagoriesFilter--overlay"></div>
              <div class="ms__catagoriesFilter--left">
                <a href="#" class="catagoriesFilter--closed">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
                </a>
                <h5>Catagories Name</h5>
                <ul class="ms__catagoriesnav">
                  <li class="ms__catagorisItems">
                      <NuxtLink to="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                         health and medicine</NuxtLink>
                      <ul class="ms__catagoriesSub-nav">
                        <li>
                          <nuxtLink to="#">
                            Drugstore
                          </nuxtLink>
                        </li>
                        <li>
                          <nuxtLink to="#">
                            Drugstore
                          </nuxtLink>
                        </li>
                      </ul>
                  </li>
                  <li class="ms__catagorisItems">
                      <NuxtLink to="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                         flu treatment</NuxtLink>
                      <ul class="ms__catagoriesSub-nav">
                        <li>
                          <nuxtLink to="#">
                            cold and flu
                          </nuxtLink>
                        </li>
                        <li>
                          <nuxtLink to="#">
                            Throat pain
                          </nuxtLink>
                        </li>
                        <li>
                          <nuxtLink to="#">
                            cough treatment
                          </nuxtLink>
                        </li>
                        <li>
                          <nuxtLink to="#">
                            decongestant
                          </nuxtLink>
                        </li>
                      </ul>
                  </li>
                  <li class="ms__catagorisItems">
                      <NuxtLink to="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                         Pain relief</NuxtLink>
                      <ul class="ms__catagoriesSub-nav">
                        <li>
                          <nuxtLink to="#">
                            overall pain
                          </nuxtLink>
                        </li>
                        <li>
                          <nuxtLink to="#">
                            Strong pain
                          </nuxtLink>
                        </li>
                        <li>
                          <nuxtLink to="#">
                            Abdominal pain and colic
                          </nuxtLink>
                        </li>
                        <li>
                          <nuxtLink to="#">
                            muscle and joint
                          </nuxtLink>
                        </li>
                        <li>
                          <nuxtLink to="#">
                            Kids
                          </nuxtLink>
                        </li>
                      </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="ms__catagoriesFilter--right">
                <div class="row">
                  <div class="col-lg-6">
                    <h5 class="subCatagories__title">Drugstore</h5>
                    <ul class="page--navigation">
                      <li>
                        <a href="#">Health and medicines / </a>
                      </li>
                      <li>
                        <a href="#">Health and medicines / </a>
                      </li>
                      <li>
                        <a href="#">Drugstore</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <div class="ms__filter--search">
                      <button class="ic-btn" @click="filterBox = !filterBox">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 14v6l-4 2v-8L4 5V3h16v2l-6 9zM6.404 5L12 13.394 17.596 5H6.404z"/></svg>
                         Filter search</button>
                    </div>
                  </div>
                </div>

                <div class="row g-4">
                  <ProductoProduct class="col-lg-4 col-md-6" v-for="product in products" :key="product.id" :product="product" />
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
    subCatagoriesSlider: {
      arrows: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    },
    filterBox:false,
    products:[],
    page: 1,
    keywords:null,
    category_id:null,
    brand_id:null,
  }),
  created() {

  },
  mounted() {
    this.getKeyWordsFromLocalstorage()
    this.getAllProducts();
    localStorage.removeItem('rappiKywords');
  },
  methods:{
    async getAllProducts() {
      try {
        const response = await this.$axios.get(`/product?page=${this.page}&keywords=${this.keywords}&category=${this.category_id}&brand=${this.brand_id}`);
        this.products = response.data.data.items;
      }catch (e) {
        console.log(e.message)
      }
    },
    infiniteScroll($state) {
      setTimeout(() => {
        this.page++; // next page

        try {
          this.$axios.get(`/product?page=${this.page}&keywords=${this.keywords}&category=${this.category_id}&brand=${this.brand_id}`)
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
    .slick-track {
      height: 334px;
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
</style>
