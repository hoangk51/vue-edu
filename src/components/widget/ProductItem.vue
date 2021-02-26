<template>
  <div class="product-list-single">
    <div class="product-thumb">
      <div class="product-inner media align-items-center">
        <div class="product-image mr-3 mr-sm-3 mr-md-5 mr-lg-3 mr-xl-3">
          <a href="single-product.html">
            <img :src="product.image" alt="Proin Lectus Ipsum" class="hover-image" />
            <img :src="product.image" alt="Proin Lectus Ipsum" title="Proin Lectus Ipsum">
          </a>
        </div>
        <!-- end of product-image -->

        <div class="product-caption media-body">
          <div class="product-ratings">
            <div class="rating-box">
              <ul class="rating d-flex justify-content-start">
                <li>
                  <i class="fa fa-star"></i>
                </li>
                <li>
                  <i class="fa fa-star"></i>
                </li>
                <li>
                  <i class="fa fa-star"></i>
                </li>
                <li>
                  <i class="fa fa-star"></i>
                </li>
                <li>
                  <i class="fa fa-star"></i>
                </li>
              </ul>
            </div>
          </div>
          <h4 class="product-name">
            <a href="single-product.html">{{product.title}}</a>
          </h4>
          <p class="product-price">
            <span class="price-old">{{product.price}}</span>
            <span class="price-new">$120.00</span>
          </p>
          <div class="action-links">
            <BtnAddCart />

            <a class="action-btn btn-wishlist" href="#" title="Add to Wishlist">
              <i class="pe-7s-like"></i>
            </a>
            <a class="action-btn btn-compare" href="#" title="Add to Compare">
              <i class="pe-7s-refresh-2"></i>
            </a>
          </div>
        </div>
        <!-- end of product-caption -->
      </div>
      <!-- end of product-inner -->
    </div>
    <!-- end of product-thumb -->
  </div>
  <!-- end of product-list-single -->
</template>

<script>

import BtnAddCart from "@/components/base/BtnAddCart.vue";


export default {
  name: "ProductItem",
  components: {
    BtnAddCart //carousel
  },
  props: ["product"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
