<template>
  <template v-if="route.path.startsWith('/user/register') || route.path.startsWith('/user/login')">
    <UserLayout/>
  </template>
  <template v-else>
    <BasicLayout/>
  </template>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import BasicLayout from "./layouts/BasicLayout.vue";
import UserLayout from "./layouts/UserLayout.vue";

const route = useRoute();
</script>

<style scoped>
</style>
