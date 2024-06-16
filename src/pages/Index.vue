<template>
  <van-search
    v-model="value"
    shape="round"
    placeholder="请输入搜索关键词"
    input-align="left"
    @click-input="onClick"
    @search="onSearch"
    @cancel="onCancel"
  />
  <van-swipe :autoplay="3000" lazy-render style="width: 100%; height: 200px">
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" width="100%" height="200px" />
    </van-swipe-item>
  </van-swipe>
  <p><b>精选推荐</b></p>
  <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
  >
    <template #tags>
      <van-tag plain type="primary">标签</van-tag>
      <van-tag plain type="primary">标签</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">按钮</van-button>
      <van-button size="mini">按钮</van-button>
    </template>
  </van-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { showToast } from 'vant';
import {useRouter} from "vue-router";

const value = ref('');
const router = useRouter();
const images = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
];
const onClick = () => {
  router.push('/search');
};
const onSearch = (val) => showToast(val);
const onCancel = () => showToast('取消');
</script>

<style scoped>

</style>