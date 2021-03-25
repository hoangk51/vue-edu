<template>

<div id="vvveb-builder" class="sectiontool">
   <div id="canvas">
      <div id="iframe-wrapper">
         <div id="iframe-layer" >
            <div id="highlight-box"  v-bind:style="cssVars">
               <div id="highlight-name"></div>
               <div id="section-actions">
                  <a id="add-section-btn" href="" title="Add element"  @click="showModal = !showModal"><i class="la la-plus"></i></a>
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
                  <a id="clone-btn" href="" title="Clone element" @click="addSection"   ><i class="la la-copy"></i></a>
                  <a id="delete-btn" href="" title="Remove element" @click="deleteSection"><i class="la la-trash"></i></a>
                  <!--
                  <div class="-tiles-menu-wrapper js-magic-sections-wrapper" style="display: block;">
                  <ul class="-tiles-menu" style="width: 560px;"><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses1.jpg&quot;);"></li>
                  <li @click="addSection" class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses2.jpg&quot;);">
                  </li>
                  <li @click="addSection" class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses3.jpg&quot;);"></li>
                  <li @click="addSection" class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses4.jpg&quot;);"></li>
                  <li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses5.jpg&quot;);"></li>
                  <li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses6.jpg&quot;);"></li>
                  <li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses11.jpg&quot;);"></li>
                  <li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses9.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses10.jpg&quot;);"></li><li class="tiles-menu-option into-page" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses12.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses13.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses14.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses15.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses16.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses17.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses18.jpg&quot;);"></li><li class="tiles-menu-option" style="background-image: url(&quot;https://cdn.mycourse.app/pbl3h/author/images/pagesbuilder/courses19.jpg&quot;);"></li></ul></div>
                  -->
               </div>


            </div>
            

            <!-- add section box -->
            <div id="add-section-box" class="drag-elements" style="top: 81px; left: 288px;" v-show="showModal">
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
                     <div id="close-section-btn" class="btn btn-light btn-sm bg-white btn-sm float-right"><i class="la la-close" @click="showModal = false"></i></div>
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
                              <ul class="components-list clearfix" data-type="addbox"><li class="header" data-section="Bootstrap 5" data-search="">
               <label class="header" for="addbox_comphead_Bootstrap 52">
                  Bootstrap 5<div class="header-arrow"></div>
               </label>
               <input class="header_check" type="checkbox" checked="true" id="addbox_comphead_Bootstrap 52">
               <ol>
                  <li v-on:click="addSection(5)" data-section="Bootstrap 5" data-drag-type="component" data-type="html/container" data-search="container" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/container.svg&quot;); background-repeat: no-repeat;">
                     <a href="#" >Container</a>
                  </li><li  v-on:click="addSection(6)" data-section="Bootstrap 5" data-drag-type="component" data-type="html/gridrow" data-search="grid row" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/grid_row.svg&quot;); background-repeat: no-repeat;">
                     <a href="#" >Grid Row</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/button" data-search="html button" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/button.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Html Button</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/buttongroup" data-search="button group" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/button_group.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Button Group</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/buttontoolbar" data-search="button toolbar" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/button_toolbar.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Button Toolbar</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/heading" data-search="heading" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/heading.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Heading</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/image" data-search="image" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/image.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Image</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/alert" data-search="alert" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/alert.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Alert</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/card" data-search="card" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/panel.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Card</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/listgroup" data-search="list group" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/list_group.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">List Group</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/hr" data-search="horizontal rule" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/hr.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Horizontal Rule</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/badge" data-search="badge" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/badge.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Badge</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/progress" data-search="progress bar" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/progressbar.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Progress Bar</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/navbar" data-search="nav bar" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/navbar.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Nav Bar</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/breadcrumbs" data-search="breadcrumbs" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/breadcrumbs.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Breadcrumbs</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/pagination" data-search="pagination" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/pagination.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Pagination</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/form" data-search="form" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/form.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Form</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/textinput" data-search="input" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/text_input.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Input</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/textareainput" data-search="text area" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/text_area.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Text Area</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/selectinput" data-search="select input" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/select_input.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Select Input</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/fileinput" data-search="input group" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/text_input.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Input group</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/checkbox" data-search="checkbox" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/checkbox.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Checkbox</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/radiobutton" data-search="radio button" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/radio.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Radio Button</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/table" data-search="table" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/table.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Table</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/paragraph" data-search="paragraph" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/paragraph.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Paragraph</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/link" data-search="link" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/link.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Link</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/video" data-search="video" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/video.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Video</a>
                  </li><li data-section="Bootstrap 5" data-drag-type="component" data-type="html/button" data-search="html button" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/button.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Html Button</a>
                  </li></ol>
            </li><li class="header" data-section="Widgets" data-search="">
               <label class="header" for="addbox_comphead_Widgets2">
                  Widgets<div class="header-arrow"></div>
               </label>
               <input class="header_check" type="checkbox" checked="true" id="addbox_comphead_Widgets2">
               <ol><li data-section="Widgets" data-drag-type="component" data-type="widgets/googlemaps" data-search="google maps" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/map.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Google Maps</a>
                  </li><li data-section="Widgets" data-drag-type="component" data-type="widgets/video" data-search="video" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/video.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Video</a>
                  </li><li data-section="Widgets" data-drag-type="component" data-type="widgets/chartjs" data-search="chart.js" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/chart.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Chart.js</a>
                  </li><li data-section="Widgets" data-drag-type="component" data-type="widgets/facebookpage" data-search="facebook page plugin" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/facebook.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Facebook Page Plugin</a>
                  </li><li data-section="Widgets" data-drag-type="component" data-type="widgets/paypal" data-search="paypal" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/paypal.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Paypal</a>
                  </li><li data-section="Widgets" data-drag-type="component" data-type="widgets/instagram" data-search="instagram" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/instagram.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Instagram</a>
                  </li><li data-section="Widgets" data-drag-type="component" data-type="widgets/twitter" data-search="twitter" style="background-image: url(&quot;https://www.vvveb.com/vvvebjs/libs/builder/icons/twitter.svg&quot;); background-repeat: no-repeat;">
                     <a href="#">Twitter</a>
                  </li></ol>
            </li></ul>
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
      showModal:false,
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
      //console.log(333444)
       //console.log(style)

       return style
    }
  },
  methods: {
   deleteSection: function(){
        store.commit('deleteSection',{})

    },
    up: function(){
        store.commit('up',{})

    },
    down: function(){
        store.commit('down',{})

    },
     addSection: function(sectionId){console.log('addSectionaaaa');
        store.commit('addSection',{'sectionId':sectionId})

    },

    addSectionView: function(){
    //console.log('addSectionView');
           this.showModal = true;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
