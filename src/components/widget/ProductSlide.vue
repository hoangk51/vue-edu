<template>
  <div class="parent">
     <div class="b">
    <div class="section-title left-aligned with-border"  :style="cssH2"
        data-subwidget="h2"
        v-bind:data-editAble="true"
       >
      <h2  :style="cssH2Text" data-subwidget="h2Text"
        v-bind:data-editAble="true"


      >{{widget.title}} </h2>
    </div>
    <div class="product-carousel-wrapper pos-r mb-half">
      <div
        class="product-carousel with-border with-narrow-margin"
        data-visible-slide="2"
        data-visible-lg-slide="2"
        data-visible-md-slide="1"
        data-visible-sm-slide="1"
        data-loop="true"
        data-speed="1000"
        data-space-between="20"
      >
        <!-- Slides -->
        <div class="swiper-wrapper">
          <div class="swiper-slide product-layout product-list">
            <ProductItem v-for="(item,i) in widget.data.items" :key="'A'+ i" :product="item" />
          </div>
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
    <!-- end of product-carousel-wrapper -->
     </div>
  </div>
</template>

<script>
import ProductItem from "@/components/widget/ProductItem.vue";
//import carousel from 'vue-owl-carousel'

export default {
  name: "ProductSlide",
  props: ["widget", "widgetIndex", "sectionIndex","css"],
  data() {
    return {};
  },
  components: {
    ProductItem //carousel
  },
   watch: {
    'css': {
      handler: function(change) {
        console.log('Change detected'+change);
      },
      deep:true
    }
  },
   beforeUpdate() {
   // console.log('beforeUpdate') // Logs the counter value every second, before the DOM updates.
  },

  created() {
//    console.log(666)
  },

  computed: {
      cssH2() {
      let css = this.$props.css.h2;
       //console.log('computed');
      // console.log(css);
      let newCss={}
      let list = ['backgroundColor','color','fontSize','fontWeight','marginTop','marginBottom','marginRight','marginLeft']
       list.forEach(function (property) {
        //  newCss[property] = css[property]
         if(css[property]){
           newCss[property] = css[property]
         }else{
         //  newCss[property]=""
         }

       })
      //console.log(newCss);
      return newCss;
    },

    cssH2Text(){
      let css = this.$props.css.h2Text;
       //console.log('computed');
       //console.log(css);
      let newCss={}
      let list = ['color','fontWeight','fontSize']
       list.forEach(function (property) {
        //  newCss[property] = css[property]
         if(css[property]){
           newCss[property] = css[property]
         }else{
         //  newCss[property]=""
         }

       })
      //console.log(newCss);
      return newCss;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.owl-carousel {
  display: block;
}

.h2 {
  font-size:  var(fontSize);
}
</style>
