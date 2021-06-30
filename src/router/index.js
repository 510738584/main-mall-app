import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/layout/Home.vue';
import Login from '@/layout/Login.vue';
import store from '@/store';
import getMenuRoute from '../utils/permission';

Vue.use(VueRouter);

const asyncRouterMap = [{
  path: '/product',
  name: 'Product',
  meta: {
    title: '商品',
  },
  component: Home,
  children: [{
    path: '/list',
    name: 'ProductList',
    meta: {
      title: '商品列表',
    },
    component: () => import('@/views/page/ProductList.vue'),
  },
  {
    path: '/productAdd',
    name: 'ProductAdd',
    meta: {
      title: '新增商品',
    },
    component: () => import('@/views/page/ProductAdd.vue'),
  },
  {
    path: '/category',
    name: 'Category',
    meta: {
      title: '商品类目',
    },
    component: () => import('@/views/page/Category.vue'),
  },
  ],
}];

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  meta: {
    title: '首页',
  },
  children: [{
    path: 'index',
    name: 'Index',
    meta: {
      title: '统计',
    },
    component: () => import('@/views/page/Index.vue'),
  }],
},
{
  path: '/login',
  name: 'Login',
  meta: {
    title: '登录',
  },
  component: Login,
},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let isAddRoutes = false;
  if (to.path !== '/login') {
    if (store.state.user.username && store.state.user.email && store.state.user.role) {
      if (!isAddRoutes) {
        const menuRoutes = getMenuRoute(store.state.user.role, asyncRouterMap);
        router.addRoutes(menuRoutes);
        store.dispatch('changeMenuRoutes', routes.concat(menuRoutes));
        isAddRoutes = true;
      }
      return next();
    }
    next('/login');
  }
  return next();
});

export default router;
