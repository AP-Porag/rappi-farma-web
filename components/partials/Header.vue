<template>
    <header class="ms__header--part">
      <div class="container">
        <div class="ms__header--container">
          <div class="ms__header--logo">
            <nuxt-link to="/">
              <img src="/images/logo.svg" alt="" v-lazy-load>
            </nuxt-link>
          </div>
          <div class="ms__header--searchBar position-relative">
            <input type="text" placeholder="Search">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
            </button>
          </div>
          <div class="ms__header--loginWith--cart">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/></svg>
                Login
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"/></svg>
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
              <NuxtLink class="ms__navbar--links" to="/categorias/belleza">Salud y medicamentos</NuxtLink>
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
              <NuxtLink class="ms__navbar--links" to="/categorias/belleza">Belleza</NuxtLink>
              <div class="ms__navbar--MegadropDwon">
                <div class="ms__dropDwon--items">
                  <h6>Heading 2</h6>
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
              <NuxtLink class="ms__navbar--links" to="/categorias/belleza">Cuidado del bebé</NuxtLink>
            </li>
            <li class="ms__navbar--items">
              <NuxtLink class="ms__navbar--links" to="/categorias/belleza">Cuidado personal</NuxtLink>
            </li>
            <li class="ms__navbar--items">
              <NuxtLink class="ms__navbar--links" to="/categorias/belleza">Alimentos y bebidas</NuxtLink>
            </li>
            <li class="ms__navbar--items">
              <NuxtLink class="ms__navbar--links" to="/categorias/belleza">Hogar, mascotas y otros.</NuxtLink>
            </li>
            <li class="ms__navbar--items">
              <NuxtLink class="ms__navbar--links" to="/categorias/belleza">Ingresar cupón</NuxtLink>
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
  gap: 100px;
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
    gap: 30px;
    a {
      @include d-flex();
      flex-wrap: nowrap;
      gap: 10px;
      svg {
        width: 20px;
        path {
          fill: $primary;
        }
      }
    }
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
