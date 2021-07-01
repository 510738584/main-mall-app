import Vue from 'vue';
import VCharts from 'v-charts-v2';
import * as echarts from 'echarts/lib/echarts';
import { GridComponent } from 'echarts/components';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/ant-design-vue';
import '@/assets/reset.less';

Vue.use(VCharts);
Vue.use(echarts);
echarts.use([GridComponent]);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
