<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <button
      class="app-button"
    >
      <span><span>button</span></span>
    </button>

    <VueSlickCarousel :arrows="true" :dots="true">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
    <ShareNetwork
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
    </ShareNetwork>

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
      <small slot="footer">Opening hours: 8am to 6pm</small>
    </SocialChat>

    <div class="box" @click="c" style="width: 250px;">
      <v-zoom :img="url" :width="250"></v-zoom>
    </div>

    <div class="box-box" ></div>

    <footer>
      <a href="https://github.com/zemna" target="_blank"><font-awesome-icon :icon="['fab', 'github']" class="fa-2x" /></a>
      <a href="https://www.facebook.com/zemnanet" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" class="fa-2x" /></a>
      <a href="https://www.instagram.com/zemna/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" class="fa-2x" /></a>
      <a href="https://twitter.com/zemna" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" class="fa-2x" /></a>
    </footer>
    <GrowBottomNavigation :options="options" v-model="selected" />
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
      "https://i.pinimg.com/originals/90/a4/78/90a47821d9451451813f9f3867351b53.jpg"
  }),
  methods: {
    c() {
      this.$zoom(this.url);
    }
  }
}
</script>
<style lang="scss">
.app-button {
  position: relative;
  display: inline-flex;
  cursor: pointer;
  white-space: nowrap;
  vertical-align: top;
  text-decoration: none;
  outline: none;
  @include center-item;
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
