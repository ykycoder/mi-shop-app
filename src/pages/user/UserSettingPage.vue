<template>
  <template v-if="user">
    <van-nav-bar
        title="设置"
        left-arrow
        class="icon"
        @click-left="onClickLeft"
    />
    <van-cell center is-link to="/user/info">
      <template #title>
        <div class="userInfo">
          <van-image
              round
              width="50"
              height="50"
              :src="user.face"
          />
          <div class="username">{{ user.username }}</div>
        </div>
      </template>
    </van-cell>
    <van-cell title="密保手机" :value="user.mobile"/>
    <van-cell title="收货地址"/>
    <van-cell style="margin-top: 10px">
      <template #title>
        <div class="btn" @click="doLogoutClick">退出账号</div>
      </template>
    </van-cell>
    <van-popup
        v-model:show="showBottom"
        position="bottom"
        :style="{ height: '20%' }"
    >
      <div class="title">退出账号</div>
      <div class="check">确定要退出该账号吗？</div>
      <van-button class="leftBtn" size="small" round plain hairline type="default" @click="doLeftClick">
        取消
      </van-button>
      <van-button class="rightBtn" size="small" round plain hairline type="default" @click="doRightClick">
        退出
      </van-button>
    </van-popup>
  </template>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../../services/user.ts";
import myAxios from "../../plugins/myAxios.ts";
import {showToast} from "vant";

const user = ref();
const showBottom = ref(false);

onMounted(async () => {
  user.value = await getCurrentUser();
})

const onClickLeft = () => history.back();

const doLogoutClick = () => {
  showBottom.value = true;
};

const doLeftClick = () => {
  showBottom.value = false;
}

const doRightClick = async () => {
  const res = await myAxios.post('/user/logout');
  console.log(res, '用户退出');
  if (res.code === 0 && res.data) {
    showToast('退出成功');
    showBottom.value = false;
    window.location.href = '/';
  } else {
    showToast('退出失败');
  }
}
</script>

<style scoped>
.icon {
  --van-nav-bar-icon-color: black;
}

.userInfo {
  display: flex;
}

.username {
  margin-top: 10px;
  margin-left: 15px;
  font-weight: bold;
}

.btn {
  display: flex;
  margin-left: 145px;
}

.title {
  margin: 10px 165px 10px;
  font-size: 10px;
}

.check {
  margin: 10px 145px 10px;
  font-size: 8px;
  color: #b0b0b0;
}

.leftBtn {
  width: 100px;
  margin-left: 60px;
  margin-top: 20px;
}

.rightBtn {
  width: 100px;
  margin-left: 60px;
  margin-top: 20px;
  color: red;
}
</style>