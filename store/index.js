export const state = () =>({
  settings:[],
  categories:[],
})
export const getters = () => ({
      // totalPrice: state => {
      //   let total = 0;
      //   state.cart.filter((item) => {
      //     total += (item.productPrice * item.productQuantity);
      //   });
      //   return total.toFixed(2);
      // },
      // countSubTotal:state =>{
      //   let total = 0;
      //   state.cart.filter((item) => {
      //     total += (item.productPrice * item.productQuantity);
      //   });
      //   return total.toFixed(2);
      // },
      // countFinalTotal:state =>{
      //   let finalTotal = 0;
      //   let total = 0;
      //   state.cart.filter((item) => {
      //     total += (item.productPrice * item.productQuantity);
      //   });
      //
      //   finalTotal = total + state.shippingCharge;
      //   return finalTotal.toFixed(2);
      // },
      // totalQuantity: state => {
      //   let total = 0;
      //   state.cart.filter((item) => {
      //     total += item.productQuantity;
      //   });
      //   return total;
      // },
    })
  export const mutations = {
    // addToCart(state, item){
    //
    //   let found = state.cart.find(product => product.productId == item.productId );
    //
    //   if(found){
    //     found.productQuantity++;
    //   }else{
    //     state.cart.push(item);
    //
    //   }
    //
    //   this.commit('saveData');
    //
    // },
    //
    // saveData(state){
    //   localStorage.setItem('cart', JSON.stringify(state.cart));
    // },
    //
    // removeFromCart(state, item){
    //
    //   let index = state.cart.indexOf(item);
    //   state.cart.splice(index,1);
    //
    //   this.commit('saveData');
    //
    // },
    // increaseCartQuantity(state, id){
    //
    //   let found = state.cart.find(product => product.productId == id );
    //
    //   if(found){
    //     found.productQuantity++;
    //   }else{
    //     console.log("product not found")
    //
    //   }
    //
    //   this.commit('saveData');
    //
    // },
    // decreaseCartQuantity(state, id){
    //
    //   let found = state.cart.find(product => product.productId == id );
    //
    //   if(found && found.productQuantity > 1){
    //     found.productQuantity--;
    //   }else {
    //     console.log("product not found")
    //   }
    //
    //   this.commit('saveData');
    //
    // },
    // SET_SETTINGS : (state,payload)=>{
    //   state.settings = payload;
    //   console.log('hello')
    // },
    SET_SETTINGS(state, payload) {
      state.settings = payload
    },
    SET_CATEGORIES(state, payload) {
      state.categories = payload
    }
  }
export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({ commit }) {
    try {
      const { data } = await this.$axios.get('/setting/front/get')
      commit('SET_SETTINGS', data.data.settings)
    }catch (e) {
      console.log(e.message)
    }
  },
}
