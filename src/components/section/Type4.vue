<template>
  <section class="product-showcase mb-half">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-12">
          <div class="section-title left-aligned with-border with-icon">
            <h2>
              <i class="pe-7s-flag"></i>
              {{section.data.title}}
            </h2>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- New Product Start Here 123-->
        <div class="col-lg-4 col-md-6 mb-sm-40">
          <component
            v-bind:is="section.widgets[1].name"
            :testIndex="1"
            :widgetIndex="1"
            :sectionIndex="sectionIndex"
            :widget="section.widgets[1]"
            :css="section.css"
          ></component>
        </div>
        <div class="col-lg-4 col-md-6 mb-sm-40">
          <component
            v-bind:is="section.widgets[2].name"
            :testIndex="2"
            :widgetIndex="2"
            :sectionIndex="sectionIndex"
            :widget="section.widgets[2]"
            :css="section.css"
          ></component>
        </div>
        <div class="col-lg-4 col-md-6 mb-sm-40">
          <component
            v-bind:is="section.widgets[3].name"
            :testIndex="3"
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
  name: "Type4",
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
