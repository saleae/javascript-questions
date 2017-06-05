
var xyz = { a: 1, b: 2 };
//1. what is the prototype of xyz?
//2. What is the prototype's prototype?
console.log( Object.getPrototypeOf(xyz) );
console.log( Object.getPrototypeOf( Object.getPrototypeOf(xyz) ) );

var arr = [ 1, 2, 3 ];
//3. what is the prototype of arr?
//4. What is the prototype's prototype?
console.log( Object.getPrototypeOf(arr) );
console.log( Object.getPrototypeOf( Object.getPrototypeOf(arr) ) );


//5. How does javascript search an object's prototype chain when searching for a varaible?


var obj1 = { a: 1, b: 2 };
var obj2 = { c: 3, d: 4 };
//6. How can we combine obj1 and obj2 into a new object which contains all their members? 
// where new_obj = { a: 1, b: 2, c: 3, d: 4 }


var proto = { a: 1, b: 2 };
//create a new object who's prototype chain is
//new_obj -> proto -> Object.prototype -> null
//console.log( Object.getPrototypeOf(new_obj) );

//7. Using a constuctor, and new: var new_obj = new ...

//8. Using Object.create: var new_obj = Object.create ...

//9. Using 'class' 





