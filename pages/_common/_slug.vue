<template>
  <div>
      <section class="ms__subCatagories--part">
        <div class="container slick-slider-relative">
          <VueSlickCarousel :arrows="true" :dots="false" setting="subCatagoriesSlider">
            <div>
              <NuxtLink to="#">
                <img data-src="https://lh3.googleusercontent.com/Q2MjL643kWHqHISyvOUdYmgG84o0Y6ajsrpzai3kpO2ka14NpNLtAiUBTxboO0EXNeZBdIVVeUUyRfppTz1SYeI2k_fyYmJ_XWhaoeXJJ_TIy51-=s1366-rw"  class="img-fluid" alt="" v-lazy-load>
              </NuxtLink>
            </div>
            <div>
                <NuxtLink to="#">
                  <img data-src="https://lh3.googleusercontent.com/Q2MjL643kWHqHISyvOUdYmgG84o0Y6ajsrpzai3kpO2ka14NpNLtAiUBTxboO0EXNeZBdIVVeUUyRfppTz1SYeI2k_fyYmJ_XWhaoeXJJ_TIy51-=s1366-rw"  class="img-fluid" alt="" v-lazy-load>
                </NuxtLink>
            </div>
            </VueSlickCarousel>
        </div>
      </section>
      <!-- sub catagoris -->
      <section class="ms__catagoriesFilter--part ic-section-space">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="ms__catagoriesFilter--left">
                <h5>Catagories Name</h5>
                <ul class="ms__catagoriesnav">
                  <li class="ms__catagorisItems">
                      <NuxtLink to="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                         health and medicine</NuxtLink>
                      <ul class="ms__catagoriesSub-nav">
                        <li>
                          <nuxtLink to="#">
                            Drugstore
                          </nuxtLink>
                        </li>
                        <li>
                          <nuxtLink to="#">
                            Drugstore
                          </nuxtLink>
                        </li>
                      </ul>
                  </li>
                  <li class="ms__catagorisItems">
                      <NuxtLink to="#"> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                         flu treatment</NuxtLink>
                      <ul class="ms__catagoriesSub-nav">
                        <li>
                          <nuxtLink to="#">
                            cold and flu
                          </nuxtLink>
                        </li>
                        <li>
                          <nuxtLink to="#">
                            Throat pain
                          </nuxtLink>
                        </li>
                        <li>
                          <nuxtLink to="#">
                            cough treatment
                          </nuxtLink>
                        </li>
                        <li>
                          <nuxtLink to="#">
                            decongestant
                          </nuxtLink>
                        </li>
                      </ul>
                  </li>
                  <li class="ms__catagorisItems">
                      <NuxtLink to="#"> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                         Pain relief</NuxtLink>
                      <ul class="ms__catagoriesSub-nav">
                        <li>
                          <nuxtLink to="#">
                            overall pain
                          </nuxtLink>
                        </li>
                        <li>
                          <nuxtLink to="#">
                            Strong pain
                          </nuxtLink>
                        </li>
                        <li>
                          <nuxtLink to="#">
                            Abdominal pain and colic
                          </nuxtLink>
                        </li>
                        <li>
                          <nuxtLink to="#">
                            muscle and joint
                          </nuxtLink>
                        </li>
                        <li>
                          <nuxtLink to="#">
                            Kids
                          </nuxtLink>
                        </li>
                      </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="ms__catagoriesFilter--right">
                <h5 class="subCatagories__title">Drugstore</h5>
                <ul class="page--navigation">
                  <li>
                    <a href="#">Health and medicines / </a>
                  </li>
                  <li>
                    <a href="#">Health and medicines / </a>
                  </li>
                  <li>
                    <a href="#">Drugstore</a>
                  </li>
                </ul>

                <div class="row g-4">
                  <ProductoProduct class="col-lg-4" v-for="beauty in beauties" :key="beauty.id" :product="beauty" />
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
      <!-- sub catagoris -->
  </div>
</template>

<script>

export default {
  name: "_slug",
  data: ()=>({
    subCatagoriesSlider: {
      arrows: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    },
    beauties:[
      {id:'6.1',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-1.png'},
      {id:'6.2',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-2.jpg'},
      {id:'6.3',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-3.jpg'},
      {id:'6.4',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-4.jpg'},
      {id:'6.5',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-1.png'},
      {id:'6.6',title:'Sunface Sunscreen',subtitle:'Micellar Bioderma Sensibio H2o X 125 Ml + Portapomys',price:'68,800',quantity:'550.40',review:'30',stars:'4.8',path:'/',image:'/images/beauty-2.jpg'},
    ],
  })
}
</script>

<style lang="scss">
  .ms__subCatagories--part {
    .slick-slider {
      
      .slick-slide {
        padding: 0;
      }
    }
  }
  .ms__catagoriesFilter--left {
    padding: 20px;
    box-shadow: $box-shadow;
    @include bd-radius(6px);
    h5 {
      padding-bottom: 20px;
    }
    .ms__catagoriesnav {
      .ms__catagorisItems {
       > a {
          color: $black;
          font-size: 16px;
          font-weight: 500;
        }
        .ms__catagoriesSub-nav {
          padding: 10px 20px 10px 35px;
          li {
              a {
                position: relative;
                font-size: 14px;
                color: $gray-deep;
                @include transition(0.3s);
                &::before {
                  content: "";
                  display: inline-block;
                  vertical-align: middle;
                  width: 12px;
                  height: 2px;
                  margin: 0 3px 2px 1px;
                  background-color: $gray-deep;
                  @include transition(0.3s);
                }
                &:hover {
                  color: $primary;
                  &::before {
                    width: 14px;
                  }
                }
              }
            }
            &:not(:last-child){
              padding-bottom: 8px;
            }
        }
      }
    }
  }
  .ms__catagoriesFilter--right {
    .subCatagories__title {
      padding-bottom: 15px;
    }
    .page--navigation {
      @include d-flex();
      gap: 4px;
      padding-bottom: 20px;
      li {
        a {
          font-size: 14px;
          color: $black; 
        }
      }
    }
  }
</style>
