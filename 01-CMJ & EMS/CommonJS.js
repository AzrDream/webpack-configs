// require函数的伪代码
function require(path) {
  if (该模块有缓存吗) {
    return 缓存结果;
  }
  function _run(exports, require, module, __filename, __dirname) {
    // 该代码会放到这里
  }

  var module = {
    exports: {}
  };

  _run.call(
    module.exports,
    module.exports,
    require,
    module,
    模块路径,
    模块所在目录
  );

  把 module.exports 加入到缓存;
  return module.exports;
}