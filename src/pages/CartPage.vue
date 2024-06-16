<template>
  <van-nav-bar
      title="购物车"
      :right-text="text"
      @click-right="onClickRight"
  />
</template>

<script setup lang="ts">
let text = '编辑';

const onClickRight = () => {
  text = text === '编辑' ? '完成' : '编辑';
}
</script>

<style scoped>
van-nav-bar {
  --van-nav-bar-icon-color: black;
}
</style>