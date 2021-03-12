//import axios from "axios";
import Vue from 'vue'

const state = {
   sections:[],
    currentNode:{},
    showTool:false,
    showSectiontool:false,
    isSection:false,
    currentSectionId:0,
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
        state.currentSectionId = data.data.sectionId ;
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
    addSection(state,data) {console.log(data.sectionId);
      let sectionData = {"sectionId":1,
      "name": "Support",
      "type": "Type1",
      "widgets": {
        "1": {
          "id": 1,
          "name": "Support",
          "setting": {
            "title": "Mon - Fri / 8:00 - 18:00",
            "description": "Working Days/Hours!",
            "icon": "pe-7s-alarm"
          }
        },
        "2": {
          "id": 1,
          "name": "support",
          "setting": {
            "title": "bai viet 1",
            "description": "des 1",
            "icon": "pe-7s-car"
          }
        },
        "3": {
          "id": 1,
          "name": "support",
          "setting": {
            "title": "Support@posthemes.com",
            "description": "Orders Support!",
            "icon": "pe-7s-mail-open-file"
          }
        }
      },
      "attrs": {
        "type": 1,
        "content": "xyz",
        "text1": "aaaaaaaaaaa",
        "text2": "bbbbbbbb",
        "text3": "cccccccccc",
        "backgroundColor": "#fff",
        "color": "#ea4848"
      }
    }
    var index
     let sections = state.sections
    sections.forEach(function(p,i){
        if(i == state.currentSectionId){
        index = state.sections.indexOf(p) + 1;
        /* const preIndex = index - 1;
         Vue.set( state.sections,index, state.sections[preIndex] )
         Vue.set( state.sections,preIndex, p )*/
        }
     });
     sections.splice(index, 0, sectionData);
      Vue.set( state,'sections', sections )

      console.log(state.sections);
    },
    up(state) {
      state.sections.forEach(function(p,i){
        if(i == state.currentSectionId){
        const index = state.sections.indexOf(p);
        const preIndex = index - 1;
         Vue.set( state.sections,index, state.sections[preIndex] )
         Vue.set( state.sections,preIndex, p )
        }
     });
      console.log('up'+state.currentSectionId);
    },
    down(state) { console.log('down');
     // console.log(state.sections);
     // console.log(state.currentSectionId);
     var index
      let sections = state.sections
      sections.forEach(function(p,i){
        if(i == state.currentSectionId){
          
        index = state.sections.indexOf(p);//console.log(index);
       //const nextIndex = index + 1;
        console.log('ssss'+index);
//        var tmp = sections[1] 
      // sections[1] = sections[2] 
  //     sections[2] = tmp

       // console.log(state.sections.[index]);
       //  console.log(state.sections[nextIndex]);
      // var  tmp = state.sections[1] ;
     //  Vue.set( state.sections,1, state.sections[2] )
        // Vue.set( state.sections,2, tmp )
         
       // Vue.set( state, 'sections', sections )
        }
     })
      const nextIndex = index + 1;
         var tmp = sections[index] 
       // sections[index] = sections[nextIndex] 
         //sections[nextIndex] = tmp
          Vue.set( state.sections,index, sections[nextIndex] )
         Vue.set( state.sections,nextIndex, tmp )

       console.log(sections);  
      // Vue.set( state, 'sections', sections )
    }
 };
 const actions = {
    CLICKS: ({ commit }, id) => {
        commit('CLICKS', id)
      },
      loadData({
        commit
      }) {
        let data = {
  "success": true,
  "widgets": [
    {"sectionId":1,
      "name": "Support",
      "type": "Type1",
      "widgets": {
        "1": {
          "id": 1,
          "name": "Support",
          "setting": {
            "title": "Mon - Fri / 8:00 - 18:00",
            "description": "Working Days/Hours!",
            "icon": "pe-7s-alarm"
          }
        },
        "2": {
          "id": 1,
          "name": "support",
          "setting": {
            "title": "bai viet 1",
            "description": "des 1",
            "icon": "pe-7s-car"
          }
        },
        "3": {
          "id": 1,
          "name": "support",
          "setting": {
            "title": "Support@posthemes.com",
            "description": "Orders Support!",
            "icon": "pe-7s-mail-open-file"
          }
        }
      },
      "attrs": {
        "type": 1,
        "content": "xyz",
        "text1": "aaaaaaaaaaa",
        "text2": "bbbbbbbb",
        "text3": "cccccccccc",
        "backgroundColor": "#fff",
        "color": "#ea4848"
      }
    },
    {"sectionId":2,
      "name": "Hero",
      "type": "Type1",
      "css": {
        "h2": {
          "backgroundColor": "#3498db",
          "marginTop": "12px",
          "marginBottom": "6px",
          "marginRight": "14px",
          "marginLeft": "16px"
        },
        "h2Text": {
          "backgroundColor": "#3498db"
        }
      },
      "widgets": {
        "1": {
          "id": 1,
          "title": "moi ve",
          "name": "ProductSlide",
          "data": {
            "items": [
              {
                "title": "Mon - Fri / 8:00 - 18:00",
                "description": "Working Days/Hours!",
                "image": "images/11.jpg",
                "price": 200000
              },
              {
                "title": "san pham 1",
                "description": "Working Days/Hours!",
                "image": "images/13.jpg",
                "price": 200000
              },
              {
                "title": "san pham 3",
                "description": "Working Days/Hours!",
                "image": "images/12.jpg",
                "price": 200000
              }
            ]
          }
        },
        "2": {
          "id": 1,
          "title": "ban chay",
          "name": "ProductSlide",
          "data": {
            "items": [
              {
                "title": "Mon - Fri / 8:00 - 18:00",
                "description": "Working Days/Hours!",
                "image": "images/14.jpg",
                "price": 200000
              },
              {
                "title": "Mon - Fri / 8:00 - 18:00",
                "description": "Working Days/Hours!",
                "image": "images/15.jpg",
                "price": 200000
              },
              {
                "title": "Mon - Fri / 8:00 - 18:00",
                "description": "Working Days/Hours!",
                "image": "images/16.jpg",
                "price": 200000
              }
            ]
          }
        },
        "3": {
          "id": 1,
          "title": "xu huong",
          "name": "ProductSlide",
          "data": {
            "items": [
              {
                "title": "Mon - Fri / 8:00 - 18:00",
                "description": "Working Days/Hours!",
                "image": "images/17.jpg",
                "price": 200000
              },
              {
                "title": "Mon - Fri / 8:00 - 18:00",
                "description": "Working Days/Hours!",
                "image": "images/18.jpg",
                "price": 200000
              },
              {
                "title": "Mon - Fri / 8:00 - 18:00",
                "description": "Working Days/Hours!",
                "image": "images/19.jpg",
                "price": 200000
              }
            ]
          }
        }
      },
      "attrs": {
        "type": 1,
        "content": "xyz",
        "text1": "aaaaaaaaaaa",
        "text2": "bbbbbbbb",
        "text3": "cccccccccc",
        "backgroundColor": "#3498db"
      }
    },
    { "sectionId":3,
      "name": "Blog",
      "type": "Type4",
      "css": {
        "a": {
          "backgroundColor": "#fff",
          "color": "",
          "fontSize": "20px",
          "fontWeight": "400",
          "marginTop": "3px",
          "marginBottom": "6px",
          "marginRight": "14px",
          "marginLeft": ""
        },
        "p": {
          "backgroundColor": "#fff",
          "color": "#097136",
          "fontSize": "17px",
          "fontWeight": "400",
          "marginTop": "3px",
          "marginBottom": "6px",
          "marginRight": "14px",
          "marginLeft": "16px"
        }
      },
      "data": {
        "title": "Tin tuc"
      },
      "widgets": {
        "1": {
          "id": 1,
          "name": "BlogItem",
          "data": {
            "title": "bai viet 1",
            "description": "des 1",
            "image": "images/blog1.jpg"
          }
        },
        "2": {
          "id": 1,
          "name": "BlogItem",
          "data": {
            "title": "bai viet 1",
            "description": "des 1 Working Days/Hours! Working Days/Hours! Working Days/Hours!",
            "image": "images/blog2.jpg"
          }
        },
        "3": {
          "id": 1,
          "name": "BlogItem",
          "data": {
            "title": "bai viet 1",
            "description": "des 1",
            "image": "images/blog3.jpg"
          }
        }
      },
      "attrs": {
        "content": "abc",
        "backgroundColor": "#ea4848"
      }
    },
  ]
};
commit('updateSections',data.widgets)
        /*axios.get("http://bege.tutaoweb.com/api/widgets").then(response => {
          commit('updateSections',response.data.widgets)
        //  console.log(state.sections);
        });*/
      }
 }

 export default {
   state,
   getters,
   mutations,
   actions
 }