<template>
  <div data-key="border-style"
    class="form-group col-sm-12 d-inline-block"
  >
    <label for="input-model" class="control-label">Style</label>
    <div class="input">
      <div >
        <select  class="form-control custom-select">
          <option  value>Default</option>
          <option  value="solid">Solid</option>
          <option  value="dotted">Dotted</option>
          <option  value="dashed">Dashed</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectBox",
  data() {
    return {};
  },
  props: [],
  computed: {},
  methods: {}
};
</script>

<style scoped>
</style>
