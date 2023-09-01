'use strict';
// Object Literals
let circle = {
    radius: 1, // properties
    location: {
        x: 1,
        y: 2,
        orgin: {
            x: 0, y: 0,
            human: function () {
                console.log("Human Being");
            }
        }
    },
    draw: function () { // methods
        this.location.orgin.human()
        console.log("Circle shape ");
    },


}
circle.draw()
console.log(circle);
console.table(circle)



// Factory Functions 
function createCircle(radius) {
    return {
        radius,  // or  radius:radius,
        draw: () => {
            console.log("Draw");
        }
    }
}

console.log(createCircle(1));
createCircle().draw()



// Constructor Function 
/* 
make it as capital name 
generally we use this key we can access anywhere in window object
so we create using new object */

function Random(radius) {

    this.radius = radius,
        this.draw = function () {
            console.log("Draw from Radius");
        }
    console.log(this);
}

const another = new Random(1)
console.log(another);

// Constructor Property 
/* Every object can have thier own constructor property
and the refrence function that was used to create an Object 
*/

/* let x = {} // let x = new Object()
new String() // '',"",``
new Boolean() // true ,false 
new Number() // 1,2,3,......
console.log(another.constructor);
console.log(Random.constructor);
 */


// Functions are Objects in js 
console.log(Random.length);  //count the arguments
console.log(Random.name); // name of object

const Circle1 = new Function('radius', `
this.radius = radius,
this.draw = function () {
    console.log("Draw from Radius");
},
this.man={boy:"male" , girl :"female"},
console.log(this);
`)
// Refer free code camp docs 
// Circle1.call({},1,2,3,4)  //{} -> refer to the Object  1,2,3 -> arguments
// Circle1.apply({},[1,2,3,4])  // As same as call we can pass argument like pre defined array 
/* const circles = new Circle1(2)
console.log(circles);
Circle1.call({ Circle1 }, radius = 5)

console.log(circles); */

// Value type  or primitive types 
// -> numbers , string ,boolean , undefined , null , symbol 
let x = 10
let y = x; // Copy value of x
x = 20
console.log(x, y);
// example 
let number = 10
function increament(num) {
    ++num;
}
increament(number)
console.log(number);



// Refrence Type  -> Objects are copy the refrence
// -> Object , Array , Function
let m = { value: 10 }
let n = m
console.log(m, n); // Both refer to same address because of object
m.value = 20
console.log(m, n);
// example
let obj = { value: 5 }
function inc(obj) {
    obj.value++
}
inc(obj) // we passing the refrence of Object 
console.log(obj);

// Insert and Delete
let same = new Circle1(1)
same.hero = "Superman"
same['Thor-_kin ght'] = "Hammer" // symbols are used
// delete same.hero


/* Enumerations
=============== */
/* for (const key in same) {
    if (typeof same[key] != 'function') {
        console.log(same[key]);
    }
}
const keys = Object.keys(same)
const values = Object.values(same)
console.log(keys, values);

if ('radius' in same) {
    console.log("Radius is present  in circle ");
} */


/*  Abstractions:
==================== */
/*  Hide the detatils and expose only the essentials 
 eg : dvd media player setup box  */

/* function Abs(brand) {
    this.brand=brand
    this.defaultLocation={x:0,y:1}
    this.computeOptimumLocation = function(factor) {
        console.log("sample Use");
    },
    this.draw = function () {
        // requirment : we call only in draw method in computeOptimumLocation
        // ERROR :  but we can access outside of object
        this.computeOptimumLocation()
        console.log("From Draw Abstraction");
    }
}

let check = new Abs()
check.computeOptimumLocation()  // -> Bad Practice  :> Problem
check.draw()  */

// SOLUTIONS : -> Private Properties and Methods
// put ''' let ''' to hide that , because it act like a local variable 

/* function Abs(brand) {
    this.brand=brand
    let defaultLocation={x:0,y:1}
    let computeOptimumLocation = function(factor) {
        console.log("Access only in objects not outside");
    }
    this.draw = function () {
        computeOptimumLocation()
        console.log(this.brand);
    }
}

let check = new Abs("Adidas")
check.draw()  */
// but these local variables are not in objects

/* 
Getter and Setter 
================== */
function Abs(brand) {
    this.brand = brand
    let defaultLocation = { x: 0, y: 1 }
    this.computeOptimumLocation = function (factor) {
        return defaultLocation
    }
    this.draw = function () {
        console.log("Draw Functions");
    }

    /*     Getter  for ''' defaultLocation ''' variable
        Getter for read the values 
        when we call the defaultLocation it will first execute */
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            // console.log("Hello");
            return defaultLocation;
        },
        set: function (value) {
            console.log("World");
            if (!value.x || !value.y) {
                throw new Error("Invalid Location ")
            }
            defaultLocation = value
        }
    })
}

let check = new Abs("Adidas")
// check.defaultLocation={x:20,y:60}
console.log(check.defaultLocation);



/* 
INHERITANCE
===============  */

//  -> Two Types  ==>> classical & prototypical 

let g = {}
console.log(g);

/* Exapand the empty object and you see the prototype
prototype is the parent of each object 
each object can have thier own prototype  
every object in js directly or indrirectly  inherit Protoype (PARENT)*/

/* [Object Prototype]
Prototype cannot have a Parent 
Pro totype  is a root of all objects in js */

/* for exapmple we take 
Object_base we called as prototype that means parent =>  Object_base (parent)(Prototype)
g  is the derived objects 
*/
let h = {}
// toString() is present in prototype  . we can override that 
g.toString()

// G and H can inherit a Object_base 

/* console.log(Object.getPrototypeOf(g) === Object.getPrototypeOf(h));
console.log(g.__proto__ == h.__proto__); */


/* MULTILEVEL-INHERITANCE 
======================== */

/*let myArray  = []
console.log(myArray); */
/* [Array Prototype ]
expand the array and see the methos present in [Array Prototype]
in last [Object Prototype]  also present 
Myarray object extend a [Array Object]
[Array Object] extend [Object Prototype] 

[myArray] -> [Array Object] -> [Object Prototype] 

*/

function Rectange(faces) {
    this.faces = faces
    this.formula = function () {
        console.log("L * B ");
    }
}

let rect = new Rectange()
/* 
check the array elements present 
 [[Prototype]] : Array   that meaas check  Array.
console.log([])  expand the array 
 [[Prototype]] : Object  that means check Object.
 console.log({})  EXPAND THE OBJECT   

 */


/*  object and Array class can created by a given constructor
     will have the same property 
 */




/* PROPERTY DESCRIPTORS
========================   */

/* // -> also like getter and setter 
// define the property directly on the Object 
let omega = { name: "sanjay" }
let objectBase = Object.getPrototypeOf(omega)
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
console.log(descriptor); */

/* 
configurable : true -> if you want the delete the member 
enumerable : false  -> not visible keys  Object.keys(omega)
writable : true -> override the method we an change implementation
 */

/* Object.defineProperty(omega ,'name',{
    // By Default all of them are true 
    writable:false ,  // we cannot chage the values 
    enumerable:false , // Hide the keys 
    configurable:false, // we cannot delete the keys
})
omega.name="Kumar" 
delete omega.name   // key not deleted 
console.log(Object.keys(omega)); // keys are not visible 
console.log(omega); //name cannot changed

 */

/* Constructor Properties
=========================== */
/* Object.getPrototypeOf(omega)  == omega.__proto__    (parent of omega) */
/* 
    constructor also have a prototype property 
    Object.prototype => 
            this is the object that will be used to as the parent 
            for the object created by a jumbo constructor


            object that will be used as the parent  for 
            object created by this constructor 
*/
/* function jumbo(pro) {
    this.data=pro
}
jumbo.prototype
let sample = new jumbo(10)

let one ={} 
one.__proto__
// parent of this object (one.__proto__) , and the property of this construcone.__proto__tor (Object.prototype)
Object.prototype
sample.__proto__ */


/* Prototype vs Instance Members
============================= */


/* function square(sides) {
    this.sides = sides
    this.move=function () {
        this.class()
        console.log("Moved to some area ");
    }
}



let sq1 = new square()
let sq2 = new square()
square.prototype === sq1.__proto__ */

/* Each time we create an object draw method is create in each object and consume menory
 so we move the method into prototype  */

/* Object proptotype is top of all prototype
so this method is present in all objects  */
/* Object.prototype.class=function () {
    console.log("You are in : "+this.constructor.name);
}  */

//  it can present only in square objects 
/* square.prototype.class=function () {
    // this.move()
    console.log("You are all : "+this.constructor.name);
}  */


// prototype Chaining 
// console.log(sq1.__proto__..__proto__.__proto__)


/* Instance members
=================== */
/* 
//  it can return only instance members keys  of sq1  it does not return prototype keys 
console.log(Object.keys(sq1)); 

//  it can return both instance and prototype keys 
for (const key in sq1) console.log(key);

console.log(sq1.hasOwnProperty('move')); // its from instance 
console.log(sq1.hasOwnProperty('class')); // its from prototype
 */





/* 
Create OWN Prototypical Inheritance
====================================== */

/* function Polygon(radius) {
    this.radius = radius

}

Polygon.prototype.draw=function(){
    console.log("From Polygon Draw ");
}
Polygon.prototype.duplicate = function(){
    console.log("I am from Duplicate ");
}

// each time we create Object for this it will consume more ram 
// so we moved the methods into prototype 
*/

/* function Shape() {
    Shape.prototype.duplicate = function(){
        console.log("I am from Duplicate ");
    }
}

function Polygon(radius) {
    this.radius = radius

}

Polygon.prototype.draw=function(){
    console.log("From Polygon Draw ");
}

let s= new Shape()
let p = new Polygon() */

// how it work 
// s -> Shape.prototype -> Object.prototype
// p -> Polygon.prototype -> Object.prototype

// we try to change like this in upcoming 
// polygon -> polygon.prototype -> Shape.prototype -> Object.prototype 





/* creating the object for [Prototype]  ----> actual inheritance
====================================== */
/* 
function Shape() {
    Shape.prototype.duplicate = function(){
        console.log("I am from Duplicate ");
    }
}

function Polygon(radius) {
    this.radius = radius

}

Polygon.prototype =Object.create(Shape.prototype)
Polygon.prototype.draw=function(){
    console.log("From Polygon Draw ");
}

let s= new Shape()
let p = new Polygon()

console.log(p); */
/* output :  polygon -> shape -> object

        Polygon {radius: undefined}
            radius : undefined
            [[Prototype]] : Shape   (it is parent )
                draw : ƒ ()

    =====>>>>>>>>> you see polygon constructor is not there , so we resetting the constructor 
            ==================================================================================

                [[Prototype]] : Object (old chrome none )
                    duplicate : ƒ ()
                    constructor :ƒ Shape()
                    [[Prototype]] : Object
                        constructor : ƒ Object() */


/* 
console.log(p);   // comment inheritance and do this 
new Polygon.prototype.constructor()
new Polygon()
*/



/* RESETTING THE CONSTRUCTOR  (While Doing || Performing Inheritance )
DYNAMICALLY CREATING CONSTRUCTOR
============================= 
Every object in a javascript has a constructor property 
that returns the function that was used to construct or create a object 

But in case of inheritance the polygon constructor is not there 

because we resetting the prototype ( inhertiance )

::::::>>>>>>>>%%%%%%

when ever you resetting the prototype of an object 
we should reset the constructor

::::::>>>>>>>>%%%%%%
*/

/* function Shape() {
    Shape.prototype.duplicate = function () {
        console.log("I am from Duplicate ");
    }
}

function Polygon(radius) {
    this.radius = radius

}

// Dynamically create Constructor
// Polygon.prototype.constructor => Polygon
// new Polygon.prototype.constructor => new Polygon
Polygon.prototype = Object.create(Shape.prototype)
// :::::::>>>>

Polygon.prototype.constructor = Polygon 
//  Polygon.prototype.constructor = new Polygon
//  Child.prototype.constructor = new child
//Child.prototype= new Parent()  // parent function set into child.prototype
// :::::::>>>>
Polygon.prototype.draw = function () {
    console.log("From Polygon Draw ");
}

let s = new Shape()
let p = new Polygon() */


/* Calling a Super Constructor    call the super object variable 
========================== */
//  call 

/* function Shape(color) {
    console.log("called");
    console.log(this);
    this.color = color
}

function Polygon(radius ,color) {
    this.radius = radius
    // new Shape(color) .. it will create new  object seprately 
    //   Shape(color) // it will call shape but that shape this is point to window object not a polygon
    Shape.call(this , color) // passing same Object in to Shape 
}
Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.draw = function () {
    console.log("From Polygon Draw ");
}

let s = new Shape()
let p = new Polygon(4, "red") */


/* INTERMEDIATE FUNCTION INHERITANCE
================================= */

// :::::::>>>>>>
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}
// ::::::>>>>>>

/* function Shape(color) {
    this.color = color
}

function Polygon(radius, color) {
    this.radius = radius
    Shape.call(this, color)
}
extend(Polygon, Shape)

Polygon.prototype.draw = function () {
    console.log("From Polygon Draw ");
}

function Squares(size) {
    this.size = size
}
extend(Squares, Shape)
let s = new Shape()
let p = new Polygon(4, "red")
 */


/* METHOD OVERRIDING 
==================== 
we can override the method present in the shape object 

*/
/* 
Shape.prototype.duplicate = function(){
    console.log("I am from Duplicate ");
}
function Shape() {
    
}

function Circle() {
    
}

extend(Circle, Shape)

function Squares(size) {
    this.size = size
}
extend(Squares, Shape)
// ::::::>>>>>
// You can Placed this After the prototype resetting
Circle.prototype.duplicate = function(){
    //  we can also call the shape duplicate function 
    Shape.prototype.duplicate.call(this) // directly we call that method
    console.log(" Duplicate Maitained  Circles");
}

Squares.prototype.duplicate = function(){
    console.log(" Duplicate All Finished in Squares ");
}
// ::::::>>>>>


const c = new Circle()
const s = new Squares()
 */



/* POLYMORPHISM  poly = many  morph=forms
====================================== */
/* 
function Shape() {

}

Shape.prototype.duplicate = function () {
    console.log("I am from Duplicate ");
}
function Circle() {

}

extend(Circle, Shape)
Circle.prototype.duplicate = function () {
    console.log(" Duplicate  Cirlces ");
}
function Squares(size) {
    this.size = size
}
extend(Squares, Shape)

Squares.prototype.duplicate = function () {
    console.log(" Duplicate  Squares ");
}

const shapes = [
    new Circle(),
    new Squares()
]

for (const shades of shapes) {
    // shades.duplicate();
    if (shades.constructor.name == "Circle") {
        // shapesCircle(); // we can all different differnet menthods 
    } else if (shades.constructor.name == "Squares") {
        // shapesSquares();
    } else {
        shades.duplicate();
    }
    // console.table(shades.__proto__);
}
 */


/* WHEN TO USE INHERITANCE
====================== 
code reusable 
composition  ==> 

Datails : 
Animal is parent  = > eat() , walk ()
person , dog is child => extend Animal 
but incase of Gold_fish   fish cannot walk , it can swim 
so we can change the Hirerachy 

incase of if 10 different object will came we can change the entire hirerachy  
it will goes to complicated hirerachy structure 

so we create  3 diffrent Objects 
canWalk() 
canEat()
canSwim()

now  person ,Dog => canWalk() , canEat()
    fish => canEat() , canSwim()


    How we Acheive Composition  
       MIXINS

*/




/* MIXINS  -> to AVOID COMPLEX INHERITANCE HIRERACHY 
================================================== */
/* function mixin(target, ...source) {
    // it can convert  a rest parameter   into spread  because it cannot allow Arrays 
    Object.assign(target, ...source)
}
const canWalk = {
    walk: function () {
        console.log("Walking");
    }
}

const canEat = {
    eat: function () {
        this.hunger--;
        console.log('Eating');
    }
}

const canSwin = {
    swim: function () {
        console.log("Swimming ");
    }
}



function Person() { }
// console.log(Object.assign({},canEat,canWalk));

function Fish() { }
function Duck() { }
mixin(Object.prototype, canEat)
mixin(Fish.prototype, canSwin)
mixin(Person.prototype, canWalk, canSwin)
mixin(Duck.prototype, canWalk, canSwin)

const person = new Person()
console.log(person);

const gold_fish = new Fish()
console.log(gold_fish);
 */

// ===============================================================================================================================================

// ES - 6  CLass
// ==============

/* class Orbit {
    constructor(planet) {
        this.planet = planet
        this.character = function () { console.log("Funny Guy"); }
    }
    space() {
        console.log("From Solar System");
    }
}

let spc = new Orbit('mercury') */


// Hoisting
// ==========

// Function declaration 
/* fun()
function fun() {

}
// function expression   semicolon
// fun1() // error
const fun1 = function () { };
console.log(data);
// const data = 1; //error
var data =12  // because var is out of scope is work 


// class decleration   // not hoisted
class sqr{}
//class expression 
const omg = class {}  // not hoisted 
 */

/* Static Methods
======================= */

/* class Orbit {
    constructor(planet) {
        this.planet = planet
        this.character = function () { console.log("Funny Guy"); }
    }
    // instance methods
    space() {
        console.log("From Solar System");
    }

    // static methods
    static parameter(value){
        const obj = JSON.parse(value)
        const radius = obj.radius
        return new Orbit(radius)
    }
}

let spc = Orbit.parameter('{"radius":1}')
console.log(spc); */


/* This  keyword
============== ================ */

/*

const Circle =function () {
    this.draw = function(){console.log(this);}
    // this.draw = ()=>{console.log(this);}
}

let c = new Circle()
// method call
c.draw()

*/

/*  here we will get the refrence of the function and 
    called out of the circle object  at the time this will refers to the window Object 

    so we use  'use strict' to make it as strict  it ecech the error and change the behaviour 
  */

// :::::::::::::::::>>>>>>>>>>>>>>>>>>
/* const draw = c.draw
// console.log(draw);

// function call 
draw() 
 */
// ::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>

/* IN  ES- 6  By default it will ''''strict mode ''''
=========================================================

it will prevent the acdentially modify of window Object */

/* class  Circle{
    draw(){
        console.log(this);
    }
}

let c =new Circle()
let omg = c.draw
omg() // undefined  */



/* Private method  properties Using --->  Symbols
====================================== 
1 - > Don't use   _radtructorius in cons
2 - > es 6  =>
         1 )  SYMBOLS  => get  Unique Identifiers  console.log( Symbols ===  Symbols )
         2 )  WeakMaps

*/
/* const _radius = Symbol() // private property 
const _draw  = Symbol() // private method 
class Circle{
    constructor(radius){
        // both are same 
        // this.radius = radius
        // this['radius'] = radius

        this[_radius] =radius
        this.dam=45
    }
    [_draw](){
        console.log("From Pivate");
    }
}
const c = new Circle(23) */

/*  console.log(c._radius); // we cannot directly access that 
console.log(Object.getOwnPropertyNames(c)); // private properties are not visible 
const key = Object.getOwnPropertySymbols(c)[0]  // get property value in private properties 
console.log(c[key]);  */



/* Private method  properties Using --->  WeakMaps 
====================================================*/

/* const _radius = new WeakMap()
const _move = new WeakMap()
class Circle{
    constructor(radius){

        _radius.set(this,radius)  //Private properties 
        // function by default it refer to the window object  in case of strict it is undefined  
        // here we use arrow function to refer to this object 
        _move.set(this,()=>{  //set private method   // in the console.log  part  'this' will point to the constructor 
            console.log('move', this); // by default it use strict so it is undefined we make as refer to circle 
        })

    }

    draw(){ 
        _move.get(this)()  // call private method 
       console.log(_radius.get(this)); // call private properties 
    }
}

const c = new Circle(23)
c.draw()
 */

// Another apporch  to all private pro.. and met .. we can map that 

/* const privateProps = new WeakMap()
class Circle{
    constructor(radius){
        privateProps.set(this,{
            radius : radius ,
            move : ()=>{
                console.log('move', this);
            }
        })

    }

    draw(){ 
        privateProps.get(this).radius
}
}
const c = new Circle(23)
c.draw() // check this  , concept is same like this 
 */


/* Getter and Setter in ES 6 
================================ */
/* 
const _radius = new WeakMap()
class Circle{
    constructor(radius){
        _radius.set(this,radius)
    }

    // Getter
    get radius(){
        return _radius.get(this)
    }
    // Setter 
    set radius(value){
        if (value <=0) throw new Error("Invalid Number")
        _radius.set(this,value)
    }
}

const c = new Circle()
c.radius=20
console.log(c.radius); */


/* INHERITANCE
===============*/

// if you have constructor in parent we should make constructor in derived class  

/* class Shape{
    constructor(color){
        this.color = color
    }
    move(){
        console.log("Moved ");
    }
}

class Circle extends Shape{
    constructor(radius , color){
        super(color)
        this.radius = radius
        
    }
    draw(){
        console.log("Draw");
    }
}

const c = new Circle(10,"red")

 */


/* METHOD OVERRIDING  
========================*/
/* class Shape{
    move(){
        console.log("Moved ");
    }
}

class Circle extends Shape{
    draw(){
        console.log("Draw");
    }
    move(){
        super.move()
        console.log("I am Over ride");
    }
}

const c = new Circle()
 */

/* STACK WORKING IMPLEMENTATION 
===================================== */


/* 
const _items = new WeakMap()
class Stack {
    constructor() {
        _items.set(this, [])
    }

    push(data) {
        _items.get(this).push(data)
    }

    pop() {
        if (_items.get(this).length === 0) {
            throw new Error("Stack is Empty")
        }
        return _items.get(this).pop()
    }

    get count() {
        return _items.get(this).length
    }

     peek() {
        if (_items.get(this).length === 0) {
            throw new Error("Stack is Empty")
        }
        return  _items[_items.get(this).length -1 ]
    }
}

let c = new Stack()

c.push(10)
c.push(20)
// c.count
// c.pop()
// c.count
// c.pop()
// c.pop()

console.log(_items.get(c));    

 */
/* Here we can access to the private properties 
so we go to make modules to do abstraction of the properties */



/* MODULES
============= */

/* // cOMMON JS fORMAT
***********************
const Stack = require('./circle') */

// let c = new Stack()

/* IN ES -> 6 
**********************

WE USE EXPORT KEYWORD  in circle.js file 

*/

// import {Stack} from './circle.js'

/* we get error like this 
Cannot use import statement outside a module (at script.js:1119:1) 

Solution : 
in html file 

 <script type="module" src="./script.js"></script>


we got another error
script.js:1119     GET http://127.0.0.1:5500/tm/shopping-list-main/circle net::ERR_ABORTED 404 (Not Found)

finally we put .js in import file 
import {Stack} from './circle.js'
*/
