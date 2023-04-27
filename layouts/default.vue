<template>
  <div>
    <ClientOnly>
      <LoadingBar v-if="showHideSpinner"/>
      <partialsHeader/>
      <nuxt/>
      <partialsFooter/>
    </ClientOnly>
  </div>
</template>
<script>
//c2cbd2
export default {
  name: "default",
  head(){
    return{
      title: this.$store.state.settings.site_title,
      link: [{
        hid: 'icon',
        rel: 'icon',
        type: 'image/x-icon',
        href: this.$store.state.settings.site_favicon
      }]
    }
  },
  created() {
    this.$nuxt.$on('eventLoaderShow', ($event) => this.handleEventLoaderShow());
    this.$nuxt.$on('eventLoaderHide', ($event) => this.handleEventLoaderHide());
  },
  beforeCreate() {
    this.showHideSpinner = true;
  },
  mounted() {
    this.showHideSpinner = false;
  },
  data() {
    return {
      showHideSpinner: true
    };
  },
  methods:{
    handleEventLoaderShow(){
      this.showHideSpinner = true;
    },
    handleEventLoaderHide(){
      this.showHideSpinner = false;
    }
  }
}

</script>

<style scoped>

</style>
