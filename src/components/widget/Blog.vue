<template>
  <div>
    <div class="col-12 col-sm-12 col-md-12">
      <div class="section-title left-aligned with-border with-icon">
        <h2>
          <i class="pe-7s-compass"></i>Tin tuc
        </h2>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-12">
      <div class="daily-deals-products pos-r">
        <div
          class="product-carousel"
          data-visible-slide="4"
          data-visible-lg-slide="3"
          data-space-between="10"
          data-loop="false"
          data-speed="1000"
        >
          <!-- Slides -->
          <div class="swiper-wrapper">
            <BlogItem v-for="(item,i) in setting.items" :key="'A'+ i" :blog="item" />
            <!-- end of product-layout -->
          </div>
          <!-- end of swiper-wrapper -->

          <!-- Navigation -->
          <div class="swiper-arrow top-nav next">
            <i class="fa fa-angle-right"></i>
          </div>
          <div class="swiper-arrow top-nav prev">
            <i class="fa fa-angle-left"></i>
          </div>
        </div>
        <!-- end of product-carousel -->
      </div>
      <!-- end of daily-deals-products -->
    </div>
  </div>
</template>

<script>
import BlogItem from "@/components/widget/BlogItem.vue";
//import $ from 'jquery'
//import carousel from "vue-owl-carousel";

export default {
  name: "Blog",
  components: {
    BlogItem,
  //  carousel
  },
  props: ["setting"],
  mounted: function() {},
  computed: {
    cssVars() {
      console.log(this.$props.setting.items);
      return {};
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.owl-carousel {
  display: block;
}
</style>
