export function configRouter (router) {
  router.map({
    // 线路列表
    '/routes': {
      name: 'routes',
      component: function (resolve) {
        require(['../components/views/Routes/index.vue'], resolve);
      }
    },
    // 装备列表
    '/equipments': {
      name: 'equipments',
      component: function (resolve) {
        require(['../components/views/Equipments/index.vue'], resolve);
      }
    },
    // 培训列表
    '/trainings': {
      name: 'trainings',
      component: function (resolve) {
        require(['../components/views/Trainings/index.vue'], resolve);
      }
    },
    // 购物车
    '/cart': {
      name: 'cart',
      component: function (resolve) {
        require(['../components/views/Cart/index.vue'], resolve);
      }
    },
    // 个人中心
    '/profile': {
      name: 'profile',
      auth: 'customer',
      component: function (resolve) {
        require(['../components/views/Profile/index.vue'], resolve);
      }
    },

    // 404
    '/404': {
      name: 'notFound',
      component: function (resolve) {
        require(['../components/views/NotFound/index.vue'], resolve);
      }
    },
    '*': {
      name: 'notFound',
      component: function (resolve) {
        require(['../components/views/NotFound/index.vue'], resolve);
      }
    }
  });
  router.redirect({
    '/': '/routes'
  });
};

// function createPath(view) {
//   return `../components/views/${view}/index.vue`;
// }
