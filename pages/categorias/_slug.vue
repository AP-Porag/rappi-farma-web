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
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <NuxtLink to="#">
                <div class="ms__products--items position-relative">
                  <img src="https://lh3.googleusercontent.com/dWxWKkEFooCLL3_OfTii08yzst1jvD9jtH_GF7hfMDHc6I2h2GXyqjJPDVPbEFH5uzGcCnxaFDATK-z5BRQl9PaHUrQf-01VpX_zi8KAeO0j8Icn6w" class="img-fluid w-100" alt="" v-lazay-load>
                  <p class="ms__products--name">Skin care</p>
              </div>
            </NuxtLink>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <NuxtLink to="#">
                <div class="ms__products--items position-relative">
                  <img src="https://lh3.googleusercontent.com/Vwehu35y071G1y7B1T_0-TE3s7-tQO0kIRa-LyCH6qlv0ODZM0-Ndhlk_k6OuhsHkQABuZFTysbNX5eP_-YZgikwg5zscLThjxP7Rgv1mSIWPZnv" class="img-fluid w-100" alt="" v-lazay-load>
                  <p class="ms__products--name">Skin care</p>
              </div>
            </NuxtLink>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <NuxtLink to="#">
                <div class="ms__products--items position-relative">
                  <img src="https://lh3.googleusercontent.com/Sh6yzOs7sp8Vm0sEuK2dMOQlddrIhSJV2p-fpMPGisCt7A6ATYIIGnbukSo8rG7GuQFCLyZQV5ii8gqb-lSuotC4j7kFNoFt04JTYhUdwWZhgiU" class="img-fluid w-100" alt="" v-lazay-load>
                  <p class="ms__products--name">Skin care</p>
              </div>
            </NuxtLink>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
              <div class="row g-4">
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
              <div class="row g-4">
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

    <!-- BEAUTY TRENDS -->
    <section class="ms__beauty--trends">
      <div class="container">
        <div class="ms__card">
          <div class="ms__title border-0"><h4>ENDENCIAS DE BELLEZA</h4></div>
            <div class="ms__beauty--Grid slick-slider-relative">
              <VueSlickCarousel :arrows="true" :dots="false" v-bind="beautySliderSetting">
                <div class="ms__beauty--items">
                  <NuxtLink to="#">
                    <div class="position-relative">
                      <img src="https://lh3.googleusercontent.com/qGWlKSWjwh8Rv-xqxTOMnjD8u0D34pZiJ--UPfzT3-bLNDu5y_EvsLI4VeifD1C80CjPPtMjEajjhz2mAQ1v34Ttdnsa_dC9ZAR0XOvi-qbwGpKb" class="img-fluid w-100" alt="" v-lazy-load>
                      <div class="ms__beauty--names">
                        <p>Micellar Water with Rose Water Garnier</p>
                                <svg width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="m21.046 0-1.291 1.3 5.748 5.781H0V8.92h25.503L19.755 14.7 21.046 16 29 8z" fill="#FFF" fill-rule="nonzero"/>
                          </svg>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
                <div class="ms__beauty--items">
                  <NuxtLink to="#">
                    <div class="position-relative">
                      <img src="https://lh3.googleusercontent.com/qGWlKSWjwh8Rv-xqxTOMnjD8u0D34pZiJ--UPfzT3-bLNDu5y_EvsLI4VeifD1C80CjPPtMjEajjhz2mAQ1v34Ttdnsa_dC9ZAR0XOvi-qbwGpKb" class="img-fluid w-100" alt="" v-lazy-load>
                      <div class="ms__beauty--names">
                        <p>Micellar Water with Rose Water Garnier</p>
                                <svg width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="m21.046 0-1.291 1.3 5.748 5.781H0V8.92h25.503L19.755 14.7 21.046 16 29 8z" fill="#FFF" fill-rule="nonzero"/>
                          </svg>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
                <div class="ms__beauty--items">
                  <NuxtLink to="#">
                    <div class="position-relative">
                      <img src="https://lh3.googleusercontent.com/qGWlKSWjwh8Rv-xqxTOMnjD8u0D34pZiJ--UPfzT3-bLNDu5y_EvsLI4VeifD1C80CjPPtMjEajjhz2mAQ1v34Ttdnsa_dC9ZAR0XOvi-qbwGpKb" class="img-fluid w-100" alt="" v-lazy-load>
                      <div class="ms__beauty--names">
                        <p>Micellar Water with Rose Water Garnier</p>
                                <svg width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="m21.046 0-1.291 1.3 5.748 5.781H0V8.92h25.503L19.755 14.7 21.046 16 29 8z" fill="#FFF" fill-rule="nonzero"/>
                          </svg>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
                <div class="ms__beauty--items">
                  <NuxtLink to="#">
                    <div class="position-relative">
                      <img src="https://lh3.googleusercontent.com/qGWlKSWjwh8Rv-xqxTOMnjD8u0D34pZiJ--UPfzT3-bLNDu5y_EvsLI4VeifD1C80CjPPtMjEajjhz2mAQ1v34Ttdnsa_dC9ZAR0XOvi-qbwGpKb" class="img-fluid w-100" alt="" v-lazy-load>
                      <div class="ms__beauty--names">
                        <p>Micellar Water with Rose Water Garnier</p>
                                <svg width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="m21.046 0-1.291 1.3 5.748 5.781H0V8.92h25.503L19.755 14.7 21.046 16 29 8z" fill="#FFF" fill-rule="nonzero"/>
                          </svg>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
                <div class="ms__beauty--items">
                  <NuxtLink to="#">
                    <div class="position-relative">
                      <img src="https://lh3.googleusercontent.com/qGWlKSWjwh8Rv-xqxTOMnjD8u0D34pZiJ--UPfzT3-bLNDu5y_EvsLI4VeifD1C80CjPPtMjEajjhz2mAQ1v34Ttdnsa_dC9ZAR0XOvi-qbwGpKb" class="img-fluid w-100" alt="" v-lazy-load>
                      <div class="ms__beauty--names">
                        <p>Micellar Water with Rose Water Garnier</p>
                                <svg width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="m21.046 0-1.291 1.3 5.748 5.781H0V8.92h25.503L19.755 14.7 21.046 16 29 8z" fill="#FFF" fill-rule="nonzero"/>
                          </svg>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
                <div class="ms__beauty--items">
                  <NuxtLink to="#">
                    <div class="position-relative">
                      <img src="https://lh3.googleusercontent.com/qGWlKSWjwh8Rv-xqxTOMnjD8u0D34pZiJ--UPfzT3-bLNDu5y_EvsLI4VeifD1C80CjPPtMjEajjhz2mAQ1v34Ttdnsa_dC9ZAR0XOvi-qbwGpKb" class="img-fluid w-100" alt="" v-lazy-load>
                      <div class="ms__beauty--names">
                        <p>Micellar Water with Rose Water Garnier</p>
                                <svg width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="m21.046 0-1.291 1.3 5.748 5.781H0V8.92h25.503L19.755 14.7 21.046 16 29 8z" fill="#FFF" fill-rule="nonzero"/>
                          </svg>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </VueSlickCarousel>
          </div>
        </div>
      </div>
    </section>
    <!-- BEAUTY TRENDS -->

    <!-- enhance your beauty -->
    <section class="ms__enhanceBeauty--part ic-section-space">
      <div class="container">
        <div class="ms__card">
          <div class="row g-4">
            <div class="col-xl-4">
              <div class="ms__products-names">
                <h4 class="primary mb-3">enhance your beauty</h4>
                <p class="mb-3">When it comes to taking care of yourself and pampering yourself, the use of the best quality products should be your priority.</p>
                <p class="mb-3">For your day to day achieve a natural look, enhancing your beauty.</p>
                <a href="#" class="btn-border">see more</a>
              </div>
            </div>
            <div class="col-xl-8">
              <div class="slick-slider-relative">
                <VueSlickCarousel :arrows="true" :dots="false" v-bind="sliderBeautyOfEnhance" v-if="beauties.length">
                <ProductoProduct v-for="beauty in beauties" :key="beauty.id" :product="beauty" />
              </VueSlickCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- enhance your beauty -->

     <!-- SHOP BY BRAND -->
     <section class="ms__beauty--trends">
      <div class="container">
        <div class="ms__card">
          <div class="ms__title border-0"><h4>SHOP BY BRAND</h4></div>
            <div class="ms__beauty--Grid slick-slider-relative">
              <VueSlickCarousel :arrows="true" :dots="false" v-bind="beautySliderSetting">
                <div class="ms__beauty--items">
                  <NuxtLink to="#">
                    <div class="position-relative">
                      <img src="https://lh3.googleusercontent.com/npn9TgDsm6vUW1LqPJYROlkCWWseoLLlH2_kF45oHi16JxLMvbWaLjqvOwwGPlaGOjVRzqfJo60xGZCgp49UFLaRaHANTa-lanVylVnYsD5LFzpN" class="img-fluid w-100" alt="" v-lazy-load>
                      <div class="ms__beauty--names">
                        <img class="ic__logo-img" src="https://lh3.googleusercontent.com/3T5IXJWmUBpC-gwFAT2mOxyMGSmz-c3imXDywRKeE9Tq9nl-yeyQw1RgLbdysfxESLnd60DsjUZv84p0ZWKrlbM_nuEJOibUvu-eoLNlKCZj5_yJ" alt="" v-lazy-load>
                                <svg width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="m21.046 0-1.291 1.3 5.748 5.781H0V8.92h25.503L19.755 14.7 21.046 16 29 8z" fill="#FFF" fill-rule="nonzero"/>
                          </svg>
                      </div>
                    </div>
                  </NuxtLink> 
                </div>
                <div class="ms__beauty--items">
                  <NuxtLink to="#">
                    <div class="position-relative">
                      <img src="https://lh3.googleusercontent.com/jQR5A9LVqtVknc4GhFGtcAr6x5DODJ63P-r1HKoYeHcTVVe5lwVAhRmra_XlH46jvDM4vag176C2IJJw5PSUee14AVRB64JH42cbkcCDTZ4Ah-9vaQ" class="img-fluid w-100" alt="" v-lazy-load>
                      <div class="ms__beauty--names">
                        <img class="ic__logo-img" src="https://lh3.googleusercontent.com/mM4gDg6spGuoxpfB-I5J5IwJA0Jih-1RzoNLMkaimpTPnxG8ceVKUrgsuSWEpd8uLNVtcuLVFHsh3hjvBk-Uf5o6_NkqttL-i78zn0-jJZVQ8p3D" alt="" v-lazay-load>
                                <svg width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="m21.046 0-1.291 1.3 5.748 5.781H0V8.92h25.503L19.755 14.7 21.046 16 29 8z" fill="#FFF" fill-rule="nonzero"/>
                          </svg>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
                <div class="ms__beauty--items">
                  <NuxtLink to="#">
                    <div class="position-relative">
                      <img  src="https://lh3.googleusercontent.com/f55Au5Rv-GoIhDIhdIfoXrHoc98LjvIbE68n2uP-mcU3KSg2TYLOt4m39QtARRwqQAU7W4_h-QApGIZQq2YibX1AqGjlF3N1mGbAh2DIrviQO54c" class="img-fluid w-100" alt="" v-lazy-load>
                      <div class="ms__beauty--names">
                        <img class="ic__logo-img" src="https://lh3.googleusercontent.com/a0s2diuNxllgNCCJwFFPeyFF0tkypon9P1iebcbqggCtneERR6itks9mbziVso8ZuDkAiJqXhT4_znS8N3mz114yfyXkkUDV0KEWlYemPUO2lWA" alt="" v-lazay-load>
                                <svg width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="m21.046 0-1.291 1.3 5.748 5.781H0V8.92h25.503L19.755 14.7 21.046 16 29 8z" fill="#FFF" fill-rule="nonzero"/>
                          </svg>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
                <div class="ms__beauty--items">
                  <NuxtLink to="#">
                    <div class="position-relative">
                      <img src="https://lh3.googleusercontent.com/bIVuZL0DZY7W3-Cy0vTZjjPYw7yrwQ9qrRLzyjRTt6qzIHTjrluuAP_lpCBp_e0icx-7lTvLRfcpvaUPidzA1UFHeYvrc9Ec0fbYslN0aZlXMQ3O" class="img-fluid w-100" alt="" v-lazy-load>
                      <div class="ms__beauty--names">
                        <img class="ic__logo-img" src="https://lh3.googleusercontent.com/KIVO_NqluH7Ps73IjyY_ag09mvLhnFoTjXPDJ2l5iwwMsd9k9Ew3SBwlojC2gxfl4zVqs0eYXSSausqxi6wEUBpsGswBGXkgcxuG3sUzDQDeUS6F" alt="" v-lazay-load>
                                <svg width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="m21.046 0-1.291 1.3 5.748 5.781H0V8.92h25.503L19.755 14.7 21.046 16 29 8z" fill="#FFF" fill-rule="nonzero"/>
                          </svg>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
                <div class="ms__beauty--items">
                  <NuxtLink to="#">
                    <div class="position-relative">
                      <img src="https://lh3.googleusercontent.com/_xG9n5n5qkcGa-fA-IvmYcEKHO3Rwm_Qy5CpvUImS-OzAts2-vUfxnSkz3EIJDJJO7VBpHWrcj8YE1-Gafn6xG-stsVUd24ZNI6dGQltbe_Z6axn" class="img-fluid w-100" alt="" v-lazy-load>
                      <div class="ms__beauty--names">
                        <img class="ic__logo-img" src="https://lh3.googleusercontent.com/a0s2diuNxllgNCCJwFFPeyFF0tkypon9P1iebcbqggCtneERR6itks9mbziVso8ZuDkAiJqXhT4_znS8N3mz114yfyXkkUDV0KEWlYemPUO2lWA" alt="" v-lazay-load>
                                <svg width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="m21.046 0-1.291 1.3 5.748 5.781H0V8.92h25.503L19.755 14.7 21.046 16 29 8z" fill="#FFF" fill-rule="nonzero"/>
                          </svg>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
                <div class="ms__beauty--items">
                  <NuxtLink to="#">
                    <div class="position-relative">
                      <img src="https://lh3.googleusercontent.com/qGWlKSWjwh8Rv-xqxTOMnjD8u0D34pZiJ--UPfzT3-bLNDu5y_EvsLI4VeifD1C80CjPPtMjEajjhz2mAQ1v34Ttdnsa_dC9ZAR0XOvi-qbwGpKb" class="img-fluid w-100" alt="" v-lazy-load>
                      <div class="ms__beauty--names">
                        <img class="ic__logo-img" src="https://lh3.googleusercontent.com/a0s2diuNxllgNCCJwFFPeyFF0tkypon9P1iebcbqggCtneERR6itks9mbziVso8ZuDkAiJqXhT4_znS8N3mz114yfyXkkUDV0KEWlYemPUO2lWA" alt="" v-lazay-load>
                                <svg width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="m21.046 0-1.291 1.3 5.748 5.781H0V8.92h25.503L19.755 14.7 21.046 16 29 8z" fill="#FFF" fill-rule="nonzero"/>
                          </svg>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </VueSlickCarousel>
          </div>
        </div>
      </div>
    </section>
    <!-- SHOP BY BRAND -->

    <!-- video 3 -->
    <section class="ms__video--tutorial ic-section-space">
      <div class="container">
        <h4 class="heading">A ROUTINE FOR EVERY MOMENT</h4>
        <div class="row g-4">
          <div class="col-lg-4">
            <div class="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- video 3 -->

    <!-- media card -->
    <section class="ic-section-space-bottom">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="card mb-3 h-100" >
              <div class="row g-0 h-100">
                <div class="col-md-4">
                  <img src="https://lh3.googleusercontent.com/Z7Dr3F7SBYrppagfjyGYw_al8D-E1hk3JZTEUUD9ezrY2zVplV8SkAvBUS5DLCD7rm2nKQPNudBY0SGJTGdTDrNcsUPx1pUIUFT0z6ZKPTXWotzx" class="img-fluid rounded-start h-100" alt="..." v-lazy-load>
                </div>
                <div class="col-md-8">
                  <div class="card-body h-100">
                    <h5 class="card-title ms__card-Title">Why remove your makeup before going to sleep?</h5>
                    <p class="card-text ms__card-text mb-4">You are not aware of the consequences of going to bed with makeup, but we assure you that it is very detrimental to the well-being of your skin, since, at night, it is when facial cells regenerate and if you leave layers of cosmetics on your complexion, a barrier is created preventing normal tissue regeneration.</p>
                    <a href="#" class="btn-border">see more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card mb-3 h-100" >
              <div class="row g-0 h-100">
                <div class="col-md-4">
                  <img src="https://lh3.googleusercontent.com/r6gkQQXa4lFYsWwDjU402PFSAxZiBjmmRR9F2A26mk1GdVmp4vlBH-oYue39spQybpEDmyD7QNUhoRzxBSoTUG6ImW-7wYRBT2kGtcXnOR6xr14VyA" class="img-fluid rounded-start h-100" alt="..." v-lazy-load>
                </div>
                <div class="col-md-8">
                  <div class="card-body h-100">
                    <h5 class="card-title ms__card-Title">Your skin will lose luminosity by not removing all the residue.</h5>
                    <p class="card-text ms__card-text mb-4">Makeup is responsible for the loss of nutrition, making it look duller and lose freshness and hydration. Also, wearing makeup before bed can cause dermatitis, skin allergies, irritated skin, flaking, and a much more sensitive face.</p>
                    <a href="#" class="btn-border">see more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- media card -->

    <!-- adveertismet -->
    <section class="ic-section-space-bottom">
      <div class="container">
        <div class="row g-4">
        <div class="col-lg-4 col-md-6">
          <div class="ms__advertisment--img">
            <NuxtLink to="#">
              <img src="https://lh3.googleusercontent.com/aNhViKeDIO-b9GTduQ8ke68-gZHNG1PVCP8cnIxNA0lDusqc111GqJClNqhUQozV7QXs_ya_5oDnMs4aVe1BdifH9WcN-m1klXz4XWOJc3_U5OphKw=s5000" alt="" class="img-fluid w-100" v-lazy-load>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-8 col-md-6">
          <div class="ms__advertisment--img">
            <NuxtLink to="#">
            <img src="https://lh3.googleusercontent.com/enzFazRFCip530rH6WNPrxQDpcmmIEGjIFs5cFKfyQ9V599RP-DO7NP7YFsTzIAHrR95Ji5pw6j2dxAKekK_SqiRNQuqTa9vxRUk2HIPu6LN3mJA=s5000" alt="" class="img-fluid w-100" v-lazy-load>
          </NuxtLink>
          </div>
        </div>
      </div>
      </div>
    </section>
    <!-- adveertismet -->


  </div>
</template>

<script>
export default {
  name: "_slug",
  data: () => ({
    beauties:[
      {id:'6.1',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-1.png'},
      {id:'6.2',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-2.jpg'},
      {id:'6.3',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-3.jpg'},
      {id:'6.4',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-4.jpg'},
      {id:'6.5',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-5.jpg'},
      {id:'6.6',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-6.jpg'},
    ],
    sliderFourSeting: {
        infinite:true,
        arrows: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [

    {
      breakpoint: 575,
      settings: {
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  ]
      },
      beautySliderSetting: {
        arrows: true,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
     {
      breakpoint: 1200,
      settings: {
        "slidesToShow": 3,
        "slidesToScroll": 1,
      }
    },
     {
      breakpoint: 991,
      settings: {
        "slidesToShow": 2,
        "slidesToScroll": 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        "slidesToShow": 2,
        "slidesToScroll": 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  ]
    },
    sliderBeautyOfEnhance: {
        arrows: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
    {
      breakpoint: 575,
      settings: {
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  ]
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

.ms__beauty--items {
  overflow: hidden;
  img {
    @include transition(0.3s);
  }
  .ms__beauty--names {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    @include d-flex();
    gap: 10px;
    flex-wrap: nowrap;
    @include align-items(center);
    z-index: 9;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0, 0, 0, 0.829) 100%);
    z-index: -1;
    
 }
 .ic__logo-img {
      max-width: 75%;
    }
    p {
      font-size: 14px;
      color: #fff;
    }
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}
.ms__card-Title {
  padding-bottom: 15px;
}
.ms__card-text {
  font-size: 14px;
}
</style>
