<template>
  <div class="root">
    <section class="ms__product-details ic-section-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="ms__product--image">
              <div class="ms__large--image">
                <div>
                  <img
                    data-src="https://lh3.googleusercontent.com/q64qBvzPC2pmyckLfiDCkwdNqT76T5mTq7PqeFwYcC4W1p2ukqYdFUCz-jWUlcLt9SXa_jwrVSGzWEGYRRMzsE5gPfei5wpbnCk=s360"
                    class="img-fluid"
                    alt=""
                    v-lazy-load
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="ms__product--names">
              <h3>
                Pestañina Maybelline The Colossal Volum Express a prueba de agua
                x9.2Ml
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"
                  />
                </svg>
              </h3>
              <p class="ms__pass">Volumen colossal en una sola pasada.</p>
              <p class="ms__precio">Precio normal</p>
              <h6 class="ms__price">$36.850</h6>
              <p class="ms__mini--price">Mililitro a $ 4005.43</p>
              <p class="ms__delivery">Envío:Express 45 min. promedio</p>
              <div class="ms__product-count">
                <button class="minize">-</button> <input type="text" />
                <button class="minize">+</button>
              </div>
              <a href="#" class="ic-btn">Add Products</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- description start -->
    <section class="ms__description--heads ic-section-space">
      <div class="container">
        <div class="ms__description">
          <div class="row">
            <div class="col-lg-7">
              <div class="ms__description--text">
                <h3>
                  Characteristics of the Colossal Volum Express Waterproof
                  Mascara
                </h3>
                <p class="text-paragraph">
                  Colossal volume in a single pass. Get colossal lashes with
                  just one coat and no clumps.
                </p>


                <h5 class="black mt-3 mb-2">Data sheet:</h5>
                <table class="table table-bordered">
                  <tr>
                    <td>
                      <p>Brand : </p>
                    </td>
                    <td>
                      <p>Maybelline</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Brand : </p>
                    </td>
                    <td>
                      <p>Maybelline</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Kind of product:</p>
                    </td>
                    <td>
                      <p>eyelash</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Quantity:</td>
                    <td>9.2 mlt</td>
                  </tr>
                  <tr>
                    <td>Units per package:</td>
                    <td>
1</td>
                  </tr>
                  <tr>
                    <td>Type of skin:</td>
                    <td>All</td>
                  </tr>
                  <tr>
                    <td>Country of Production:</td>
                    <td>Colombia</td>
                  </tr>
                  <tr>
                    <td>Invima registration:</td>
                    <td>NSOC33480-09C</td>
                  </tr>
                  <tr>
                    <td>Presentation of the product:</td>
                    <td>tube, liquid</td>
                  </tr>
                  <tr>
                    <td>Item depth:</td>
                    <td>2cm</td>
                  </tr>
                  <tr>
                    <td>ITEM Width:</td>
                    <td>2cm</td>
                  </tr>
                  <tr>
                    <td>Item Height</td>
                    <td>2cm</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- description end -->

    <!-- related products -->
    <section class="ms__related--produtcs ic-section-space">
      <div class="container">
        <div class="ms__related--content ms__card">
          <div class="ms__title">
            <h3 class="primary title">Related products</h3>
          </div>
          <div class="ms__related--slider slick-slider-relative">
            <VueSlickCarousel :arrows="true" :dots="false" v-bind="sliderTwoSetting" v-if="beauties.length">
              <ProductoProduct v-for="beauty in beauties" :key="beauty.id" :product="beauty" />
             
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </section>

    <!-- related products -->

    <!-- feedback -->
    <section class="ms__feedback ic-section-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 m-auto">
            <div class="ms__feedback--mains">
              <div class="row">
                <div class="col-lg-6">
                  <h3>customer feedback</h3>
                </div>
                <div class="col-lg-6 text-end">
                  <button class="btn btn-primary">Qualify</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- feedback -->

    <!-- related products -->
    <section class="ms__related--produtcs ic-section-space">
      <div class="container">
        <div class="ms__related--content ms__card">
          <div class="ms__title">
            <h3 class="primary title">Products of the same brand</h3>
          </div>
          <div class="ms__related--slider slick-slider-relative">
            <VueSlickCarousel :arrows="true" :dots="false" v-bind="sliderTwoSetting" v-if="beauties.length">
              <ProductoProduct v-for="beauty in beauties" :key="beauty.id" :product="beauty" />
             
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </section>

    <!-- related products -->
  </div>
</template>

<script>
export default {
  name: "_slug",
  data: () => ({
    productSliderSmall: {
      arrows: false,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      infinite: true,
      draggable: true,
    },
    productSliderLarge: {
      arrows: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
    sliderTwoSetting: {
      infinite:true,
      arrows: true,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1
    },
    beauties:[
      {id:'6.1',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-1.png'},
      {id:'6.2',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-2.jpg'},
      {id:'6.3',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-3.jpg'},
      {id:'6.4',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-4.jpg'},
      {id:'6.5',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-5.jpg'},
      {id:'6.6',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-6.jpg'},
    ],
  })
}
</script>

<style lang="scss" scoped>
.ms__product--image {
  @include d-flex();
  gap: 20px;
  .ms__small--products {
    width: 80px;

    .ms__small--img {
      width: 80px;
      @include bd-radius(4px);
      border: 1px solid $gray-light;
      img {
        max-width: 100%;
        max-height: 100%;
        height: max-height;
        @include bd-radius(4px);
      }
    }
    .slick-vertical {
      .slick-slide {
        padding: 0;
      }
    }
  }
  .ms__large--image {
    flex: 1;
  }
  .ms__large--image {
    img {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
    }
  }
}
.ms__product--names {
  h3 {
    font-size: 24px;
    padding-bottom: 15px;
    svg {
      width: 20px;
      margin-left: 10px;
    }
  }
  .ms__pass {
    padding-bottom: 15px;
    color: $gray-deep;
  }
  .ms__precio {
    padding-bottom: 8px;
    color: $gray-deep;
    font-size: 13px;
  }
  .ms__price {
    font-size: 28px;
    font-weight: 700;
    padding-bottom: 5px;
    color: $primary;
  }
  .ms__mini--price {
    font-size: 13px;
    padding-bottom: 10px;
  }
  .ms__delivery {
    padding-bottom: 15px;
    color: $gray-deep;
    font-size: 14px;
  }
  .ms__product-count {
    @include d-flex();
    gap: 20px;
    padding-bottom: 30px;
    input {
      width: 80px;
      height: 40px;
      border: 1px solid $gray-deep;
      border-radius: 4px;
      padding: 10px;
      &:focus {
        outline: 0;
      }
    }
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      outline: 0;
      border: 0;
      background-color: $primary;
      color: $white;
      font-size: 24px;
      font-weight: 700;
    }
  }
}
.ms__description--heads {
  background-color: #fff;
}
.ms__description--text {
  h3 {
    font-size: 22px;
    padding-bottom: 10px;
  }
  .text-paragraph {
    padding-bottom: 20px;
  }
}

.ms__feedback--mains {
  padding: 30px;
  background-color: #fff;
  box-shadow: $box-shadow;
  border-radius: 6px;
}
</style>
