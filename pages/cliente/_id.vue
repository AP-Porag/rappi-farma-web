<template>
  <div>
    <section class="ms__customer--profile ic-section-space">
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
              <h5>{{user.fullName}}</h5>
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
            <v-tab title="Manage Account" icon="ti-user">
              <div class="ms__customer--content">
                <h4>Personal Info</h4>
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
                          required
                        />
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
                          required
                        />
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
                          required
                        />
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
                          required
                        />
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
                        <label for="phone">Phone Number</label>
                        <input
                          id="phone"
                          v-model="form_data.phone"
                          type="number"
                          placeholder="Email"
                          class="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <button class="ic-btn" @click="submit">Save</button>
                </form>
              </div>
            </v-tab>

            <v-tab title="Recent Orders" icon="ti-settings">
              <div class="ms__customer--content">
                <h4>Recent Order</h4>
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

            <v-tab title="Orders History" icon="ti-check">

              <div class="ms__customer--content position-relative">
                <h4>Order History</h4>
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
          </vue-tabs>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "_id",
  data(){
    return{
      user:[],
      last_five_orders:[],
      all_orders:[],
      form_data :{
        first_name :'',
        last_name :'',
        email :'',
        phone :'',
        date_of_birth :'',
      },
      avatarImageFile:'',
    }
  },
  created() {
    this.getLastFiveOrder();
    this.getAllOrder();
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('rappiCustomer') || "[]");
    if (!this.user.token){
      this.$router.push('/')
    }else {
      this.$router.push(`/cliente/${this.user.id}`)
      this.form_data.first_name = this.user.first_name
      this.form_data.last_name = this.user.last_name
      this.form_data.email = this.user.email
      this.form_data.phone = this.user.phone
      this.form_data.date_of_birth = this.user.date_of_birth
    }
  },
  methods:{
    handleAvatarImageFileObject() {
      this.avatarImageFile = this.$refs.file.files[0]
      console.log(this.avatarImageFile)
    },
    async submit(){
      // let token = JSON.parse(window.localStorage.getItem('token'))

      let formData = new FormData()
      // WE APPEND THE AVATAR TO THE FORMDATA WE'RE GONNA POST
      formData.append('avatarImageFile', this.avatarImageFile)

      _.each(this.form_data, (value, key) => {
        formData.append(key, value)
      })

      await this.$axios.post(`/customer/profile-update/${this.$route.params.id}`,formData, {headers: {'content-type':'multipart/form-data;charset=utf-8; boundary='+ Math.random().toString().substr(2)}})
        .then((response)=>{
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
          this.message = 'Something went wrong !';
          this.error = true;
        })
    },
    async getLastFiveOrder(){
      try {
        const response = await this.$axios.get(`/order/last-five-order/${this.$route.params.id}`);
        this.last_five_orders = response.data.data.items;
        console.log(response)
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
  }
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
