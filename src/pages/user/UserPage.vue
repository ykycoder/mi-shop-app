<template>
  <van-nav-bar>
    <template #right>
      <van-icon name="setting-o" size="18" color="black" @click="onIconClick"/>
    </template>
  </van-nav-bar>
  <van-image
      round
      width="3rem"
      height="3rem"
      style="margin: 10px 0 0 20px"
      :src="user?.face"
      @click="onImageClick"
  />
  <div v-if="!user" class="userRegister" style="display: inline-block; vertical-align: top; margin: 20px 0 0 10px">
    <div style="display: inline-block" @click="onLoginClick">登录</div>&nbsp;
    <div style="display: inline-block" @click="onRegisterClick">免费注册</div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref, onMounted} from "vue";
import {getCurrentUser} from "../../services/user.ts";

const router = useRouter();

const user = ref();

onMounted(async () => {
  user.value = await getCurrentUser();
})

const onIconClick = () => {
  router.push('/user/setting');
}
const onImageClick = () => {
  router.push('/user/info');
}

const onRegisterClick = () => {
  router.push('/user/register');
}

const onLoginClick = () => {
  router.push('/user/login');
}
</script>

<style scoped>
</style>