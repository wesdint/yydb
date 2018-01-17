<template>
  <div class="loading-content">
    <div v-show="isShow" class="loading-mask">
      <mt-spinner v-show="isAnimate" class="spinner" type="triple-bounce" color="#2d7af7"></mt-spinner>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .loading-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20000;
    & .spinner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
  }
</style>

<script>
  export default {
    name: 'loading',
    data () {
      return {
        isShow: false,
        isAnimate: true
      }
    },
    methods: {
      open () {
        this.isShow = true
      },
      close () {
        this.isShow = false
      }
    }
  }
</script>
