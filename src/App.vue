<template>
  <div>
      <component
        v-for="(section,i) in sections"
        :sectionIndex="i"
        :key="'A'+ i"
        v-bind:is="section.type"
        :css="section.css"
      ></component>
      <Footer />
     <!--  <TextTool  v-if="isShowTool" /> -->
     <component  v-bind:is="tool"  v-if="isShowTool"></component> 
      <Sectiontool v-if="isShowSectiontool" />
  </div>
</template>

<script>
//import axios from "axios";
//import Header from "./components/Header.vue";
//import Footer from "./components/Footer.vue";
/*import Type1 from "./components/section/Type1.vue";
import Type2 from "./components/section/Type2.vue";
import Type4 from "./components/section/Type4.vue";
import Type5 from "./components/section/Type5.vue";*/

//import Tool from "./components/Tool.vue";
//import Sectiontool from "./components/Sectiontool.vue";


import store from "./store.js";
//import { mapState } from 'vuex'
 let components = {}
 const requireContext = require.context('./components/section/', true, /[A-Z]\w+\.vue$/)

 components = requireContext.keys()
    .map(file =>
        [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
    )
    .reduce((components, [name, component]) => {
        components[name] = component.default || component
        return components
    }, {}) 

/* const requireContext1 = require.context('./components/tool/', true, /[A-Z]\w+\.vue$/)

 components = requireContext1.keys()
    .map(file =>
        [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
    )
    .reduce((components, [name, component]) => {
        components[name] = component.default || component
        return components
    }, {}) 
*/

/*req.keys().forEach(filePath => {
  const component = components(filePath);
    const componentName = path.basename(filePath, '.vue');

    Vue.component(componentName, component);

})*/

 //const path = require('components/section/')
 //console(path)
 /* const fs = require('fs')
  fs.readdir(path, (err, items) => {
    if (err) { console.log(err) }
    console.log(items)
  })*/
   // console.log(store.state.tool);
  //  console.log(store.state.tool.selectBox);
  /*store.state.tool.sections.forEach(section => {
     components[section.type] = () => import('./components/section/'+section.type+'.vue')
  })*/


    components['Header'] = () => import(`./components/Header.vue`)
    components['Footer'] = () => import(`./components/Footer.vue`)
    components['Tool'] = () => import(`./components/Tool.vue`)
    components['Sectiontool'] = () => import(`./components/Sectiontool.vue`)
   components['Type5'] = () =>   import('./components/section/Type5.vue')
   components['TextTool'] = () => import(`./components/tool/TextTool.vue`)
     components['ButtonTool'] = () => import(`./components/tool/ButtonTool.vue`)
     components['ATool'] = () => import(`./components/tool/ATool.vue`)


 //components['Type3'] = () => import(`./components/section/Type3.vue`)
 //components['Type4'] = () => import(`./components/section/Type4.vue`)
  /*function loadComponent(componentType){
    return import(`./components/section/${componentType}.vue`) 
  }*/

 /*{
    Header,
    Footer,
   
    Tool,
    Sectiontool
  }*/
export default {
  name: "App",
  props: ["shTool"],
  components: components,
  mounted() {
    this.$store.dispatch("loadData");
    console.log('mounted');
    /* store.state.tool.sections.forEach(section => {
     // import('./components/section/'+section.type+'.vue')
         this.component(
          section.type,
          () =>import('./components/section/'+section.type+'.vue')
        );
      })*/
  },
  created: function() {
    //  this.loadData();
  },
  data() {
    console.log(123)
    //  console.log(store.state.tool.sections)
    return {
      // sections: store.state.tool.sections,
    };
  },

  computed: {
    tool(){
      console.log(store.state.tool.currentTool)
      return store.state.tool.currentTool+'Tool'
    },
    import (componentType) {console.log(componentType);
      return 0
       // return import(`./components/section/${componentType}.vue`) 
   },
    //...mapState(['sections']),
    sections() {

      let sections  = store.state.tool.sections
      console.log(sections);
    /*store.state.tool.sections.forEach(section => {
      //import('./components/section/'+section.type+'.vue')
         this.component(
          section.type,
          () =>import('./components/section/'+section.type+'.vue')
        );
      })*/
      return sections;
    },
    isShowTool() {
      return store.state.tool.showTool == true;
    },
    isShowSectiontool() {
      return store.state.tool.showSectiontool == true;
    },
  },
  methods: {
   /* loadData() {
      console.log(33333);
      this.$store.dispatch("loadData");
      
    }*/
  }
};
</script>

<style>
</style>
