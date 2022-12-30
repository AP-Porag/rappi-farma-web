<template>
  <div>
    <section class="ms__customer--profile ic-section-space">
      <div class="container">
        <div>
          <div class="ms__customer--avatar">
            <div class="ms__img">
              <img
                data-src="/images/profile-cover.png"
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
                <form action="#">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="#">First name</label>
                        <input
                          type="text"
                          placeholder="First name"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="#">Last name</label>
                        <input
                          type="text"
                          placeholder="Last name"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="#">Role</label>
                        <input
                          type="text"
                          placeholder="Role"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="#">Email</label>
                        <input
                          type="email"
                          placeholder="Email"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="#">Image</label>
                        <input
                          type="file"
                          placeholder="Role"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="#">Phone Number</label>
                        <input
                          type="number"
                          placeholder="Email"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <button class="ic-btn">Submit</button>
                </form>
              </div>
            </v-tab>

            <v-tab title="Recent Orders" icon="ti-settings">
              <div class="ms__customer--content">
                <div class="border border-2">
                  <div class="ms__recentOrder_header d-flex justify-content-between">
                    <p class="order-id">#012345678</p>
                    <div class="ms__recentOrder--status">
                      <span class="badge text-bg-success">Delivered</span>
                    </div>
                  </div>
                  <div class="ms__recentOrder--items">
                    <div class="ms__recentOrder--img">
                      <img
                        data-src="/images/profile-pic.png"
                        class="img-fluid"
                        alt=""
                        v-lazy-load
                      />
                    </div>
                    <div class="ms__recentOrder--name">
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, sunt!</p>
                    </div>
                    <div class="ms__recentOrder--oty">
                      <p>Qty:1</p>
                    </div>
                    <div class="ms__recentOrder--date">
                      <p>Delivered on 18 Nov 2022</p>
                    </div>
                  </div>
                </div>
                <div class="ms__recentOrder--items">
                  <div class="ms__recentOrder--img">
                    <img
                  data-src="/images/profile-pic.png"
                  class="img-fluid"
                  alt=""
                  v-lazy-load
                />
                  </div>
                  <div class="ms__recentOrder--name">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, sunt!</p>
                  </div>
                  <div class="ms__recentOrder--oty">
                    <p>Qty:1</p>
                  </div>
                  <div class="ms__recentOrder--status">
                    <span class="badge text-bg-success">Delivered</span>
                  </div>
                  <div class="ms__recentOrder--date">
                    <p>Delivered on 18 Nov 2022</p>
                  </div>
                </div>
              </div>
            </v-tab>

            <v-tab title="Orders History" icon="ti-check">
              <div class="ms__customer--content">
                <div class="ms__recentOrder--items">
                  <div class="ms__recentOrder--img">
                    <img
                  data-src="/images/profile-pic.png"
                  class="img-fluid"
                  alt=""
                  v-lazy-load
                />
                  </div>
                  <div class="ms__recentOrder--name">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, sunt!</p>
                  </div>
                  <div class="ms__recentOrder--oty">
                    <p>Qty:1</p>
                  </div>
                  <div class="ms__recentOrder--status">
                    <span class="badge text-bg-success">Delivered</span>
                  </div>
                  <div class="ms__recentOrder--date">
                    <p>Delivered on 18 Nov 2022</p>
                  </div>
                </div>
                <div class="ms__recentOrder--items">
                  <div class="ms__recentOrder--img">
                    <img
                  data-src="/images/profile-pic.png"
                  class="img-fluid"
                  alt=""
                  v-lazy-load
                />
                  </div>
                  <div class="ms__recentOrder--name">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, sunt!</p>
                  </div>
                  <div class="ms__recentOrder--oty">
                    <p>Qty:1</p>
                  </div>
                  <div class="ms__recentOrder--status">
                    <span class="badge text-bg-success">Delivered</span>
                  </div>
                  <div class="ms__recentOrder--date">
                    <p>Delivered on 18 Nov 2022</p>
                  </div>
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
    }
  },
  created() {

  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('rappiCustomer') || "[]");
    if (!this.user.token){
      this.$router.push('/')
    }else {
      this.$router.push(`/cliente/${this.user.id}`)
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
}

</style>
