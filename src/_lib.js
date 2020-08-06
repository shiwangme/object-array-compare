const data = {};

module.exports = {
  setData: (v) => {
    const keys = Object.keys(v);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      if (key.includes('.')) {
        Object.assign(data[key.split('.')[0]], { [key.split('.')[1]]: v[key] });
      } else {
        Object.assign(data, { [key]: v[key] });
      }
    }
  },
  data
};
