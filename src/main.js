import Vue from 'vue'
import App from './App.vue'
import JQuery from 'jquery'
import { store } from "./store.js";
/*
function getDomPath(el) {
  if (!el) {
    return;
  }
  var stack = [];
  var isShadow = false;
  while (el.parentNode != null) {
    // console.log(el.nodeName);
    var sibCount = 0;
    var sibIndex = 0;
    // get sibling indexes
    for ( var i = 0; i < el.parentNode.childNodes.length; i++ ) {
      var sib = el.parentNode.childNodes[i];
      if ( sib.nodeName == el.nodeName ) {
        if ( sib === el ) {
          sibIndex = sibCount;
        }
        sibCount++;
      }
    }
    // if ( el.hasAttribute('id') && el.id != '' ) { no id shortcuts, ids are not unique in shadowDom
    //   stack.unshift(el.nodeName.toLowerCase() + '#' + el.id);
    // } else
    var nodeName = el.nodeName.toLowerCase();
    if (isShadow) {
      nodeName += "::shadow";
      isShadow = false;
    }
    if ( sibCount > 1 ) {
      stack.unshift(nodeName + ':nth-of-type(' + (sibIndex + 1) + ')');
    } else {
      stack.unshift(nodeName);
    }
    el = el.parentNode;
    if (el.nodeType === 11) { // for shadow dom, we
      isShadow = true;
      el = el.host;
    }
  }
  stack.splice(0,1); // removes the html element
  return stack.join(' > ');
}*/

window.$ = JQuery

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  mounted() {


    document.addEventListener("mouseover", e => {


      //  let m = `x: ${e.clientX} | y: ${e.clientY}`;
       // console.log(e.target.tagName);
       // console.log(e.target.getAttribute('data-id'));
        //console.log(e.target.getAttribute('style'));
      //  console.log('id: '+e.target.id);
       // console.log(e.target.style);
       // console.log(e.target.style.marginTop);
       // console.log(e.target.tagName);
       e.target.setAttribute('contenteditable',true)

    var editAble = e.target.getAttribute('data-editAble')
  
    var data;
    let parent = e.target.closest(".section");
       var  sectionId=parent.getAttribute('data-section')
    if(editAble == 'true') {
             console.log(e)
       data = {'e':e,'isSection':0,'data':{'sectionId':sectionId}} ;
    }
    else{
       data ={'e':e,'isSection':1,'data':{'sectionId':sectionId}}
    }
    this.$store.commit('CLICKS',data)
     console.log(e.target.id)
     /*e.target.addEventListener('input', function () {

      });*/
    })
    document.addEventListener("mouseup", e => {


    //  let m = `x: ${e.clientX} | y: ${e.clientY}`;
     // console.log(e.target.getAttribute('data-id'));
    var editAble = e.target.getAttribute('data-editAble')
   // var selection = window.getSelection().toString();
   // console.log(selection);

     // e.widgetId = e.target.getAttribute('widget-id')
     // e.sectionId = e.target.getAttribute('section-id')
      //console.log(e.target.getAttribute('style'));
     // console.log(e.target.getAttribute('class'));
   /* var path = getDomPath(e.target);
    console.log(path);*/

     //e.target.setAttribute('id','editor');
  /*  var parent = e.target.closest(".parent");
    console.log(parent)
     var  id=parent.getAttribute('data-section')
      console.log(id)*/
     // console.log(e.target.style.marginTop);
     // console.log(e.target.tagName);
    // console.log(editAble)
    var data;
    let parent = e.target.closest(".section");
       var  sectionId=parent.getAttribute('data-section')
    if(editAble == 'true') {
             console.log(e)

       data = {'e':e,'isSection':0,'data':{'sectionId':sectionId}} ;
    }
    else{
       //var element = document.querySelector("[data-section='"+id+"']");
      // console.log(element)
       data ={'e':e,'isSection':1,'data':{'sectionId':sectionId}}
    }


    this.$store.commit('CLICKS',data)
     console.log(e.target.id)
 //    e.target.setAttribute('id','editor');
     e.target.addEventListener('input', function () {
      console.log('11111111');
     // console.log(e.target.innerText);
     // console.log(e1);

  });



    });


  }
}).$mount('#app')
