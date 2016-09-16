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

module.exports = router;
