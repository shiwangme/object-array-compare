const cp = require('child_process');

console.log(
  cp.execSync('node src/obj.js', {
    encoding: 'utf8'
  })
);
console.log(
  cp.execSync('node src/arr.js', {
    encoding: 'utf8'
  })
);
