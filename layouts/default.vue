<template>
<div>
<ClientOnly>
  <partialsHeader/>
  <nuxt/>
  <partialsFooter/>
  </ClientOnly>
</div>
</template>
<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>
