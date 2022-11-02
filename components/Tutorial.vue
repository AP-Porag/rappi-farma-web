<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <button
      class="app-button"
    >
      <span><span>button</span></span>
    </button>

<!--    <GrowBottomNavigation :options="options" v-model="selected" />-->

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

    <footer>
      <a href="https://github.com/zemna" target="_blank"><font-awesome-icon :icon="['fab', 'github']" class="fa-2x" /></a>
      <a href="https://www.facebook.com/zemnanet" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" class="fa-2x" /></a>
      <a href="https://www.instagram.com/zemna/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" class="fa-2x" /></a>
      <a href="https://twitter.com/zemna" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" class="fa-2x" /></a>
    </footer>
  </div>
</template>

    <div class="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
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
</style>
