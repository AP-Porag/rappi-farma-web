<template>
  <div class="root py-5">
    <section class="ms__checkout--part ic-section-space">
      <div class="container">
        <form action="#">
          <div class="ms__card">
            <div class="row py-5">
              <div class="col-lg-6">

                <div class="mb-4">
                  <div class="ms__title">
                    <h4 class="title text-capitalize">Tu ubicación</h4>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="map-box rounded" id="map-box">
                      </div>
                      <div class="address-search-box mt-3">
                        <div class="alert-box">
                          <div class="alert alert-danger" role="alert" v-if="error">
                            <span>{{message}}</span>
                          </div>
                        </div>
                        <label for="address">Shipping Address</label>
                        <div class="input-group">
                          <input type="text" class="form-control input-for-address" id="address" placeholder="search your location if not match" v-model="form_data.address">
                          <span class="input-group-text locator-button" @click="locatorButtonPressed">
                            <img src="images/icon-user-location.png" alt="" style="max-height: 24px;">
                          </span>
                        </div>
<!--                        <div class="form-group mb-3">-->
<!--                          <input type="text" class="form-control" id="address" placeholder="search your location if not match" v-model="form_data.address">-->
<!--                          <button class="btn btn-outline-secondary location-btn" type="button" @click="locatorButtonPressed">-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">-->
<!--                              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>-->
<!--                            </svg>-->
<!--                            cl-->
<!--                          </button>-->
<!--                        </div>-->
                      </div>
                    </div>
                    <!-- <div class="col-lg-6">
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
                    </div> -->
                    <!-- <div class="col-lg-6">
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
                    </div> -->
                    <!-- <div class="col-lg-6">
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
                    </div> -->
                    <!-- <div class="col-lg-6">
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
                    </div> -->
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

                <div class="mb-4">
                  <div class="ms__title">
                    <h4 class="title text-capitalize">Detalles personales</h4>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="from-group mt-3">
                        <label for="first_name">First Name</label>
                        <input
                          type="text"
                          id="first_name"
                          placeholder="Your first name"
                          class="form-control"
                          v-model="form_data.first_name"
                          required="required"
                        />
                        <p
                          class="text-danger text-left mt-1"
                          v-if="!$v.form_data.first_name.required && showError"
                          style="font-size: 13px;"
                        >
                          Campo obligatorio.
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="from-group mt-3">
                        <label for="last_name">Last Name</label>
                        <input
                          type="text"
                          id="last_name"
                          placeholder="Your last name"
                          class="form-control"
                          v-model="form_data.last_name"
                          required="required"
                        />
                        <p
                          class="text-danger text-left mt-1"
                          v-if="!$v.form_data.last_name.required && showError"
                          style="font-size: 13px;"
                        >
                          Campo obligatorio.
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="from-group mt-3">
                        <label for="email">Your email</label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Your email"
                          class="form-control"
                          v-model="form_data.email"
                          required="required"
                        />
                        <p
                          class="text-danger text-left mt-1"
                          v-if="!$v.form_data.email.required && showError"
                          style="font-size: 13px;"
                        >
                          Campo obligatorio.
                        </p>
                        <p
                          class="text-danger text-left mt-1"
                          v-if="!$v.form_data.email.email && showError"
                          style="font-size: 13px;"
                        >
                          Este debe ser un correo electrónico válido.
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="from-group mt-3">
                        <label for="phone">WhatsApp Number</label>
                        <vue-phone-number-input
                          v-model="phone"
                          @update="getFormattedPhoneCountryCode"
                          default-country-code="US"
                          id="phone"
                        />
                        <p
                          class="text-danger text-left mt-1"
                          v-if="!$v.form_data.phone.required && showError"
                          style="font-size: 13px;"
                        >
                          Campo obligatorio.
                        </p>
                        <p
                          class="text-danger text-left mt-1"
                          v-if="!$v.form_data.phone.numeric && showError"
                          style="font-size: 13px;"
                        >
                          Sólo valor numérico.
                        </p>
                      </div>
                    </div>
                  </div>
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
                          <a href="#" class="red" @click.prevent="removeFromCart(product)">Remove</a>
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
    <div
      class="overlay"
      v-if="order_response_message_box"
    >
      <div class="message_box text-center py-5">
        <img src="images/envelope-64.png" alt="" class="pb-2">
        <h4 class="pb-2 text-success">Gracias por ordenar</h4>
        <h5 class="pb-2 text-muted text-info">Completa tu pedido con un mensaje de WhatsApp</h5>
<!--        <h5 class="pb-2 text-danger text-info">Your phone number is your temporary password,</h5>-->
<!--        <h5 class="pb-2 text-danger text-info">Please login to your account and change this within 24 hours</h5>-->
<!--        <h6 class="pb-2 text-muted">If any query please message via WhatsApp.</h6>-->
<!--        <h5>If didn't get WhatsApp message within five minut  </h5>-->
        <a class="btn btn-primary mt-3" :href="`https://wa.me/${this.$store.state.settings.twilio_whatsapp_from}?text=Rappi Pharma, Esta es mi order: ${order_number} - ${form_data.first_name +' '+ form_data.last_name}`" @click="messageChecked" target="_blank">Send</a>
      </div>
    </div>
  </div>
</template>

<script>
import { required,numeric,email } from 'vuelidate/lib/validators'
export default {
  name: "index",
  data(){
    return{
      shoppingCart : [],
      error:false,
      showError: false,
      message:'',
      phone:'',
      order_response_message_box:false,
      customer_name:'',
      order_number:'',
      response_status:'',
      //api_Key:'AIzaSyD0OLq9RfPcZ2WgkTM9NJtP2mQgNZgqn18'
      form_data:{
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        country_code:'',
        country_calling_code:'',
        //whatsapp:'',
        address:'',
        //city:'',
        //country:'',
        //zip_code:'',
        total_quantity:0,
        subtotal:0,
        shipping_type:'shipping',
        order_status:'pending',
        discount_type :'',
        discount_amount:0,
        total_price:0,
        shippingCharge : 0,
        products:[],
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
    this.locatorButtonPressed();


    //map location
    if (typeof google === 'undefined') {
      // const script = document.createElement('script')
      // //script.onload = this.locatorButtonPressed()
      // script.type = 'text/javascript'
      // script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD0OLq9RfPcZ2WgkTM9NJtP2mQgNZgqn18&libraries=places&callback=null`
      // document.head.appendChild(script)
      console.log('google pay nai')
    }else {
      var defaultBounds = new google.maps.LatLngBounds(
        //for florida
        new google.maps.LatLng(27.994402, -81.760254),
      );
      //console.log('google paise')
      let autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('address'),
        {
          bounds:defaultBounds,
        }
      )
      autocomplete.addListener("place_changed",()=>{
        let place = autocomplete.getPlace();
        this.showUserLocationOnMap(place.geometry.location.lat(),place.geometry.location.lng());
        this.form_data.address = place.formatted_address;
        if (this.form_data.address.length > 0 && this.error){
          this.error = false;
        }
      })

    }

    // }
  },
  computed: {

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
        console.log("Producto no encontrado")
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
          console.log('Disminuir la cantidad no permitida!, por favor elimine.')
        }
      }else{
        console.log("Producto no encontrado")
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
      let total_qty = 0;
      this.shoppingCart.filter((item) => {
        total += (item.productDiscountPrice * item.productQuantity);
        total_qty += item.productQuantity;
      });

      finalTotal = total + this.form_data.shippingCharge;
      this.form_data.total_price = finalTotal;
      this.form_data.total_quantity = total_qty;
    },
    async submit(){
      if (this.$v.form_data.$invalid) {
        this.$v.form_data.$touch()
        this.showError = true;
        return
      }
      // await this.$axios.post('/order/front/save-order',this.form_data)
      await this.$axios.post('/order/front/save-order',this.form_data)
        .then(response => {
          this.response_status = response.data.status;
          if (this.response_status == 200){
            this.customer_name = response.data.customer_name;
            this.order_number = response.data.order_number;
            this.order_response_message_box = true;
            //this.messageChecked(response_status)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    //map location
    locatorButtonPressed(){
      if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {

          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          this.getAddressFromGoogle(latitude,longitude);
          this.showUserLocationOnMap(latitude,longitude);

          // console.log(position.coords.latitude);
          // console.log(position.coords.longitude);

        },error=>{
          //this.message = error.message;
          this.message = 'Has denegado la geolocalización, selecciona tu ubicación manualmente';
          this.error = true;
        });
      }else {
        this.message = 'La dosis de su navegador no es compatible con la API de geolocalización. Seleccione su ubicación manualmente.';
        this.error = true;
      }
    },
    getAddressFromGoogle(lat,lng){
      this.$axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyD0OLq9RfPcZ2WgkTM9NJtP2mQgNZgqn18`)
        .then(response => {
          if (response.data.error_message){
            this.message = response.data.error_message
            this.error = true
          }else {
            //console.log(response.data.results)
            this.form_data.address = response.data.results[0].formatted_address
          }
        })
        .catch(error => {
          this.message = error.message
          this.error = true
        });
    },
    showUserLocationOnMap(lat,long){
      //create a map object
      let map = new google.maps.Map(document.getElementById('map-box'),{
        zoom:15,
        center:new google.maps.LatLng(lat,long),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      //Add marker to map according location
      new google.maps.Marker({
        position: new google.maps.LatLng(lat,long),
        map: map,
      });
    },
    messageChecked(){

      if (this.response_status == 200){
        this.order_response_message_box = false;

        this.customer_name = '';
        this.order_number = '';

        this.response_status='';

        this.form_data.first_name = '';
        this.form_data.last_name='';
        this.form_data.email='';
        this.form_data.phone='';
        this.form_data.country_code='';
        this.form_data.country_calling_code='';
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
        this.form_data.products=[],
          this.shoppingCart=[],
          this.phone='',

        window.localStorage.setItem('rappiCart', []);
        // window.location.reload()
      }
    },
    //formatted phone number
    getFormattedPhoneCountryCode(payload){
      if (payload.isValid){
        this.form_data.phone = payload.nationalNumber;
        this.form_data.country_code = payload.countryCode;
        this.form_data.country_calling_code = payload.countryCallingCode;
      }
    },
  },
  validations() {
    return {
      form_data:{
        first_name:{required},
        last_name:{required},
        phone:{required,numeric},
        address:{required},
        email:{required,email},
      }
    }
  },

}
</script>

<style lang="scss" scoped>
.input-for-address{
  width: 80% !important;
}
.locator-button{
  cursor: pointer;
}
.map-box{
  margin: 0 auto;
  width: 100%;
  height: 200px;
  background: #e5e3e3;
}
.pac-item{
  padding: 15px;
  font-size: 16px;
  cursor: pointer !important;
}
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
.overlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.4);
  z-index: 9999;

  .message_box{
    background: #ffffff;
    width: 60%;
    border-radius: 10px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}
</style>
