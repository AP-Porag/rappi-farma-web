<template>
    <div>
        <div class="ms__bestDeal--items">
            <div class="figure position-relative mb-0 p-3">
            <div class="ms__bestDeal--img ms__beatuy--img">
                <nuxt-link :to="`/producto/${product.slug}`">
                <img class="img" :data-src="`${product.thumb}`" alt="" v-lazy-load>
                </nuxt-link>
            </div>
            <div class="ms__bestDeal--information">
                <NuxtLink :to="`/producto/${product.slug}`"><h6 class="title">{{product.name}}</h6></NuxtLink>
                <NuxtLink :to="`/producto/${product.slug}`"><p class="discription">{{product.description}}</p></NuxtLink>

                <p class="price">${{product.price}}</p>
<!--                <p class="price-unit">Milliliter at {{product.quantity}}</p>-->
<!--                <div class="star">-->
<!--                  <span>-->
<!--                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>-->
<!--                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>-->
<!--                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>-->
<!--                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>-->
<!--                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>-->
<!--                  </span>-->
<!--                  <span>{{product.stars}} ({{product.review}})</span>-->
<!--                </div>-->
            </div>
            </div>
            <div class="ms__card--btn">
              <ProductoAddToCart
                :id="product.id"
                :title="product.name"
                :original_price="product.price"
                :discount_price="discountPrice"
                :thumb="product.thumb"
                :quantity="product.current_stock"
                :discount_type="product.discount_type"
                :discount_value="product.discount"
              ></ProductoAddToCart>

            </div>
        </div>
    </div>
  </template>

  <script>
  export default {
    name: "Product",
    props: [
        'product'
    ],
    data(){
      return{
        discountPrice:'',
        price:'',
        discount_value:'',
        discount_type:'',
      }
    },
    methods:{
      async calculatePrice(){
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
        }
      },
    },
    created() {
      this.calculatePrice();
    },
  }
  </script>

  <style scoped>

  </style>
