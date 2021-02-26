<template>
  <div data-key="margin-top" class="form-group col-sm-6 d-inline-block">
    <label  for="input-model" class="control-label">{{data.name}}</label>
    <div class="input">
      <div id="cssunit-margin-top" class="input-group">
        <input
          v-bind:value="data.value"
           v-bind:name="data.name"
          type="text"
          class="form-control"
          @keyup="changeValue($event.target.value)"
        />

        <div class="input-group-append">
          <select   v-model="selected"  name="unit" class="form-control custom-select small-arrow">
            <option value="em">em</option>
            <option  value="px">px</option>
            <option  value="%">%</option>
            <option  value="rem">rem</option>
            <option  value="auto">auto</option>
          </select>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import store from '../../store.js'

export default {
  name: "TextInput",
  data() {
    return{
     selected: 'px'}
  },
  props: ['data'],

  computed: {},
  methods: {
    changeValue(value){
      value = value + this.selected ;
      console.log(this.selected)
       store.commit('changeValue',{value:value,name:this.$props.data.name})
    },
  }
};
</script>

<style scoped>
</style>
