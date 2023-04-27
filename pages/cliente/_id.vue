<template>
  <div>
    <section class="ms__customer--profile ic-section-space" v-if="auth_user.token">
      <div class="container">
        <div>
          <div class="ms__customer--avatar">
            <div class="ms__img">
              <img
                :data-src="this.$store.state.settings.website_customer_profile_bg"
                class="img-fluid"
                alt=""
                v-lazy-load
              />
            </div>
            <div class="ms__avatar--profiles">
              <img
                :data-src="user.avatar_url"
                class="img-fluid"
                alt=""
                v-lazy-load
              />
              <h5 class="text-capitalize">{{user.fullName}}</h5>
              <p>{{user.email}}</p>
            </div>
          </div>

          <vue-tabs
            active-tab-color="#e74c3c"
            active-text-color="white"
            type="pills"
            :start-index="1"
            direction="vertical"
          >
            <v-tab title="Administrar Cuenta" icon="ti-user">
              <div class="ms__customer--content">
                <h4 class="text-capitalize">Información personal</h4>
                <form enctype="multipart/form-data">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="first_name">First name</label>
                        <input
                          id="first_name"
                          v-model="form_data.first_name"
                          type="text"
                          placeholder="First name"
                          class="form-control"
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
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="last_name">Last name</label>
                        <input
                          id="last_name"
                          v-model="form_data.last_name"
                          type="text"
                          placeholder="Last name"
                          class="form-control"
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
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="date_of_birth">Date Of Birth</label>
                        <input
                          id="date_of_birth"
                          v-model="form_data.date_of_birth"
                          type="date"
                          placeholder="Role"
                          class="form-control"
                          required="required"
                        />
                        <p
                          class="text-danger text-left mt-1"
                          v-if="!$v.form_data.date_of_birth.required && showError"
                          style="font-size: 13px;"
                        >
                          Campo obligatorio.
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                          id="email"
                          v-model="form_data.email"
                          type="email"
                          placeholder="Email"
                          class="form-control"
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
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="profile-input">Image</label>
                        <input type="file" class="form-control" id="profile-input"
                               ref="file" @change="handleAvatarImageFileObject()">
<!--                        <input-->
<!--                          type="file"-->
<!--                          placeholder="Role"-->
<!--                          class="form-control"-->
<!--                        />-->
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="phone">WhatsApp Number</label>
                        <vue-phone-number-input
                          v-model="form_data.phone"
                          @update="getFormattedPhoneCountryCode"
                          :default-country-code="form_data.country_code"
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
<!--                    <div class="col-lg-6">-->
<!--                      <div class="form-group">-->
<!--                        <label for="old_password">Old Password</label>-->
<!--                        <input-->
<!--                          id="old_password"-->
<!--                          v-model="form_data.old_password"-->
<!--                          type="password"-->
<!--                          placeholder="Old Password"-->
<!--                          class="form-control"-->
<!--                          required="required"-->
<!--                        />-->
<!--                        <p-->
<!--                          class="text-danger text-left mt-1"-->
<!--                          v-if="!$v.form_data.old_password.required && showError"-->
<!--                          style="font-size: 13px;"-->
<!--                        >-->
<!--                          Campo obligatorio.-->
<!--                        </p>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="col-lg-6">-->
<!--                      <div class="form-group">-->
<!--                        <label for="new_password">New Password</label>-->
<!--                        <input-->
<!--                          id="new_password"-->
<!--                          v-model="form_data.new_password"-->
<!--                          type="text"-->
<!--                          placeholder="New Password"-->
<!--                          class="form-control"-->
<!--                          required="required"-->
<!--                        />-->
<!--                        <p-->
<!--                          class="text-danger text-left mt-1"-->
<!--                          v-if="!$v.form_data.new_password.required && showError"-->
<!--                          style="font-size: 13px;"-->
<!--                        >-->
<!--                          Campo obligatorio.-->
<!--                        </p>-->
<!--                        <p-->
<!--                          class="text-danger text-left mt-1"-->
<!--                          v-if="!$v.form_data.new_password.minLength && showError"-->
<!--                          style="font-size: 13px;"-->
<!--                        >-->
<!--                          Longitud mínima 8 caracteres.-->
<!--                        </p>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="col-lg-6">-->
<!--                      <div class="form-group">-->
<!--                        <label for="confirm_password">Confirm Password</label>-->
<!--                        <input-->
<!--                          id="confirm_password"-->
<!--                          v-model="form_data.confirm_password"-->
<!--                          type="password"-->
<!--                          placeholder="Confirm Password"-->
<!--                          class="form-control"-->
<!--                          required="required"-->
<!--                        />-->
<!--                        <p-->
<!--                          class="text-danger text-left mt-1"-->
<!--                          v-if="!$v.form_data.confirm_password.sameAsPassword && showError"-->
<!--                          style="font-size: 13px;"-->
<!--                        >-->
<!--                          Passwords do not match.-->
<!--                        </p>-->
<!--                      </div>-->
<!--                    </div>-->
                  </div>
                  <button class="ic-btn" @click.prevent="submit">Save</button>
                </form>
              </div>
            </v-tab>

            <v-tab title="Ordenes Recientes" icon="ti-settings">
              <div class="ms__customer--content">
                <h4 class="text-capitalize">Orden reciente</h4>
                <div class="ms__customer--container mb-3" v-if="last_five_orders.length" v-for="(order,index) in last_five_orders" :key="order.id">
                  <div class="ms__recentOrder_header d-flex justify-content-between">
                    <p class="order-id">#{{order.SKU}}</p>
                    <div class="ms__recentOrder--status">
                      <span class="badge text-bg-success">{{order.status}}</span>
                    </div>
                  </div>
                  <div class="ms__recentOrder--items" v-if="order.products.length" v-for="(product,key) in order.products" :key="product.id">
                    <div class="ms__recentOrder--img">
                      <img
                        :data-src="product.image"
                        class="img-fluid"
                        alt=""
                        v-lazy-load
                      />
                    </div>
                    <div class="ms__recentOrder--name">
                      <p>{{product.name}}</p>
                    </div>
                    <div class="ms__recentOrder--oty">
                      <p>Qty:{{product.quantity}}</p>
                    </div>
                    <div class="ms__recentOrder--date">
                      <p>{{order.status === 'pending' ? 'Created At' : order.status }} on {{order.status === 'pending' ? order.created_at : order.updated_at }}</p>
                    </div>
<!--                    <div>-->
<!--                      <NuxtLink to="/">MakeView</NuxtLink>-->
<!--                    </div>-->
                  </div>
<!--                  <div class="ms__recentOrder&#45;&#45;items">-->
<!--                    <div class="ms__recentOrder&#45;&#45;img">-->
<!--                      <img-->
<!--                        data-src="/images/profile-pic.png"-->
<!--                        class="img-fluid"-->
<!--                        alt=""-->
<!--                        v-lazy-load-->
<!--                      />-->
<!--                    </div>-->
<!--                    <div class="ms__recentOrder&#45;&#45;name">-->
<!--                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, sunt!</p>-->
<!--                    </div>-->
<!--                    <div class="ms__recentOrder&#45;&#45;oty">-->
<!--                      <p>Qty:1</p>-->
<!--                    </div>-->
<!--                    <div class="ms__recentOrder&#45;&#45;date">-->
<!--                      <p>Delivered on 18 Nov 2022</p>-->
<!--                    </div>-->
<!--                    <div>-->
<!--                      <NuxtLink to="/review/1">MakeView</NuxtLink>-->
<!--                    </div>-->
<!--                  </div>-->
                </div>
                <h6 class="text-muted" v-else>No order yet !</h6>
              </div>
            </v-tab>

            <v-tab title="Historial De Pedidos" icon="ti-check">

              <div class="ms__customer--content position-relative">
                <h4 class="text-capitalize">Historial de pedidos</h4>
                <div class="timeline">
                  <div class="timeline-container right" v-if="all_orders.length" v-for="(order,index) in all_orders" :key="order.id">
                    <div class="content">
                      <p class="date">{{order.created_at}}</p>
                      <div class="ms__customer--container">
                        <div class="ms__recentOrder_header d-flex justify-content-between">
                          <p class="order-id">#{{order.SKU}}</p>
                          <div class="ms__recentOrder--status">
                            <span class="badge text-bg-success">{{order.status}}</span>
                          </div>
                        </div>
                        <div class="ms__recentOrder--items" v-if="order.products.length" v-for="(product,key) in order.products" :key="product.id">
                          <div class="ms__recentOrder--img">
                            <img
                              :data-src="product.image"
                              class="img-fluid"
                              alt=""
                              v-lazy-load
                            />
                          </div>
                          <div class="ms__recentOrder--name">
                            <p>{{product.name}}</p>
                          </div>
                          <div class="ms__recentOrder--oty">
                            <p>Qty:{{product.quantity}}</p>
                          </div>
                          <div class="ms__recentOrder--date">
                            <p>{{order.status === 'pending' ? 'Created At' : order.status }} on {{order.status === 'pending' ? order.created_at : order.updated_at }}</p>
                          </div>
                          <!--                    <div>-->
                          <!--                      <NuxtLink to="/">MakeView</NuxtLink>-->
                          <!--                    </div>-->
                        </div>

                      </div>
                    </div>
                  </div>
<!--                  <div class="timeline-container right">-->
<!--                    <div class="content">-->
<!--                      <p class="date">12.31.2022</p>-->
<!--                      <div class="ms__customer&#45;&#45;container">-->
<!--                        <div class="ms__recentOrder_header d-flex justify-content-between">-->
<!--                          <p class="order-id">#012345678</p>-->
<!--                          <div class="ms__recentOrder&#45;&#45;status">-->
<!--                            <span class="badge text-bg-success">Delivered</span>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                        <div class="ms__recentOrder&#45;&#45;items">-->
<!--                          <div class="ms__recentOrder&#45;&#45;img">-->
<!--                            <img-->
<!--                              data-src="/images/profile-pic.png"-->
<!--                              class="img-fluid"-->
<!--                              alt=""-->
<!--                              v-lazy-load-->
<!--                            />-->
<!--                          </div>-->
<!--                          <div class="ms__recentOrder&#45;&#45;name">-->
<!--                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, sunt!</p>-->
<!--                          </div>-->
<!--                          <div class="ms__recentOrder&#45;&#45;oty">-->
<!--                            <p>Qty:1</p>-->
<!--                          </div>-->
<!--                          <div class="ms__recentOrder&#45;&#45;date">-->
<!--                            <p>Delivered on 18 Nov 2022</p>-->
<!--                          </div>-->
<!--                          <div>-->
<!--                            <NuxtLink to="/">MakeView</NuxtLink>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                        <div class="ms__recentOrder&#45;&#45;items">-->
<!--                          <div class="ms__recentOrder&#45;&#45;img">-->
<!--                            <img-->
<!--                              data-src="/images/profile-pic.png"-->
<!--                              class="img-fluid"-->
<!--                              alt=""-->
<!--                              v-lazy-load-->
<!--                            />-->
<!--                          </div>-->
<!--                          <div class="ms__recentOrder&#45;&#45;name">-->
<!--                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, sunt!</p>-->
<!--                          </div>-->
<!--                          <div class="ms__recentOrder&#45;&#45;oty">-->
<!--                            <p>Qty:1</p>-->
<!--                          </div>-->
<!--                          <div class="ms__recentOrder&#45;&#45;date">-->
<!--                            <p>Delivered on 18 Nov 2022</p>-->
<!--                          </div>-->
<!--                          <div>-->
<!--                            <NuxtLink to="/review/1">MakeView</NuxtLink>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
                  <h6 class="text-muted" v-else>No order yet !</h6>
                </div>
              </div>
            </v-tab>

            <v-tab title="Cambiar La Contraseña" icon="ti-lock">
              <div class="ms__customer--content">
                <h4 class="text-capitalize">Información personal</h4>
                <form enctype="multipart/form-data">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="old_password">Old Password</label>
                        <input
                          id="old_password"
                          v-model="form_data_pass.old_password"
                          type="password"
                          placeholder="Old Password"
                          class="form-control"
                        />
                        <p
                          class="text-danger text-left mt-1"
                          v-if="!$v.form_data_pass.old_password.required && showError"
                          style="font-size: 13px;"
                        >
                          Campo obligatorio.
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="new_password">New Password</label>
                        <input
                          id="new_password"
                          v-model="form_data_pass.new_password"
                          type="text"
                          placeholder="New Password"
                          class="form-control"
                        />
                        <p
                          class="text-danger text-left mt-1"
                          v-if="!$v.form_data_pass.new_password.required && showError"
                          style="font-size: 13px;"
                        >
                          Campo obligatorio.
                        </p>
                        <p
                          class="text-danger text-left mt-1"
                          v-if="!$v.form_data_pass.new_password.minLength && showError"
                          style="font-size: 13px;"
                        >
                          Longitud mínima 8 caracteres.
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="confirm_password">Confirm Password</label>
                        <input
                          id="confirm_password"
                          v-model="form_data_pass.confirm_password"
                          type="password"
                          placeholder="Confirm Password"
                          class="form-control"
                        />
                        <p
                          class="text-danger text-left mt-1"
                          v-if="!$v.form_data_pass.confirm_password.sameAsPassword && showError"
                          style="font-size: 13px;"
                        >
                          Passwords do not match.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button class="ic-btn" @click.prevent="updatePassword">Save</button>
                </form>
              </div>
            </v-tab>
          </vue-tabs>
        </div>
      </div>
    </section>
    <section class="ms__customer--profile ic-section-space" v-else>
      <div class="container text-center">
        <img src="/images/404-error-message-.png" alt="" class="img-fluid">
      </div>
    </section>
  </div>
</template>

<script>
import { required,numeric,email,minLength,sameAs  } from 'vuelidate/lib/validators'
export default {
  name: "_id",
  data(){
    return{
      auth_user:[],
      user:[],
      last_five_orders:[],
      all_orders:[],
      showError: false,
      form_data :{
        first_name :'',
        last_name :'',
        email :'',
        phone :'',
        country_code :'',
        country_calling_code :'',
        date_of_birth :'',
      },
      form_data_pass :{
        user_id:'',
        new_password :'',
        old_password :'',
      },
      avatarImageFile:'',
    }
  },
  created() {
    this.getLastFiveOrder();
    this.getAllOrder();
    this.getUserData();
  },
  mounted() {
    this.auth_user = JSON.parse(localStorage.getItem('rappiCustomer') || "[]");
    this.form_data_pass.user_id = this.auth_user.id;
    // console.log(this.auth_user)
    // if (!this.auth_user.token){
    //   this.$router.push('/')
    // }else {
    //   if (this.auth_user){
    //     this.$router.push(`/cliente/${this.auth_user.id}`)
    //   }else {
    //     this.$router.push('/')
    //   }
    //
    // }
  },
  methods:{
    handleAvatarImageFileObject() {
      this.avatarImageFile = this.$refs.file.files[0]
      console.log(this.avatarImageFile)
    },
    async submit(){
      // let token = JSON.parse(window.localStorage.getItem('token'))
      if (this.$v.form_data.$invalid) {
        this.$v.form_data.$touch()
        this.showError = true;
        return
      }
      this.$nuxt.$emit('eventLoaderShow')
      let formData = new FormData()
      // WE APPEND THE AVATAR TO THE FORMDATA WE'RE GONNA POST
      formData.append('avatarImageFile', this.avatarImageFile)

      _.each(this.form_data, (value, key) => {
        formData.append(key, value)
      })

      try {
        await this.$axios.post(`/customer/profile-update/${this.$route.params.id}`,formData, {headers: {'content-type':'multipart/form-data;charset=utf-8; boundary='+ Math.random().toString().substr(2)}})
          .then((response)=>{
            this.$nuxt.$emit('eventLoaderHide')
            if (response.data.status != 200){
              this.message = response.data.message;
              this.error = true;
            }else {
              window.location.reload();
              this.message = response.data.message;
              this.success = true;
            }
          })
          .catch((error)=>{
            this.$nuxt.$emit('eventLoaderHide')
            this.message = 'Something went wrong !';
            this.error = true;
          })
      }catch (e) {
        this.$nuxt.$emit('eventLoaderHide')
        console.log(e.message)
      }
    },
    async getLastFiveOrder(){
      try {
        const response = await this.$axios.get(`/order/last-five-order/${this.$route.params.id}`);
        this.last_five_orders = response.data.data.items;
      }catch (e) {
        console.log(e.message)
      }
    },
    async getAllOrder(){
      try {
        const response = await this.$axios.get(`/order/all-order/${this.$route.params.id}`);
        this.all_orders = response.data.data.items;
      }catch (e) {
        console.log(e.message)
      }
    },
    async getUserData(){
      try {
        const response = await this.$axios.get(`/customer/details/${this.$route.params.id}`);
        this.user = response.data.data;
        this.form_data.first_name = this.user.first_name
        this.form_data.last_name = this.user.last_name
        this.form_data.email = this.user.email
        this.form_data.phone = this.user.phone
        this.form_data.country_code = this.user.country_code
        this.form_data.date_of_birth = this.user.date_of_birth
      }catch (e) {
        console.log(e.message)
      }
    },
    getFormattedPhoneCountryCode(payload){
      if (payload.isValid){
        this.form_data.phone = payload.nationalNumber;
        this.form_data.country_code = payload.countryCode;
        this.form_data.country_calling_code = payload.countryCallingCode;
      }
    },
    async updatePassword(){
      // let token = JSON.parse(window.localStorage.getItem('token'))
      if (this.$v.form_data_pass.$invalid) {
        this.$v.form_data_pass.$touch()
        this.showError = true;
        return
      }
      this.$nuxt.$emit('eventLoaderShow')
      // let formData = new FormData()
      // // WE APPEND THE AVATAR TO THE FORMDATA WE'RE GONNA POST
      // formData.append('avatarImageFile', this.avatarImageFile)
      //
      // _.each(this.form_data, (value, key) => {
      //   formData.append(key, value)
      // })

      try {
        await this.$axios.post(`/customer/change/password`,this.form_data_pass, {headers: {'content-type':'multipart/form-data;charset=utf-8; boundary='+ Math.random().toString().substr(2)}})
          .then((response)=>{
            this.$nuxt.$emit('eventLoaderHide')
            if (response.data.status != 200){
              this.message = response.data.message;
              this.error = true;
            }else {
              window.location.reload();
              this.message = response.data.message;
              this.success = true;
            }
          })
          .catch((error)=>{
            this.$nuxt.$emit('eventLoaderHide')
            this.message = 'Something went wrong !';
            this.error = true;
          })
      }catch (e) {
        this.$nuxt.$emit('eventLoaderHide')
        console.log(e.message)
      }
    },
  },
  validations() {
    return {
      form_data:{
        first_name:{required},
        last_name:{required},
        phone:{required,numeric},
        date_of_birth:{required},
        email:{required,email},
      },
      form_data_pass:{
        new_password: { required, minLength: minLength(8) },
        old_password:{required},
        confirm_password: { required, sameAsPassword: sameAs('new_password') }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.ms__customer--avatar {
  box-shadow: 0px 4px 20px rgba(23, 23, 23, 0.05);
  border-radius: 6px;
  background-color: #fff;
  .ms__img {
    border-radius: 6px 6px 0 0;
  }

  .ms__avatar--profiles {
    margin-top: -55px;
    text-align: center;
    padding-bottom: 25px;
    border-bottom: 1px solid #eaeff3;
    img {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      margin-bottom: 20px;
    }
    h5 {
      padding-bottom: 8px;
    }
    p {
      color: $primary;
    }
  }
  .customer-nav {
    padding-top: 20px;
    li {
      a {
        display: block;
        padding: 15px;
        color: #202020;
        font-weight: 500;
        transition: 0.3s;
        &:hover {
          color: $primary;
          background-color: rgba(65, 144, 222, 0.103);
        }
        &.active {
          color: $primary;
          background-color: rgba(65, 144, 222, 0.103);
        }
      }
    }
  }
}

.ms__customer--content {
  box-shadow: $box-shadow;
  background-color: #fff;
  padding: 30px;
  border-radius: 6px;
  height: 100%;
  h4 {
    padding-bottom: 20px;
  }
  .ms__customer--container {
    border: 1px solid #ccc;
    border-radius: 8px;
    .ms__recentOrder_header {
      padding: 8px;
      border-bottom: 1px solid #ccc;
    }
    .ms__recentOrder--items {
      box-shadow: none  !important;
    }
  }
}

</style>
