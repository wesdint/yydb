<template>
 <page-main>
   <div>
     <div class="header">
        <div class="left_icon"></div>
     </div>
     <div class="swipe_area">
       <div class="main_swipe">
         <mt-swipe :auto="3000">
           <mt-swipe-item v-for="url in mainAds" :key="url">
             <router-link to="/">
               <img class="swipe_img" :src="url" alt="一元夺宝">
             </router-link>
           </mt-swipe-item>
         </mt-swipe>
       </div>
       <div class="column_title">近期开奖</div>
       <div class="sup_swipe">
         <mt-swipe :auto="0" :show-indicators="false">
           <mt-swipe-item class="di_swipe clearfix" v-for="item in turnRecentLottery" :key="item[0].url">
             <div class="half_w">
               <router-link class="swipe_content" to="/" @click.native="log(item[0])">
                 <img class="swipe_img" :src="item[0].url" alt="一元夺宝">
                 <p class="t1">(第{{item[0].periods}}期) {{item[0].name}}</p>
                 <p class="t2">获奖者： {{item[0].winners}}</p>
                 <p class="t2">参与数： {{item[0].participatorNum}}</p>
               </router-link>
             </div>
             <div class="half_w">
               <router-link class="swipe_content" to="/" @click.native="log(item[1])">
                 <img class="swipe_img" :src="item[1].url" alt="一元夺宝">
                 <p class="t1">(第{{item[1].periods}}期){{item[1].name}}</p>
                 <p class="t2">获奖者： {{item[1].winners}}</p>
                 <p class="t2">参与数： {{item[1].participatorNum}}</p>
               </router-link>
             </div>
           </mt-swipe-item>
         </mt-swipe>
       </div>
       <div class="column_title">夺宝奖品</div>
     </div>
   </div>
 </page-main>
</template>

<script>
  export default {
    data () {
      return {
        mainAds: [
          'http://img2.tuniucdn.com/u/mainpic/pingdao/1yuanduobao/miwatch.jpg',
          'http://img2.tuniucdn.com/u/mainpic/pingdao/1yuanduobao/mxiaomi.jpg'
        ],
        recentLottery: [{
          url: 'http://m.tuniucdn.com/fb2/t1/G1/M00/51/2B/Cii9EFZnzDuIaFRMAAEE5ADz-kIAAA6ggDjc0wAAQT8270_w800_h0_c0_t0.jpg',
          id: '',
          periods: 1,
          name: '一枚康榨汁机',
          participatorNum: 20,
          winners: 'wesdint'
        }, {
          url: 'http://m.tuniucdn.com/filebroker/cdn/snc/05/bc/05bc382adc475f21066ded260d3be3fb_w800_h0_c0_t0.jpg',
          id: '',
          periods: 1,
          name: '博朗电动牙刷',
          participatorNum: 20,
          winners: 'wesdint'
        }, {
          url: 'http://m.tuniucdn.com/filebroker/cdn/snc/0b/43/0b435bfbca16fe778e5f5a6ae02a6d12_w800_h0_c0_t0.png',
          id: '',
          periods: 1,
          name: '飞利浦剃须刀',
          participatorNum: 20,
          winners: 'wesdint'
        }, {
          url: 'http://m.tuniucdn.com/fb2/t1/G1/M00/8D/03/Cii9EFcderKITynbAADUJjt-vAMAAERUgGe3d4AANQ-019_w800_h0_c0_t0.jpg',
          id: '',
          periods: 1,
          name: '华为p9 64G 时尚玫瑰金',
          participatorNum: 20,
          winners: 'wesdint'
        }],
        turnRecentLottery: []
      }
    },
    methods: {
      log (i) {
        console.log(i)
      }
    },
    mounted () {
      for (let i = 0; i < this.recentLottery.length; i = i + 2) {
        let temArr = []
        temArr.push(this.recentLottery[i])
        temArr.push(this.recentLottery[i + 1])
        this.turnRecentLottery.push(temArr)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .t1 {
    width: 100%;
    font-size: 14px;
    color: #333;
    text-align: left;
    padding: 0 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .t2 {
    width: 100%;
    color: #999;
    font-size: 12px;
    text-align: left;
    padding: 0 8px;
  }
 .header {
   position: relative;
   width: 100%;
   height: 0.9rem;
   box-sizing: border-box;
   background-color: #fd564b;
   padding-left: 20px;
   .left_icon {
     display: inline-block;
     width: 100%;
     height: 0.9rem;
     background: url(../assets/mainicon.png) no-repeat left center/100px 25px;
   }
 }
 .column_title {
   font-size: 14px;
   font-weight: bold;
   text-align: left;
   background-color: #fff;
   padding: 10px;
   color: #333;
 }
 .main_swipe {
   height: 2.4rem;
   width: 100%;
   border-bottom: 1px solid #e0e0e0;
   .swipe_img {
     width: 100%;
     height: 100%;
   }
 }
  .sup_swipe {
    height: 3rem;
    width: 100%;
    padding: 0 10px 10px 10px;
    border-bottom: 1px solid #e0e0e0;
    .swipe_img {
      width: 100%;
      max-height: 80px;
    }
  }
  .di_swipe {
    height: 3rem;
  }
  .half_w {
    font-size: 12px;
    float: left;
    width: 50%;
    &:first-child {
      padding-right: 5px;
    }
    &:last-child {
      padding-left: 5px;
    }
    .swipe_content {
      display: block;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
    }
  }
</style>
