<template>
  <div class="home">
    <menu-list></menu-list>
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <slider-nav></slider-nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import menuList from '@/layout/components/menu.vue';
import sliderNav from '@/layout/components/sliderNav.vue';

export default {
  components: {
    menuList,
    sliderNav,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/menu.less";
</style>
