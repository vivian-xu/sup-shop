import Vue from 'vue';
import VueRouter from 'vue-router';
import VueTouch from 'vue-touch';
import VueLazyload from 'vue-lazyload';
import FastClick from 'fastclick';
import App from './components/App';
import { configRouter } from './routes';
import { configResource } from './resource';
// import { lstorage } from './utils';
import { infiniteScroll } from './utils';

// 储存全局变量
window.store = {};

// dev start
/** 调试模式。
 * 打开 Vue.js 所有的日志与警告。
 * 在加载 Vue 之后立即同步的设置
 * 移动端调试
 */
Vue.config.debug = true;
Vue.config.silent = false;
Vue.config.devtools = true;
// 微信调试
// require('vconsole');
// dev end

// 滚动响应
Vue.use(infiniteScroll);

// 图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  try: 2 // default 1
});

// 移动端点击事件
Vue.use(VueTouch);

// 安装 vue-resource 配置
configResource(Vue);

// 安装，配置，使用，验证 路由
Vue.use(VueRouter);
const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  linkActiveClass: 'link-active'
});
configRouter(router);

// 登录验证的判断
// router.beforeEach(({to, next}) => {
//   const auth = lstorage.get('auth');
//   if (to.auth === 'customer' && !auth) {
//     to.router.replace({ path: '/404' });
//     return false;
//   }
//   if (to.auth === 'coach' && auth !== 'coach') {
//     to.router.replace({ path: '/404' });
//     return false;
//   }
//   next();
// });

const app = Vue.extend(App);

// 路由器会创建一个 App 实例，并且挂载到选择符 #root 匹配的元素上。
router.start(app, '#root');

// 移动端点击延迟优化
FastClick.attach(document.body);

/* eslint-disable no-new */
