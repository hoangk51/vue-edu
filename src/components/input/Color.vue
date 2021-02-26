<template>
  <div class="form-group col-sm-6 d-inline-block" data-key="background-color">
    <label class="control-label" for="input-model">{{data.name}}</label>
    <div class="input">
      <div>

        <input
          v-bind:value="data.value"
          v-bind:name="data.name"
          type="color"
          pattern="#[a-f0-9]{6}"
          class="form-control"
           @input="changeValue($event.target.value)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import store from "../../store.js";

export default {
  name: "Color",
  data() {
    return {};
  },
  props: ["data"],
  computed: {},
  methods: {
    changeValue(value) {
     // console.log('hoang'+value);
      store.commit("changeValue", {
        value: value,
        name: this.$props.data.name
      });
    }
  }
};
</script>

<style scoped>
</style>
