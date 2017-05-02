
console.log(this);  
// What is on the console? For Node?  For the Browser?

var abc = 123;
console.log(this.abc);
// What is on the console? For Node?  For the Browser?

function f1(){
    console.log(this);
}
f1(); 
// What is on the console? For Node?  For the Browser?

var obj = {
    foo: "123",
    f3: function(){
        console.log(this);
    }
};
obj.f3();
// What is on the console?

obj.f3.call({});
// What is on the console?

function f4(){
    console.log(this);
}
new f4();
// What is on the console?

this.xyz = 0;
var obj2 = {
    xyz: 1,
    f5: function(){
        console.log(this.xyz);
    }
};
obj2.f5();
// What is on the console?

var f6 = obj2.f5.bind(this);
f6();
// What is on the console?

obj2.f7 = () => { console.log( this.xyz ) };
obj2.f7();
// What is on the console?
