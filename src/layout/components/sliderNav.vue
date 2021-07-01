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
        <a-breadcrumb-item>{{currentRoute[0].meta.title}}</a-breadcrumb-item>
          <a-breadcrumb-item>
            <router-link :to="{name: currentRoute[1].name}">
              {{currentRoute[1].meta.title}}
        </router-link>
          </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li>{{$store.state.user.username}}<a-icon type="down" /></li>
      <li class="logo-out" @click="logout">退出登录</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: this.$router.currentRoute.matched,
    };
  },
  mounted() {
    console.log('$router', this.$router);
    console.log('$route', this.$route);
  },
  watch: {
    $route() {
      this.currentRoute = this.$router.currentRoute.matched;
      console.log(this.currentRoute);
    },
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
    logout() {
      this.$store.dispatch('logout');
      this.$router.push({
        name: 'Login',
      });
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/menu.less";
</style>
