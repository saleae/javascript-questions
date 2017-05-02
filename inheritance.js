
var xyz = { a: 1, b: 2 };
//1. what is the prototype of xyz?
//2. What is the prototype's prototype?

var arr = [ 1, 2, 3 ];
//3. what is the prototype of arr?
//4. What is the prototype's prototype?

var obj = { a: 1, b: 2 };
var proto = { c: 3, d: 4 };

//create a new object who's prototype chain is
// new_obj -> obj -> proto -> Object.prototype -> null

//5. Using a constuctor, and new: var new_obj = new ...
//6. Using Object.create: var new_obj = Object.create ...
//7. Using 'class' 

//8. How does javascript search an object's prototype chain when searching for a varaible?

var obj1 = { a: 1, b: 2 };
var obj2 = { c: 3, d: 4 };
//9. How can we combine obj1 and obj2 into a new object which contains all their members? 
// where new_obj = { a: 1, b: 2, c: 3, d: 4 }

