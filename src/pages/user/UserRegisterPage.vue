<template>
  <van-nav-bar title="注册小米账号">
    <template #left>
      <van-icon name="arrow-left" style="color: black" @click="onClick" />
    </template>
  </van-nav-bar>
  <van-form @submit="onSubmit" style="margin-top: 20px">
    <van-cell-group inset>
      <van-field
          v-model="username"
          name="username"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="password"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
          v-model="checkPassword"
          type="password"
          name="checkPassword"
          placeholder="确认密码"
          :rules="[{ required: true, message: '请填写确认密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        注册
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import myAxios from "../../plugins/myAxios.ts";
import { showToast } from 'vant';

const username = ref('');
const password = ref('');
const checkPassword = ref('');

const onClick = () => history.back();

const onSubmit = (values) => {
  console.log('submit', values);
  myAxios.post('/user/register', values)
  .then(function (response) {
    if (response.code === 0) {
      console.log('/user/register succeed', response);
      showToast('注册成功');
    } else {
      console.log('/user/register error', response);
      showToast('注册失败');
    }
  })
  .catch(function (error) {
    console.log('/user/register error', error);
    showToast('注册失败');
  })
};
</script>

<style scoped>

</style>