# fe-codebase

front-end codebase

## Build Setup

atom 插件可以安装：

`linter-eslint`

`language-babel`,

`language-vue`,

`editorconfig`,

.......... 等等

need node 4.0+

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# run a local server for mock-data
npm run server

# build for production with minification
npm run build

# release and public
npm run public

```

第一次 `pull` 代码之后先 `npm install -d` 安装项目依赖；

开发环境 `npm run dev`，默认在本地 `8080` 端口，如果后端 API 暂不可用可以使用本地 `mock-server`，`npm run server`；

## 目录结构

`babelrc` `.editorconfig` `.eslintrc.js` `.gitignore` `package.json` 均为配置文件（不需要管）；

`config.js` 开发和发布的配置文件；

`index.html` html 文件；

### build 文件夹
主要为 `webpack` 和开发的配置文件（不需要管）；

### mock
主要为 `mock data` 的本地 `server`，`api.js` 里面可以根据接口自己添加接口数据；

### static
配置的静态文件存放

### src
开发代码的文件夹，项目代码全在里面；

#### assets
静态文件；

##### images
图片文件；

##### styles
全局 style 文件；

- `_main.scss` 全局 style；
- `__normalize.scss` 对不同浏览器对 html 标签 style 差别的 reset；
- `_variables.scss` 样式变量，如：颜色，尺寸变量等等；

#### components
组件以及页面代码；

- App.vue 根节点组件

##### common
通用组件代码，比如 `Header`，`Slider` 等等；

##### views
页面级组件；

#### resource
API 接口文件；

#### routes
前端路由配置；

#### utils
工具函数；

#### main.js
入口文件，做配置等等；

------------

## 规范部分

### scss
一些 颜色、字号、尺寸 等尽量使用 `src/assets/styles/_variables.scss` 中的变量，没有的可以声明一个，在组件的 `style` 中 `import` `_variables` 即可；

### javascript
js 尽量使用 es6 的语法，项目中使用 `eslintrc` 作了代码规范，有 atom 插件的话会在编辑器提示，同时 webpack 有预编译功能，代码规范将回编译报错；

工具函数从 `utils` 中获取，没有的可以加上；

#### vue
。。。
