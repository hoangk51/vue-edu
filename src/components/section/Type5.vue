<template>
    <section class="banner-section mb-half section" v-bind:data-section="sectionIndex">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-3 col-lg-3">
                    <div class="promo-banner hover-effect-1">
                        <a href="#">
                            <img src="https://demo.hasthemes.com/ororus-preview/ororus/assets/images/banners/banner-15.jpg" alt="Promo Banner">
                        </a>
                    </div> <!-- end of promo-banner -->
                </div>
                <div class="col-12 col-sm-12 col-md-5 col-lg-5 order-sm-3">
                    <div class="promo-banner hover-effect-1">
                        <a href="#">
                            <img src="https://demo.hasthemes.com/ororus-preview/ororus/assets/images/banners/banner-16.jpg" alt="Promo Banner">
                        </a>
                    </div> <!-- end of promo-banner -->
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                    <div class="promo-banner hover-effect-1 mb0">
                        <a href="#">
                            <img src="https://demo.hasthemes.com/ororus-preview/ororus/assets/images/banners/banner-17.jpg" alt="Promo Banner">
                        </a>
                    </div>
                </div> <!-- end of promo-banner -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </section>
</template>
<script>
export default {
  name: "Type5",
  components: {
  },
  props: ["section", "sectionIndex"],
  computed: {
  }
};
</script>