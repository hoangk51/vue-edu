<template>

<div id="vvveb-builder" class="xyz">
    <div id="select-actions" style="top: 203.375px;position: absolute; left: 0px; display: block; color: red;position: absolute;display: flex;
align-items: center;
justify-content: center;">
   <a id="drag-btn" href="" title="Drag element"><i class="la la-arrows"></i></a>
   <a id="parent-btn" href="" title="Select parent"><i class="la la-level-down la-rotate-180"></i></a>
   </div>
   <div id="canvas">
      <div id="iframe-wrapper">
         <div id="iframe-layer" >
            <div id="highlight-box">
               <div id="highlight-name"></div>
               <div id="section-actions">
                  <a id="add-section-btn" href="" title="Add element"><i class="la la-plus"></i></a>
               </div>
            </div>
            
            <div id="select-box" v-bind:style="cssVars">
               <div id="wysiwyg-editor">
                  <a id="bold-btn" href="" title="Bold"><i><strong>B</strong></i></a>
                  <a id="italic-btn" href="" title="Italic"><i>I</i></a>
                  <a id="underline-btn" href="" title="Underline"><u>u</u></a>
                  <a id="strike-btn" href="" title="Strikeout"><del>S</del></a>
                  <a id="link-btn" href="" title="Create link"><strong>a</strong></a>
               </div>
               <div id="select-actions">
                  <a id="drag-btn" href="" title="Drag element"><i class="la la-arrows"></i></a>
                  <a id="parent-btn" href="" title="Select parent"><i class="la la-level-down la-rotate-180"></i></a>
                  <a id="up-btn" href="" title="Move element up"  @click="up"><i class="la la-arrow-up"></i></a>
                  <a id="down-btn" href="" title="Move element down" @click="down"><i class="la la-arrow-down"></i></a>
                  <a id="clone-btn" href="" title="Clone element"><i class="la la-copy"></i></a>
                  <a id="delete-btn" href="" title="Remove element"><i class="la la-trash"></i></a>
                  <div class="-tiles-menu-wrapper js-magic-sections-wrapper" style="display: block;"><ul class="-tiles-menu" style="width: 560px;"><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses1.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses2.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses3.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses4.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses5.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses6.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses11.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses9.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses10.jpg&quot;);"></li><li class="tiles-menu-option into-page" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses12.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses13.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses14.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses15.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses16.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses17.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses18.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses19.jpg&quot;);"></li></ul></div>
               </div>


            </div>
            

            <!-- add section box -->
            <div id="add-section-box" class="drag-elements">
               <div class="header">
                  <ul class="nav nav-tabs" id="box-elements-tabs" role="tablist">
                     <li class="nav-item component-tab">
                        <a class="nav-link active" id="box-components-tab" data-toggle="tab" href="#box-components" role="tab" aria-controls="components" aria-selected="true">
                           <i class="la la-lg la-cube"></i>
                           <div><small>Components</small></div>
                        </a>
                     </li>
                     <li class="nav-item blocks-tab">
                        <a class="nav-link" id="box-blocks-tab" data-toggle="tab" href="#box-blocks" role="tab" aria-controls="blocks" aria-selected="false">
                           <i class="la la-lg la-image"></i>
                           <div><small>Blocks</small></div>
                        </a>
                     </li>
                     <li class="nav-item component-properties-tab" style="display:none">
                        <a class="nav-link" id="box-properties-tab" data-toggle="tab" href="#box-properties" role="tab" aria-controls="blocks" aria-selected="false">
                           <i class="la la-lg la-cog"></i>
                           <div><small>Properties</small></div>
                        </a>
                     </li>
                  </ul>
                  <div class="section-box-actions">
                     <div id="close-section-btn" class="btn btn-light btn-sm bg-white btn-sm float-right"><i class="la la-close"></i></div>
                     <div class="small mt-1 mr-3 float-right">
                        <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" id="add-section-insert-mode-after" value="after" checked="checked" name="add-section-insert-mode" class="custom-control-input">
                           <label class="custom-control-label" for="add-section-insert-mode-after">After</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" id="add-section-insert-mode-inside" value="inside" name="add-section-insert-mode" class="custom-control-input">
                           <label class="custom-control-label" for="add-section-insert-mode-inside">Inside</label>
                        </div>
                     </div>
                  </div>
                  <div class="tab-content">
                     <div class="tab-pane fade show active" id="box-components" role="tabpanel" aria-labelledby="components-tab">
                        <div class="search">
                           <input class="form-control form-control-sm component-search" placeholder="Search components" type="text" data-vvveb-action="addBoxComponentSearch" data-vvveb-on="keyup">
                           <button class="clear-backspace"  data-vvveb-action="clearComponentSearch">
                           <i class="la la-close"></i>
                           </button>
                        </div>
                        <div>
                           <div>
                              <ul class="components-list clearfix" data-type="addbox">
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div class="tab-pane fade" id="box-blocks" role="tabpanel" aria-labelledby="blocks-tab">
                        <div class="search">
                           <input class="form-control form-control-sm block-search" placeholder="Search blocks" type="text" data-vvveb-action="addBoxBlockSearch" data-vvveb-on="keyup">
                           <button class="clear-backspace"  data-vvveb-action="clearBlockSearch">
                           <i class="la la-close"></i>
                           </button>
                        </div>
                        <div>
                           <div>
                              <ul class="blocks-list clearfix"  data-type="addbox">
                              </ul>
                           </div>
                        </div>
                     </div>
                     <!-- div class="tab-pane fade" id="box-properties" role="tabpanel" aria-labelledby="blocks-tab">
                        <div class="component-properties-sidepane">
                            <div>
                                <div class="component-properties">
                                    <div class="mt-4 text-center">Click on an element to edit.</div>
                                </div>
                            </div>
                        </div>
                        </div -->
                  </div>
               </div>
            </div>
            <!-- //add section box -->
         </div>
      </div>
   </div>
  
</div>
</template>

<script>
import store from '../store.js'
import { mapGetters } from 'vuex'


export default {
  name: 'Sectiontool',

  data(){return {
     showTool: store.state.tool.showTool,
     sectionBox: store.state.tool.sectionBox,
     topVar: store.state.tool.top,
   }
  },
  props:['section'],
  components: {
  },
  computed: {
     ...mapGetters({
      top: 'top',
      left: 'left',
      topwidth: 'width',
      height: 'height',
    }),
    inputs() {
       var arr = [{name:'marginLeft',type:'TextInput'},
                  {name:'marginTop',type:'TextInput'},
                  {name:'marginRight',type:'TextInput'},
                  {name:'marginBottom',type:'TextInput'},
                  {name:'backgroundColor',type:'Color'},
                   {name:'color',type:'Color'},
                  {name:'fontWeight',type:'TextInput'},
                   {name:'fontSize',type:'TextInput'},
                  ]
      //console.log(store.state)
       console.log(33333333)
      let style = store.state.tool.currentNode.target.style

       var rgbToHex = function (color) {
          //console.log('color:'+color)
         // if (!color) return "";
         color = ""+ color;
         if (!color || color.indexOf("rgb") < 0) {
            return "";
         }

         if (color.charAt(0) == "#") {
            return color;
         }

         var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
            r = parseInt(nums[2], 10).toString(16),
            g = parseInt(nums[3], 10).toString(16),
            b = parseInt(nums[4], 10).toString(16);

         return "#"+ (
            (r.length == 1 ? "0"+ r : r) +
            (g.length == 1 ? "0"+ g : g) +
            (b.length == 1 ? "0"+ b : b)
         );
      }
      console.log(123);
       arr.forEach(function (property) {

          var name = property.name;
          var value

          if(property.type=='Color'){
              console.log('color'+ style[name]);
             value = rgbToHex(style[name])
             console.log(value);
          }else{
             value = style[name]
          }
         property.value = value
      });

      //console.log(arr)
      return arr
    },
    cssVars(){
     //  console.log(555)
       let style = {
         'top':this.sectionBox.top+'px',
         'width':this.sectionBox.width+'px',
         'height':this.sectionBox.height+'px',
         'left':this.sectionBox.left+'px',
        // fontWeight: 400,
         display:this.sectionBox.display,
         color: 'red',
        // fontSize: '13px'
       }
      console.log(333444)
       console.log(style)

       return style
    }
  },
  methods: {
    up: function(){
        store.commit('up',{})

    },
    down: function(){
        store.commit('down',{})

    },
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
