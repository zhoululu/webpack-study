# webpack-study
## 目的
* 个人学习之用
## HMR
### 简介
* 全称是hot module replacement
* 为了解决`开发环境`下改变一个文件之后所有文件重新构建的问题
### 使用方法
* devServer下添加 hot:true
  ```
   devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true, // 开启gzip
    open: true, // 构建完成之后自动打开浏览器
    hot: true // 开启热模块替换
  }
  ```
* 设置hot: true之后，发现只有改变样式文件才有HMR功能，改变js文件还是所有文件都构建了
* 样式文件支持HMR功能，是因为style-loader支持HMR
* js文件如果想要支持HMR功能，需要在入口文件监听其它js文件变化，即在index.js中监听其它js文件的变化。
  ```
  import test from './test'
  import '../css/index.css'
  console.log('加载了index.js')

  test()

  if(module.hot) {
    module.hot.accept('./test.js', function() {
      test()
    })
  }
  ```
* 设置hot:true之后，发现改变html文件内容之后，没有实时刷新功能了。此时应该修改entry。需要html-loader配合
  ```
  entry: ['./src/js/index.js', './src/html/index.html']
  ```
## SourceMap
### 简介
 * 打包后的文件和源文件的映射关系，代码出错时，为了方便找出哪里的源代码出错了
 * **[inline-|hidden-|eval-][nosource-][cheap-[module-]]source-map**
### 使用方法
* 开发环境
  * 配置文件增加一条配置devtool: 'eval-source-map'
* 生产环境
  * 配置文件增加一条配置devtool: 'source-map'