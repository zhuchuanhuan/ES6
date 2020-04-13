// IIFE（ 立即调用函数表达式）是一个在定义时就会立即执行的  JavaScript 函数。
(function () { 
    var name = "Barry";
})();
// 无法从外部访问变量 name
name // 抛出错误："Uncaught ReferenceError: name is not defined"


var result = (function () { 
    var name = "Barry"; 
    return name; 
})(); 
// IIFE 执行后返回的结果：
result; // "Barry"
// 这是一个被称为 自执行匿名函数 的设计模式，主要包含两部分。第一部分是包围在 圆括号运算符 () 里的一个匿名函数，
// 这个匿名函数拥有独立的词法作用域。这不仅避免了外界访问此 IIFE 中的变量，而且又不会污染全局作用域。
// 第二部分再一次使用 () 创建了一个立即执行函数表达式，JavaScript 引擎到此将直接执行函数。


( function($){
    //代码块
})(jQuery)