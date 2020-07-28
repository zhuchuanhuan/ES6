// 二、AMD
// 基于commonJS规范的nodeJS出来以后，服务端的模块概念已经形成，很自然地，大家就想要客户端模块。而且最好两者能够兼容，
// 一个模块不用修改，在服务器和浏览器都可以运行。但是，由于一个重大的局限，使得CommonJS规范不适用于浏览器环境。
// 还是上面的代码，如果在浏览器中运行，会有一个很大的问题，你能看出来吗？

// 　　var math = require('math');
// 　　math.add(2, 3);

// 第二行math.add(2, 3)，在第一行require('math')之后运行，因此必须等math.js加载完成。也就是说，如果加载时间很长，
// 整个应用就会停在那里等。您会注意到 require 是同步的。
// 这对服务器端不是一个问题，因为所有的模块都存放在本地硬盘，可以同步加载完成，等待时间就是硬盘的读取时间。
// 但是，对于浏览器，这却是一个大问题，因为模块都放在服务器端，等待时间取决于网速的快慢，可能要等很长时间，
// 浏览器处于"假死"状态。
// 因此，浏览器端的模块，不能采用"同步加载"（synchronous），只能采用"异步加载"（asynchronous）。这就是AMD规范诞生的背景。
// CommonJS是主要为了JS在后端的表现制定的，他是不适合前端的，AMD(异步模块定义)出现了，它就主要为前端JS的表现制定规范。


// AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。它采用异步方式加载模块，
// 模块的加载不影响它后面语句的运行。
// 所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。
// AMD也采用require()语句加载模块，但是不同于CommonJS，它要求两个参数：

// 　　require([module], callback);

// 第一个参数[module]，是一个数组，里面的成员就是要加载的模块；第二个参数callback，则是加载成功之后的回调函数。
// 如果将前面的代码改写成AMD形式，就是下面这样：

// 　　require(['math'], function (math) {
// 　　　　math.add(2, 3);
// 　　});

// math.add()与math模块加载不是同步的，浏览器不会发生假死。所以很显然，AMD比较适合浏览器环境。
// 目前，主要有两个Javascript库实现了AMD规范：require.js和curl.js。

//浏览器端专用，异步加载
// 第一个参数[module]，是一个数组，里面的成员就是要加载的模块；第二个参数callback，则是加载成功之后的回调函数。
// 就是下面这样：

// 　　require(['math'], function (math) {
// 　　　　math.add(2, 3);
// 　　});


// 基础语法
// 定义暴露模块
        // 定义没有依赖的模块
        define(function(){
            return 模块
        })
        // 定义有依赖的模块
        define(['module1','module2'],function(m1,m2){
            return 模块
        })
//引入使用模块
require(['module1','module2'],function(m1,m2){
    // 使用 m1/m2
})


{/* <script src="1.js"></script>
　　<script src="2.js"></script>
　　<script src="3.js"></script>
　　<script src="4.js"></script>
　　<script src="5.js"></script>
　　<script src="6.js"></script> */}

// 这样的写法有很大的缺点。首先，加载的时候，浏览器会停止网页渲染，加载文件越多，网页失去响应的时间就会越长；
// 其次，由于js文件之间存在依赖关系，因此必须严格保证加载顺序（比如上例的1.js要在2.js的前面），
// 依赖性最大的模块一定要放到最后加载，当依赖关系很复杂的时候，代码的编写和维护都会变得困难。

// require.js的诞生，就是为了解决这两个问题
// 　　（1）实现js文件的异步加载，避免网页失去响应；
// 　　（2）管理模块之间的依赖性，便于代码的编写和维护
//实现(浏览器端)
// Require.js
// http://www.requirejs.cn/