/**
 * Created by jack on 2019/2/27.
 */



const path = require('path');//设置路径

module.exports = {//配置正式开始
    entry: './src/pages/index/index.js',//设置入口
    output: {//设置打包出口
        path: path.resolve(__dirname, 'dist'),//打包文件放在这个目录下
        filename: '[name].bundle.js'//打包文件名
    },
    module: {
        rules: []
    }
    ,
    plugins: [],//插件 相关配置
    //mode: 'development'//设置模式为开发者模式
    devServer: {
        open: true,
        port: 8082,
        contentBase: './',//设置根目录   配置端口，映射dist文件夹
        host: '192.168.43.106',//该配置项用于配置 DevServer的服务器监听地址。比如想让局域网的其他设备访问自己的本地服务，则可以在启动DevServer时带上 --host 0.0.0.0.
        //host: '192.168.8.106',//该配置项用于配置 DevServer的服务器监听地址。比如想让局域网的其他设备访问自己的本地服务，则可以在启动DevServer时带上 --host 0.0.0.0.
        //  host的默认值是 127.0.0.1, 下面我们也简单的配置下 host 属性。
        /* headers: {
         'X-foo': '112233'//该配置项可以在HTTP响应中注入一些HTTP响应头。
         },*/
        historyApiFallback: true,//该配置项属性是用来应对返回404页面时定向跳转到特定页面的。一般是应用在 HTML5中History API 的单页应用，比如在访问路由时候，访问不到该路由的时候，会跳转到index.html页面。
        hot: true,//该配置项是指模块替换换功能，DevServer 默认行为是在发现源代码被更新后通过自动刷新整个页面来做到实时预览的，
        //但是开启模块热替换功能后，它是通过在不刷新整个页面的情况下通过使用新模块替换旧模块来做到实时预览的。
        //"dev": "webpack-dev-server --progress --colors --devtool source-map --hot --inline",
        openPage: './product_details.html',
        //
        // proxy: {
        //     '/': {
        //         target: 'http://www.hebeihengfeng.com/'
        //     }
        // }
    },
    mode: 'development'
}
;
