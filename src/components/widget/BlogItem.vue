<template>
  <div class="swiper-slide product-layout product-grid">
    <div class="product-thumb">
      <div class="product-inner with-bottom-padding">
        <div class="product-image">
          <a href="single-product.html">
            <img :src="widget.data.image" alt="Proin Lectus Ipsum" title="Proin Lectus Ipsum" />
          </a>
        </div>
        <!-- end of product-image -->
        <div class="product-caption">
          <h4 class="product-name">
            <a
              href="single-product.html"
              :style="cssa"
              data-subwidget="a"
              v-bind:data-editAble="true"
              v-bind:data-section-index="sectionIndex"
              v-bind:data-widget-index="widgetIndex"
            >{{widget.data.title}}</a>
          </h4>
          <p
            :style="cssp"
            data-subwidget="p"
            v-bind:data-editAble="true"
            v-bind:data-section-index="sectionIndex"
            v-bind:data-widget-index="widgetIndex"
          >{{widget.data.description}}</p>
        </div>
        <!-- end of product-caption -->
      </div>
      <!-- end of product-inner -->
    </div>
    <!-- end of product-thumb -->
  </div>
</template>

<script>
export default {
  name: "BlogItem",
  props: ["widget", "widgetIndex", "sectionIndex", "css"],
  computed: {
    cssa() {
      let css = this.$props.css.a;
      let newCss={}
      let list = ['backgroundColor','color','fontSize','fontWeight','marginTop','marginBottom','marginRight','marginLeft']
       list.forEach(function (property) {
          newCss[property] = css[property]
         if(css[property]){
           newCss[property] = css[property]
         }else{
           newCss[property]=""
         }

       })
      console.log(newCss);
      return newCss;
    },
    cssp() {
      let css = this.$props.css.p;
      console.log("cssp");
      return {
        backgroundColor: css.backgroundColor,
        color: css.color,
        fontSize: css.fontSize,
        fontWeight: css.fontWeight,
        marginTop: css.marginTop,
        marginBottom: css.marginBottom,
        marginRight: css.marginRight,
        marginLeft: css.marginLeft
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  background-color: var(backgroundColor);
  font-size:  var(backgroundColor);
  font-weight:  var(backgroundColor);
  margin-top:  var(marginTop);
  margin-bottom:  var(marginBottom);
  margin-right:  var(marginRight);
  margin-left:  var(marginLeft);
}
</style>
