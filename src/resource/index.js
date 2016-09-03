import { dSuccess, dError, baseFunction } from './base';

export { configResource } from './config';

// 获取数据
export function getCarousels (successCallback = dSuccess, errorCallback = dError) {
  baseFunction.bind(this)({
    successCallback,
    errorCallback,
    conf: {
      url: 'data',
      method: 'GET'
    },
    parser: (results) => results.map((item) => (
      {
        name: item.link_url,
        src: item.image_url
      }
    ))
  });
}
