<template>
  <div class="root">
    <section class="ms__product-details ic-section-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-5">
            <div class="ms__product--image">
              <div class="ms__large--image">
                <div>
                  <img
                    :data-src="product.thumb"
                    class="img-fluid thumb-image"
                    alt=""
                    v-lazy-load
                    style="max-height: 450px;max-width: 480px;"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-7">
            <div class="ms__product--names">
              <h3>
                {{product.name}}
              </h3>
              <p class="ms__pass">{{product.short_description}}</p>
              <h6 class="ms__price mb-4">${{product.price}}</h6>
<!--              <div class="ms__product-count">-->
<!--                <button class="minize">-</button> <input type="text" />-->
<!--                <button class="minize">+</button>-->
<!--              </div>-->
              <a href="#" class="ic-btn" @click.prevent="$nuxt.$emit('eventAddToCart', item)">Add to cart</a>

<!--              <div class="ms__social&#45;&#45;details">-->
<!--                <ul>-->
<!--                  <li>-->
<!--                    <a href="#">-->
<!--                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>-->
<!--                    </a>-->
<!--                  </li>-->
<!--                  <li>-->
<!--                    <a href="#">-->
<!--                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>-->
<!--                    </a>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </div>-->
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
                  {{product.name}}
                </h3>
                <p class="text-paragraph">
                  {{product.description}}
                </p>


                <h5 class="black mt-3 mb-2 text-capitalize">Ficha de datos:</h5>
                <table class="table table-bordered">
                  <tr>
                    <td>
                      <p>Brand : </p>
                    </td>
                    <td>
                      <p>{{brand_name}}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Category : </p>
                    </td>
                    <td>
                      <p>{{category_name}}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Unit : </p>
                    </td>
                    <td>
                      <p>{{product.unit}}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>SKU : </p>
                    </td>
                    <td>
                      <p>{{product.SKU}}</p>
                    </td>
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
    <section class="ms__related--produtcs ic-section-space" v-if="categoryProducts.length">
      <div class="container">
        <div class="ms__related--content ms__card">
          <div class="ms__title">
            <h3 class="primary title text-capitalize">Productos relacionados</h3>
          </div>
          <div class="ms__related--slider slick-slider-relative">
            <VueSlickCarousel :arrows="true" :dots="false" v-bind="sliderTwoSetting" v-if="categoryProducts.length">
              <ProductoCardProduct v-for="(product,index) in categoryProducts" :key="product.id" :product="product" />
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </section>

    <!-- related products -->

    <!-- feedback -->
<!--    <section class="ms__feedback ic-section-space">-->
<!--      <div class="container">-->
<!--        <div class="row">-->
<!--          <div class="col-lg-12 m-auto">-->
<!--            <div class="ms__feedback&#45;&#45;mains">-->
<!--              <h5 class="mb-4">Feedback</h5>-->
<!--                <div class="ms_product-summery">-->
<!--                  <div class="ms_score">-->
<!--                    <h2>4.5 <span>/4</span></h2>-->
<!--                    <div class="rate">-->
<!--                      <input type="radio" id="star5" name="rate" value="5" />-->
<!--                      <label for="star5" title="text">5 stars</label>-->
<!--                      <input type="radio" id="star4" name="rate" value="4" />-->
<!--                      <label for="star4" title="text">4 stars</label>-->
<!--                      <input type="radio" id="star3" name="rate" value="3" />-->
<!--                      <label for="star3" title="text">3 stars</label>-->
<!--                      <input type="radio" id="star2" name="rate" value="2" />-->
<!--                      <label for="star2" title="text">2 stars</label>-->
<!--                      <input type="radio" id="star1" name="rate" value="1" />-->
<!--                      <label for="star1" title="text">1 star</label>-->
<!--                    </div>-->
<!--                    <p>33 Ratings</p>-->
<!--                  </div>-->
<!--                  <div class="ms__avarage">-->
<!--                    <ul>-->
<!--                      <li>-->
<!--                        <span>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                        </span>-->
<!--                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">-->
<!--                          <div class="progress-bar" style="width: 25%"></div>-->
<!--                        </div>-->
<!--                        <p>20</p>-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        <span>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg style="fill: #ccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                        </span>-->
<!--                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">-->
<!--                          <div class="progress-bar" style="width: 25%"></div>-->
<!--                        </div>-->
<!--                        <p>20</p>-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        <span>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg style="fill: #ccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg style="fill: #ccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                        </span>-->
<!--                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">-->
<!--                          <div class="progress-bar" style="width: 25%"></div>-->
<!--                        </div>-->
<!--                        <p>20</p>-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        <span>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: #ccc" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" style="fill: #ccc" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" style="fill: #ccc" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                        </span>-->
<!--                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">-->
<!--                          <div class="progress-bar" style="width: 25%"></div>-->
<!--                        </div>-->
<!--                        <p>20</p>-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        <span>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg style="fill: #ccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg style="fill: #ccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg style="fill: #ccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg style="fill: #ccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                        </span>-->
<!--                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">-->
<!--                          <div class="progress-bar" style="width: 25%"></div>-->
<!--                        </div>-->
<!--                        <p>20</p>-->
<!--                      </li>-->
<!--                    </ul>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <h6 class="pt-2 pb-2 border-top mt-3 mb-3 border-bottom">Product Review</h6>-->
<!--                <div class="ms__review&#45;&#45;system">-->
<!--                  <span>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                        </span>-->
<!--                        <p><b>Porag Hasan</b></p>-->
<!--                        <p class="ic__discription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quae!</p>-->
<!--                </div>-->
<!--                <div class="ms__review&#45;&#45;system">-->
<!--                  <span>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>-->
<!--                        </span>-->
<!--                        <p><b>Porag Hasan</b></p>-->
<!--                        <p class="ic__discription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quae!</p>-->
<!--                </div>-->
<!--                <div class="form-group">-->
<!--                  <textarea name="" id="" class="form-control"></textarea>-->
<!--                </div>-->
<!--                <button class="ic-btn">Submit</button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
    <!-- feedback -->

    <!-- related products -->
    <section class="ms__related--produtcs ic-section-space" v-if="brandProducts.length">
      <div class="container">
        <div class="ms__related--content ms__card">
          <div class="ms__title">
            <h3 class="primary title text-capitalize">Productos de la misma marca</h3>
          </div>
          <div class="ms__related--slider slick-slider-relative">
            <VueSlickCarousel :arrows="true" :dots="false" v-bind="sliderTwoSetting" v-if="brandProducts.length">
              <ProductoCardProduct v-for="(product,index) in brandProducts" :key="product.id" :product="product" />
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
    product: '',
    slug:'',
    category_id:'',
    category_name:'',
    brand_id:'',
    brand_name:'',
    brandProducts:[],
    categoryProducts:[],
    beauties:[
      {id:'6.1',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-1.png'},
      {id:'6.2',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-2.jpg'},
      {id:'6.3',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-3.jpg'},
      {id:'6.4',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-4.jpg'},
      {id:'6.5',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-5.jpg'},
      {id:'6.6',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-6.jpg'},
    ],
    item :{
      productName: '',
      productImage: '',
      productOriginalPrice: '',
      productDiscountPrice: '',
      productId: '',
      productStockQuantity: '',
      productQuantity: '',
      discount_type: '',
      discount_value: '',
    },
  }),
  mounted() {
    this.slug = this.$route.params.slug
    this.getItemData();
    this.calculatePrice();
  },
  methods:{
    async getItemData(){
      try {
        const response = await this.$axios.get(`product/${this.slug}`);
        this.product = response.data.item;
        this.category_id = this.product.category.category_id;
        this.category_name = this.product.category.category_name;
        this.brand_id = this.product.brand.brand_id;
        this.brand_name = this.product.brand.brand_name;

        //console.log(this.brand_id)

        if (this.category_id != '' || this.category_id != null){
          try {
            const response = await this.$axios.get(`/category/front/product/${this.category_id}`);
            this.categoryProducts = response.data.data.items
            //console.log(this.categoryProducts)
          }catch (e) {
            console.log(e.message)
          }
        }

        if (this.brand_id != '' && this.brand_id != null && this.brand_id != 'not set'){
          //console.log('dhukse')
          try {
            const response = await this.$axios.get(`/brand/front/product/${this.brand_id}`);
            this.brandProducts = response.data.data.items
            //console.log(this.brandProducts)
          }catch (e) {
            console.log(e.message)
          }
        }
          this.item.productName = this.product.name;
          this.item.productImage = this.product.thumb;
          this.item.productOriginalPrice = this.product.price;
          this.item.productDiscountPrice = '';
          this.item.productId = this.product.id;
          this.item.productStockQuantity = this.product.current_stock;
          this.item.productQuantity = 1;
          this.item.discount_type = this.product.discount_type;
          this.item.discount_value = this.product.discount;
      }catch (e) {
        console.log(e.message)
      }
    },
    async calculatePrice(){
      //console.log(this.product)
      let self = this;
      if (this.product.discount !=null){

        self.discount_value = this.product.discount;
        self.discount_type = this.product.discount_type;
        if(self.discount_type === 'fixed'){
          let price = this.product.price - self.discount_value;
          this.discountPrice = price.toFixed(2);
        }else {
          let price = this.product.price - (this.product.price *(self.discount_value)/100);
          this.discountPrice = price.toFixed(2);
        }

      }else {
        let price = this.product.price * 1
        this.price = price.toFixed(2)
        this.discountPrice = price.toFixed(2)
        this.item.productDiscountPrice = price.toFixed(2)
        //console.log('discount price = '+this.discountPrice)
        //console.log('original price = '+this.price)
      }
    },
  }
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
    @media #{$max767} {
      margin-bottom: 20px;
    }
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
    @media #{$max767} {
      font-size: 20px;
    }
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
      width: 80px!important;
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

.rate {
  height: 46px;
  display: flex;
  flex-flow: row-reverse;
  justify-content: flex-end;
}
.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}
.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: #ccc;
}
.rate:not(:checked) > label:before {
  content: "★ ";
}
.rate > input:checked ~ label {
  color: #ffc700;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
}

</style>
