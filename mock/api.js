var express = require('express');
var router = express.Router();

// 获取 data
router.get('/data', function (req, res) {
  res.json({
    code: 0,
    msg: 'ok',
    results: {
      data: []
    }
  });
});

module.exports = router;
