<template>
    <header class="ms__header--part">
      <div class="container">
        <div class="ms__header--container">
          <div class="ms__header--logo">
            <NuxtLink to="/">
              <img src="/images/logo.svg" alt="" v-lazy-load>
            </NuxtLink>
          </div>
          <div class="ms__header--searchBar position-relative">
            <input type="text" placeholder="Search">
            <!-- <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
            </button> -->
          </div>
          <div class="ms__header--loginWith--cart">
              <a href="#" class="ic-btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg>
                Login
              </a>
              <a href="#" class="ic-btn-outline"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
                cart
              </a>
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
  gap: 211px;
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
      svg {
        width: 20px;
        path {
          fill: white;
        }
      }
    }
  }
  // cart
  .ms__header--loginWith--cart {
    @include d-flex();
    gap: 10px;
  }
}
.ms__navbar--part {
  background-color: $primary;
  box-shadow: $box-shadow;
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