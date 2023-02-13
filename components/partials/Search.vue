<template>
  <input
    type="text"
    placeholder="búsqueda"
    @change="$nuxt.$emit('eventName', 'nice payload')"

  />
</template>

<script>
export default {
  name: "Search"
}
</script>

<style scoped>

</style>
