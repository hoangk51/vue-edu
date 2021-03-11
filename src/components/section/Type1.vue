<template>
  <section class="product-showcase mb-half section"  v-bind:data-section="section.sectionId">
    <div class="container">
      <div class="row">
        <!-- New Product Start Here -->
        <div class="col-lg-4 col-md-6 mb-sm-40">
          <component
            v-bind:is="section.widgets[1].name"
            :data-section="sectionIndex"
            :widgetIndex="1"
            :sectionIndex="sectionIndex"
            :widget="section.widgets[1]"
            :css="section.css"

          ></component>
        </div>
        <div class="col-lg-4 col-md-6 mb-sm-40">
          <component
            v-bind:is="section.widgets[2].name"
            :data-section="sectionIndex"
            :widgetIndex="2"
            :sectionIndex="sectionIndex"
            :widget="section.widgets[2]"
             :css="section.css"
          ></component>
        </div>
        <div class="col-lg-4 col-md-6 mb-sm-40">
          <component
            v-bind:is="section.widgets[3].name"
            :data-section="sectionIndex"
            :widgetIndex="3"
            :sectionIndex="sectionIndex"
            :widget="section.widgets[3]"
            :css="section.css"
          ></component>
        </div>
      </div>
      <!-- Row End -->
    </div>
  </section>
</template>
<script>
import Support from "@/components/widget/Support.vue";
import ProductSlide from "@/components/widget/ProductSlide.vue";
import BlogItem from "@/components/widget/BlogItem.vue";

export default {
  name: "Type1",
  components: {
    Support,
    ProductSlide,
    BlogItem
  },
  props: ["section", "sectionIndex"],
  computed: {
    cssVars() {
      console.log(this.$props.section.widgets);
      return {};
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
