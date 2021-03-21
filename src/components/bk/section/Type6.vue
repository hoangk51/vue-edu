<template>
       <div class="newletter-subscribe-container">
    <div class="container">
        <div class="newletter-subscribe">
            <div id="boxes-normal" class="newletter-container">
                <div style="" id="dialog-normal" class="window">
                    <div class="row">
                        <div class="col-md-7 col-sm-12 col-sms-12">
                            <div class="newletter-title">
                                <h6>Subscribe to our Newsletter</h6>
                                <h3>Subscribe to our newsletter and know first about all the promotions and discounts. Be always trendy.</h3>                   
                            </div>
                        </div>
                        <div class="col-md-5 col-sm-12 col-sms-12">
                            <div class="box-content newleter-content">
                                <div id="frm_subscribe-normal">
                                    <form name="subscribe" id="subscribe">
                                        <input type="text" value="" name="subscribe_email" id="subscribe_email" placeholder="Enter you email address here...">
                                        <input type="hidden" value="" name="subscribe_name" id="subscribe_name">
                                        <a class="btn" onclick="email_subscribe()">Subscribe</a>
                                           
                                    </form>
                                </div><!-- /#frm_subscribe -->
                                <div id="notification-normal"></div>
                            </div><!-- /.box-content -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: "Type6",
  components: {
  },
  props: ["section", "sectionIndex"],
  computed: {
  }
};
</script>