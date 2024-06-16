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
  <van-tree-select
      v-model:main-active-index="activeIndex"
      height="55vw"
      :items="items"
  >
    <template #content>
      <van-image
          v-if="activeIndex === 0"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
      />
      <van-image
          v-if="activeIndex === 1"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg"
      />
    </template>
  </van-tree-select>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {showToast} from "vant";
import {useRouter} from "vue-router";

const activeIndex = ref(0);
const items = [{ text: '分组 1' }, { text: '分组 2' }];
const value = ref('');

const router = useRouter();

const onClick = () => {
  router.push('/search');
};
const onSearch = (val) => showToast(val);
const onCancel = () => showToast('取消');
</script>

<style scoped>

</style>