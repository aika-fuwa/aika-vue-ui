## 特点

1.都支持tree-shaking
2.webpack支持splitChunk来做按需加载，rollup不行
3.都可以使用serve来支持开发环境
4.都可以进行打包和压缩
5.rollup不需要babel就可以使用ES6（ES2015），使用起来非常舒服
6.rollup都是plugin，使用方便
  webpack中有loader和plugin都概念，可能让人容易混淆
7.rollup可以自定义配置文件，可以和webpack一样来创建如base、dev、prod等包来区分不同环境
8.rollup打包的时候可以指定format，即打包文件的模块，如cjs，umd等
  个人觉得比webpack要舒服很多
9.rollup生态环境还是比不上webpack，后期可以期待

本次采用webpack开发的原因就是周边生态及相关vue、ts提供的插件还不够成熟稳定，因此放弃了使用rollup的想法，后期可以期待一下！


    













