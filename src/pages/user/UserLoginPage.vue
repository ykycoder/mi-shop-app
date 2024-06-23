<template>
  <van-nav-bar>
    <template #left>
      <van-icon name="arrow-left" style="color: black" @click="onClick" />
    </template>
  </van-nav-bar>
  <van-form @submit="onSubmit">
    <img class="logo" src="../../assets/logo.png"/>
    <div class="title">小米账号登录</div>
    <van-cell-group inset>
      <van-field
          v-model="username"
          name="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block color="#ff5c00" native-type="submit">
        登录
      </van-button>
    </div>
    <a class="register" href="/user/register">注册</a>
  </van-form>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from "vue";
import myAxios from "../../plugins/myAxios.ts";
import {showToast} from "vant";

const router = useRouter();

const username = ref('');
const password = ref('');

const onClick = () => history.back();

const onSubmit = async () => {
  const res = await myAxios.post('/user/login', {
    username: username.value,
    password: password.value
  })
  console.log(res, '用户登录');
  if (res.code === 0 && res.data) {
    showToast('登录成功');
    router.replace('/');
  } else {
    showToast('登录失败');
  }
};
</script>

<style scoped>
.logo {
  height: 56px;
  display: flex;
  margin: 80px auto 0;
}

.title {
  margin: 20px 139px 50px;
}

.register {
  margin: 30px 171px;
  color: #757575;
}
</style>