// 原型继承

// superType
function SuperType (name) {
    this.name = name;
    this.colors = ["red","blue","green"];
}
super.prototype.getName = function() {
    console.log(this.name);
}

// SubType
function SubType (name,age) {
    SuperType.call(this,name); //第二次调用  覆盖掉原型中的属性方法 防止引用类型的属性 共享问题
    this.age = age;
}
SubType.prototype = new SuperType(); //第一次调用
SubType.prototype.constructor = SubType;

SubType.prototype.getAge = function() {
    console.log(this.age);
}

// 寄生组合继承

// SuperType
function SuperA(name) {
    this.name = name || '';
    this.colors = ["red","green","blue"];
}
SuperA.prototype.sayName = function() {
    console.log(this.name);
}

function SubA(name,age) {
    SuperA.call(this,name);
    this.age = age;
}

// 其一
(function(){
    // 创建一个没有实例方法的类
    var SuperB = function() {};
    SuperB.prototype = Animal.prototype;
    SubA.prototype = new SuperB();
})();

// 其二
function inherit(supertype,subtype) {
    var prototype = Object.create(super.prototype);
    subtype.prototype = prototype;
    subtype.prototype.constructor = subtype;
    
    var SuperB = function() {};
    SuperB.prototype = supertype.prototype;
    subtype.prototype = new SuperB();
}

//  观察者模式
function ObserverList() {
    this.observerList = [];
}
ObserverList.prototype.add = function(obj){
    this.observerList.push(obj);
}
ObserverList.prototype.removeAt = function(index){
    this.observerList.splice(index,1);
}
ObserverList.prototype.get = function(index){
    if(index > -1 && index < this.observerList.length)
        return this.observerList[index];
}
ObserverList.prototype.indexOf = function(index){
    var i = startIndex;
    while( i < this.observerList.length){
        if(this.observerList[i] === obj){
            return i;
        }
        i++;
    }
    return -1;
}
ObserverList.prototype.count = function(){
    return this.observerList.length;
}

function Subject() {
    this.observers = new ObserverList();
}
Subject.prototype.addOberser = function(observer) {
    this.observers.add(observer);
}
Subject.prototype.removeOberser = function(observer) {
    var index = this.observers.indexOf(observer);
    this.observers.removeAt(index,0);
}
Subject.prototype.notify = function(context){
    var observerCount = this.observers.count();
    for(var i = 0;i < observerCount;i++){
        this.observers.get(i).update(context);
    }
};

// 观察者
function Observer() {
    this.update = function() {
        // ...
    }
}