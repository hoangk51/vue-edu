import axios from "axios";
import Vue from 'vue'

const state = {
   sections:[],
    currentNode:{},
    showTool:false,
    showSectiontool:false,
    isSection:false,
    selectBox:{
      display:'none',
      top:160,
      left:2,
      width:2,
      height:2,
    },
    sectionBox:{
      display:'none',
      top:160,
      left:2,
      width:2,
      height:2,
    }
 };
 const getters = {
      top: state => state.top,
      left: state => state.left,
      width: state => state.width,
      height: state => state.height,
      cssVars(state) {
        return {top:state.top,
                left:state.left,
                bottom:state.bottom,
                right:state.right,
                color:state.color,
        }
      },
 };
 const mutations = {
    CLICKS   (state,data ) {
      let e = data.e;
      //let x=data.data;
       // console.log(data);
       // console.log(state.showTool)
        state.isSection = data.isSection ;

        state.showSectiontool = true;
        var search = "[data-section='"+data.data.sectionId+"']";
         console.log(search);
      let parent =  document.querySelector(search);
      console.log(parent);
       let parentRect =  parent.getBoundingClientRect();
       state.sectionBox.top = parentRect.top;
        state.sectionBox.left = parentRect.left;
        state.sectionBox.width = parentRect.width;
        state.sectionBox.height = parentRect.height;
         state.sectionBox.display= 'block';

       console.log('----');
       console.log(parentRect.width);
       console.log(parentRect.top);
        console.log('----');
        if(data.isSection == 1){
          let rect = e.getBoundingClientRect();
          console.log(rect)
        }else{
          state.showTool = true,
          state.selectBox.display= 'block';
          let rect = e.target.getBoundingClientRect();
         // console.log(rect)
          state.selectBox.top = rect.top;
          state.selectBox.left = rect.left;
          state.selectBox.width = rect.width;
          state.selectBox.height = rect.height;
        }
      // console.log(state.selectBox)
        state.currentNode = e

         },
    changeValue (state , data){
      console.log(data)
     // var widgetId = e.target.getAttribute('widget-id')

     var parent = state.currentNode.target.closest(".parent");
    console.log(parent)
     var  sectionId=parent.getAttribute('data-section')
      console.log(sectionId)

    // var sectionId = state.currentNode.target.getAttribute('data-section-index')
   // var widgetId = state.currentNode.target.getAttribute('data-widget-index')
    var subWidget = state.currentNode.target.getAttribute('data-subwidget')
  //  console.log(state.sections[sectionId].widgets[widgetId])
     // let setting = state.sections[sectionId].widgets[widgetId].setting;
   //  state.sections[sectionId].css[subWidget];
      let css = state.sections[sectionId].css[subWidget]
      console.log(css)
     // css.splice({abc :12})
     //const Vue = window.vue;
      Vue.set(css, data.name, data.value)
    // css[data.name] =data.value
      console.log(css)

     // console.log(state.sections[sectionId].css)
   //let   widgets = state.sections[sectionId].widgets
  // console.log(widgets)
  //   console.log(widgetId)
  //   console.log(widgets[widgetId])
   //  console.log(widgets[1])
   //  console.log(state.sections[sectionId].widgets)
   //   console.log(state.sections[sectionId].widgets[widgetId].setting)
    } ,
    updateSections(state, sections) {
      state.sections = sections
    },
 };
 const actions = {
    CLICKS: ({ commit }, id) => {
        commit('CLICKS', id)
      },
      loadData({
        commit
      }) {
        axios.get("http://bege.tutaoweb.com/api/widgets").then(response => {
          commit('updateSections',response.data.widgets)
        //  console.log(state.sections);
        });
      }
 }

 export default {
   state,
   getters,
   mutations,
   actions
 }