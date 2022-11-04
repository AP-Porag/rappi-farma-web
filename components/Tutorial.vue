<!-- Please remove this file from your project -->
<template>
  <div>
    <!-- banner part start -->
    <section class="ms__banner--part">
      <div class="container">
        <VueSlickCarousel :arrows="true" :dots="true">
          <div class="ms__banner--items">
              <img data-src="https://media.e-valy.com/products/images/b9d78081-3cfa-4f79-8b1a-40f5edb658f1"  class="img-fluid w-100" alt="" v-lazy-load>
          </div>
          <div>
            <img data-src="https://media.e-valy.com/products/images/bddb7289-8252-4512-9bc7-6a44f2ce299f" class="img-fluid w-100"  alt="" v-lazy-load>
          </div>
          <div>3</div>
          <div>4</div>
      </VueSlickCarousel>
      </div>
    </section>
    <!-- banner part end -->
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <!-- <button
      class="app-button"
    >
      <span><span>button</span></span>
    </button> -->

    <!-- <VueSlickCarousel :arrows="true" :dots="true">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel> -->
    <!-- named route -->

    <!-- <div class="">
      <ul>
        <li>
          <NuxtLink to="/brand/olay" class="btn-get-started">Brand,Category,Subcategory page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/categorias/beauty" class="btn-get-started">Single Category page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/cliente/123" class="btn-get-started">Customer profile page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/politicas" class="btn-get-started">Terms & Condition,Privacy policies page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/producto/olay" class="btn-get-started">Single Product page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/verificar" class="btn-get-started">Checkout page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog" class="btn-get-started">Blog page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/something" class="btn-get-started">Single blog page</NuxtLink>
        </li>
      </ul>
    </div> -->







    <!-- <ShareNetwork
      network="twitter"
      url="https://news.vuejs.org/issues/180"
      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
      quote="The hot reload is so fast it\'s near instant. - Evan You"
      hashtags="vuejs,vite,javascript"
      twitterUser="youyuxi"
    >
      <i class="fab fah fa-lg fa-twitter"></i>
      <span>Share on Twitter</span>
    </ShareNetwork> -->

    <SocialChat
      icon
      :attendants="attendants"
    >
      <p slot="header">Click on one of our attendants below to chat on WhatsApp.</p>
      <template v-slot:button>
        <img
          src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
          alt="icon whatsapp"
          aria-hidden="true"
        >
      </template>
      <small slot="footer">Opening hours: 10am to 6pm</small>
    </SocialChat>

    <!-- <div class="box" @click="c" style="width: 250px;">
      <v-zoom :img="url" :width="250"></v-zoom>
    </div> -->

    <!-- <div class="box-box" ></div>

    <img data-src="https://i.pinimg.com/originals/90/a4/78/90a47821d9451451813f9f3867351b53.jpg" alt="" title="" v-lazy-load>
    <h1 class="bg-success">FTP Testing</h1> -->
    <!-- <footer>
      <a href="https://github.com/zemna" target="_blank"><font-awesome-icon :icon="['fab', 'github']" class="fa-2x" /></a>
      <a href="https://www.facebook.com/zemnanet" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" class="fa-2x" /></a>
      <a href="https://www.instagram.com/zemna/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" class="fa-2x" /></a>
      <a href="https://twitter.com/zemna" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" class="fa-2x" /></a>
    </footer> -->

    <!-- <GrowBottomNavigation :options="options" v-model="selected" /> -->

  </div>
  </div>
  
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data: () => ({
    selected: 1,
    options: [
      { id: 1, icon: 'fa-solid fa-home', title: 'Home', color: '#5639af' },
      { id: 2, icon: 'fa-solid fa-magnifying-glass', title: 'Search', color: '#ac4793' },
      { id: 3, icon: 'fa-solid fa-heart', title: 'Likes', color: '#e2a93a' },
      { id: 4, icon: 'fa-solid fa-gear', title: 'Settings', color: '#4493a7' }
    ],
    attendants: [
      {
        app: 'whatsapp',
        label: 'Technical support',
        name: 'Alan Ktquez',
        number: '5581983383532',
        avatar: {
          src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
          alt: 'Alan Ktquez avatar'
        }
      },
    ],
    url:
      "https://i.pinimg.com/originals/90/a4/78/90a47821d9451451813f9f3867351b53.jpg",
  }),
  methods: {
    c() {
      this.$zoom(this.url);
    }
  }
}
</script>
<style lang="scss">
.ms__banner--part {
  .container {
    position: relative;
  }
  .slick-track{
    height: 380px;
  }
  .ms__banner--items {
      max-height: 480px;
      height: 100%;
    img {
      max-height: 380px;
      height: 100%;
    }
  }
  .slick-arrow {
    width: 50px;
    height: 50px;
    @include bd-radius(50%);
    background-color: $white;
    outline: 0;
    border: 1px solid $gray-light;
    &.slick-prev {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      z-index: 1;
    }
    &.slick-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      z-index: 1;
    }
  }
  .slick-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    display: flex!important;
    gap: 5px;
    li {
      button {
        width: 15px;
        height: 15px;
        @include bd-radius(50%);
        background-color: $white;
        border: 1px solid gray;
        color: transparent;

      }
      &.slick-active {
        button {
          background-color: $primary;
        }
      }
    }
  }
}

.app-button {
  position: relative;
  display: inline-flex;
  cursor: pointer;
  white-space: nowrap;
  vertical-align: top;
  text-decoration: none;
  outline: none;
  width: minus(30px, 100px);

  // variant
  span{
    background-color: $primary;
    color: $white;

    span{
      color: red;
    }
  }
}
.box-box {
  width: 150px;
  height: 150px;
  background-image: url(https://i.pinimg.com/originals/90/a4/78/90a47821d9451451813f9f3867351b53.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
