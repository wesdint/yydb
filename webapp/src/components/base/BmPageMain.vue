<template>
  <div class="page-main">
    <div class="page-main-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .page-main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    &-content {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
</style>

<script>
  export default {
    name: 'bm-page-main'
  }
</script>