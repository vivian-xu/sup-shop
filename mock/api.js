var express = require('express');
var router = express.Router();

// 获取 data
router.get('/trips', function (req, res) {
  setTimeout(() => {
    res.json(
      [
        {"id": 1, "title": "菲律宾皮划艇体验", "start_at": "2016.09.27", "duration": "2 天 1 夜", "location": "上海", "total_count": 20, "sell_count": 8, "available_cnt": 12, "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
        {"id": 1, "title": "菲律宾皮划艇体验", "start_at": "2016.09.27", "duration": "2 天 1 夜", "location": "上海", "total_count": 20, "sell_count": 8, "available_cnt": 12, "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
        {"id": 1, "title": "菲律宾皮划艇体验", "start_at": "2016.09.27", "duration": "2 天 1 夜", "location": "上海", "total_count": 20, "sell_count": 8, "available_cnt": 12, "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
        {"id": 1, "title": "菲律宾皮划艇体验", "start_at": "2016.09.27", "duration": "2 天 1 夜", "location": "上海", "total_count": 20, "sell_count": 8, "available_cnt": 12, "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
        {"id": 1, "title": "菲律宾皮划艇体验", "start_at": "2016.09.27", "duration": "2 天 1 夜", "location": "上海", "total_count": 20, "sell_count": 8, "available_cnt": 12, "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
        {"id": 1, "title": "菲律宾皮划艇体验", "start_at": "2016.09.27", "duration": "2 天 1 夜", "location": "上海", "total_count": 20, "sell_count": 8, "available_cnt": 12, "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
        {"id": 1, "title": "菲律宾皮划艇体验", "start_at": "2016.09.27", "duration": "2 天 1 夜", "location": "上海", "total_count": 20, "sell_count": 8, "available_cnt": 12, "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
        {"id": 1, "title": "菲律宾皮划艇体验", "start_at": "2016.09.27", "duration": "2 天 1 夜", "location": "上海", "total_count": 20, "sell_count": 8, "available_cnt": 12, "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
        {"id": 1, "title": "菲律宾皮划艇体验", "start_at": "2016.09.27", "duration": "2 天 1 夜", "location": "上海", "total_count": 20, "sell_count": 8, "available_cnt": 12, "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
        {"id": 2, "title": "菲律宾皮划艇体验", "start_at": "2016.11.01", "duration": "1 天", "location": "上海", "total_count": 20, "sell_count": 20, "available_cnt": 0, "price": 2330, "avatar_url": "/media/trips/avatar/ee8dc3e99d3644af9b974afd5006d22b.png"}
      ]
    );
  }, 1000);
});

router.get('/trainings', function (req, res) {
  res.json(
    [
      {"id": 1, "title": "SupPolo 大师训练课程", "mode": "室外授课", "start_at": "2016.09.27", "lessons_number": 20, "location": "上海", "total_count": 20, "sell_count": 8, "available_cnt": 12, "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
      {"id": 2, "title": "桨板球新手入门", "mode": "团体授课", "start_at": "2016.11.01", "lessons_number": 20, "location": "上海", "total_count": 20, "sell_count": 20, "available_cnt": 0, "price": 2330, "avatar_url": "/media/trips/avatar/ee8dc3e99d3644af9b974afd5006d22b.png"},
      {"id": 1, "title": "SupPolo 大师训练课程", "mode": "室外授课", "start_at": "2016.09.27", "lessons_number": 20, "location": "上海", "total_count": 20, "sell_count": 8, "available_cnt": 12, "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
      {"id": 2, "title": "桨板球新手入门", "mode": "团体授课", "start_at": "2016.11.01", "lessons_number": 20, "location": "上海", "total_count": 20, "sell_count": 20, "available_cnt": 0, "price": 2330, "avatar_url": "/media/trips/avatar/ee8dc3e99d3644af9b974afd5006d22b.png"},
      {"id": 1, "title": "SupPolo 大师训练课程", "mode": "室外授课", "start_at": "2016.09.27", "lessons_number": 20, "location": "上海", "total_count": 20, "sell_count": 8, "available_cnt": 12, "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
      {"id": 2, "title": "桨板球新手入门", "mode": "团体授课", "start_at": "2016.11.01", "lessons_number": 20, "location": "上海", "total_count": 20, "sell_count": 20, "available_cnt": 0, "price": 2330, "avatar_url": "/media/trips/avatar/ee8dc3e99d3644af9b974afd5006d22b.png"},
      {"id": 1, "title": "SupPolo 大师训练课程", "mode": "室外授课", "start_at": "2016.09.27", "lessons_number": 20, "location": "上海", "total_count": 20, "sell_count": 8, "available_cnt": 12, "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
      {"id": 2, "title": "桨板球新手入门", "mode": "团体授课", "start_at": "2016.11.01", "lessons_number": 20, "location": "上海", "total_count": 20, "sell_count": 20, "available_cnt": 0, "price": 2330, "avatar_url": "/media/trips/avatar/ee8dc3e99d3644af9b974afd5006d22b.png"},
      {"id": 1, "title": "SupPolo 大师训练课程", "mode": "室外授课", "start_at": "2016.09.27", "lessons_number": 20, "location": "上海", "total_count": 20, "sell_count": 8, "available_cnt": 12, "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
      {"id": 2, "title": "桨板球新手入门", "mode": "团体授课", "start_at": "2016.11.01", "lessons_number": 20, "location": "上海", "total_count": 20, "sell_count": 20, "available_cnt": 0, "price": 2330, "avatar_url": "/media/trips/avatar/ee8dc3e99d3644af9b974afd5006d22b.png"}
    ]
  );
});

router.get('/equipments', function (req, res) {
  res.json(
    [
      {"id": 1, "title": "Nalsh 护腕", "colors": ["red", "yellow", "green"], "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
      {"id": 2, "title": "Wallaman S-I 桨板", "colors": ["red"], "price": 2330, "avatar_url": "/media/trips/avatar/ee8dc3e99d3644af9b974afd5006d22b.png"},
      {"id": 1, "title": "Nalsh 护腕", "colors": ["red", "yellow", "green"], "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
      {"id": 2, "title": "Wallaman S-I 桨板", "colors": ["red"], "price": 2330, "avatar_url": "/media/trips/avatar/ee8dc3e99d3644af9b974afd5006d22b.png"},
      {"id": 1, "title": "Nalsh 护腕", "colors": ["red", "yellow", "green"], "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
      {"id": 2, "title": "Wallaman S-I 桨板", "colors": ["red"], "price": 2330, "avatar_url": "/media/trips/avatar/ee8dc3e99d3644af9b974afd5006d22b.png"},
      {"id": 1, "title": "Nalsh 护腕", "colors": ["red", "yellow", "green"], "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
      {"id": 2, "title": "Wallaman S-I 桨板", "colors": ["red"], "price": 2330, "avatar_url": "/media/trips/avatar/ee8dc3e99d3644af9b974afd5006d22b.png"},
      {"id": 1, "title": "Nalsh 护腕", "colors": ["red", "yellow", "green"], "price": 1980, "avatar_url": "/media/trips/avatar/ac8dc3e99d3644af9b974afd5006d06a.png"},
      {"id": 2, "title": "Wallaman S-I 桨板", "colors": ["red"], "price": 2330, "avatar_url": "/media/trips/avatar/ee8dc3e99d3644af9b974afd5006d22b.png"}
    ]
  );
});

router.get('/filters/:type', function (req, res) {
  setTimeout(() => {
    res.json([
              {
                "key": "Category",
                "display": "线路类型",
                "choices": [
                  {"id": 0, "display": "不限"},
                  {"id": 1, "display": "kayak独木舟"},
                  {"id": 2, "display": "canoe划艇"},
                  {"id": 3, "display": "sup桨板"},
                  {"id": 4, "display": "帆板"},
                  {"id": 5, "display": "OP小帆船"},
                  {"id": 6, "display": "帆船"},
                  {"id": 7, "display": "冲浪"},
                  {"id": 8, "display": "风筝冲浪"},
                  {"id": 9, "display": "赛艇"},
                  {"id": 10, "display": "SUP POLO"},
                  {"id": 11, "display": "KAKAY POLO"}
                ]
              },
              {
                "key": "level",
                "display": "难度系数",
                "choices": [
                  {"id": 0, "display": "不限"},
                  {"id": 1, "display": "一星"},
                  {"id": 2, "display": "二星"},
                  {"id": 3, "display": "三星"},
                  {"id": 4, "display": "四星"},
                  {"id": 5, "display": "五星"}
                ]
              },
              {
                "key": "client-age",
                "display": "适宜人群－年龄",
                "choices": [
                  {"id": 0, "display": "不限"},
                  {"id": 1, "display": "6 岁以下"},
                  {"id": 2, "display": "65 岁以上"}
                ]
              },
              {
                "key": "client-gender",
                "display": "适宜人群－性别",
                "choices": [
                  {"id": 0, "display": "不限"},
                  {"id": 1, "display": "男"},
                  {"id": 2, "display": "女"}
                ]
              }
            ]);
  }, 1000);
});

module.exports = router;
