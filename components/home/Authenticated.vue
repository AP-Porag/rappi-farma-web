<template>
  <div class="row g-2">
    <ProductoProduct class="col-lg-12" v-for="product in products" :key="product.id" :product="product" />
    <p class="text-center text-muted" v-if="products.length < 1">Ningún producto encontrado</p>

    <infinite-loading v-if="products.length" spinner="bubbles" @infinite="infiniteScroll"></infinite-loading>
  </div>

</template>

<script>
export default {
  name: "Authenticated",
  data: ()=>({
    products:[],
    page: 1,
    keywords:null,
    category_slug : null,
    brand_slug:null,
  }),
  created() {
    this.$nuxt.$on('eventProductFilter', ($event) => this.handleEventProductFilter($event));
  },
  mounted() {
    this.getAllProducts();
  },
  methods:{
    async getAllProducts() {
      try {
        const response = await this.$axios.get(`/product?page=${this.page}&keywords=${this.keywords}&category=${this.category_slug}&brand=${this.brand_slug}`);
        this.products = response.data.data.items;
      }catch (e) {
        console.log(e.message)
      }
    },
    infiniteScroll($state) {
      setTimeout(() => {
        this.page++; // next page

        try {
          this.$axios.get(`/product?page=${this.page}&keywords=${this.keywords}&category=${this.category_slug}&brand=${this.brand_slug}`)
            .then(response => {
              if (response.data.data.items.length > 1) { // check if any left
                response.data.data.items.forEach(product => this.products.push(product));
                // push it into the items array so we can display the data
                $state.loaded();
              } else {
                $state.complete();
              }
            })
            .catch(err => {
              console.log(err);
            });
        }catch (e) {
          console.log(e.message)
        }

      }, 1000);
    },
    async handleEventProductFilter(e) {
      if (e.length > 3){
        this.keywords = e;
        await this.getAllProducts()
      }else {
        if (e.length < 1){
          this.keywords = null;
          await this.getAllProducts()
        }
      }
    },
  }
}
</script>

<style scoped>

</style>
