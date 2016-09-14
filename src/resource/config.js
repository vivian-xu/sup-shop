const vueResource = require('vue-resource');

export function configResource (Vue) {
  Vue.use(vueResource);
  Vue.http.options.root = '/api';
  // Vue.http.headers.common['X-API-Version'] = '1';
  // Vue.http.options.emulateHTTP = true;
};
