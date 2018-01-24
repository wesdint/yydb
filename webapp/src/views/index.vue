<template>
 <page-main>
   <div>
     <div class="header">
        <div class="left_icon"></div>
     </div>
     <div class="swipe_area">
       <mt-swipe :auto="4000">
         <mt-swipe-item>1</mt-swipe-item>
         <mt-swipe-item>2</mt-swipe-item>
         <mt-swipe-item>3</mt-swipe-item>
       </mt-swipe>
     </div>
   </div>
 </page-main>
</template>

<script>
  export default {
    mounted () {
      this.$toast('测试')
    }
  }
</script>

<style lang="less" scoped>
 .header {
   position: relative;
   width: 100%;
   height: 60px;
   box-sizing: border-box;
   background-color: #fd564b;
   padding-left: 20px;
   .left_icon {
     display: inline-block;
     width: 100%;
     height: 60px;
     background: url(../assets/mainicon.png) no-repeat left center/100px 25px;
   }
 }
</style>
