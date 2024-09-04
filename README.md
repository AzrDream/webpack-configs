# 工程化相关
### 记录工程化相关的学习过程
1. **CMJ和ESM的区别**
   - CMJ：代码实现
   - ESM：解释ESM的定义和应用。
2. **ESLint**
   - ESLint的安装和使用
   - 直接npm install，注意eslint9.0以上版本，默认的配置文件名称已经从 .eslintrc.* 改为了 eslint.config.js
   - structuredClone 是一个新的原生方法，用于深度克隆 JavaScript 对象，只有在较新的 Node.js 版本中才可用。如果你使用的是较旧的 Node.js 版本（低于 v17.0.0），建议更新到最新的 LTS 版本或至少 v17.0.0 以上。
3. **ESLint-airbnb**
   - ESLint的规则非常庞大，全部自定义过于麻烦 
   - 一般我们继承其他企业开源的方案来简化配置 
   - 这方面做的比较好的是一家叫Airbnb的公司，他们在开发前端项目的时候自定义了一套开源规则，受到全世界的认可 
   - 我们只需要安装它即可,不用安装eslint,因为它包含了eslint
4. **webpack-scope-hoisting**
   - 	scope hoisting 是 webpack 的内置优化，它是针对模块的优化，在生产环境打包时会自动开启。在未开启scope hoisting时，webpack 会将每个模块的代码放置在一个独立的函数环境中，这样是为了保证模块的作用域互不干扰。
	-	而 scope hoisting 的作用恰恰相反，是把多个模块的代码合并到一个函数环境中执行。在这一过程中，webpack 会按照顺序正确的合并模块代码，同时对涉及的标识符做适当处理以避免重名。
	-	这样做的好处是减少了函数调用，对运行效率有一定提升，同时也降低了打包体积。
	-	但 scope hoisting 的启用是有前提的，如果遇到某些模块多次被其他模块引用，或者使用了动态导入的模块，或者是非 ESM 的模块，都不会有 scope hoisting。