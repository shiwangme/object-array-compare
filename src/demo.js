const assert = require('assert');
const lib = require('./_lib');
const json = require('./_json');

const { data: { list: result = [] } = {} } = json;
const keys = result.map((x) => x.id);

// Array
lib.setData({
  sub: []
});

// 赋值
lib.setData({ sub: lib.data.sub.concat(result) });

// 取值
keys.forEach((key) => {
  assert.ok(typeof lib.data.sub.find((x) => x.id === key) === 'object');
});
