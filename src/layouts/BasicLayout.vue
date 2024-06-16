<template>
  <div id="content">
    <router-view/>
  </div>
  <van-tabbar route active-color="#ff6700">
    <van-tabbar-item to="/" v-model="index">
      <span>首页</span>
      <template #icon="props">
        <van-icon :name="props.active ? 'wap-home' : 'wap-home-o'"/>
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/category" v-model="category">
      <span>分类</span>
      <template #icon="props">
        <van-icon :name="props.active ? 'bars' : 'list-switch'"/>
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/cart" v-model="cart">
      <span>购物车</span>
      <template #icon="props">
        <van-icon :name="props.active ? 'shopping-cart' : 'shopping-cart-o'"/>
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/user" v-model="user">
      <span>我的</span>
      <template #icon="props">
        <van-icon :name="props.active ? 'user' : 'user-o'"/>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

const onClickLeft = () => {
  router.push('/');
};
</script>

<style scoped>
</style>