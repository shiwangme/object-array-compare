const assert = require('assert');
const lib = require('./_lib');
const json = require('./_json');

const { data: { list: result = [] } = {} } = json;

console.time('test');
for (let i = 0; i < 1e4; i += 1) {
  // Object
  lib.setData({
    [`sub${i}`]: {}
  });

  // 赋值
  result.forEach((item) => {
    const key = `sub${i}.${item.id}`;
    lib.setData({ [key]: item });
  });

  // 取值
  const keys = Object.keys(lib.data[`sub${i}`]);
  keys.forEach((key) => {
    assert.ok(typeof lib.data[`sub${i}`][key] === 'object');
  });
}
console.timeEnd('test');
