const request = require('../lib/request.js');
const {
  config
} = require('../lib/util.js');

const API_BASE = config.apiBase;
const ERROR_ACTION_URL = 'ERROR_ACTION_URL';

module.exports = {
  query(values, action = 'def') {
    let map = {
      // 端午活动排行榜
      'duanwu/ranking/list': '/activity/getActivityInvestList',
      // 蜜芽转盘活动
      'miya/turntable/planList': '/activity/indexUplanList',
      'def': ''
    };
    let url = action && map[action];
    if (!url) {
      throw new Error(ERROR_ACTION_URL);
    }
    return request(url, {
      method: 'POST',
      form: values,
      baseUrl: API_BASE
    });
  }
};