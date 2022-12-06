<template>
  <div>
    <!-- banner part start -->
    <section class="ms__banner--part">
      <div class="container slick-slider-relative">
        <VueSlickCarousel :arrows="true" v-bind="sliderOneBanner" :dots="false" v-if="banners.length">
          <div class="ms__banner--items" v-for="banner in banners" :key="banner.id">
            <NuxtLink :to="banner.path">
              <img :data-src="banner.image"  class="img-fluid" alt="" v-lazy-load>
            </NuxtLink>
          </div>
        </VueSlickCarousel>
      </div>
    </section>
    <!-- banner part end -->

    <!-- advertisment -->
    <section class="ms__advertisment--part">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-6 col-md-6">
            <NuxtLink to="/">
              <div class="ms__advertisment--img">
                <img data-src="/images/a-1.webp"  class="img-fluid w-100" alt="" v-lazy-load>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-6  col-md-6">
            <NuxtLink to="/">
              <div class="ms__advertisment--img">
                <img data-src="/images/a-2.webp"  class="img-fluid w-100" alt="" v-lazy-load>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <!-- advertisment -->

    <!-- catagories -->
    <section class="ms__catagories--part ic-section-space">
      <div class="container slick-slider-relative">
        <div class="ms__catagories--sliders">
          <VueSlickCarousel :arrows="true" :dots="false" v-bind="sliderOneSetting" v-if="categories.length">
            <div class="" v-for="category in categories" :key="category.id">
              <NuxtLink :to="category.path">
                <div class="figure">
                  <div class="ms__catagories--img">
                    <img :data-src="category.image" alt="" v-lazy-load>
                  </div>
                  <div class="caption">
                    <p class="font-14">Send it Now Venezuela</p>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </section>
    <!-- catagories -->

    <!-- best deal start -->
    <section class="ms__bestDeal--part ic-section-space-bottom">
      <div class="container">
        <div class="ms__card">
          <div class="ms__title border-0">
            <h4><span class="primary">Hello ! </span> These are the best deals</h4>
          </div>
          <div class="ms__bestDeal--slider slick-slider-relative">
            <VueSlickCarousel :arrows="true" :dots="false" v-bind="sliderTwoSetting" v-if="deals.length">
              <div v-for="deal in deals" :key="deal.id">
                <div class="ms__bestDeal--items">
                    <div class="figure position-relative mb-0 p-3">
                        <div class="ms__bestDeal--img">
                        <nuxt-link :to="deal.path">
                            <img :data-src="deal.image" class="img-fluid" alt="" v-lazy-load>
                        </nuxt-link>
                        <div class="tag">
                            <img data-src="images/icon-discount-yellow.svg" alt="" v-lazy-load>
                            <p>{{deal.discount}}</p>
                        </div>
                        </div>
                        <div class="offer-description">
                        <p>Hasta el 35% en {{deal.title}} </p>
                        <div class="offer-description-ribbon"></div>
                        </div>
                    </div>
                    <div class="ms__card--btn">
                        <nuxt-link :to="deal.path" class="btn btn-primary btn-md w-100">See More</nuxt-link>
                    </div>
                </div>
              </div>

              <!-- <ProductoProduct  :product="deal" /> -->
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </section>
    <!-- best deal end -->

    <!-- feature -->
    <section class="ms__feature--part ic-section-space-bottom">
      <div class="container">
        <div class="ms__card">
          <div class="ms__title">
            <h4 class="title primary mb-0">Featured</h4>
          </div>
          <div class="ms__bestDeal--slider slick-slider-relative">
            <VueSlickCarousel :arrows="true" :dots="false" v-bind="sliderTwoSetting" v-if="features.length">
              <div v-for="feature in features" :key="feature.id">
                  <div class="ms__bestDeal--items">
                    <div class="figure position-relative mb-0 p-3">
                      <div class="ms__bestDeal--img">
                        <nuxt-link :to="feature.path">
                          <img class="img-fluid" :data-src="feature.image" alt="" v-lazy-load>
                        </nuxt-link>
                      </div>
                      <div class="offer-description">
                        <p>{{feature.title}}</p>
                        <div class="offer-description-ribbon"></div>
                      </div>
                    </div>
                    <div class="ms__card--btn">
                      <nuxt-link to="" class="btn btn-primary btn-md w-100">See More</nuxt-link>
                    </div>
                  </div>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </section>
    <!-- feature -->

    <!-- beauty -->
    <section class="ms__beatuy--part">
      <div class="container">
        <div class="ms__card">
          <div class="ms__title">
            <h4 class="title primary mb-0">Beauty</h4>
          </div>
          <div class="row row-cols-lg-5 row-cols-1">
            <div class="col" v-for="menu in menus" :key="menu.id" v-if="menus.length">
              <div class="ms__beatuy__advertisment--items">
                <nuxt-link :to="menu.path">
                  <img :data-src="menu.image" alt="" class="img-fluid w-100" v-lazy-load>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="ms__beatuy--slider mb-4 ms__bestDeal--slider slick-slider-relative">
            <VueSlickCarousel :arrows="true" :dots="false" v-bind="sliderTwoSetting" v-if="beauties.length">
              <ProductoProduct v-for="beauty in beauties" :key="beauty.id" :product="beauty" />
              <!-- <div >
                <div class="ms__bestDeal--items">
                  <div class="figure position-relative mb-0 p-3">
                    <div class="ms__bestDeal--img ms__beatuy--img">
                      <nuxt-link :to="beauty.path">
                        <img class="img" :data-src="beauty.image" alt="" v-lazy-load>
                      </nuxt-link>
                    </div>
                    <div class="ms__bestDeal--information">
                      <NuxtLink :to="beauty.path"><h6 class="title">{{beauty.title}}</h6></NuxtLink>
                      <NuxtLink :to="beauty.path"><p class="discription">{{beauty.subtitle}}</p></NuxtLink>

                      <p class="price">${{beauty.price}}</p>
                      <p class="price-unit">Milliliter at {{beauty.quantity}}</p>
                      <div class="star">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                        </span>
                        <span>{{beauty.stars}} ({{beauty.review}})</span>
                      </div>
                    </div>
                  </div>
                  <div class="ms__card--btn">
                    <nuxt-link :to="beauty.path" class="btn btn-primary btn-md w-100">Add</nuxt-link>
                  </div>
                </div>
              </div> -->
            </VueSlickCarousel>
          </div>
          <div class="ms__beatuy--logos">
            <div class="row g-4">
              <div class="col-lg-2" v-for="brand in beautyBrands" :key="brand.id">
                <div class="ms__beatuy__advertisment--items">
                  <NuxtLink :to="brand.path">
                    <img :data-src="brand.image" alt="" class="img-fluid" v-lazy-load>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- beauty -->

    <section class="ic-section-space">
      <div class="container">
        <div class="col-lg-12">
          <div class="ms__add--img">
            <img data-src="/images/adv.webp" class="img-fluid w-100" alt="" v-lazy-load>
          </div>
        </div>
      </div>
    </section>

    <!-- health medicine -->
    <section class="ms__health--part">
      <div class="container">
        <div class="ms__card">
          <div class="ms__title">
            <h4 class="title primary mb-0">Health and medicine</h4>
          </div>
          <div class="ms__beatuy--slider mb-4 ms__bestDeal--slider slick-slider-relative">
            <VueSlickCarousel :arrows="true" :dots="false" v-bind="sliderTwoSetting" v-if="medicines.length">
              <ProductoProduct v-for="medicine in medicines" :key="medicine.id" :product="medicine" />
              <!-- <div v-for="medicine in medicines" :key="medicine.id">
                <div class="ms__bestDeal--items">
                  <div class="figure position-relative mb-0 p-3">
                    <div class="ms__bestDeal--img ms__beatuy--img">
                      <nuxt-link :to="medicine.path">
                        <img class="img" :data-src="medicine.image" alt="" v-lazy-load>
                      </nuxt-link>
                    </div>
                    <div class="ms__bestDeal--information">
                      <NuxtLink :to="medicine.path"><h6 class="title">{{medicine.title}}</h6></NuxtLink>
                      <NuxtLink :to="medicine.path"><p class="discription">{{medicine.subtitle}}</p></NuxtLink>

                      <p class="price">${{medicine.price}}</p>
                      <p class="price-unit">Milliliter at {{medicine.quantity}}</p>
                      <div class="star">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                        </span>
                        <span>{{medicine.stars}} ({{medicine.review}})</span>
                      </div>
                    </div>
                  </div>
                  <div class="ms__card--btn">
                    <nuxt-link :to="medicine.path" class="btn btn-primary btn-md w-100">Add</nuxt-link>
                  </div>
                </div>
              </div> -->
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </section>
    <!-- health medicine -->

    <!-- official history -->
    <section class="ms__official--part ic-section-space">
      <div class="container">
        <div class="ms__card">
          <div class="ms__title">
            <h4 class="title primary mb-0">official Brands</h4>
          </div>
          <div class="ms__beatuy--slider mb-4 ms__bestDeal--slider slick-slider-relative">
            <VueSlickCarousel :arrows="true" :dots="false" v-bind="sliderFourSetting" v-if="brands.length">
              <div v-for="brand in brands" :key="brand.id">
                <div class="ms__official--items">
                  <NuxtLink :to="brand.path">
                    <div class="ms__official--img">
                      <img :data-src="brand.image" alt="" class="img-fluid" v-lazy-load>
                    </div>
                    <p>{{brand.name}}</p>
                  </NuxtLink>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </section>
    <!-- official history -->

    <!-- articale -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="ms__article--items">
              <h6>Online Drugstore: Address 24 Hours</h6>
              <div class="ms__article--text">
                <p>Hello, Welcome to Farmatodo! If you still do not know our portfolio, we tell you that we have everything you need in one place:</p>
                <p>You will find from <NuxtLink to="/"><u>drugstore and pharmacy</u></NuxtLink> products , since we are specialists in medicines and all products related to health care , to all pantry products such as tortillas, soft drinks and much more. In other words, you can buy everything in one place and one click away.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="ms__article--items">
              <h6>How to explore our page and categories?</h6>
              <div class="ms__article--text">
                <p>The first thing you should do is familiarize yourself with it. At the top you will find several tabs, which are made up of Health and Medicines , Beauty , Baby Care , Personal Care , Food and Drinks , and everything related to the home, pets, fun, among others.</p>
                <p>From there, a universe of options will be displayed to guide you and take you to the products you are looking for. In addition, you can find many more outstanding services such as our address 24 hours a day, 7 days a week , the world of product offers in all categories , EnvíaloYa Venezuela and Medical Services.</p>
                <p><b>Let yourself go and live a unique experience with Farmatodo!</b></p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="ms__article--items">
              <h6>Say goodbye to pain!</h6>
              <div class="ms__article--text">
                <p>Do not stop your daily activities and relieve these symptoms with medications for general discomfort. We know that sometimes our body presents different general pains due to the constant physical activities that we carry out and these signs of discomfort can also occur internally in the body due to a poor diet.</p>
                <p>At Farmatodo you can find pills for colic and relieve those natural pains. In addition, you can browse and find creams for muscle and joint pain. This way you will be able to continue with your daily tasks. Browse, discover, choose your product and receive it at home in less than 35 minutes!</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="ms__article--items">
              <h6>Prevent flu symptoms!</h6>
              <div class="ms__article--text">
                <p>We know that sometimes our body receives small bacteria that are acquired from objects that we touch in the streets or simply when we speak very close to a person who may have the flu. We can control these types of symptoms with good pills for the flu or anti- flu medications , so the next day you will feel better and your energy will be at 100%.</p>
                <p>Avoid flu symptoms with a good hand cleaning every time you get home or visit a family member, remember that washing and the duration of it is essential to avoid infections. In addition, a good antibacterial gel can prevent you from contracting unwanted bacteria.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    banners:[
      {id:'1.1',path:'/',image:'images/banner/banner-1.jpeg'},
      {id:'1.2',path:'/',image:'images/banner/banner-2.jpeg'},
      {id:'1.3',path:'/',image:'images/banner/banner-3.jpeg'},
      {id:'1.4',path:'/',image:'images/banner/banner-4.jpeg'},
      {id:'1.5',path:'/',image:'images/banner/banner-5.jpeg'},
      {id:'1.6',path:'/',image:'images/banner/banner-6.jpeg'},
      {id:'1.7',path:'/',image:'images/banner/banner-7.jpeg'},
      {id:'1.8',path:'/',image:'images/banner/banner-8.jpeg'},
    ],
    categories:[
      {id:'2.1',path:'/',title:'pink week',image:'https://lh3.googleusercontent.com/38RrzGADe69egYF6GeQa1Zu4dedME8_aA_b_YYP7pz7jcbPOqzo1cuOUYG8aGzU07-LbQxf_akIvu00OoSaZdOQrBsRJujs4k9X6sFUXpmpJBpWSbg=s250-rw'},
      {id:'2.2',path:'/',title:'pink week',image:'https://lh3.googleusercontent.com/LbPFpDtWDwOfkO0VCyoosYFZZF9CKQ669RynUy5fLi7RJR7-v5icmm7Cvzazli1tEd4PWwnKEo7NiVqJKqW47tSFVRXLC4UHS9YM93dJwBD9fbQ=s250-rw'},
      {id:'2.3',path:'/',title:'pink week',image:'https://lh3.googleusercontent.com/MFzjGivhzD264Chh3snqzJQNc5AzUTUhcm9uk5Rnsy0TRqgLXfv_OvuHuWAJ6zGXzDUkCsDoElArI5W9V9jzfidwVosIaBzr1d4mzJJ7R4042cLv=s250-rw'},
      {id:'2.4',path:'/',title:'pink week',image:'https://lh3.googleusercontent.com/X4AjlbnSo3l_eTU3OxZeXUFlunx-lAMsI96_qM4QHAvpdWp56xLRaouxyO5Vgc8Z7wjK8k5sHOks8BNQSFZqWGtaMxeBgofSjwIES2W2enBMLlUn=s250-rw'},
      {id:'2.5',path:'/',title:'pink week',image:'https://lh3.googleusercontent.com/X4AjlbnSo3l_eTU3OxZeXUFlunx-lAMsI96_qM4QHAvpdWp56xLRaouxyO5Vgc8Z7wjK8k5sHOks8BNQSFZqWGtaMxeBgofSjwIES2W2enBMLlUn=s250-rw'},
      {id:'2.6',path:'/',title:'pink week',image:'https://lh3.googleusercontent.com/kRqZ59bChpuriDkwWOjfT8qCH7DIPBe2zTph2Myqjyktmh4lb6kybPUvIrGUhBUc951tUfAIErn0H7My5Vn5CNzKJNKmTeIS1VS02awpEz9Cvdk=s250-rw'},
      {id:'2.7',path:'/',title:'pink week',image:'https://lh3.googleusercontent.com/jGSyR-SXAFlSn4-2sGKwG7qKH2r3KKeL6DrLNopDDnznXniDDIUpB0BtZnPHiDu6m7svfdSC8WoAFXDGfSf65h3oBFl2_8ZpZH_aEwuhJTQ3xzfl=s250-rw'},
      {id:'2.8',path:'/',title:'pink week',image:'https://lh3.googleusercontent.com/gnFtxbssxv57LOEfVd34Kc0199DxQ0OHok8vFaSHZQdfGXKTTQC_wzwjipwsCSdjE_QpCSFBw33Zcztx6_FOO-a29n270woxyCe3d_6qLvMdZ-SGSw=s250-rw'},
      {id:'2.9',path:'/',title:'pink week',image:'https://lh3.googleusercontent.com/Hzpb1AoUz0w1tixvqLhEzndCLxjWP9vmKmNj2ZOx9Otsyc9Qf2ddsFBkf-LhDsNu3I5GEzJuFC5y7noWg6ZrDheJT-Yf3-aLe23-fgccUIunKuOHiA=s250-rw'},
      {id:'2.10',path:'/',title:'pink week',image:'https://lh3.googleusercontent.com/66C0jt0U3yQJGgi8VyLF97SEXuF0ddzIkjEHzYdFl2K4Nl1pMdcm0CvEUxYOQhBqvSG2Jv_NeBbUzuz_vtyU3OHey8lb_84ukvfcuuipT13ZESun_A=s250-rw'},
      {id:'2.11',path:'/',title:'pink week',image:'https://lh3.googleusercontent.com/oUG56a5fc5RbSlG-yD9rW7FjqdgOeKGzNelb6l_hWhmYvFM6Oe-mLJhBSblyrE-f7-EJuckSQLlt5u7532CcxzpXyNMJb3mL2g=s250-rw'},
      {id:'2.12',path:'/',title:'pink week',image:'https://lh3.googleusercontent.com/5fth47LN6-zI0PTe82787Z0qcFZ_BovLtSZ_DfEy5xx5hEMT_l4XN0SO9eFKWf3hfrT-uZ8KD69kG3kTSh7ORiUXECBAH9OwtUI=s250-rw'},
    ],
    deals:[
      {id:'3.1',title:'colgate con Prime',discount:'3X2',path:'/',image:'https://lh3.googleusercontent.com/g8mK1ITmEU2cmbidiOWnrZjPeFWQGGhAWa-rm5Sxfe0eOos43bGMn5ITrz5GWHgrUW3x3X4UAXuM5PmSM1wjYBjfW1gUI0shkEQz10yWGrNRSiv57A=s650-rw'},
      {id:'3.2',title:'colgate con Prime',discount:'40%',path:'/',image:'https://lh3.googleusercontent.com/_h61WOqxPpLRy6iCtBJ_DwsMtcWUeDt5ldLPVn_SsxpOfE9a07Az080MJgZUCitsniXlmNAMbbTOLOvQdJXToUyAONhNlpk7Y1BLonhk2CXI5dE=s650-rw'},
      {id:'3.3',title:'colgate con Prime',discount:'35%',path:'/',image:'https://lh3.googleusercontent.com/BkT2Q7bOk-cQJQWn7dMFFBq2YqujLieJ3koi6w7l_4sd35u5hpaK6ROtst-oXV7ttKhSfALXoTZwipFZSPG10ltPfa9TqDwLNJQOX0BacMi3D_GWog=s650-rw'},
      {id:'3.4',title:'colgate con Prime',discount:'20',path:'/',image:'https://lh3.googleusercontent.com/z0TTAXf5A4IddIAr0z3tZSUls6evWQzH9qCqwint7LAkgHMV47L1WOtsYztXjQbi1eb5mV7oUR8gvjvocEVJf6mxZBulU7x8cfrchTeFByfpWn8l=s650-rw'},
      {id:'3.5',title:'colgate con Prime',discount:'4X2',path:'/',image:'https://lh3.googleusercontent.com/sG3QgUkzddcn7bkcTwoQO7I7UJ67Bmbfma9L_mMVzFRbLWtxkFgAN4btymW7Bt2DBwb6_JZAxBAnO1XHOrCogaN73fmEwK41ahcbzhxmooyTRMg=s650-rw'},
      {id:'3.6',title:'colgate con Prime',discount:'25%',path:'/',image:'https://lh3.googleusercontent.com/HTVPOB1ZSGpPLxoph4fjCsZiT-c9pskNIrBU6rnR-BLjNh1ESPmtuSR3fRz6K8W2ieyjy9L-15EIi_XmoDO5oRfbAtweSRV-cSf1uh6HfIuJ6gB-=s650-rw'},
      {id:'3.7',title:'colgate con Prime',discount:'1X2',path:'/',image:'https://lh3.googleusercontent.com/sIBh_gfVBYfzg4qXs81sOFRuAs4wmllZshPECl2DEzHDsZBM80_XZgdbH0u1oYEe0tY2xYpItYA84L7VeBxpvClXssJjS_hsMvvCmop6_6wi60y0TA=s650-rw'},
    ],
    features:[
      {id:'4.1',title:'Enterogermina',path:'/',image:'https://lh3.googleusercontent.com/kcNux3udj9zDIAW7AX3XFwmb8wbHxC_IQpBc-7jLMNdnsjxWlvUrmHkM81Qq50RgVNG2O1XjVrrD99uBSQQ9FOSKfeTxz6zspHR6Q1X4huFSsvs=s650-rw'},
      {id:'4.2',title:'Enterogermina',path:'/',image:'https://lh3.googleusercontent.com/BY6nxgV-AlfQXrPnEbn4SNY0rWdmyV3K2FVzGS2XgBTsC57q5BWXwv4WalqDeBuVyihEwRzEfPCBSYSDMxQYMiR8gxTPN3e6nPmlqbYVHrYvDOE=s650-rw'},
      {id:'4.3',title:'Enterogermina',path:'/',image:'https://lh3.googleusercontent.com/fZjF6ezCz_Hn25TfjacT4hikbJpkFLCGgUI00jb2kS3Aep5EkcjMGo9WmJz2QM91OLmXnYHI_hdJuu7MI_Of77Ii4dKJIGAVr8QRPdX1CZnxVwJ_1g=s650-rw'},
      {id:'4.4',title:'Enterogermina',path:'/',image:'https://lh3.googleusercontent.com/QLZnvVYa-iMT1wEYCTVhrwCsZRYTnWW7OdwtnngOcyUXpW16eeWvzBm6M9K9WyIYeEkcIbKAM7AChrbqe8EtWIgL4kn074S-w-pcFiHpBWbqWz0=s650-rw'},
      {id:'4.5',title:'Enterogermina',path:'/',image:'https://lh3.googleusercontent.com/AVywSNLGMXAx2Glq5KEDZZcTVqfWBxak9Nw10CxUeS5vnAByL7v5VgEWDPolzaIcGcnCFuPXFSXhCJfyxba76t-aV-sJT3Yet75bCkkA3hCEFxw=s650-rw'},
      {id:'4.6',title:'Enterogermina',path:'/',image:'https://lh3.googleusercontent.com/rEJaG4Gi2pL63-usDJCdzY0dTtB-kTwDGHFQrjJ9lCM-6jWsBOBz-iwBcGMoRJ5JRvb1Z4_nn2rMduHya7qNPpAvnscOMdTh8XvuUMB5NacuftRT=s650-rw'},
      {id:'4.7',title:'Enterogermina',path:'/',image:'https://lh3.googleusercontent.com/gQ9t-Ek4QrVisflChdgdS5ayxh1Z4yAjXpdJQLXuyjNRBHt76l1RA0te7xMLKFCGLuKukmHGx6Q-VPZPWvhIC401GNMlKZJJfevuVL6lXtPFQzA=s650-rw'},
      {id:'4.8',title:'Enterogermina',path:'/',image:'https://lh3.googleusercontent.com/sWsg_M_lMIVYM74RwnT13KOK_yOVKJmXSf8wCVhOLB8C-HNzvjl9eGQ1ODJ14snb2hOadSnxudFFuejDgZDWSC4I-TwhXXV7XzNZNo5JQSWXYpg=s650-rw'},
    ],
    menus:[
      {id:'5.1',path:'/',image:'/images/advertisment-smal-1.png'},
      {id:'5.2',path:'/',image:'/images/advertisment-smal-2.png'},
      {id:'5.3',path:'/',image:'/images/advertisment-smal-3.png'},
      {id:'5.4',path:'/',image:'/images/advertisment-smal-4.png'},
      {id:'5.5',path:'/',image:'/images/advertisment-smal-5.png'},
    ],
    beauties:[
      {id:'6.1',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-1.png'},
      {id:'6.2',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-2.jpg'},
      {id:'6.3',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-3.jpg'},
      {id:'6.4',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-4.jpg'},
      {id:'6.5',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-5.jpg'},
      {id:'6.6',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-6.jpg'},
    ],
    beautyBrands:[
      {id:'7.1',path:'/',image:'/images/logo.png'},
      {id:'7.2',path:'/',image:'/images/logo-2.png'},
      {id:'7.3',path:'/',image:'/images/logo-3.png'},
      {id:'7.4',path:'/',image:'/images/logo-4.png'},
      {id:'7.5',path:'/',image:'/images/logo-5.png'},
      {id:'7.6',path:'/',image:'/images/logo-6.png'},
    ],
    medicines:[
      {id:'8.1',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'https://lh3.googleusercontent.com/DNPy_zVQ21cAwFQNaLc8kw9oO4dKbZ-xSa3Q5PtiAbDjvGpA6-7JdjKbFBOyvgWPy8Oqq7OiO9kZUASdsNaJyZW8INa3g3LLkzm-Rj1EM_xOahI=s650-rw'},
      {id:'8.2',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'https://lh3.googleusercontent.com/6w-kX2l5nSk80yv__3moaZODFJFoPnpxQjr1xqyY_80eAIllJZqCHC8UoXc1xMJ5ES5jsetcQBZRWLS_aUkYM5tltqBImo0eThCOyfa0TRaWFkvehQ=s650-rw'},
      {id:'8.3',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'https://lh3.googleusercontent.com/bDFN9ybT3_FxZW5Vgah7umPn741e7KXvoDU_ZIfHwNyLlflMB062AVk_YRWdPq-u-OeDcKenVrfnsNVAF9-kKZ9_8R89Z2BNCVe5k1NJE69PN9g1=s650-rw'},
      {id:'8.4',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'https://lh3.googleusercontent.com/4b9QWbu7GT859c-NQFAx3tYH3ZfKVfgvoouSPiwJtEXGbLEkZ2nlNYELUMZTKIvNtoFE3B7mbJNTiLyv6Qwm-CWvmmG2F6wOmhAMe319KIwXsgM=s650-rw'},
      {id:'8.5',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'https://lh3.googleusercontent.com/fiAZkOMJKssv5NS5oWoYZRZ8Bo1tHbzr-9wFx1LaAQoHIjrYXs3WC-soVV2_h0NNlRbAi5iU8AHGDBcUX7bwtvvU4z8hZJS1Iaa_KaZLxyC0SsA=s650-rw'},
      {id:'8.6',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'https://lh3.googleusercontent.com/-A6LSY7-C6hil_yiMK4nmcSp7qYoinj534ax7kcz1KwFgnxRJXa6oCzRQ15uKt73ehtrvZoMeWJwHm34OPGCBqWAbNYOloZNIn4=s650-rw'},
    ],
    brands:[
      {id:'9.1',title:'Pink Week',path:'/',image:'/images/story-7.png'},
      {id:'9.2',title:'Pink Week',path:'/',image:'/images/story-2.png'},
      {id:'9.3',title:'Pink Week',path:'/',image:'/images/story-3.png'},
      {id:'9.4',title:'Pink Week',path:'/',image:'/images/story-4.png'},
      {id:'9.5',title:'Pink Week',path:'/',image:'/images/story-5.png'},
      {id:'9.6',title:'Pink Week',path:'/',image:'/images/story-6.png'},
      {id:'9.7',title:'Pink Week',path:'/',image:'/images/story-7.png'},
      {id:'9.8',title:'Pink Week',path:'/',image:'/images/story-3.png'},
      {id:'9.9',title:'Pink Week',path:'/',image:'/images/story-6.png'},
      {id:'9.10',title:'Pink Week',path:'/',image:'/images/story-5.png'},
      {id:'9.11',title:'Pink Week',path:'/',image:'/images/story-1.png'},
    ],
    sliderOneBanner: {
      autoplay:true,
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
    sliderTwoSetting: {
      infinite:true,
      arrows: true,
      dots: true,
      slidesToShow: 4,
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
    sliderThreeSetting: {
      infinite:true,
      arrows: true,
      dots: true,
      slidesToShow: 8,
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
    sliderFourSetting: {
      infinite:true,
      arrows: true,
      dots: true,
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
    url:
      "https://i.pinimg.com/originals/90/a4/78/90a47821d9451451813f9f3867351b53.jpg",
  }),
  methods: {
    c() {
      this.$zoom(this.url);
    }
  }
}
</script>

<style lang="scss">
.ms__banner--part {
  .container {
    position: relative;
  }
  .ms__banner--items {
    max-height: 480px;
    height: 100%;
    @include bd-radius(10px);
    img {
      // max-height: 380px;
      height: 100%;
      @include bd-radius(10px);
      // width: 100%;
    }
  }

  // .slick-dots {
  //   position: absolute;
  //   bottom: 10px;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   z-index: 1;
  //   display: flex!important;
  //   gap: 5px;
  //   li {
  //     button {
  //       width: 15px;
  //       height: 15px;
  //       @include bd-radius(50%);
  //       background-color: $white;
  //       border: 1px solid gray;
  //       color: transparent;

  //     }
  //     &.slick-active {
  //       button {
  //         background-color: $primary;
  //       }
  //     }
  //   }
  // }
}
.slick-slider-relative {
  position: relative;
  .slick-arrow {
    width: 50px;
    height: 50px;
    @include bd-radius(50%);
    background-color: $white;
    outline: 0;
    border: 1px solid $gray-light;
    &::before {
      color: #202020;
    }
    &.slick-prev {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      z-index: 1;
    }
    &.slick-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      z-index: 1;
    }
  }
}
// advertisment
.ms__advertisment--part {
  padding-top: 50px;
  @media #{$max575}{
    padding-top: 30px;
  }
}
.ms__advertisment--img {
  box-shadow: $box-shadow;
  height: 200px;
  @include bd-radius(10px);
  @media #{$max575}{
    height: 120px;
  }
  @media #{$max480}{
    height: 110px;
  }
  img {
    height: 100%;
    @include bd-radius(10px);
  }
}

// catagories
.ms__catagories--sliders {
  @include bd-radius(10px);
  background-color: #fff;
  box-shadow: $box-shadow;
  padding: 20px 0;
  .figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    .ms__catagories--img {
      width: 5rem;
      height: 5rem;
      background-color: #fff;
      border-radius: 50%;
      text-align: center;
      img {
        width: auto;
        max-width: 100%;
        max-height: 100%;
        height: max-content;
        background-color: #fff;
        @include bd-radius(10px);
      }
    }
    .caption {
      p {
        text-align: center;
        font-size: 14px;
      }
    }
  }
}

// best deal
.slick-slide {
    padding: 10px;
  }
.ms__bestDeal--items {
  background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #e9eaed;
  box-shadow: $box-shadow;
  // margin: 10px;
  .ms__bestDeal--img {
    position: relative;
    height: 248px;
    text-align: center;
    &.ms__beatuy--img {
      height: 170px;
      img {
        height: 100%;
      }
    }
    .img {
      width: auto;
      max-width: 100%;
      max-height: 100%;
      height: max-content;
      margin: 0 auto;
    }
    .tag {
      position: absolute;
      top: 0;
      left: 0;
      img {
        width: 3rem;
        height: 3rem;
        transform: rotate(180deg);
      }
      p {
        font-weight: 700;
        top: 1rem;
        left: 0.8rem;
        position: absolute;
        color: #000;
        font-size: 12px;
      }
    }
    .wihslist {
      position: absolute;
      display: inline-block;
      top: 10px;
      right: 10px;
      svg {
        width: 20px;
      }
    }
  }
  .offer-description {
    position: relative;
    left: -23px;

    // height: 2.8rem;
    font-family: Helvetica,sans-serif;
    border-radius: 0 1rem 0 0;
    border: 2px solid #fdd756;
    background-color: #fff;
    color: #000;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 0;
    overflow: visible!important;
    padding: 5px 10px;
    p {
      font-size: 14px;
      margin-bottom: 0;
      text-align: left;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 2;
    }
    .offer-description-ribbon {
      position: absolute;
      left: 0.5px;
      bottom: -7px;
      border: 5px solid;
      border-right: 5px solid #c39c03;
      width: 5px;
      height: 2px;
      color: transparent;
      transform: rotate(135deg);
      z-index: 1;
    }
  }
  .ms__bestDeal--information {
    h6 {
      font-size: 15px;
      line-height: 24px;
      color: #202020;
    }
    .discription {
      font-size: 13px;
      line-height: 20px;
      color: $gray-deep;
    }
    .price {
      font-size: 18px;
      font-weight: 600;
      color: $primary;
    }
    .price-unit {
      font-size: 10px;
      line-height: 16px;
      color: $gray-deep;
    }
    .star {
      padding-top: 15px;
      @include d-flex();
      @include align-items(center);
      gap:10px;
      span {
        font-size: 14px;
      }
      svg {
        width: 16px;
        fill: #fdd756;
      }
    }
  }
  .ms__card--btn {
    padding: 0 16px 16px 16px;
  }
}
.ms__card {
  box-shadow: $box-shadow;
  background-color: #fff;
  @include bd-radius(10px);
  padding: 20px;
  .ms__title {
    margin-bottom: 20px;
    border-bottom: 1px solid $gray-light;
    .title {
      position: relative;
      padding-bottom: 10px;
      display: inline-block;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        width: 100%;
        background-color: $primary;
      }
    }
  }
}
.ms__beatuy--logos {
  // height: 5rem;
  .col-lg-2 {
    height: auto;
    max-height: 100%;
    max-width: 50%;
  }
  .ms__beatuy__advertisment--items {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    img {
      width: auto;
      height: auto;
      max-height: 100%;
      max-width: 71%;
    }
  }
}
.ms__add--img {
  img {
    @include bd-radius(10px);
  }
}
// beauty
.ms__beatuy--slider {
  padding-top: 20px;
}
// official
.ms__official--items {
  text-align: center;
  .ms__official--img {
    width: 120px;
    height: 120px;
    @include bd-radius(50%);
    border: 1px solid $gray-light;
    text-align: center;
    padding: 10px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    img {
      max-width: 100%;
      max-height: 100%;
      width: auto;
    }
  }
  P {
    font-size: 12px;
    color: $gray-deep;
  }
}
.ms__article--items {
  h6 {
    font-size: 15px;
    font-weight: 700;
    color: #202020;
    padding-bottom: 15px;
  }
  p {
    font-size: 13px;
    color: $gray-deep;
    padding-bottom: 15px;
    a {
      font-size: 13px;
      color: $gray-deep;
    }
  }
}




.app-button {
  position: relative;
  display: inline-flex;
  cursor: pointer;
  white-space: nowrap;
  vertical-align: top;
  text-decoration: none;
  outline: none;
  width: minus(30px, 100px);

  // variant
  span{
    background-color: $primary;
    color: $white;

    span{
      color: red;
    }
  }
}
.box-box {
  width: 150px;
  height: 150px;
  background-image: url(https://i.pinimg.com/originals/90/a4/78/90a47821d9451451813f9f3867351b53.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
