export default {
  /**
   * @param key (String)
   * @param val (String)
   */
  set: function (key, val) {
    var _val = JSON.stringify(val);
    window.localStorage.setItem(key, _val);
    return true;
  },
  /**
   * @param key (String)
   * @param value (String)
   */
  get: function (key) {
    var _val = window.localStorage.getItem(key);
    if (_val === undefined) {
      return '';
    }
    return JSON.parse(_val);
  },
  /**
   * @param key (String)
   */
  delete: function (key) {
    return window.localStorage.removeItem(key);
  },
  clear: function () {
    return window.localStorage.clear();
  }
};
