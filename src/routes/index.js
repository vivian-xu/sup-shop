export function configRouter (router) {
  router.map({
    // 线路列表
    '/trips': {
      name: 'trips',
      component: function (resolve) {
        require(['../components/views/Trips/index.vue'], resolve);
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
    // 线路详情
    '/trips/:id': {
      name: 'tripDetail',
      component: function (resolve) {
        require(['../components/views/TripDetail/index.vue'], resolve);
      }
    },
    // 装备详情
    '/equipments/:id': {
      name: 'equipmentDetail',
      component: function (resolve) {
        require(['../components/views/EquipmentDetail/index.vue'], resolve);
      }
    },
    // 培训详情
    '/trainings/:id': {
      name: 'trainingDetail',
      component: function (resolve) {
        require(['../components/views/TrainingDetail/index.vue'], resolve);
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
    '/': '/trips'
  });
};

// function createPath(view) {
//   return `../components/views/${view}/index.vue`;
// }
