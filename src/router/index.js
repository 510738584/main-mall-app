import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/layout/Home.vue';
import Login from '@/layout/Login.vue';
import store from '@/store';
import getMenuRoute from '@/utils/permission';

Vue.use(VueRouter);

const asyncRouterMap = [{
  path: '/product',
  name: 'Product',
  meta: {
    title: '商品',
    hidden: false,
    icon: 'bold',
  },
  component: Home,
  children: [{
    path: '/list',
    name: 'ProductList',
    meta: {
      title: '商品列表',
      hidden: false,
      icon: 'unordered-list',
    },
    component: () => import('@/views/page/ProductList.vue'),
  },
  {
    path: '/productAdd',
    name: 'ProductAdd',
    meta: {
      title: '新增商品',
      hidden: false,
      icon: 'file-add',
    },
    component: () => import('@/views/page/ProductAdd.vue'),
  },
  {
    path: '/category',
    name: 'Category',
    meta: {
      title: '商品类目',
      hidden: false,
      icon: 'project',
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
    hidden: false,
    icon: 'home',
  },
  children: [{
    path: '/index',
    name: 'Index',
    meta: {
      title: '统计',
      hidden: false,
      icon: 'apartment',
    },
    component: () => import('@/views/page/Index.vue'),
  }],
},
{
  path: '/login',
  name: 'Login',
  meta: {
    title: '登录',
    hidden: true,
  },
  component: Login,
},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

let isAddRoutes = false;
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.user.username && store.state.user.appkey && store.state.user.role) {
      if (!isAddRoutes) {
        const menuRoutes = getMenuRoute(store.state.user.role, asyncRouterMap);
        // router.addRoute(menuRoutes);
        // menuRoutes.forEach((item) => {
        //   router.addRoute(item);
        // });
        store.dispatch('changeMenuRoutes', routes.concat(menuRoutes)).then(() => {
          menuRoutes.forEach((item) => {
            router.addRoute(item);
          });
          next();
        });
        isAddRoutes = true;
      }
      return next();
    }
    next('/login');
  }
  return next();
});

export default router;
