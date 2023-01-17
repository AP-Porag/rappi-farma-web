<template>
  <div class="root py-5">
    <section class="ms__checkout--part ic-section-space">
      <div class="container">
        <form action="#">
          <div class="ms__card">
            <div class="row">
              <div class="col-lg-6">
                <img :src="this.$store.state.settings.website_login_bg" alt="" v-lazy-load />
              </div>
              <div class="col-lg-6">
                <div class="py-5">
                  <h4 class="text-center text-capitalize">Entre aquí</h4>
                  <div class="row mb-4">
                    <div class="col-lg-12">
                      <div class="from-group mt-3">
                        <label for="first_name">Email</label>
                        <input
                          type="text"
                          id="first_name"
                          placeholder="Email"
                          class="form-control"
                          v-model="form_data.email"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="from-group mt-3">
                        <label for="last_name">Password</label>
                        <input
                          type="text"
                          id="last_name"
                          placeholder="Password"
                          class="form-control"
                          v-model="form_data.password"
                        />
                      </div>
                    </div>
                    <div class="col-md-12 ic__shopping--bottom mt-4">
                      <button class="text-capitalize btn ic-btn w-100" @click.prevent="submit">enviar</button>
                    </div>
                    <div class="col-md-12 ic__shopping--bottom mt-4">
                      <p>Nuevo miembro? <nuxt-link to="/autenticación/registro">Registrarse aquí.</nuxt-link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "acceso",
  data(){
    return{
      customer:[],
      form_data:{
        email:'',
        password:'',
      }
    }
  },
  methods:{
    async submit(){
      await this.$axios.post('/login',this.form_data)
        .then(response => {
          if (response.data.status == 200){
            let user = response.data.data
            window.localStorage.setItem('rappiCustomer', JSON.stringify(user));
            this.customer = JSON.parse(localStorage.getItem('rappiCustomer') || "[]");
            window.location.reload()
          }else {
            console.log('Something went wrong !')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
