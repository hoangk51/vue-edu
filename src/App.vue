<template>
  <div>
    <Header />
    <main id="content" class="main-content-wrapper">
      <component
        v-for="(section,i) in sections"
        :sectionIndex="i"
        :key="'A'+ i"
        v-bind:is="section.type"
        :section="section"
      ></component>
    </main>
    <Footer />
    <Tool v-if="isShowTool" />
  </div>
</template>

<script>
//import axios from "axios";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Type1 from "./components/section/Type1.vue";
import Type2 from "./components/section/Type2.vue";
import Type4 from "./components/section/Type4.vue";

import Tool from "./components/Tool.vue";
import store from "./store.js";
//import { mapState } from 'vuex'

export default {
  name: "App",
  props: ["shTool"],
  components: {
    Header,
    Footer,
    Type1,
    Type2,
    Type4,
    Tool
  },
  mounted() {
    this.$store.dispatch("loadData");
  },
  created: function() {
    //  this.loadData();
  },
  data() {
    //console.log(123)
    //  console.log(store.state.tool.sections)
    return {
      // sections: store.state.tool.sections,
    };
  },

  computed: {
    //...mapState(['sections']),
    sections() {
      return store.state.tool.sections;
    },
    isShowTool() {
      return store.state.tool.showTool == true;
    }
  },
  methods: {
    loadData() {
      this.$store.dispatch("loadData");
      // store.commit('loadData')
    }
  }
};
</script>

<style>
</style>
