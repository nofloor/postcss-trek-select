function trekSelect(options = {}) {
  return {
    postcssPlugin: 'postcss-trek-select',
    Declaration(decl) {
      if (decl.value.indexOf('select(') > -1) {
        const regex = /select\((.+)\)/g;
        decl.value = decl.value.replace(regex, (whole, match) => {
          const vars = match.replace(/\s\s?/g, '').split(',');
          for (let i = 0, count = vars.length; i < count; i++) {
            if ('undefined' !== vars[i]) return vars[i];
          }
          return 'undefined';
        });
      }
    }
  }
}

trekSelect.postcss = true;

module.exports = trekSelect;