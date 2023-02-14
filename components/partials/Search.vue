<template>
  <input
    type="text"
    placeholder="búsqueda"
    v-model="words"
    @input="$nuxt.$emit('eventProductFilter', words)"

  />
</template>

<script>
export default {
  name: "Search",
  data(){
    return{
      words:''
    }
  }
}
</script>

<style scoped>

</style>
