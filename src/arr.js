const assert = require('assert');
const lib = require('./_lib');
const json = require('./_json');

const { data: { list: result = [] } = {} } = json;

console.time('test');
for (let i = 0; i < 1e4; i += 1) {
  // Array
  lib.setData({
    [`sub${i}`]: []
  });

  // 赋值
  lib.setData({ [`sub${i}`]: lib.data[`sub${i}`].concat(result) });

  // 取值
  const keys = lib.data[`sub${i}`].map((x, index) => ({ index, id: x.id }));
  keys.forEach((key) => {
    assert.ok(lib.data[`sub${i}`][key.index].id === key.id);
  });
}
console.timeEnd('test');
