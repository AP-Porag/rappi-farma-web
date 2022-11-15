<template>
  <div>
    <section class="ms__customer--profile ic-section-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="ms__customer--avatar">
              <div class="ms__img">
                <img data-src="/images/profile-cover.png" class="img-fluid" alt="" v-lazy-load>
              </div>
              <div class="ms__avatar--profiles">
                <img data-src="/images/profile-pic.png" class="img-fluid" alt="" v-lazy-load>
                <h5>Alex Mitchell</h5>
                <p>alexmitchell@gmail.com</p>
              </div>
              <ul class="customer-nav">
                <li>
                  <NuxtLink to="#">Basic Info</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#"> Update Profile</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#"> Service History</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#"> Service History</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "_id"
}
</script>

<style lang="scss" scoped>
.ms__customer--avatar {
  box-shadow: 0px 4px 20px rgba(23, 23, 23, 0.05);
  border-radius: 6px;
  .ms__img{
    border-radius: 6px 6px 0 0;
  }

  .ms__avatar--profiles {
    margin-top: -55px;
    text-align: center;
    padding-bottom: 25px;
    border-bottom: 1px solid #EAEFF3;
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
      }
    }
  }
}
</style>
