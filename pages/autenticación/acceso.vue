<template>
  <div class="root py-5">
    <section class="ms__checkout--part ic-section-space">
      <div class="container">
        <form action="#">
          <div class="ms__card">
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block">
                <img :src="this.$store.state.settings.website_login_bg" alt="" v-lazy-load />
              </div>
              <div class="col-lg-6">
                <div class="py-5">
                  <h4 class="text-center text-capitalize">Entre aquí</h4>
                  <div class="row mb-4">
                    <div class="col-lg-12">
                      <div class="from-group mt-3">
                        <label for="first_name">Email Or Phone</label>
                        <input
                          type="text"
                          id="first_name"
                          placeholder="Email"
                          class="form-control"
                          v-model="form_data.email"
                          required="required"
                        />
                        <p
                          class="text-danger text-left mt-1"
                          v-if="!$v.form_data.email.required && showError"
                          style="font-size: 13px;"
                        >
                          Campo obligatorio.
                        </p>
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
                          required="required"
                        />
                        <p
                          class="text-danger text-left mt-1"
                          v-if="!$v.form_data.password.required && showError"
                          style="font-size: 13px;"
                        >
                          Campo obligatorio.
                        </p>
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
import { required } from 'vuelidate/lib/validators'
export default {
  name: "acceso",
  data(){
    return{
      customer:[],
      form_data:{
        email:'',
        password:'',
      },
      showError: false,
    }
  },
  methods:{
    async submit(){

      if (this.$v.form_data.$invalid) {
        this.$v.form_data.$touch()
        this.showError = true;
        return
      }

      await this.$axios.post('/login',this.form_data)
        .then(response => {
          if (response.data.status == 200){
            let user = response.data.data
            //console.log(user)
            window.localStorage.setItem('rappiCustomer', JSON.stringify(user));
            window.localStorage.setItem('isLoggedIn', true);
            this.$nuxt.$emit('eventIsLoggedIn', true)
            this.customer = JSON.parse(localStorage.getItem('rappiCustomer') || "[]");
            //window.location.reload()
            this.$router.push(`/cliente/${user.id}`);
          }else {
            if (response.data.status == 401){
              this.$toast.error('Credenciales incorrectas', {
                position: 'top-right',
                duration:3000,
              });
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  validations() {
    return {
      form_data: {
        email:{
          required,
        },
        password: {
          required
        }
      },
    }
  },
}
</script>

<style scoped>

</style>
