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