<template>
  <div class="root py-5">
    <section class="ms__checkout--part ic-section-space">
      <div class="container">
        <form action="#">
          <div class="ms__card">
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block">
                <img src="/images/illustration/Sign-up-rafiki.svg" alt="" v-lazy-load />
              </div>
              <div class="col-lg-6">
                <div class="py-5">
                  <h4 class="text-center text-capitalize">Registro Aquí</h4>
                  <div class="row mb-4">
                    <div class="col-lg-12">
                      <div class="from-group mt-3">
                        <label for="first_name">First name</label>
                        <input
                          type="text"
                          id="first_name"
                          placeholder="First name"
                          class="form-control"
                          v-model="form_data.first_name"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="from-group mt-3">
                        <label for="last_name">Last Name</label>
                        <input
                          type="text"
                          id="last_name"
                          placeholder="Last name"
                          class="form-control"
                          v-model="form_data.last_name"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="from-group mt-3">
                        <label for="email">Email</label>
                        <input
                          type="text"
                          id="email"
                          placeholder="Email"
                          class="form-control"
                          v-model="form_data.email"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="from-group mt-3">
                        <label for="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          placeholder="Password"
                          class="form-control"
                          v-model="form_data.password"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="from-group mt-3">
                        <label for="whats_app">WhatsApp Number (with country code)</label>
                        <input
                          type="text"
                          id="whats_app"
                          placeholder="formate : +8801828963235"
                          class="form-control"
                          v-model="form_data.whatsapp"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="from-group mt-3">
                        <label for="dob">Birthday</label>
                        <input
                          type="date"
                          id="dob"
                          placeholder="dob"
                          class="form-control"
                          v-model="form_data.dob"
                        />
                      </div>
                    </div>
                    <div class="col-md-12 ic__shopping--bottom mt-4">
                      <button class="text-capitalize btn ic-btn w-100" @click.prevent="submit">enviar</button>
                    </div>
                    <div class="col-md-12 ic__shopping--bottom mt-4">
                      <p>Ya tienes una cuenta? <nuxt-link to="/autenticación/acceso">Entre aquí.</nuxt-link></p>
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
  name: "registro",
  data(){
    return{
      form_data:{
        first_name:'',
        last_name:'',
        whatsapp:'',
        dob:'',
        email:'',
        password:'',
      }
    }
  },
  methods:{
    async submit(){
      await this.$axios.post('http://localhost:8000/api/v1/registration',this.form_data)
        .then(response => {
          if (response.data.status == 200){
            //window.location.reload();
            this.form_data.first_name = '';
            this.form_data.last_name = '';
            this.form_data.email = '';
            this.form_data.whatsapp = '';
            this.form_data.password = '';
            this.form_data.dob = '';
            this.$toast.success('Registrado exitosamente. Por favor Iniciar sesión.', {
              position: 'top-right',
              duration:8000,
            });
          }else {
            this.$toast.error('Huy! Algo salió mal !', {
              position: 'top-right',
              duration:8000,
            });
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
