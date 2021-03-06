let a = new set([1, 2, 3]);
let b = new set([2, 3, 4]);


//并集 [1,2,3,4]
let unique = new set([...a,...b]);
console.log(unique);

//交集 has
let inter = new set([...a].filter(x=>b.has(x)))
console.log(inter)


// 基本用法
// ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

// Set 本身是一个构造函数，用来生成 Set 数据结构。

const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
// 上面代码通过add方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值。

// Set 函数可以接受一个数组（或类似数组的对象）作为参数，用来初始化。

// 例一
var set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]

// 例二
var items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5

// 例三
function divs () {
  return [...document.querySelectorAll('div')];
}

var set = new Set(divs());
set.size // 56

// 类似于
divs().forEach(div => set.add(div));
set.size // 56
// 上面代码中，例一和例二都是Set函数接受数组作为参数，例三是接受类似数组的对象作为参数。

// 上面代码中，也展示了一种去除数组重复成员的方法。

// 去除数组的重复成员
[...new Set(array)]
// 向Set加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。Set内部判断两个值是否不同，使用的算法叫做“Same-value equality”，它类似于精确相等运算符（===），主要的区别是NaN等于自身，而精确相等运算符认为NaN不等于自身。

let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set // Set {NaN}
// 上面代码向Set实例添加了两个NaN，但是只能加入一个。这表明，在Set内部，两个NaN是相等。

// 另外，两个对象总是不相等的。

let set = new Set();

set.add({});
set.size // 1

set.add({});
set.size // 2
// 上面代码表示，由于两个空对象不相等，所以它们被视为两个值。






// Set实例的属性和方法
// Set结构的实例有以下属性。

// Set.prototype.constructor：构造函数，默认就是Set函数。
// Set.prototype.size：返回Set实例的成员总数。
// Set实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。

add(value)//：添加某个值，返回Set结构本身。
delete(value)//：删除某个值，返回一个布尔值，表示删除是否成功。
has(value)//：返回一个布尔值，表示该值是否为Set的成员。
clear()//：清除所有成员，没有返回值。
// 上面这些属性和方法的实例如下。

s.add(1).add(2).add(2);
// 注意2被加入了两次

s.size // 2

s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2);
s.has(2) // false
// 下面是一个对比，看看在判断是否包括一个键上面，Object结构和Set结构的写法不同。

// 对象的写法
var properties = {
  'width': 1,
  'height': 1
};

if (properties[someName]) {
  // do something
}

// Set的写法
var properties = new Set();

properties.add('width');
properties.add('height');

if (properties.has(someName)) {
  // do something
}
Array.from//方法可以将Set结构转为数组。

var items = new Set([1, 2, 3, 4, 5]);
var array = Array.from(items);
// 这就提供了去除数组重复成员的另一种方法。

function dedupe(array) {
  return Array.from(new Set(array));
}

dedupe([1, 1, 2, 3]) // [1, 2, 3]





// 遍历操作
// Set结构的实例有四个遍历方法，可以用于遍历成员。

keys()//：返回键名的遍历器
values()//：返回键值的遍历器
entries()//：返回键值对的遍历器
forEach()///：使用回调函数遍历每个成员
// 需要特别指出的是，Set的遍历顺序就是插入顺序。这个特性有时非常有用，
// 比如使用Set保存一个回调函数列表，调用时就能保证按照添加顺序调用。

keys()
values()
entries()

// keys方法、values方法、entries方法返回的都是遍历器对象（详见《Iterator 对象》一章）。
// 由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。

let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
// 上面代码中，entries方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等。

// Set结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法。

Set.prototype[Symbol.iterator] === Set.prototype.values
// true
// 这意味着，可以省略values方法，直接用for...of循环遍历Set。

let set = new Set(['red', 'green', 'blue']);

for (let x of set) {
  console.log(x);
}
// red
// green
// blue
forEach()

// Set结构的实例的forEach方法，用于对每个成员执行某种操作，没有返回值。

let set = new Set([1, 2, 3]);
set.forEach((value, key) => console.log(value * 2) )
// 2
// 4
// 6
// 上面代码说明，forEach方法的参数就是一个处理函数。该函数的参数依次为键值、键名、集合本身（上例省略了该参数）。另外，forEach方法还可以有第二个参数，表示绑定的this对象。

// （3）遍历的应用

// 扩展运算符（...）内部使用for...of循环，所以也可以用于Set结构。

let set = new Set(['red', 'green', 'blue']);
let arr = [...set];
// ['red', 'green', 'blue']
// 扩展运算符和Set结构相结合，就可以去除数组的重复成员。

let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];
// [3, 5, 2]
// 而且，数组的map和filter方法也可以用于Set了。

let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
// 返回Set结构：{2, 4, 6}

let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));
// 返回Set结构：{2, 4}
// 因此使用Set可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
// 如果想在遍历操作中，同步改变原来的Set结构，目前没有直接的方法，但有两种变通方法。一种是利用原Set结构映射出一个新的结构，然后赋值给原来的Set结构；另一种是利用Array.from方法。

// 方法一
let set = new Set([1, 2, 3]);
set = new Set([...set].map(val => val * 2));
// set的值是2, 4, 6

// 方法二
let set = new Set([1, 2, 3]);
set = new Set(Array.from(set, val => val * 2));
// set的值是2, 4, 6
// 上面代码提供了两种方法，直接在遍历操作中改变原来的Set结构。