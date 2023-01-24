<template>
    <footer class="ms__footer--part">
        <div class='layout'>
          <SocialChat
            icon
            :attendants="attendants"
          >
            <p slot="header">Haga clic en uno de nuestros asistentes a continuación para chatear en WhatsApp</p>
            <template>
              <img
                src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
                alt="icon whatsapp"
                aria-hidden="true"
              >
            </template>
            <small slot="footer">Horario: 8am a 6pm</small>
          </SocialChat>
        </div>
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-3">
                    <div class="ms__footer--img">
                        <img :data-src="this.$store.state.settings.site_logo" class="img-fluid w-100" alt="" v-lazy-load>
                    </div>
                </div>
                <div class="col-lg-3 d-none d-lg-block">
<!--                    <div class="ms__footer&#45;&#45;links">-->
<!--                        <h6>OUR SHOPS</h6>-->
<!--                        <ul>-->
<!--                            <li>-->
<!--                                <NuxtLink to="/">-->
<!--                                    Locate Store-->
<!--                                </NuxtLink>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                    </div>-->
                    <div class="ms__footer--links">
                        <h6>Contact US</h6>
                        <ul>
                            <li class="text-white">
                              Address : {{this.$store.state.settings.site_address}}
                            </li>
                          <li class="text-white">
                            Email : <a :href="`email:${this.$store.state.settings.site_email}` ">{{this.$store.state.settings.site_email}}</a>
                          </li>
                          <li class="text-white">
                            Phone : <a :href="`tel:${this.$store.state.settings.site_contact}` ">{{this.$store.state.settings.site_contact}}</a>
                          </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 d-none d-lg-block">
                    <div class="ms__footer--links">
                        <h6>CATEGORIES</h6>
                      <ul>
                        <li v-if="categories.length"
                            v-for="(category,index) in categories"
                            :key="category.id">
                          <NuxtLink :to="`/producto?category=`+category.slug" class="text-capitalize">
                            {{category.name}}
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                </div>
                <div class="col-lg-3 d-none d-lg-block">
                    <div class="ms__footer--links">
                        <h6 class="text-capitalize">Brands</h6>
                        <ul>
                            <li v-if="brands.length"
                                v-for="(brand,index) in brands.slice(0, 5)"
                                :key="brand.id">
                                <NuxtLink :to="`/producto?brand=`+brand.slug" class="text-capitalize">
                                    {{brand.name}}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="ms__bottom-footer">
<!--                <div class="row">-->
<!--                    <div class="col-lg-9 m-auto d-none d-lg-block">-->
<!--                        <div class="row g-4">-->
<!--                            <div class="col-lg-2">-->
<!--                                <div class="ms__banking&#45;&#45;img">-->
<!--                                    <img src="/images/banking/visa-footer.svg" alt="" v-lazy-load>-->
<!--                                    <p>Visa</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="col-lg-2">-->
<!--                                <div class="ms__banking&#45;&#45;img">-->
<!--                                    <img src="/images/banking/mc-footer.svg" alt="" v-lazy-load>-->
<!--                                    <p>master card</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="col-lg-2">-->
<!--                                <div class="ms__banking&#45;&#45;img">-->
<!--                                    <img src="/images/banking/american-express-footer.svg" alt="" v-lazy-load>-->
<!--                                    <p>american express</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="col-lg-2">-->
<!--                                <div class="ms__banking&#45;&#45;img">-->
<!--                                    <img src="/images/banking/diners-club-footer.svg" alt="" v-lazy-load>-->
<!--                                    <p>Diners Club</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="col-lg-2">-->
<!--                                <div class="ms__banking&#45;&#45;img">-->
<!--                                    <img src="/images/banking/datafono-footer.svg" alt="" v-lazy-load>-->
<!--                                    <p>Dataphone</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="col-lg-2">-->
<!--                                <div class="ms__banking&#45;&#45;img">-->
<!--                                    <img src="/images/banking/contra-entrega-footer.svg" alt="" v-lazy-load>-->
<!--                                    <p>Upon delivery</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
                <ul class="ms__social">
                    <li>
                        <NuxtLink :to="this.$store.state.settings.site_facebook_link">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink :to="this.$store.state.settings.site_twitter_link">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="this.$store.state.settings.site_instagram_link">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="ms_copyRight">
                <p>© {{new Date().getFullYear()}} {{this.$store.state.settings.site_title}} ,{{this.$store.state.settings.site_address}} </p>
                <span>Designed and Developed by <a href="https://asrafporag.me/" target="_blank">Asraf Porag</a></span>
            </div>
        </div>
    </footer>
  </template>

  <script>
  export default {
    name: "Footer",
    data(){
      return{
        attendants: [
          {
            app: 'whatsapp',
            label: 'Technical support',
            name: 'Alan Ktquez',
            number: this.$store.state.settings.site_contact,
            avatar: {
              src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
              alt: 'Alan Ktquez avatar'
            }
          },
          // ...
        ],
        selected: 1,
        options: [
            { id: 1, icon: 'fa-solid fa-house', title: 'Home' },
            { id: 2, icon: 'fa-solid fa-magnifying-glass', title: 'Search' },
            { id: 3, icon: 'fa-solid fa-plus', title: 'Setting' },
            { id: 4, icon: 'fas fa-bell', title: 'Notification' },
            { id: 5, icon: 'fa-solid fa-gear', title: 'Setting' }
        ],
        categories:[],
        brands:[],
      }
    },
    created() {
      this.loadCategoryDataWithBrand();
      this.loadAllBrand();
    },
    methods:{
      async loadCategoryDataWithBrand(){
        try {
          const response = await this.$axios.get('/category/front/category-brand');
          this.categories = response.data.data.items
        }catch (e) {
          console.log(e.message)
        }
      },
      async loadAllBrand(){
        try {
          const response = await this.$axios.get(`/brand`);
          this.brands = response.data.data.items
        }catch (e) {
          console.log(e.message)
        }
      },
    }
  }
  </script>

  <style lang="scss" scoped>
  .ms__footer--part {
    background-color: #192E5A;
    padding-top: 30px;
    .ms__footer--img {
        @media #{$max991} {
               text-align: center;
            }
        img {
            max-width: 200px;
            @media #{$max1399} {
                max-width: 100px;
            }
        }
    }
    .ms__footer--links {
        @media #{$max991} {
               text-align: center;
               display: none;
            }
        h6 {
            color: $white;
            font-size: 16px;
            font-weight: 600;
            padding-bottom: 10px;
        }
        ul {
            li {
                a {
                    font-size: 13px;
                    color: #b3b3b3;
                    &:hover {
                        color: $white;
                    }
                }
                &:not(:last-child){
                    padding-bottom: 5px;
                }
            }
        }
    }
  }

  .ms__bottom-footer{
    padding-top: 30px;
    .ms__banking--img {
        text-align: center;
        p {
            color: #fff;
            font-size: 12px;
        }
    }
  }
  .ms__social {
    padding-top: 30px;
        @include d-flex();
        @include align-items(center);
        @include justify-content(center);
        gap: 20px;
        li {
            a {
                svg {
                    fill: #8791A7;
                    width: 24px;
                }
            }
            &:first-child {
                a {
                svg {
                    width: 18px;
                }
            }
            }
        }
    }
    .ms_copyRight {
        padding: 20px;
        margin-top: 30px;
        border-top: 1px solid rgba(135, 145, 167, 0.514);
        text-align: center;
        p {
            font-size: 14px;
            color: #b3b3b3;
            padding-bottom: 8px;
        }
        span {
            font-size: 12px;
            color: #b3b3b3;
        }
    }

  </style>
