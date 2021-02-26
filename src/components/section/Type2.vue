<template>
  <!-- Latest Blog Start Here -->
        <div class="latest-blog mb-45">
            <div class="container">
                 <component
                v-bind:is="section.widgets[1].name"  :setting=section.widgets[1].setting >
                </component>

               <!-- Latest Blog Active End Here -->
            </div>
            <!-- Container End -->
        </div>
        <!-- Latest Blog End Here -->
</template>
<script>

import Blog from "@/components/widget/Blog.vue";

export default {
  name: 'Type1',
   components: {
    Blog
  },
  props:['section'],
  computed: {
    cssVars() {
        //console.log(this.$props.section);
      return {
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
