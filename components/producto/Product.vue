<template>
    <div>
        <div class="ms__bestDeal--items big-card">
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
              
<!--              <div class="btn btn-primary btn-md w-100" v-if="checkIfExistInCartOrNot(product.id)">-->

<!--              </div>-->
<!--              <ProductoAddToCart-->
<!--                :id="product.id"-->
<!--                :title="product.name"-->
<!--                :original_price="product.price"-->
<!--                :discount_price="discountPrice"-->
<!--                :thumb="product.thumb"-->
<!--                :quantity="product.current_stock"-->
<!--                :discount_type="product.discount_type"-->
<!--                :discount_value="product.discount"-->
<!--              ></ProductoAddToCart>-->

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
        shoppingCart : [],
        item :{
          productName: this.product.name,
          productImage: this.product.thumb,
          productOriginalPrice: this.product.price,
          productDiscountPrice: '',
          productId: this.product.id,
          productStockQuantity: this.product.current_stock,
          productQuantity: 1,
          discount_type: this.product.discount_type,
          discount_value: this.product.discount,
        },
      }
    },
    methods:{
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
      // checkIfExistInCartOrNot(product_id){
      //
      //   // if exist return true;
      //   // if not exist return false;
      //   const shoppingCart = this.shoppingCart;
      //   const found = shoppingCart.find(item => item.productId === product_id)
      //   if(found){
      //     return true;
      //   }else{
      //     return false;
      //   }
      //
      // },
    },
    created() {
      this.calculatePrice();
    },
    mounted() {
      this.shoppingCart = JSON.parse(localStorage.getItem('rappiCart') || "[]");
    },
    computed:{

    },
  }
  </script>

  <style scoped>

  </style>
