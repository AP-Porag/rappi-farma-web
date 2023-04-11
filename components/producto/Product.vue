<template>
    <div class="ms__bestDeal--items big-card">
        <div class="figure position-relative mb-0 p-1">
          <div class="ms__bestDeal--img ms__beatuy--img">
            <nuxt-link :to="`/producto/${product.slug}`">
              <img class="img img-fluid" :src="product.thumb" :alt="product.slug">
            </nuxt-link>
          </div>
          <div class="ms__bestDeal--information">
            <NuxtLink :to="`/producto/${product.slug}`"><h6 class="title">{{product.name}}</h6></NuxtLink>
            <p class="small-price">${{product.price}}</p>
          </div>
        </div>
        <!-- <div class="ms__card--btn">
              <a href="#" class="btn btn-primary btn-md w-100" @click.prevent="$nuxt.$emit('eventAddToCart', item)">Add to cart</a>
          </div> -->
        <div class="ms__card--btn">
<!--          <div class="ms-increment-decrement">-->
<!--            <a href="#" @click.prevent="$nuxt.$emit('eventDecreaseCartQuantity', item)">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-9h10v2H7v-2z"/></svg>-->
<!--            </a>-->

<!--            <input type="text">-->

<!--            <a href="#" @click.prevent="$nuxt.$emit('eventIncreaseCartQuantity', item)">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/></svg>-->
<!--            </a>-->
<!--          </div>-->
          <div class="addTo-cart">
<!--            <a href="#" class="addToCart" @click.prevent="$nuxt.$emit('eventRemoveFromCart', item)">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"/></svg>-->
<!--            </a>-->
            <a href="#" class="addToCart" @click.prevent="$nuxt.$emit('eventAddToCart', item)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>
            </a>
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

  <style lang="scss">
  // new product card design
  .ms__bestDeal--items {
    //background: #fff;
    //border-radius: 0.5rem;
    //border: 1px solid #e9eaed;
    //box-shadow: $box-shadow;
    //height: 100%;
    //display: flex;
    //flex-direction: column;
    //justify-content: space-between;
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
        @media (max-width: 575px) {
          display: flex;
          flex-direction: row;
          width: 100px;
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
