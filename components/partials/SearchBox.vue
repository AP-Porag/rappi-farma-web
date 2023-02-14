<template>
<div class="">
  <input type="text" placeholder="búsqueda"
         @focus="show = true"
         @blur="show = false"
         v-model="keywords" />
  <!--            <button>-->
  <!--              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>-->
  <!--            </button>-->
  <div
    class="ms__header--searchBar--dropdwon"
    v-if="keywords.length >= 3"
  >
    <ul v-if="items.length > 0">
      <li v-for="item in items" :key="item.id">
        <NuxtLink to="/producto" @click.native="itemSelected"> {{item.name}}</NuxtLink>
      </li>
    </ul>
    <ul v-else>
      <li>
        <p>no hay productos coincidentes</p>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "SearchBox",
  data(){
    return{
      show:false,
      keywords:'',
      items:[],
    }
  },
  watch:{
    keywords(after, before) {
      if (this.keywords != ''){
        this.items=[];
        this.getSearchedItem();
        this.setKeywordToLocalStorage();
      }else {
        window.localStorage.removeItem('rappiKywords');
      }
    }
  },
  methods:{
    itemSelected(){
      window.location.reload()
    },
    async getSearchedItem() {
      if (this.keywords !='' && this.keywords.length >= 3){
        await this.$axios.get('/product/get/search-products', { params: { keywords: this.keywords } })
          .then(response => {
            this.items = response.data.data.items

          })
          .catch(error => {
            console.log(error)
          });
      }

    },
    setKeywordToLocalStorage(){
      window.localStorage.removeItem('rappiKywords');
      window.localStorage.setItem('rappiKywords', this.keywords);
    },
  }
}
</script>

<style lang="scss" scoped>
.avatar_box{
  height: 30px;
  width: 30px;
  margin-right: 15px;
  border-radius: 50px;
}
.avatar_img{
  height: 30px;
  width: 30px;
  border-radius: 50px;
}
.ms__recent-product {
  overflow-x: auto;
  ul {
    display: flex;
    gap: 10px;
    li {
      flex: 0 0 100px;
      border: 1px solid #f9f9f9;
      border-radius: 4px;
      p {
        font-size: 10px;
        padding: 8px;
        color: #000;
      }
    }
  }
}
.ms__header--part {
  // padding-top: 10px;
  background-color: #fff;
  &.onScroll {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    width: 100%;
    transition: 0.5s;
    -webkit-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
    animation: spin .6s alternate;
  }
}
@keyframes spin {
  from {
    top: -50px;
  }to {
     top: 0;
   }
}
.ms__header--container {
  @include d-flex();
  @include align-items(center);
  @include justify-content(space-between);
  padding: 10px 0;
  gap: 211px;
  @media #{$max1399} {
    gap: 80px;
  }
  @media #{$max767} {
    gap: 20px;
  }
  .ms__header--logo {
    img {
      max-width: 70px;
    }
  }
  // search
  .ms__header--searchBar {
    flex: 1;
    @media #{$max575}{
      position: static!important;
    }
    input {
      width: 100%;
      height: 3rem;
      position: relative;
      background: #f9f9f9;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      border: 1px solid $primary !important;
      border-radius: 4rem 4rem 4rem 4rem !important;
      padding: 0 30px 0 30px;
      font-size: 14px;
      @media #{$max575} {
        padding: 0 10px 0 10px;
      }
      &:focus-visible {
        outline: 0;
      }
      &::placeholder {
        font-size: 14px;
      }
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      padding: 0 20px;
      background-color: $primary;
      border: none;
      border-radius: 0 2rem 2rem 0;
      svg {
        width: 20px;
        path {
          fill: white;
        }
      }
    }
  }
  // cart
  .ms__header--loginWith--cart {
    @include d-flex();
    gap: 10px;
    a {
      font-size: 14px;
      @media #{$max991} {
        span{
          display: none;
        }
        svg {
          margin-right: 0;
        }
      }
    }
    button {
      @media #{$max991} {
        span{
          display: none;
        }
        svg {
          margin-right: 0;
        }
      }
    }
  }
}
.ms__navbar--part {
  background-color: $primary;
  box-shadow: $box-shadow;

  .ms__navbar--container {
    position: relative;
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 15px;
    display: flex;
    align-items: center;
    .ms__navbar--nav {
      @include d-flex();
      @include align-items(center);
      flex-wrap: nowrap;
      gap: 30px;
      @media #{$max991}{
        display: none;
      }
      .ms__navbar--items {
        .ms__navbar--links {
          color: $white;
          font-size: 15px;
          padding: 20px 0;
          display: inline-block;
          white-space: nowrap;
        }
        .ms__navbar--MegadropDwon {
          position: absolute;
          top: 63px;
          left: 0;
          width: 100%;
          max-height: 300px;
          background-color: $white;
          @include transition(0.3s);
          transform: translateY(10px);
          box-shadow: $box-shadow;
          padding: 10px;
          @include bd-radius(6px);
          visibility: hidden;
          opacity: 0;
          z-index: -1;
          @include d-flex();
          gap: 10px;
          @media #{$max991} {
            display: none;
          }
          .ms__dropDwon--items {
            flex: 0 0 calc(25% - 10px);
            width: calc(25% - 10px);
            h6 {
              font-size: 16px;
              font-weight: 700;
              color: rgba($color: $secondary, $alpha: 0.6);
            }
            ul {
              li {
                a {
                  color: $white;
                  font-size: 13px;
                  color: $gray-deep;
                  @include transition(0.3s);
                  &:hover {
                    color: $primary;
                  }
                }
              }
            }
          }
        }
        &:hover {
          .ms__navbar--MegadropDwon {
            visibility: visible;
            opacity: 1;
            z-index: 2;
            transform: translateY(0);
          }
        }
      }
    }
    .ic__login--signUp {
      display: flex;
      gap: 10px;
    }
  }
}
.ic__shopping--overlay {
  &.active {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.4);
    z-index: 9999;
  }
}
.ic__shopping--cart {
  @include d-flex();
  flex-wrap: nowrap;
  flex-direction: column;
  @include justify-content(space-between);
  padding: 40px;
  width: 480px;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0px 14px 40px rgba(115, 115, 115, 0.15);
  z-index: 9999;
  transform: translateX(150%);
  @include transition-linear(0.6s);

  @media #{$max480} {
    width: 338px;
    padding: 20px;
  }
  @media #{$max374} {
    width: 100%;
    padding: 20px;
  }

  @media #{$max1440} {
    gap: 104px;
    overflow-y: auto;
  }

  &.active {
    transform: translateX(0);
  }

  .ic__shopping--top {
    position: relative;

    .ic__cart--closed {
      position: absolute;
      top: 0;
      right: 20px;
      svg {
        width: 18px;
        fill: $secondary;
      }
      i {
        font-size: 20px;
        color: $error-500;
      }
    }

    h5 {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      color: $ebony-clay;
      padding-bottom: 20px;
    }
  }
}
.ic__shopping--cart--head {
  background-color: $gray-100;
  @include d-flex();
  @include justify-content(space-between);
  @include bd-radius(8px);

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: $ebony-clay;
    padding: 10px;
  }
}

.ic__shopping-scrollbar {
  max-height: 400px;
  overflow-y: auto;
}

.ic__shopping--img {
  padding-top: 15px;
  @include d-flex();

  @media #{$max374} {
    flex-direction: column;
    gap: 20px;
    padding: 15px;
    border-bottom: 1px solid $gray-100;
  }

  img {
    width: 70px;
    height: 70px;
    @include bd-radius(10px);
    margin-right: 14px;
    border: 1px solid #ddd;

    @media #{$max374} {
      margin: 0 auto;
    }
  }

  .ic__shopping-info {
    width: 180px;

    @media #{$max480} {
      width: 154px;
    }

    @media #{$max374} {
      width: 100%;
      text-align: center;
    }

    .ic__cart--name {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: $ebony-clay;
      padding-bottom: 6px;
    }

    .ic-cart-quantity {
      @media #{$max374} {
        @include justify-content(center);
      }

      .ic-quantity {
        height: 28px;
        display: flex;
        align-items: center;
        button {
          background-color: transparent;
          border: 0;
          svg {
            width: 15px;
            height: 15px;
          }
          i {
            font-size: 14px;
          }
        }
      }

      .ic-quantity input {
        height: 28px;
        margin-left: 2px;
        box-shadow: none;
        width: 70px;
        @media #{$max1800} {
          margin-right: 0px;
        }
      }
    }
  }
}

.ic__shopping--price {
  flex: 1;
  text-align: right;
  @include d-flex();
  flex-direction: column;
  @include justify-content(space-between);

  @media #{$max374} {
    text-align: center;
  }

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }

  a {
    @include d-flex();
    gap: 4px;
    @include justify-content(flex-end);
    color: $gray-500;

    @media #{$max374} {
      @include justify-content(center);
    }
  }
}

.ic--subtotal {
  padding: 15px 0 15px 0;
  border-top: 1px solid $gray-300;
  border-bottom: 1px solid $gray-300;
  margin-top: 15px;

  p {
    @include d-flex();
    @include align-items();
    @include justify-content(space-between);

    &:not(:last-child) {
      padding-bottom: 8px;
    }

    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: $shuttle-gray;
    }
  }
}

.ic--total {
  padding-top: 15px;

  p {
    @include d-flex();
    @include align-items();
    @include justify-content(space-between);

    span {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: $ebony-clay;
    }
  }
}
.ic__shopping--bottom {
  margin-top: auto;
  @include d-flex();
  gap: 20px;

  @media #{$max374} {
    flex-direction: column;
  }

  a {
    flex: 1;
    height: 44px;
    font-weight: 500;
    padding: 0 17px;
    @include bd-radius(8px);

    @media #{$max374} {
      flex: 0 0 auto;
    }

    @media #{$max1440} {
      font-size: 14px;
    }

    &.ic-btn-outline {
      border: 1px solid $primary;
    }
  }
}
.ms__header--searchBar--dropdwon {
  position: absolute;
  left: 0;
  width: 100%;
  height: 300px;
  overflow-y: auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 0.7rem 0 rgba(0, 0, 0, 0.199);
  border-radius: 8px;
  z-index: 99;
  @media #{$max575} {
    padding: 10px;
  }
  ul {
    li {
      padding: 5px 15px;
      &:hover{
        color: #3a7842;
        background-color: rgba(58, 120, 66, 0.1);
        border-radius: 4px;
      }
      a,p {
        font-size: 14px;
        color: #5c6268;
      }
    }
  }
}
</style>
