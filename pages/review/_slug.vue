<template>
  <div>
    <div class="ms__review--part ic-section-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="ms__review--user ms__card">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img
                    data-src="/images/profile-pic.png"
                    class="img-fluid"
                    alt=""
                    v-lazy-load
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <p>
                    This is some content from a media component. You can replace
                    this with any content and adjust it as needed.
                  </p>
                  <form action="#">
                    <div class="rate">
                      <input type="radio" id="star5" name="rate" value="5" />
                      <label for="star5" title="text">5 stars</label>
                      <input type="radio" id="star4" name="rate" value="4" />
                      <label for="star4" title="text">4 stars</label>
                      <input type="radio" id="star3" name="rate" value="3" />
                      <label for="star3" title="text">3 stars</label>
                      <input type="radio" id="star2" name="rate" value="2" />
                      <label for="star2" title="text">2 stars</label>
                      <input type="radio" id="star1" name="rate" value="1" />
                      <label for="star1" title="text">1 star</label>
                    </div>
                    <div class="form-group">
                      <label for="#">Review Details</label>
                      <textarea name="" id="" class="form-control"></textarea>
                    </div>
                    <button class="ic-btn">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="checkout-cart ms__card">
              <div class="ic__shopping--top">
                <ul class="ms__pick">
                  <li>
                    <div class="ms__pickup--point">
                      <h6>Pick-up-point</h6>
                      <p>Mainuddin Sani</p>
                      <p>Address</p>
                      <p>5612132123123132132132</p>
                    </div>
                  </li>
                  <li>
                    <div class="ms__pickup--point">
                      <h6>Billing Address</h6>
                      <p>Mainuddin Sani</p>
                      <p>Address</p>
                      <p>5612132123123132132132</p>
                    </div>
                  </li>
                </ul>

                <!-- total -->
                <div class="ic--subtotal">
                  <p><span>Subtotal</span> <span>$39.05</span></p>
                  <p><span>Shipping</span> <span>$10.22</span></p>
                </div>
                <div class="ic--total">
                  <p><span>Total</span> <span>$59.25</span></p>
                </div>
              </div>
              <div class="ic__shopping--bottom">
                <a href="#" class="ic-btn">Confirmar pedido</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "_slug",
  data: () => ({

  })
}
</script>

<style lang="scss" scoped>
.ms__pick {
  li {
    .ms__pickup--point {
      h6 {
        padding-bottom: 5px;
        font-size: 16px;
      }
    }
    &:not(:last-child) {
      padding-bottom: 15px;
      margin-bottom: 15px;
      border-bottom: 1px solid #ccc;
    }
  }
}

.rate {
  height: 46px;
  display: flex;
  flex-flow: row-reverse;
  justify-content: flex-end;
}
.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}
.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: #ccc;
}
.rate:not(:checked) > label:before {
  content: "★ ";
}
.rate > input:checked ~ label {
  color: #ffc700;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
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
</style>
