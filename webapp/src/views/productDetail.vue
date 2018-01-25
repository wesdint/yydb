<template>
  <page-main>
    <div class="header">
      奖品详情
    </div>
    <div class="banner">
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="url in banner" :key="url">
          <router-link to="/">
            <img class="banner_img" :src="url" alt="一元夺宝">
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="desc_wrap">
      <p class="t1">华为P9 64G 全网通</p>
      <p class="t2">总需：4888人次</p>
      <div class="percent">
        <div class="cur_percent" :style="{width: cur_percent}"></div>
      </div>
    </div>
  </page-main>
</template>

<script>
  export default {
    data () {
      return {
        banner: ['http://m2.tuniucdn.com/fb2/t1/G1/M00/8D/30/Cii9EFcdia-INVZlAAEFzbDp08kAAERegENfeMAAQXl888_w800_h0_c0_t0_w400_h300_c1_t0.jpg',
          'http://m1.tuniucdn.com/fb2/t1/G1/M00/8D/30/Cii9EFcdia-IH_7yAADeXoS-85YAAERegEOg8gAAN52593_w800_h0_c0_t0_w400_h300_c1_t0.jpg',
          'http://m4.tuniucdn.com/fb2/t1/G1/M00/8D/30/Cii9EVcdia6IZMp-AAHy9ro9c8oAAERegEWszMAAfMO386_w800_h0_c0_t0_w400_h300_c1_t0.jpg'],
        cur_percent: '50%'
      }
    }
  }
</script>

<style lang="less" scoped>
 .t1 {
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
   color: #444;
   font-size: 16px;
   text-align: left;
 }
 .t2 {
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
   color: #999;
   font-size: 12px;
   text-align: left;
 }
.header {
  font-size: 16px;
  height: 0.8rem;
  line-height: 0.8rem;
  background-color: #F7F7F7;
  border-bottom: 2px solid #e0e0e0;
}
.banner {
  height: 4rem;
  .banner_img {
    width: 100%;
    max-height: 4rem;
  }
}
.desc_wrap {
  padding: 10px;
}
  .percent {
    position: relative;
    width: 100%;
    height: 8px;
    margin-top: 10px;
    background-color: #e0e0e0;
    border-radius: 4px;
    .cur_percent {
      width: 10%;
      height: 8px;
      border-radius: 5px;
      background: -webkit-linear-gradient(left, #fdca2d, #ff9600);
    }
  }
</style>
