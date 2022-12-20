<template>
  <a href="#" class="btn btn-primary btn-md w-100" @click.prevent="addToCart">Add to cart</a>
</template>

<script>
export default {
  name: "AddToCart",
  props:["id","title","original_price","discount_price","thumb","quantity","discount_type","discount_value"],
  data(){
    return {
      item :{
        productName: this.title,
        productImage: this.thumb,
        productOriginalPrice: this.original_price,
        productDiscountPrice: this.discount_price,
        productId: this.id,
        productStockQuantity: this.quantity,
        productQuantity: 1,
        discount_type: this.discount_type,
        discount_value: this.discount_value,
      },
      shoppingCart : []
    }
  },
  mounted() {
    this.shoppingCart = JSON.parse(localStorage.getItem('rappiCart') || "[]")
  },
  watch:{
    shoppingCart:{
      handler(newValue){
        localStorage.setItem('rappiCart',JSON.stringify(newValue));
      },deep:true
    }
  },
  methods:{
    addToCart(){
      console.log('clicked')
      let exist = false;
      if (this.shoppingCart.length > 0){
        for (const cartItem of this.shoppingCart){
          if (cartItem.productId == this.item.productId){
            cartItem.productQuantity = cartItem.productQuantity + 1;
            exist = true;
            break;
          }
        }
      }

      if (!exist){
        this.shoppingCart.push(this.item)
      }
    }
  },
}
</script>

<style scoped>

</style>

