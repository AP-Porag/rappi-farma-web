<template>
  <div>
    <header class="ms__header--part" :class="{ onScroll: !view.topOfPage }">
      <div class="container">
        <div class="ms__header--container">
          <div class="ms__header--logo">
            <NuxtLink to="/">
              <img src="/images/logo.svg" alt="" v-lazy-load />
            </NuxtLink>
          </div>
          <div class="ms__header--searchBar position-relative">
            <input type="text" placeholder="búsqueda" v-model="keywords" />
            <!-- <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
            </button> -->
            <div
              class="ms__header--searchBar--dropdwon"
              v-if="keywords.length >= 3"
            >
              <ul v-if="items.length > 0">
                <li v-for="item in items" :key="item.id">
                  <NuxtLink to="/producto"> Vistos recientemente</NuxtLink>
                </li>
              </ul>
              <ul v-else>
                <li>
                  <p>no hay productos coincidentes</p>
                </li>
              </ul>
              <!--              <div class="ms__recent-product">-->
              <!--                <ul>-->
              <!--                  <li>-->
              <!--                    <NuxtLink to="#">-->
              <!--                      <img src="https://lh3.googleusercontent.com/szQPXjkxkjIFo0BGWae2q1b_6riNQwgn5CnrKd-oQek3EGLYAh0Syz5Ha5wUKBX6Vn3KSvpiqMnWTjhVLEfdypFjXcx7bOz2YU-8Ad7mWkpKaFAAHw" class="img-fluid" alt="" v-lazy-load>-->
              <!--                      <p> Hasta 35% en Dermo con Prime </p>-->
              <!--                    </NuxtLink>-->
              <!--                  </li>-->
              <!--                  <li>-->
              <!--                    <NuxtLink to="#">-->
              <!--                      <img src="https://lh3.googleusercontent.com/szQPXjkxkjIFo0BGWae2q1b_6riNQwgn5CnrKd-oQek3EGLYAh0Syz5Ha5wUKBX6Vn3KSvpiqMnWTjhVLEfdypFjXcx7bOz2YU-8Ad7mWkpKaFAAHw" class="img-fluid" alt="" v-lazy-load>-->
              <!--                      <p> Hasta 35% en Dermo con Prime </p>-->
              <!--                    </NuxtLink>-->
              <!--                  </li>-->
              <!--                  <li>-->
              <!--                    <NuxtLink to="#">-->
              <!--                      <img src="https://lh3.googleusercontent.com/szQPXjkxkjIFo0BGWae2q1b_6riNQwgn5CnrKd-oQek3EGLYAh0Syz5Ha5wUKBX6Vn3KSvpiqMnWTjhVLEfdypFjXcx7bOz2YU-8Ad7mWkpKaFAAHw" class="img-fluid" alt="" v-lazy-load>-->
              <!--                      <p> Hasta 35% en Dermo con Prime </p>-->
              <!--                    </NuxtLink>-->
              <!--                  </li>-->
              <!--                  <li>-->
              <!--                    <NuxtLink to="#">-->
              <!--                      <img src="https://lh3.googleusercontent.com/szQPXjkxkjIFo0BGWae2q1b_6riNQwgn5CnrKd-oQek3EGLYAh0Syz5Ha5wUKBX6Vn3KSvpiqMnWTjhVLEfdypFjXcx7bOz2YU-8Ad7mWkpKaFAAHw" class="img-fluid" alt="" v-lazy-load>-->
              <!--                      <p> Hasta 35% en Dermo con Prime </p>-->
              <!--                    </NuxtLink>-->
              <!--                  </li>-->
              <!--                  <li>-->
              <!--                    <NuxtLink to="#">-->
              <!--                      <img src="https://lh3.googleusercontent.com/szQPXjkxkjIFo0BGWae2q1b_6riNQwgn5CnrKd-oQek3EGLYAh0Syz5Ha5wUKBX6Vn3KSvpiqMnWTjhVLEfdypFjXcx7bOz2YU-8Ad7mWkpKaFAAHw" class="img-fluid" alt="" v-lazy-load>-->
              <!--                      <p> Hasta 35% en Dermo con Prime </p>-->
              <!--                    </NuxtLink>-->
              <!--                  </li>-->
              <!--                  <li>-->
              <!--                    <NuxtLink to="#">-->
              <!--                      <img src="https://lh3.googleusercontent.com/szQPXjkxkjIFo0BGWae2q1b_6riNQwgn5CnrKd-oQek3EGLYAh0Syz5Ha5wUKBX6Vn3KSvpiqMnWTjhVLEfdypFjXcx7bOz2YU-8Ad7mWkpKaFAAHw" class="img-fluid" alt="" v-lazy-load>-->
              <!--                      <p> Hasta 35% en Dermo con Prime </p>-->
              <!--                    </NuxtLink>-->
              <!--                  </li>-->
              <!--                  <li>-->
              <!--                    <NuxtLink to="#">-->
              <!--                      <img src="https://lh3.googleusercontent.com/szQPXjkxkjIFo0BGWae2q1b_6riNQwgn5CnrKd-oQek3EGLYAh0Syz5Ha5wUKBX6Vn3KSvpiqMnWTjhVLEfdypFjXcx7bOz2YU-8Ad7mWkpKaFAAHw" class="img-fluid" alt="" v-lazy-load>-->
              <!--                      <p> Hasta 35% en Dermo con Prime </p>-->
              <!--                    </NuxtLink>-->
              <!--                  </li>-->
              <!--                  <li>-->
              <!--                    <NuxtLink to="#">-->
              <!--                      <img src="https://lh3.googleusercontent.com/szQPXjkxkjIFo0BGWae2q1b_6riNQwgn5CnrKd-oQek3EGLYAh0Syz5Ha5wUKBX6Vn3KSvpiqMnWTjhVLEfdypFjXcx7bOz2YU-8Ad7mWkpKaFAAHw" class="img-fluid" alt="" v-lazy-load>-->
              <!--                      <p> Hasta 35% en Dermo con Prime </p>-->
              <!--                    </NuxtLink>-->
              <!--                  </li>-->
              <!--                  <li>-->
              <!--                    <NuxtLink to="#">-->
              <!--                      <img src="https://lh3.googleusercontent.com/szQPXjkxkjIFo0BGWae2q1b_6riNQwgn5CnrKd-oQek3EGLYAh0Syz5Ha5wUKBX6Vn3KSvpiqMnWTjhVLEfdypFjXcx7bOz2YU-8Ad7mWkpKaFAAHw" class="img-fluid" alt="" v-lazy-load>-->
              <!--                      <p> Hasta 35% en Dermo con Prime </p>-->
              <!--                    </NuxtLink>-->
              <!--                  </li>-->
              <!--                  <li>-->
              <!--                    <NuxtLink to="#">-->
              <!--                      <img src="https://lh3.googleusercontent.com/szQPXjkxkjIFo0BGWae2q1b_6riNQwgn5CnrKd-oQek3EGLYAh0Syz5Ha5wUKBX6Vn3KSvpiqMnWTjhVLEfdypFjXcx7bOz2YU-8Ad7mWkpKaFAAHw" class="img-fluid" alt="" v-lazy-load>-->
              <!--                      <p> Hasta 35% en Dermo con Prime </p>-->
              <!--                    </NuxtLink>-->
              <!--                  </li>-->
              <!--                  <li>-->
              <!--                    <NuxtLink to="#">-->
              <!--                      <img src="https://lh3.googleusercontent.com/szQPXjkxkjIFo0BGWae2q1b_6riNQwgn5CnrKd-oQek3EGLYAh0Syz5Ha5wUKBX6Vn3KSvpiqMnWTjhVLEfdypFjXcx7bOz2YU-8Ad7mWkpKaFAAHw" class="img-fluid" alt="" v-lazy-load>-->
              <!--                      <p> Hasta 35% en Dermo con Prime </p>-->
              <!--                    </NuxtLink>-->
              <!--                  </li>-->
              <!--                </ul>-->
              <!--              </div>-->
            </div>
          </div>
          <div class="ms__header--loginWith--cart">
            <button class="ic-btn-outline" @click="cartBox = !cartBox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                />
              </svg>
              <span>cart</span>
              <p class="cart--count">{{shoppingCart.length}}</p>
            </button>
            <NuxtLink :to="`/cliente/${user.id}`" class="ic-btn-outline" v-if="user.token">
                  <div class="avatar_box">
                    <img :src="user.avatar_url" alt="" class="avatar_img img-fluid">
                  </div>
                  <span>Mi cuenta</span>
                </NuxtLink>
          </div>
        </div>
      </div>
      <!-- navbar bar -->
      <div class="ms__navbar--part">
        <div class="container">
          <nav class="ms__navbar--container">
            <div class="d-sm-block d-md-none">
              <button class="btn btn-outline-dark" @click="menuBox = !menuBox">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3v2H3V3h9zm4 16v2H3v-2h13zm6-8v2H3v-2h19z"/></svg>
              </button>
              <ul class="dropdown-menu" :class="{ show: menuBox }">
                <li><NuxtLink class="dropdown-item" to="/categorias/belleza">Salud y medicamentos</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/categorias/belleza">Belleza</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/categorias/belleza">Baby care</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/categorias/belleza">Producto</NuxtLink></li>
              </ul>
            </div>
            <ul class="ms__navbar--nav">
              <li class="ms__navbar--items">
                <NuxtLink class="ms__navbar--links" to="/categorias/belleza"
                  >Salud y medicamentos</NuxtLink
                >
                <div class="ms__navbar--MegadropDwon">
                  <div class="ms__dropDwon--items">
                    <h6>Heading 1</h6>
                    <ul>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="ms__dropDwon--items">
                    <h6>Heading 1</h6>
                    <ul>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="ms__dropDwon--items">
                    <h6>Heading 1</h6>
                    <ul>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="ms__dropDwon--items">
                    <h6>Heading 1</h6>
                    <ul>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="ms__dropDwon--items">
                    <h6>Heading 1</h6>
                    <ul>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="ms__navbar--items">
                <NuxtLink class="ms__navbar--links" to="/categorias/belleza"
                  >Belleza</NuxtLink
                >
                <div class="ms__navbar--MegadropDwon">
                  <div class="ms__dropDwon--items">
                    <h6>Heading 2</h6>
                    <ul>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="ms__dropDwon--items">
                    <h6>Heading 1</h6>
                    <ul>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="ms__dropDwon--items">
                    <h6>Heading 1</h6>
                    <ul>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="ms__dropDwon--items">
                    <h6>Heading 1</h6>
                    <ul>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="ms__dropDwon--items">
                    <h6>Heading 1</h6>
                    <ul>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="ms__dropDwon--links" to="/"
                          >Belleza</NuxtLink
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="ms__navbar--items">
                <NuxtLink class="ms__navbar--links" to="/categorias/belleza"
                  >Baby care</NuxtLink
                >
              </li>
              <li class="ms__navbar--items">
                <NuxtLink class="ms__navbar--links" to="/producto"
                  >Producto</NuxtLink
                >
              </li>
            </ul>
            <ul class="ms-auto ic__login--signUp">
              <li class="ms__navbar--items" v-if="!user.token">
                <nuxt-link class="btn btn-sm btn-outline-light border" to="/autenticación/acceso">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                    />
                  </svg>
                  <span>Acceso/Registro</span>
                </nuxt-link>
              </li>
              <li class="ms__navbar--items" v-if="user.token">
                <button class="btn btn-sm btn-outline-light border" @click="logout">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 8V7a6 6 0 1 1 12 0v1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2zm13 2H5v10h14V10zm-8 5.732a2 2 0 1 1 2 0V18h-2v-2.268zM8 8h8V7a4 4 0 1 0-8 0v1z"/></svg>
                  <span>cerrar sesión</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <!-- cart start -->
    <div
      class="ic__shopping--overlay"
      :class="{ active: cartBox }"
      @click="cartBox = !cartBox"
    ></div>
    <div class="ic__shopping--cart" :class="{ active: cartBox }">
      <div class="ic__shopping--top">
        <button class="ic__cart--closed" @click="cartBox = !cartBox">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path
              d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
            />
          </svg>
        </button>
        <h5>Your Cart</h5>
        <div class="ic__shopping--cart--head">
          <p>Product</p>
          <p>Price</p>
        </div>
        <div class="ic__shopping-scrollbar">
          <div class="ic__shopping--img" v-for="product in shoppingCart" :key="product.productId">
            <img
              :data-src="product.productImage"
              alt="cart"
              v-lazy-load
            />
            <div class="ic__shopping-info">
              <p class="ic__cart--name">{{product.productName}}</p>
              <div class="ic-cart-quantity d-flex align-items-center">
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
              <p>${{(product.productPrice * product.productQuantity).toFixed(2)}}</p>
              <a href="#" @click.prevent="removeFromCart(product)"><i class="ri-delete-bin-line text-danger"></i>Remove</a>
            </div>
          </div>
        </div>
        <!-- total -->
        <div class="ic--subtotal">
          <p><span>Subtotal</span> <span>${{subTotal.toFixed(2)}}</span></p>
          <p><span>Shipping</span> <span>${{shippingCharge.toFixed(2)}}</span></p>
        </div>
        <div class="ic--total">
          <p><span>Total</span> <span>${{finalTotal.toFixed(2)}}</span></p>
        </div>
      </div>
      <div class="ic__shopping--bottom">
        <NuxtLink
          to="/verificar"
          class="ic-btn"
          @click.native="cartBox = !cartBox"
          >Go To Checkout</NuxtLink
        >
        <button class="ic-btn-outline" @click="cartBox = !cartBox">
          Continue shopping
        </button>
      </div>
    </div>
    <!-- cart end -->
    <!-- The Modal -->
<!--    <div id="myModal" class="ms_modal" :class="{ 'd-block': loginModal }" @click="loginModal = !loginModal">-->
<!--      &lt;!&ndash; Modal content &ndash;&gt;-->
<!--      <div class="ms_modal-content">-->
<!--        <button class="close" @click="loginModal = !loginModal">&times;</button>-->
<!--        <form action="#">-->
<!--          <div class="form-group">-->
<!--            <label for="#">Email</label>-->
<!--            <input-->
<!--              type="text"-->
<!--              placeholder="Enter Your Email"-->
<!--              class="form-control"-->
<!--            />-->
<!--          </div>-->
<!--          <div class="form-group">-->
<!--            <label for="#">Password</label>-->
<!--            <input-->
<!--              type="password"-->
<!--              placeholder="Enter Your Password"-->
<!--              class="form-control"-->
<!--            />-->
<!--          </div>-->
<!--          <div class="ms__login&#45;&#45;check mb-3">-->
<!--            <div class="form-check">-->
<!--              <input-->
<!--                class="form-check-input"-->
<!--                type="checkbox"-->
<!--                value=""-->
<!--                id="flexCheckDefault"-->
<!--              />-->
<!--              <label class="form-check-label" for="flexCheckDefault">-->
<!--                Remember Me-->
<!--              </label>-->
<!--            </div>-->
<!--            <a href="#">Already have an account</a>-->
<!--          </div>-->
<!--          <div>-->
<!--            <button class="btn btn-primary">Login</button>-->
<!--          </div>-->
<!--        </form>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
  name: "Header",
  data(){
    return{
      view: {
        topOfPage: true
      },
      cartBox:false,
      menuBox:false,
      loginModal:false,
      keywords:'',
      items:[],
      shoppingCart : [],
      shippingCharge : 0,
      subTotal : 0,
      finalTotal:0,
      user:[],
    }
  },
  watch:{
    shoppingCart:{
      handler(newValue){
        localStorage.setItem('rappiCart',JSON.stringify(newValue));
      },deep:true
    },
    user:{
      handler(){
        if (this.user.token){
          this.$router.push('/')
        }
      }
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('rappiCustomer') || "[]");
    this.shoppingCart = JSON.parse(localStorage.getItem('rappiCart') || "[]");
    //this.shippingCharge = JSON.parse(localStorage.getItem('rappiShippingCost') || "");
    this.shippingCharge = 0;

    this.countFinalTotal();
    this.countSubTotal();
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    removeFromCart(product){
      const shoppingCart = this.shoppingCart;
      const productIndex = shoppingCart.findIndex(item => item.productId == product.productId)
      shoppingCart.splice(productIndex,1)
      this.countSubTotal();
      this.countFinalTotal();
    },
    increaseCartQuantity(product){
      const shoppingCart = this.shoppingCart;
      const found = shoppingCart.find(item => item.productId == product.productId)
      if(found){
        found.productQuantity++;
        this.countSubTotal();
        this.countFinalTotal();
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
        total += (item.productPrice * item.productQuantity);
      });
      this.subTotal = total;
    },
    countFinalTotal(){
      let finalTotal = 0;
      let total = 0;
      this.shoppingCart.filter((item) => {
        total += (item.productPrice * item.productQuantity);
      });

      finalTotal = total + this.shippingCharge;
      this.finalTotal = finalTotal;
    },
    handleScroll(){
      if(window.pageYOffset>250){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
    },
    async logout(){
      console.log('submitted')
      await this.$axios.post('/logout')
        .then(response => {
          if (response.data.status == 200){
            window.localStorage.setItem('rappiCustomer','[]');
            window.location.reload()
          }else {
            console.log('Something went wrong !')
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
.avatar_box{
  height: 30px;
  width: 30px;
  margin-right: 15px;
  border-radius: 50px;
}
.avatar_img{
  height: 30px;
  width: 30px;
  border-radius: 50px;
}
.ms__recent-product {
  overflow-x: auto;
  ul {
    display: flex;
    gap: 10px;
    li {
      flex: 0 0 100px;
      border: 1px solid #f9f9f9;
      border-radius: 4px;
      p {
        font-size: 10px;
        padding: 8px;
        color: #000;
      }
    }
  }
}
.ms__header--part {
  // padding-top: 10px;
  background-color: #fff;
  &.onScroll {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    width: 100%;
    transition: 0.5s;
    -webkit-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
    animation: spin .6s alternate;
  }
}
@keyframes spin {
  from {
    top: -50px;
  }to {
    top: 0;
  }
}
.ms__header--container {
  @include d-flex();
  @include align-items(center);
  @include justify-content(space-between);
  padding: 10px 0;
  gap: 211px;
  @media #{$max1399} {
    gap: 80px;
  }
  @media #{$max767} {
    gap: 20px;
  }
  .ms__header--logo {
    img {
      max-width: 70px;
    }
  }
  // search
  .ms__header--searchBar {
    flex: 1;
    @media #{$max575}{
      position: static!important;
    }
    input {
      width: 100%;
      height: 3rem;
      position: relative;
      background: #f9f9f9;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      border: 1px solid $primary !important;
      border-radius: 4rem 4rem 4rem 4rem !important;
      padding: 0 30px 0 30px;
      font-size: 14px;
      @media #{$max575} {
        padding: 0 10px 0 10px;
      }
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
    a {
      font-size: 14px;
      @media #{$max991} {
        span{
          display: none;
        }
        svg {
          margin-right: 0;
        }
      }
    }
    button {
      @media #{$max991} {
        span{
          display: none;
        }
        svg {
          margin-right: 0;
        }
      }
    }
  }
}
.ms__navbar--part {
  background-color: $primary;
  box-shadow: $box-shadow;
  @media #{$max991}{
    padding: 10px 0;
  }
  .ms__navbar--container {
    position: relative;
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 15px;
    display: flex;
    align-items: center;
    .ms__navbar--nav {
      @include d-flex();
      @include align-items(center);
      flex-wrap: nowrap;
      gap: 30px;
      @media #{$max991}{
        display: none;
      }
      .ms__navbar--items {
        .ms__navbar--links {
          color: $white;
          font-size: 15px;
          padding: 20px 0;
          display: inline-block;
          white-space: nowrap;
        }
        .ms__navbar--MegadropDwon {
          position: absolute;
          top: 63px;
          left: 0;
          width: 100%;
          max-height: 300px;
          background-color: $white;
          @include transition(0.3s);
          transform: translateY(10px);
          box-shadow: $box-shadow;
          padding: 10px;
          @include bd-radius(6px);
          visibility: hidden;
          opacity: 0;
          z-index: -1;
          @include d-flex();
          gap: 10px;
          @media #{$max991} {
            display: none;
          }
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
                  @include transition(0.3s);
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
    .ic__login--signUp {
      display: flex;
      gap: 10px;
    }
  }
}
.ic__shopping--overlay {
  &.active {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.4);
    z-index: 9;
  }
}
.ic__shopping--cart {
  @include d-flex();
  flex-wrap: nowrap;
  flex-direction: column;
  @include justify-content(space-between);
  padding: 40px;
  width: 480px;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0px 14px 40px rgba(115, 115, 115, 0.15);
  z-index: 999;
  transform: translateX(150%);
  @include transition-linear(0.6s);

  @media #{$max480} {
    width: 338px;
    padding: 20px;
  }
  @media #{$max374} {
    width: 100%;
    padding: 20px;
  }

  @media #{$max1440} {
    gap: 104px;
    overflow-y: auto;
  }

  &.active {
    transform: translateX(0);
  }

  .ic__shopping--top {
    position: relative;

    .ic__cart--closed {
      position: absolute;
      top: 0;
      right: 20px;
      svg {
        width: 18px;
        fill: $secondary;
      }
      i {
        font-size: 20px;
        color: $error-500;
      }
    }

    h5 {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      color: $ebony-clay;
      padding-bottom: 20px;
    }
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
.ms__header--searchBar--dropdwon {
  position: absolute;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 0.7rem 0 rgba(0, 0, 0, 0.199);
  border-radius: 8px;
  z-index: 99;
  @media #{$max575} {
    padding: 10px;
    }
  ul {
    li {
      a,p {
        font-size: 14px;
      }
    }
  }
}
</style>
