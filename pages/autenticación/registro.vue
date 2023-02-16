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
                          required="required"
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
                          required="required"
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
                          required="required"
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
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="from-group mt-3">
                        <label for="phone">WhatsApp Number</label>
                        <vue-phone-number-input
                          v-model="phone"
                          @update="getFormattedPhoneCountryCode"
                          default-country-code="US"
                          id="phone"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="from-group mt-3">
                        <label for="dob">Birthday</label>
                        <input
                          type="date"
                          id="dob"
                          placeholder="dob"
                          class="form-control"
                          v-model="form_data.dob"
                          required="required"
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
    <div
      class="overlay"
      v-if="registration_response_message_box"
    >
      <div class="message_box text-center py-5">
        <img src="images/envelope-64.png" alt="" class="pb-2">
        <h4 class="pb-2 text-success">Registration Successful</h4>
        <h5 class="pb-2 text-muted text-info">Please login to continue</h5>
<!--        <h6 class="pb-2 text-muted">If any query please message via WhatsApp.</h6>-->
        <!--        <h5>If didn't get WhatsApp message within five minut</h5>-->
        <button class="btn btn-primary mt-3" @click="messageChecked">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "registro",
  data(){
    return{
      registration_response_message_box:false,
      phone:'',
      form_data:{
        first_name:'',
        last_name:'',
        whatsapp:'',
        country_code:'',
        country_calling_code:'',
        dob:'',
        email:'',
        password:'',
      }
    }
  },
  methods:{
    async submit(){
      await this.$axios.post('/registration',this.form_data)
        .then(response => {
          let response_status = response.data.status;
          if (response_status == 200){
            //window.location.reload();
            //this.messageChecked(response.data.status);
            this.form_data.first_name = '';
            this.form_data.last_name = '';
            this.form_data.email = '';
            this.form_data.whatsapp = '';
            this.country_code='';
            this.country_calling_code='';
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
    },
    messageChecked(response_status){
      //console.log(response_status)
      if (response_status == 200){
        this.form_data.first_name = '';
        this.form_data.last_name = '';
        this.form_data.email = '';
        this.form_data.whatsapp = '';
        this.country_code='';
        this.country_calling_code='';
        this.form_data.password = '';
        this.form_data.dob = '';
        this.$router.push('/autenticación/acceso')
      }
    },
    //formatted phone number
    getFormattedPhoneCountryCode(payload){
      if (payload.isValid){
        this.form_data.whatsapp = payload.nationalNumber;
        this.form_data.country_code = payload.countryCode;
        this.form_data.country_calling_code = payload.countryCallingCode;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.4);
  z-index: 9999;

.message_box{
  background: #ffffff;
  width: 60%;
  border-radius: 10px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
}
</style>
