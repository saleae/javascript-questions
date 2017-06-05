console.log("\nQuestion 1:");
console.log(this);  
//(a) When running in the Browser, what will be on the console here?
//(b) When running in Node, what will be on the console here?

console.log("\nQuestion 2:");
var abc = 123;
console.log(this.abc);
//(a) When running in the Browser, what will be on the console here?
//(b) When running in Node, what will be on the console here?

console.log("\nQuestion 3:");
function f1(){
    console.log(this);
}
f1(); 
//(a) Non-strict, Browser:, what will be on the console here?
//(b) strict mode, Browser:, what will be on the console here?
//(c) Non-strict, Node, what will be on the console here?
//(d) strict mode, Node, what will be on the console here?

console.log("\nQuestion 4:");
var obj = {
    foo: "123",
    f3: function(){
        console.log(this);
    }
};
obj.f3();
//(a) When running in the Browser, what will be on the console here?
//(b) When running in Node, what will be on the console here?

console.log("\nQuestion 5:");
obj.f3.call({});
// What is on the console?

console.log("\nQuestion 6:");
function f4(){
    console.log(this);
}
new f4();
// What is on the console?

console.log("\nQuestion 7:");
this.xyz = 0;
var obj2 = {
    xyz: 1,
    f5: function(){
        console.log(this.xyz);
    }
};
obj2.f5();
// What is on the console?

console.log("\nQuestion 8:");
var f6 = obj2.f5.bind(this);
f6();
// What is on the console?

console.log("\nQuestion 9:");
obj2.f7 = () => { console.log( this.xyz ) };
obj2.f7();
// What is on the console?
