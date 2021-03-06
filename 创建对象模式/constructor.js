//constructor
//每个对象在创建时都会自动拥有一个构造函数属性constructor
function Person(name){
    this.name=name
}
var p1= new Person("jj")
console.log(p1)
//constructor 指向了构造函数的本身。
console.log(p1.constructor === Person)


console.log(Person.prototype)
// {constructor: ƒ}原型对象里面包含了:constructor 和__proto__,constructor指向构造函数本身,__proto__指向上一级的原型对象
//      constructor: ƒ Person(name)
//      __proto__: Object