<template>
    <div class="feature-box media align-items-center parent">
        <div class="feature-icon mr-4 mr-md-3 mr-lg-4"><i :class="widget.setting.icon"></i></div>
        <div class="feature-content media-body">
            <h2 v-bind:data-editAble="true" >{{widget.setting.title}}</h2>
            <p data-editable="true" >{{widget.setting.description}}</p>
        </div>
    </div>
</template>

<script>


export default {
  name: "Support",
  props:['widget'],

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
