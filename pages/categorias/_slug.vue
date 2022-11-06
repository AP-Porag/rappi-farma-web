<template>
  <div class="root">
    <section class="beauty--product--pages ic-section-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="ms__products">
              <h3 class="heading">Beauty Products and Accessories</h3>
              <NuxtLink to="#">
                <img data-src="https://lh3.googleusercontent.com/9YprwyoKssia0kKYKLfzwXOH-ZLZxHZbcD2LmW0dLOTgUgFLaHuBXLZiS60o-uasio6QRWhMZAx5OkJnMYr2WVZ0W1rn3U8SGSpWXHIvcgYeZzNP=s5000" class="img-fluid w-100" alt="" v-lazy-load>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- SHOP BY CATEGORIES -->
    <section class="ms__shop--catagories--link">
      <div class="container">
        <h4 class="heading">SHOP BY CATEGORIES</h4>
        <div class="row g-1">
          <div class="col-xl-3">
            <NuxtLink to="#">
                <div class="ms__products--items position-relative">
                  <img src="https://lh3.googleusercontent.com/dWxWKkEFooCLL3_OfTii08yzst1jvD9jtH_GF7hfMDHc6I2h2GXyqjJPDVPbEFH5uzGcCnxaFDATK-z5BRQl9PaHUrQf-01VpX_zi8KAeO0j8Icn6w" class="img-fluid w-100" alt="" v-lazay-load>
                  <p class="ms__products--name">Skin care</p>
              </div>
            </NuxtLink>
          </div>
          <div class="col-xl-3">
            <NuxtLink to="#">
                <div class="ms__products--items position-relative">
                  <img src="https://lh3.googleusercontent.com/Vwehu35y071G1y7B1T_0-TE3s7-tQO0kIRa-LyCH6qlv0ODZM0-Ndhlk_k6OuhsHkQABuZFTysbNX5eP_-YZgikwg5zscLThjxP7Rgv1mSIWPZnv" class="img-fluid w-100" alt="" v-lazay-load>
                  <p class="ms__products--name">Skin care</p>
              </div>
            </NuxtLink>
          </div>
          <div class="col-xl-3">
            <NuxtLink to="#">
                <div class="ms__products--items position-relative">
                  <img src="https://lh3.googleusercontent.com/Sh6yzOs7sp8Vm0sEuK2dMOQlddrIhSJV2p-fpMPGisCt7A6ATYIIGnbukSo8rG7GuQFCLyZQV5ii8gqb-lSuotC4j7kFNoFt04JTYhUdwWZhgiU" class="img-fluid w-100" alt="" v-lazay-load>
                  <p class="ms__products--name">Skin care</p>
              </div>
            </NuxtLink>
          </div>
          <div class="col-xl-3">
            <NuxtLink to="#">
                <div class="ms__products--items position-relative">
                  <img src="https://lh3.googleusercontent.com/xu4Q02kXPEZXOQJevmh7l9wvUCUXdDvA3lIJB-Y4CQmFOq8AOe1sy5gVwjHlatRH03_55YACKLyMILTa07dVPINR6fVVn9Ua1bW3oOxB3z8Ivwd51A" class="img-fluid w-100" alt="" v-lazay-load>
                  <p class="ms__products--name">Skin care</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <!-- SHOP BY CATEGORIES -->

    <!-- LEARN TO TAKE CARE OF YOURSELF -->
    <section class="ms__video--tutorial ic-section-space">
      <div class="container">
        <h4 class="heading">LEARN TO TAKE CARE OF YOURSELF</h4>
        <div class="row">
          <div class="col-lg-6">
            <div class="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>
            <div class="ms__products--related">
              <div class="row">
                <div class="col-xl-4">
                  <div class="ms__products-names">
                    <h5>Revitalif Hyaluronic Acid Filler Serum</h5>
                    <a href="#" class="btn-border">see more</a>
                  </div>
                </div>
                <div class="col-xl-8">
                  <div class="ms__related--sliders slick-slider-relative">
                    <VueSlickCarousel :arrows="true" :dots="false" v-bind="sliderFourSeting">
                      <div class="ms__related--items">
                        <img src="https://lh3.googleusercontent.com/VIwuO75M7i7XliuVi_0aLQltXn1kGNXPI-ZkhOZC6wHcdrzHOYr6Gtp6WQYJcqdO_3j-6OACgCJP32ZtxIoyTPHAAmPvGNK4k3MdyxmVyDeqvL6eOg" alt="" v-lazay-load>
                        <p>L'oréal Dermo Expertise Hyaluronic Acid Micellar Water</p>
                      </div>
                      <div class="ms__related--items">
                        <img src="https://lh3.googleusercontent.com/lkXtaqOUJYktid_VjO-fQSiVKON02CY71LKuRmIWa-B-nBokjFz6AO9W4c6MfSXjoeNniaTV-BDKy5mTgOI7_E-68fWhxlvJQIt4sazNIRIWgAZ9" alt="" v-lazay-load>
                        <p>L'oréal Dermo Expertise Hyaluronic Acid Micellar Water</p>
                      </div>
                      <div class="ms__related--items">
                        <img src="https://lh3.googleusercontent.com/FDhlnuYcQDqDFyURGfneXpNywOZkSwQNgFV14X5mBiCUwLnnzKhMWLc1KxE1CmYi2rQkXDVq31A-BPVzO3Qyrb5D5AfMhUUwFB_pGF81eU-ppxJkzA" alt="" v-lazay-load>
                        <p>L'oréal Dermo Expertise Hyaluronic Acid Micellar Water</p>
                      </div>
                    </VueSlickCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>
            <div class="ms__products--related">
              <div class="row">
                <div class="col-xl-4">
                  <div class="ms__products-names">
                    <h5>Revitalif Hyaluronic Acid Filler Serum</h5>
                    <a href="#" class="btn-border">see more</a>
                  </div>
                </div>
                <div class="col-xl-8">
                  <div class="ms__related--sliders slick-slider-relative">
                    <VueSlickCarousel :arrows="true" :dots="false" v-bind="sliderFourSeting">
                      <div class="ms__related--items">
                        <img src="https://lh3.googleusercontent.com/VIwuO75M7i7XliuVi_0aLQltXn1kGNXPI-ZkhOZC6wHcdrzHOYr6Gtp6WQYJcqdO_3j-6OACgCJP32ZtxIoyTPHAAmPvGNK4k3MdyxmVyDeqvL6eOg" alt="" v-lazay-load>
                        <p>L'oréal Dermo Expertise Hyaluronic Acid Micellar Water</p>
                      </div>
                      <div class="ms__related--items">
                        <img src="https://lh3.googleusercontent.com/FDhlnuYcQDqDFyURGfneXpNywOZkSwQNgFV14X5mBiCUwLnnzKhMWLc1KxE1CmYi2rQkXDVq31A-BPVzO3Qyrb5D5AfMhUUwFB_pGF81eU-ppxJkzA" alt="" v-lazay-load>
                        <p>L'oréal Dermo Expertise Hyaluronic Acid Micellar Water</p>
                      </div>
                      <div class="ms__related--items">
                        <img src="https://lh3.googleusercontent.com/FDhlnuYcQDqDFyURGfneXpNywOZkSwQNgFV14X5mBiCUwLnnzKhMWLc1KxE1CmYi2rQkXDVq31A-BPVzO3Qyrb5D5AfMhUUwFB_pGF81eU-ppxJkzA" alt="" v-lazay-load>
                        <p>L'oréal Dermo Expertise Hyaluronic Acid Micellar Water</p>
                      </div>
                    </VueSlickCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- LEARN TO TAKE CARE OF YOURSELF -->

  </div>
</template>

<script>
export default {
  name: "_slug",
  data: () => ({
    sliderFourSeting: {
        infinite:true,
        arrows: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1
      },
  })
}
</script>

<style lang="scss" scoped>

.heading {
    padding-bottom: 20px;
  }

.ms__products--items {
  img {
    @include transition(0.3s);
  }
  .ms__products--name{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: #000;
    color: #fff;
    text-align: center;
    @include transition(0.3s);
  }
  &:hover {
    .ms__products--name {
      padding: 14px 10px;
    }
  }
}
.ms__products--related {
  padding-top: 20px;
}
.ms__products-names {
  h5 {
    padding-bottom: 15px;
  }
}
.btn-border {
  color: #000;
  background-color: transparent;
  border: 1px solid #000;
  display: inline-block;
  font-size: 14px;
  border-radius: 4px;
  padding: 5px 20px;
}
.ms__related--sliders {
  .ms__related--items {
    padding: 10px;
    text-align: center;
    img {
      max-width: 85px;
      margin: 0 auto;
    }
    p {
      font-size: 13px;
    }
  }
}
</style>
