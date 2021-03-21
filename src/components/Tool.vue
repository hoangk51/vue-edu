<template>
<div id="vvveb-builder" class="tool"  v-show="showTool">
   <div id="canvas">
      <div id="iframe-wrapper">
         <div id="iframe-layer">
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
                  <a id="up-btn" href="" title="Move element up"><i class="la la-arrow-up"></i></a>
                  <a id="down-btn" href="" title="Move element down"><i class="la la-arrow-down"></i></a>
                  <a id="clone-btn" href="" title="Clone element"><i class="la la-copy"></i></a>
                  <a id="delete-btn" href="" title="Remove element"><i class="la la-trash"></i></a>
               </div>
            </div>
           
         </div>
      </div>
   </div>
  
   <div id="right-panel">
      <div @click="showTool=false" id="close-section-btn" class="btn btn-light btn-sm bg-white btn-sm float-right" contenteditable="true"  ><i class="la la-close" contenteditable="true"></i>
      </div>
    <div class="component-properties">
      <ul class="nav nav-tabs nav-fill" id="properties-tabs" role="tablist"><li class="nav-item content-tab">
               <a class="nav-link show" data-toggle="tab" href="#content-tab" role="tab" aria-controls="components" aria-selected="false">
                  <i class="la la-lg la-cube"></i>
                  <div><span>Content</span></div>
               </a>
            </li>
            <li class="nav-item style-tab">
               <a class="nav-link show active" data-toggle="tab" href="#style-tab" role="tab" aria-controls="blocks" aria-selected="true">
                  <i class="la la-lg la-image"></i>
                  <div><span>Style</span></div>
               </a>
            </li>
            <li class="nav-item advanced-tab">
               <a class="nav-link" data-toggle="tab" href="#advanced-tab" role="tab" aria-controls="blocks" aria-selected="false">
                  <i class="la la-lg la-cog"></i>
                  <div><span>Advanced</span></div>
               </a>
            </li>
         </ul>

         <div class="tab-content">
            <div class="tab-pane fade" id="content-tab" data-section="content" role="tabpanel" aria-labelledby="content-tab">
                <label class="header" data-header="default" for="header_default">
                    <span>Paragraph</span>
                    <div class="header-arrow"></div>
                </label>
                <input class="header_check" type="checkbox" checked="true" id="header_default" />
                <div class="section" data-section="default">
                    <div class="mb-3 row" data-key="text-align">
                        <label class="col-sm-4 control-label" for="input-model">Text align</label>
                        <div class="col-sm-8 input">
                            <div class="btn-group btn-group-sm btn-group-fullwidth clearfix" role="group">
                                <input name="text-align" class="btn-check" type="radio" value="" id="rb-95text-align0" checked="true" autocomplete="off" />
                                <label class="btn btn-outline-primary" for="rb-95text-align0" title="None"> <i class="la la-times"></i> </label>
                                <input name="text-align" class="btn-check" type="radio" value="text-start" id="rb-95text-align1" autocomplete="off" />
                                <label class="btn btn-outline-primary" for="rb-95text-align1" title="text-start"> <i class="la la-align-left"></i> </label>
                                <input name="text-align" class="btn-check" type="radio" value="text-center" id="rb-95text-align2" autocomplete="off" />
                                <label class="btn btn-outline-primary" for="rb-95text-align2" title="Center"> <i class="la la-align-center"></i> </label>
                                <input name="text-align" class="btn-check" type="radio" value="text-end" id="rb-95text-align3" autocomplete="off" />
                                <label class="btn btn-outline-primary" for="rb-95text-align3" title="Right"> <i class="la la-align-right"></i> </label>
                            </div>
                        </div>
                    </div>
                </div>
                <label class="header" data-header="element_header" for="header_element_header">
                    <span>General</span>
                    <div class="header-arrow"></div>
                </label>
                <input class="header_check" type="checkbox" checked="true" id="header_element_header" />
                <div class="section" data-section="element_header">
                    <div class="mb-3 col-sm-6 d-inline-block px-2" data-key="id">
                        <label class="control-label" for="input-model">Id</label>
                        <div class="input">
                            <div><input name="id" type="text" class="form-control" /></div>
                        </div>
                    </div>
                    <div class="mb-3 col-sm-6 d-inline-block px-2" data-key="class">
                        <label class="control-label" for="input-model">Class</label>
                        <div class="input">
                            <div><input name="class" type="text" class="form-control" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade active show" id="style-tab" data-section="style" role="tabpanel" aria-labelledby="style-tab">
               <label class="header" data-header="display_header" for="header_display_header">
                  <span>Display</span>
                  <div class="header-arrow"></div>
               </label>
               <input class="header_check" type="checkbox" checked="true" id="header_display_header">
               <div class="section" data-section="display_header">
                  <component   v-for="(item,i) in inputs"  :key="'A'+ i" v-bind:is="item.type"  :data=item >
                  </component>
               </div>
               <label class="header" data-header="typography_header" for="header_typography_header">
                  <span>Typography</span>
                  <div class="header-arrow"></div>
               </label>
               <input class="header_check" type="checkbox" checked="true" id="header_typography_header">
               <div class="section" data-section="typography_header">
                  <div class="form-group  col-sm-6 d-inline-block " data-key="font-family">
                     <label class=" control-label" for="input-model">Font family</label>
                     <div class=" input">
                        <div>
                           <select class="form-control custom-select">
                              <option value="">Default</option>
                              <option value="Georgia, serif">Georgia, serif</option>
                              <option value="Tahoma, Geneva, sans-serif">Tahoma</option>
                              <option value="Comic Sans MS, cursive, sans-serif">Comic Sans</option>
                              <option value="Verdana, Geneva, sans-serif">Verdana</option>
                              <option value="Impact, Charcoal, sans-serif">Impact</option>
                              <option value="Arial Black, Gadget, sans-serif">Arial Black</option>
                              <option value="Trebuchet MS, Helvetica, sans-serif">Trebuchet</option>
                           </select>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="font-weight">
                     <label class=" control-label" for="input-model">Font weight</label>
                     <div class=" input">
                        <div>
                           <select class="form-control custom-select">
                              <option value="">Default</option>
                              <option value="100">Thin</option>
                              <option value="200">Extra-Light</option>
                              <option value="300">Light</option>
                              <option value="400">Normal</option>
                              <option value="500">Medium</option>
                              <option value="600">Semi-Bold</option>
                              <option value="700">Bold</option>
                              <option value="800">Extra-Bold</option>
                              <option value="900">Ultra-Bold</option>
                           </select>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-12 d-inline-block " data-key="text-align">
                     <label class=" control-label" for="input-model">Text align</label>
                     <div class=" input">
                        <div class="btn-group btn-group-toggle  btn-group-sm btn-group-fullwidth clearfix" data-toggle="buttons">         <label class="btn btn-outline-primary" for="text-align0 " title="None">     <input name="text-align" class="custom-control-input" type="radio" value="none" id="text-align0">     <i class="la la-close"></i>        </label>        <label class="btn  btn-outline-primary    " for="text-align1 " title="Left">     <input name="text-align" class="custom-control-input" type="radio" value="left" id="text-align1">     <i class="la la-align-left"></i>        </label>        <label class="btn btn-outline-primary active" for="text-align2 " title="Center">     <input name="text-align" class="custom-control-input" type="radio" value="center" id="text-align2" checked="checked">     <i class="la la-align-center"></i>        </label>        <label class="btn  btn-outline-primary    " for="text-align3 " title="Right">     <input name="text-align" class="custom-control-input" type="radio" value="right" id="text-align3">     <i class="la la-align-right"></i>        </label>        <label class="btn  btn-outline-primary    " for="text-align4 " title="Justify">     <input name="text-align" class="custom-control-input" type="radio" value="justify" id="text-align4">     <i class="la la-align-justify"></i>        </label>           </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="line-height">
                     <label class=" control-label" for="input-model">Line height</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-line-height">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="letter-spacing">
                     <label class=" control-label" for="input-model">Letter spacing</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-letter-spacing">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-12 d-inline-block " data-key="text-decoration-line">
                     <label class=" control-label" for="input-model">Text decoration</label>
                     <div class=" input">
                        <div class="btn-group btn-group-toggle  btn-group-sm btn-group-fullwidth clearfix" data-toggle="buttons">         <label class="btn  btn-outline-primary  active  " for="text-decoration-line0 " title="None">     <input name="text-decoration-line" class="custom-control-input" type="radio" value="none" id="text-decoration-line0" checked="checked">     <i class="la la-close"></i>        </label>        <label class="btn  btn-outline-primary    " for="text-decoration-line1 " title="underline">     <input name="text-decoration-line" class="custom-control-input" type="radio" value="underline" id="text-decoration-line1">     <i class="la la-long-arrow-down"></i>        </label>        <label class="btn  btn-outline-primary    " for="text-decoration-line2 " title="overline">     <input name="text-decoration-line" class="custom-control-input" type="radio" value="overline" id="text-decoration-line2">     <i class="la la-long-arrow-up"></i>        </label>        <label class="btn  btn-outline-primary    " for="text-decoration-line3 " title="Line Through">     <input name="text-decoration-line" class="custom-control-input" type="radio" value="line-through" id="text-decoration-line3">     <i class="la la-strikethrough"></i>        </label>        <label class="btn  btn-outline-primary    " for="text-decoration-line4 " title="Underline Overline">     <input name="text-decoration-line" class="custom-control-input" type="radio" value="underline overline" id="text-decoration-line4">     <i class="la la-arrows-v"></i>        </label>           </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="text-decoration-color">
                     <label class=" control-label" for="input-model">Decoration Color</label>
                     <div class=" input">
                        <div>   <input name="text-decoration-color" type="color" pattern="#[a-f0-9]{6}" class="form-control">  </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="text-decoration-style">
                     <label class=" control-label" for="input-model">Decoration style</label>
                     <div class=" input">
                        <div>
                           <select class="form-control custom-select">
                              <option value="">Default</option>
                              <option value="solid">Solid</option>
                              <option value="wavy">Wavy</option>
                              <option value="dotted">Dotted</option>
                              <option value="dashed">Dashed</option>
                              <option value="double">Double</option>
                           </select>
                        </div>
                     </div>
                  </div>
               </div>
               <label class="header" data-header="size_header" for="header_size_header">
                  <span>Size</span>
                  <div class="header-arrow"></div>
               </label>
               <input class="header_check" type="checkbox" id="header_size_header">
               <div class="section" data-section="size_header">
                  <div class="form-group  col-sm-6 d-inline-block " data-key="width">
                     <label class=" control-label" for="input-model">Width</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-width">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="height">
                     <label class=" control-label" for="input-model">Height</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-height">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="min-width">
                     <label class=" control-label" for="input-model">Min Width</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-min-width">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="min-height">
                     <label class=" control-label" for="input-model">Min Height</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-min-height">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="max-width">
                     <label class=" control-label" for="input-model">Max Width</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-max-width">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="max-height">
                     <label class=" control-label" for="input-model">Max Height</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-max-height">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <label class="header" data-header="margins_header" for="header_margins_header">
                  <span>Margin</span>
                  <div class="header-arrow"></div>
               </label>
               <input class="header_check" type="checkbox" id="header_margins_header">
               <div class="section" data-section="margins_header">
                   <TextInput/>
                  <SelectBox>  </SelectBox>

                  <div class="form-group  col-sm-6 d-inline-block " data-key="margin-top">
                     <label class=" control-label" for="input-model">Top</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-margin-top">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="margin-right">
                     <label class=" control-label" for="input-model">Right</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-margin-right">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="margin-bottom">
                     <label class=" control-label" for="input-model">Bottom</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-margin-bottom">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="margin-left">
                     <label class=" control-label" for="input-model">Left</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-margin-left">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <label class="header" data-header="paddings_header" for="header_paddings_header">
                  <span>Padding</span>
                  <div class="header-arrow"></div>
               </label>
               <input class="header_check" type="checkbox" id="header_paddings_header">
               <div class="section" data-section="paddings_header">
                  <div class="form-group  col-sm-6 d-inline-block " data-key="padding-top">
                     <label class=" control-label" for="input-model">Top</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-padding-top">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="padding-right">
                     <label class=" control-label" for="input-model">Right</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-padding-right">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="padding-bottom">
                     <label class=" control-label" for="input-model">Bottom</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-padding-bottom">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="padding-left">
                     <label class=" control-label" for="input-model">Left</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-padding-left">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <label class="header" data-header="border_header" for="header_border_header">
                  <span>Border</span>
                  <div class="header-arrow"></div>
               </label>
               <input class="header_check" type="checkbox" id="header_border_header">
               <div class="section" data-section="border_header">
                  <div class="form-group  col-sm-12 d-inline-block " data-key="border-style">
                     <label class=" control-label" for="input-model">Style</label>
                     <div class=" input">
                        <div>
                           <select class="form-control custom-select">
                              <option value="">Default</option>
                              <option value="solid">Solid</option>
                              <option value="dotted">Dotted</option>
                              <option value="dashed">Dashed</option>
                           </select>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="border-width">
                     <label class=" control-label" for="input-model">Width</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-border-width">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="border-color">
                     <label class=" control-label" for="input-model">Color</label>
                     <div class=" input">
                        <div>   <input name="border-color" type="color" pattern="#[a-f0-9]{6}" class="form-control">  </div>
                     </div>
                  </div>
               </div>
               <label class="header" data-header="border_radius_header" for="header_border_radius_header">
                  <span>Border radius</span>
                  <div class="header-arrow"></div>
               </label>
               <input class="header_check" type="checkbox" id="header_border_radius_header">
               <div class="section" data-section="border_radius_header">
                  <div class="form-group  col-sm-6 d-inline-block " data-key="border-top-left-radius">
                     <label class=" control-label" for="input-model">Top Left</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-border-top-left-radius">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="border-top-right-radius">
                     <label class=" control-label" for="input-model">Top Right</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-border-top-right-radius">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="border-bottom-left-radius">
                     <label class=" control-label" for="input-model">Bottom Left</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-border-bottom-left-radius">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="border-bottom-right-radius">
                     <label class=" control-label" for="input-model">Bottom Right</label>
                     <div class=" input">
                        <div class="input-group" id="cssunit-border-bottom-right-radius">
                           <input name="number" type="number" class="form-control">
                           <div class="input-group-append">
                              <select class="form-control custom-select small-arrow" name="unit">
                                 <option value="em">em</option>
                                 <option value="px">px</option>
                                 <option value="%">%</option>
                                 <option value="rem">rem</option>
                                 <option value="auto">auto</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <label class="header" data-header="background_image_header" for="header_background_image_header">
                  <span>Background Image</span>
                  <div class="header-arrow"></div>
               </label>
               <input class="header_check" type="checkbox" id="header_background_image_header">
               <div class="section" data-section="background_image_header">
                  <div class="form-group row" data-key="Image">
                     <label class="col-sm-4 control-label" for="input-model">Image</label>
                     <div class="col-sm-8 input">
                        <div>   <input name="Image" type="text" class="form-control">   <input name="file" type="file" class="form-control">  </div>
                     </div>
                  </div>
                  <div class="form-group row" data-key="background-repeat">
                     <label class="col-sm-4 control-label" for="input-model">Repeat</label>
                     <div class="col-sm-8 input">
                        <div>
                           <select class="form-control custom-select">
                              <option value="">Default</option>
                              <option value="repeat-x">repeat-x</option>
                              <option value="repeat-y">repeat-y</option>
                              <option value="no-repeat">no-repeat</option>
                           </select>
                        </div>
                     </div>
                  </div>
                  <div class="form-group row" data-key="background-size">
                     <label class="col-sm-4 control-label" for="input-model">Size</label>
                     <div class="col-sm-8 input">
                        <div>
                           <select class="form-control custom-select">
                              <option value="">Default</option>
                              <option value="contain">contain</option>
                              <option value="cover">cover</option>
                           </select>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="background-position-x">
                     <label class=" control-label" for="input-model">Position x</label>
                     <div class=" input">
                        <div>
                           <select class="form-control custom-select">
                              <option value="">Default</option>
                              <option value="center">center</option>
                              <option value="right">right</option>
                              <option value="left">left</option>
                           </select>
                        </div>
                     </div>
                  </div>
                  <div class="form-group  col-sm-6 d-inline-block " data-key="background-position-y">
                     <label class=" control-label" for="input-model">Position y</label>
                     <div class=" input">
                        <div>
                           <select class="form-control custom-select">
                              <option value="">Default</option>
                              <option value="center">center</option>
                              <option value="top">top</option>
                              <option value="bottom">bottom</option>
                           </select>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="tab-pane fade" id="advanced-tab" data-section="advanced" role="tabpanel" aria-labelledby="advanced-tab">
                  <div class="alert alert-dismissible fade show alert-info m-3" role="alert" style="">        
                     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>      
                     <strong>No advanced properties!</strong><br> This component does not have advanced properties.     
                  </div>
            </div>
         </div>
      </div>
   </div>
   
</div>
</template>

<script>
import store from '../store.js'
import { mapGetters } from 'vuex'
/*
import SelectBox from "@/components/input/SelectBox.vue";
import TextInput from "@/components/input/TextInput.vue";
import Color from "@/components/input/Color.vue";
*/
export default {
  name: 'Tool',

  data(){return {
     showTool: store.state.tool.showTool,
     selectBox: store.state.tool.selectBox,
     topVar: store.state.tool.top,
   }
  },
  props:['section'],
  components: {
   // SelectBox,TextInput,Color
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
       //let isSection = store.state.tool.isSection
       //console.log(isSection)
      // if(isSection == 1) return arr
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
         'top':this.selectBox.top+'px',
         'width':this.selectBox.width+'px',
         'height':this.selectBox.height+'px',
         'left':this.selectBox.left+'px',
        // fontWeight: 400,
         display:this.selectBox.display,
         color: 'red',
        // fontSize: '13px'
       }
       console.log(style)

       return style
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
