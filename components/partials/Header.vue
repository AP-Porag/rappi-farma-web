<template>
    <header class="ms__header--part">
      <div class="container">
        <div class="ms__header--container">
          <div class="ms__header--logo">
            <img src="/images/logo.svg" alt="" v-lazy-load>
          </div>
          <div class="ms__header--searchBar position-relative">
            <input type="text" placeholder="Search">
            <button>search</button>
          </div>
          <div class="ms__header--loginWith--cart">
              <a href="#">Login</a>
              <a href="#">cart</a>
          </div>
        </div>
      </div>
      <!-- navbar bar -->
    <div class="ms__navbar--part">
      <div class="container">
        <nav class="ms__navbar--container">
          <ul class="ms__navbar--nav">
            <li class="ms__navbar--items">
              <NuxtLink class="ms__navbar--links" to="/">Salud y medicamentos</NuxtLink>
              <div class="ms__navbar--MegadropDwon">
                  <div class="ms__dropDwon--items">
                    <h6>Heading 1</h6>
                    <ul>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/">Belleza</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/">Belleza</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/">Belleza</NuxtLink>
                      </li>
                    </ul>
                  </div>
                  <div class="ms__dropDwon--items">
                    <h6>Heading 1</h6>
                    <ul>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/">Belleza</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/">Belleza</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/">Belleza</NuxtLink>
                      </li>
                    </ul>
                  </div>
                  <div class="ms__dropDwon--items">
                    <h6>Heading 1</h6>
                    <ul>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/">Belleza</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/">Belleza</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/">Belleza</NuxtLink>
                      </li>
                    </ul>
                  </div>
                  <div class="ms__dropDwon--items">
                    <h6>Heading 1</h6>
                    <ul>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/">Belleza</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/">Belleza</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/">Belleza</NuxtLink>
                      </li>
                    </ul>
                  </div>
                  <div class="ms__dropDwon--items">
                    <h6>Heading 1</h6>
                    <ul>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/">Belleza</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/">Belleza</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/">Belleza</NuxtLink>
                      </li>
                    </ul>
                  </div>
              </div>
            </li> 
            <li class="ms__navbar--items">
              <NuxtLink class="ms__navbar--links" to="/">Belleza</NuxtLink>
            </li>
            <li class="ms__navbar--items">
              <NuxtLink class="ms__navbar--links" to="/">Cuidado del bebé</NuxtLink>
            </li>
            <li class="ms__navbar--items">
              <NuxtLink class="ms__navbar--links" to="/">Cuidado personal</NuxtLink>
            </li>
            <li class="ms__navbar--items">
              <NuxtLink class="ms__navbar--links" to="/">Alimentos y bebidas</NuxtLink>
            </li>
            <li class="ms__navbar--items">
              <NuxtLink class="ms__navbar--links" to="/">Hogar, mascotas y otros.</NuxtLink>
            </li>
            <li class="ms__navbar--items">
              <NuxtLink class="ms__navbar--links" to="/">Ingresar cupón</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </header>
</template>
  
<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
.ms__header--part {
  padding: 10px 0;
}
.ms__header--container {
  @include d-flex();
  @include align-items(center);
  @include justify-content(space-between);
  gap: 200px;
  .ms__header--logo {
    img {
      max-width: 70px;
    }
  }
  // search
  .ms__header--searchBar {
    flex: 1;
    input {
      width: 100%;
      height: 3rem;
      position: relative;
      background: #f9f9f9;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      border: 1px solid $primary;
      border-radius: 4rem 4rem 4rem 4rem;
      padding: 0 90px 0 30px;
      font-size: 14px;
      &:focus-visible {
        outline: 0;
      }
      &::placeholder {
        font-size: 14px;
      }
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      padding: 0 20px;
      background-color: $primary;
      border: none;
      border-radius: 0 2rem 2rem 0;
      
    }
  }
  // cart
  .ms__header--loginWith--cart {
    @include d-flex();
    gap: 20px;
  }
}
.ms__navbar--part {
  background-color: $primary;
  .ms__navbar--container {
    position: relative;
  margin-top: 10px;
  .ms__navbar--nav {
    @include d-flex();
    @include align-items(center);
    gap: 30px;
    .ms__navbar--items {
      .ms__navbar--links {
        color: $white;
        font-size: 15px;
        padding: 20px 0;
        display: inline-block;
      }
      .ms__navbar--MegadropDwon {
        position: absolute;
        top: 63px;
        left: 0;
        width: 100%;
        max-height: 300px;
        background-color: $white;
        @include transition(.3s);
        transform: translateY(10px);
        box-shadow: $box-shadow;
        padding: 10px;
        @include bd-radius(6px);
        visibility: hidden;
        opacity: 0;
        z-index: -1;
        @include d-flex();
        gap: 10px;
        .ms__dropDwon--items {
          flex: 0 0 calc(25% - 10px);
          width: calc(25% - 10px);
          h6 {
            font-size: 16px;
            font-weight: 700;
            color: rgba($color: $secondary, $alpha: 0.6);
          }
          ul {
            li {
              a {
                color: $white;
                font-size: 13px;
                color: $gray-deep;
                @include transition(.3s);
                &:hover {
                  color: $primary;
                }
              }
            }
          }
        }
      }
      &:hover {
           .ms__navbar--MegadropDwon {
            visibility: visible;
            opacity: 1;
            z-index: 2;
            transform: translateY(0);
          }
        }
    }
  }
}
}

</style>