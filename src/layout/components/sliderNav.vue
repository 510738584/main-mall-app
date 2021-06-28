<template>
  <div class="main-header">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrums">
      <a-breadcrumb>
        <a-breadcrumb-item>商品</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">商品统计</a></a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li>{{$store.state.user.username}}<a-icon type="down" /></li>
      <li>退出登录</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/menu.less";
</style>
