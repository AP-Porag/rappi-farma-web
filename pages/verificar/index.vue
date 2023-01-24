<template>
  <div class="root py-5">
    <section class="ms__checkout--part ic-section-space">
      <div class="container">
        <form action="#">
          <div class="ms__card">
            <div class="row py-5">
              <div class="col-lg-6">
                <div class="ms__title">
                  <h4 class="title">Personal Details</h4>
                </div>
                <div class="row mb-4">
                  <div class="col-lg-6">
                    <div class="from-group mt-3">
                      <label for="first_name">First Name</label>
                      <input
                        type="text"
                        id="first_name"
                        placeholder="Your first name"
                        class="form-control"
                        v-model="form_data.first_name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="from-group mt-3">
                      <label for="last_name">Last Name</label>
                      <input
                        type="text"
                        id="last_name"
                        placeholder="Your last name"
                        class="form-control"
                        v-model="form_data.last_name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="from-group mt-3">
                      <label for="email">Your email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        class="form-control"
                        v-model="form_data.email"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="from-group mt-3">
                      <label for="phone">WhatsApp Number (with country code) </label>
                      <input
                        type="text"
                        id="phone"
                        placeholder="formate : +8801828963235"
                        class="form-control"
                        v-model="form_data.phone"
                      />
                    </div>
                  </div>
                </div>
                <div class="ms__title">
                  <h4 class="title">Shipping Details</h4>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="from-group mt-3">
                      <label for="address">Address</label>
                      <input
                        type="text"
                        id="address"
                        placeholder="Full shipping address"
                        class="form-control"
                        v-model="form_data.address"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="from-group mt-3">
                      <label for="zip_code">Zip Code</label>
                      <input
                        type="text"
                        id="zip_code"
                        placeholder="Your zip code"
                        class="form-control"
                        v-model="form_data.zip_code"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="from-group mt-3">
                      <label for="city">City</label>
                      <input
                        type="text"
                        id="city"
                        placeholder="Your city"
                        class="form-control"
                        v-model="form_data.city"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="from-group mt-3">
                      <label for="country">Country </label>
                      <input
                        type="text"
                        id="country"
                        placeholder="Your country"
                        class="form-control"
                        v-model="form_data.country"
                      />
                    </div>
                  </div>
<!--                  <div class="col-lg-6">-->
<!--                    <div class="from-group mt-3">-->
<!--                      <label for="whatsApp">WhatsApp </label>-->
<!--                      <input-->
<!--                        type="text"-->
<!--                        id="whatsApp"-->
<!--                        placeholder="your whatsApp number"-->
<!--                        class="form-control"-->
<!--                        v-model="form_data.whatsapp"-->
<!--                      />-->
<!--                    </div>-->
<!--                  </div>-->
                  <!--                  <div class="col-lg-6">-->
                  <!--                    <div class="mt-3 d-flex justify-content-between">-->
                  <!--                      <input-->
                  <!--                        type="checkbox"-->
                  <!--                        id="terms_conditions"-->
                  <!--                        v-model="form_data.agree_terms"-->
                  <!--                      />-->
                  <!--                      <label class="small">I agree with all <nuxt-link to="#">terms & conditions</nuxt-link> </label>-->
                  <!--                    </div>-->
                  <!--                  </div>-->
                </div>
              </div>
              <div class="col-lg-6">
                <div class="checkout-cart">
                  <div class="ic__shopping--top">
                    <div class="ic__shopping--cart--head">
                      <p>Product</p>
                      <p>Price</p>
                    </div>
                    <div class="ic__shopping-scrollbar">
                      <div class="ic__shopping--img" v-for="product in shoppingCart">
                        <img
                          :data-src="product.productImage"
                          alt="cart"
                          v-lazy-load
                        />
                        <div class="ic__shopping-info">
                          <p class="ic__cart--name">
                            {{product.productName}}
                          </p>
                          <div
                            class="ic-cart-quantity d-flex align-items-center"
                          >
                            <div class="ic-quantity">
                              <button class="ic-quantity-minus" @click.prevent="decreaseCartQuantity(product)">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                >
                                  <path
                                    d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                                  />
                                </svg>
                              </button>
                              <input
                                type="number"
                                class="form-control"
                                :value="product.productQuantity"
                                readonly
                              />
                              <button class="ic-quantity-plus" @click.prevent="increaseCartQuantity(product)">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                >
                                  <path
                                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                                  />
                                </svg>
                              </button>
                            </div>
                            <!-- <p class="ps-2 green">In Stock</p> -->
                          </div>
                        </div>
                        <div class="ic__shopping--price">
                          <p>${{(product.productDiscountPrice * product.productQuantity).toFixed(2)}}</p>
                          <a href="#" @click.prevent="removeFromCart(product)"><i class="ri-delete-bin-line text-danger"></i>Remove</a>
                        </div>
                      </div>
                    </div>
                    <!-- total -->
                    <div class="ic--subtotal">
                      <p><span>Subtotal</span> <span>${{form_data.subtotal.toFixed(2)}}</span></p>
                      <p><span>Shipping</span> <span>${{form_data.shippingCharge.toFixed(2)}}</span></p>
                    </div>
                    <div class="ic--total">
                      <p><span>Total</span> <span>${{form_data.total_price.toFixed(2)}}</span></p>
                    </div>
                  </div>
                  <div class="ic__shopping--bottom mt-3">
                    <button class="btn ic-btn w-100" @click.prevent="submit">Confirmar pedido</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      shoppingCart : [],
      form_data:{
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        //whatsapp:'',
        address:'',
        city:'',
        country:'',
        zip_code:'',
        total_quantity:0,
        subtotal:0,
        shipping_type:'shipping',
        order_status:'pending',
        discount_type :'',
        discount_amount:0,
        total_price:0,
        shippingCharge : 0,
        products:[]
      }
    }
  },
  watch:{
    shoppingCart:{
      handler(newValue){
        localStorage.setItem('rappiCart',JSON.stringify(newValue));
      },deep:true
    },
  },
  mounted() {
    this.shoppingCart = JSON.parse(localStorage.getItem('rappiCart') || "[]");
    //this.form_data.shippingCharge = JSON.parse(localStorage.getItem('rappiShippingCost') || "");
    this.countFinalTotal();
    this.countSubTotal();
    this.setCartProduct();
  },
  computed: {
    // url() {
    //   return "http://localhost:8000/api/v1/order";
    // }
  },
  methods: {
    setCartProduct(){
      this.shoppingCart.forEach(pr => {
        var obj = {};
        obj['id']=pr.productId;
        obj['name']=pr.productName;
        obj['image']=pr.productImage;
        obj['price']=pr.productDiscountPrice;
        obj['quantity']=pr.productQuantity;

        this.form_data.products.push(obj)
      })
    },

    removeFromCart(product){
      const shoppingCart = this.shoppingCart;
      const productIndex = shoppingCart.findIndex(item => item.productId == product.productId)
      shoppingCart.splice(productIndex,1);
      this.countSubTotal();
      this.countFinalTotal();
      this.setCartProduct();
    },
    increaseCartQuantity(product){
      const shoppingCart = this.shoppingCart;
      const found = shoppingCart.find(item => item.productId == product.productId)
      if(found){
        found.productQuantity++;
        this.countSubTotal();
        this.countFinalTotal();
        this.setCartProduct();
      }else{
        console.log("product not found")
      }
    },
    decreaseCartQuantity(product){
      const shoppingCart = this.shoppingCart;
      const found = shoppingCart.find(item => item.productId == product.productId)
      if(found){
        if (found.productQuantity > 1){
          found.productQuantity--;
          this.countSubTotal();
          this.countFinalTotal();
          this.setCartProduct();
        }else {
          console.log('Decrease quantity not allow !,Please remove.')
        }
      }else{
        console.log("product not found")
      }
    },
    countSubTotal(){
      let total = 0;
      this.shoppingCart.filter((item) => {
        total += (item.productDiscountPrice * item.productQuantity);
      });
      this.form_data.subtotal = total;
    },
    countFinalTotal(){
      let finalTotal = 0;
      let total = 0;
      this.shoppingCart.filter((item) => {
        total += (item.productDiscountPrice * item.productQuantity);
      });

      finalTotal = total + this.form_data.shippingCharge;
      this.form_data.total_price = finalTotal;
    },
    async submit(){
      //console.log('submitted')
      await this.$axios.post('/order/front/save-order',this.form_data)
        .then(response => {
          if (response.data.status == 200){
            this.form_data.first_name = '';
            this.form_data.last_name='';
            this.form_data.email='';
              this.form_data.phone='';
              //this.form_data.whatsapp='';
              this.form_data.address='';
              this.form_data.city='';
              this.form_data.country='';
              this.form_data.zip_code='';
              this.form_data.total_quantity=0;
              this.form_data.subtotal=0;
              this.form_data.shipping_type='shipping';
              this.form_data.order_status='pending';
              this.form_data.discount_type ='';
              this.form_data.discount_amount=0;
              this.form_data.total_price=0;
              this.form_data.shippingCharge = 0;
              this.form_data.products=[]

            window.localStorage.setItem('rappiCart', []);
            window.location.reload()

          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

}
</script>

<style lang="scss" scoped>
.checkout-cart {
  padding: 20px 100px;
  @media #{$max1199} {
    padding: 20px 20px;
  }
}
.ic__shopping--cart--head {
  background-color: $gray-100;
  @include d-flex();
  @include justify-content(space-between);
  @include bd-radius(8px);

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: $ebony-clay;
    padding: 10px;
  }
}

.ic__shopping-scrollbar {
  max-height: 400px;
  overflow-y: auto;
}

.ic__shopping--img {
  padding-top: 15px;
  @include d-flex();

  @media #{$max374} {
    flex-direction: column;
    gap: 20px;
    padding: 15px;
    border-bottom: 1px solid $gray-100;
  }

  img {
    width: 70px;
    height: 70px;
    @include bd-radius(10px);
    margin-right: 14px;
    border: 1px solid #ddd;

    @media #{$max374} {
      margin: 0 auto;
    }
  }

  .ic__shopping-info {
    width: 180px;

    @media #{$max480} {
      width: 154px;
    }

    @media #{$max374} {
      width: 100%;
      text-align: center;
    }

    .ic__cart--name {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: $ebony-clay;
      padding-bottom: 6px;
    }

    .ic-cart-quantity {
      @media #{$max374} {
        @include justify-content(center);
      }

      .ic-quantity {
        height: 28px;
        display: flex;
        align-items: center;
        button {
          background-color: transparent;
          border: 0;
          svg {
            width: 15px;
            height: 15px;
          }
          i {
            font-size: 14px;
          }
        }
      }

      .ic-quantity input {
        height: 28px;
        margin-left: 2px;
        box-shadow: none;
        width: 70px;
        @media #{$max1800} {
          margin-right: 0px;
        }
      }
    }
  }
}

.ic__shopping--price {
  flex: 1;
  text-align: right;
  @include d-flex();
  flex-direction: column;
  @include justify-content(space-between);

  @media #{$max374} {
    text-align: center;
  }

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }

  a {
    @include d-flex();
    gap: 4px;
    @include justify-content(flex-end);
    color: $gray-500;

    @media #{$max374} {
      @include justify-content(center);
    }
  }
}

.ic--subtotal {
  padding: 15px 0 15px 0;
  border-top: 1px solid $gray-300;
  border-bottom: 1px solid $gray-300;
  margin-top: 15px;

  p {
    @include d-flex();
    @include align-items();
    @include justify-content(space-between);

    &:not(:last-child) {
      padding-bottom: 8px;
    }

    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: $shuttle-gray;
    }
  }
}

.ic--total {
  padding-top: 15px;

  p {
    @include d-flex();
    @include align-items();
    @include justify-content(space-between);

    span {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: $ebony-clay;
    }
  }
}
.ic__shopping--bottom {
  margin-top: auto;
  @include d-flex();
  gap: 20px;

  @media #{$max374} {
    flex-direction: column;
  }

  a {
    flex: 1;
    height: 44px;
    font-weight: 500;
    padding: 0 17px;
    @include bd-radius(8px);

    @media #{$max374} {
      flex: 0 0 auto;
    }

    @media #{$max1440} {
      font-size: 14px;
    }

    &.ic-btn-outline {
      border: 1px solid $primary;
    }
  }
}
</style>
