<template>
  <template v-if="user">
    <van-nav-bar
        left-text="个人资料"
        left-arrow
        class="icon"
        @click-left="onClickLeft"
    />
    <van-cell style="margin-top: 15px" center title="头像">
      <template #right-icon>
        <van-image
            round
            width="40"
            height="40"
            :src="user.face"
        />
      </template>
    </van-cell>
    <van-cell title="姓名" :value="user.username" />
    <van-cell title="性别" :value="getSex(user.sex)" />
    <van-cell title="生日" />
    <van-cell title="小米ID" />
    <van-cell title="修改密码" style="margin-top: 15px" />
    <van-cell title="收货地址" />
    <van-cell title="密保手机" />
    <van-cell title="第三方账号" />
  </template>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../../services/user.ts";

const user = ref();

onMounted(async () => {
  user.value = await getCurrentUser();
})

const getSex = (sex) => {
  if (sex === 0) {
    return '女';
  } else if (sex === 1) {
    return '男';
  } else {
    return '保密';
  }
}

const onClickLeft = () => history.back();
</script>

<style scoped>
.icon {
  --van-nav-bar-icon-color: black;
  --van-nav-bar-text-color: black;
}
</style>