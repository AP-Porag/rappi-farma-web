<template>
  <div>
    <LoadingBar v-if="showHideSpinner"/>
    <partialsHeader/>
    <nuxt/>
    <partialsFooter/>
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
  }
}

</script>

<style scoped>

</style>
