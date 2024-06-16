<template>
  <van-nav-bar
      title="设置"
      left-arrow
      class="icon"
      style=""
      @click-left="onClickLeft"
  />
</template>

<script setup lang="ts">
const onClickLeft = () => history.back();
</script>

<style scoped>
.icon {
  --van-nav-bar-icon-color: black;
}
</style>