/*Data types in JS
	String
	Number
	Boolean
	undefined
	null
*/

//Strings
var newVar;

newVar = 10;


var foo = "Foo";


//toget type of varibale use typeof
typeof newVar;

//String Properties and functions
foo.length;
//>> 3

foo.toUpperCase();
//>> FOO
foo.toLowerCase();
//>>foo
foo.charAt(1);
//>>o

foo.indexOf("o");
//>>1


foo.lastIndexOf("o");
//>2

"Welcome to JavaScript".concat(" World!");
//Welcome to JavaScript World!
"Hello".concat(" ","World","!");
//>>Hello World!

" Hello World ".trim();
//>>Hello World


//Numbers 
typeof 3;
//number
typeof 3.14159;
//number
0xAF;
//175
047;

1e6;
//>>1000000
2E3;
2.5e-3;

typeof NaN;

answer = "5" * 1;


//"I can’t find a value for this." -- undefined 

10 + undefined

//"there should be an value here, but there isn’t at the moment." -- null

10 + null // null behaves like zero

//Boolean

//Boolean(“hello”);
//True

//Boolean(42);
//True

//Boolean(0);
//True


//False
/*
* "" // double quoted empty string
* '' // single quoted empty string
* 0
* NaN
* false
* null
* undefined
*/


/*
" " == 0;
<< true
" " == "0";
<< false
false == "0";
<< true
"1" == true;
<< true
"2" == true;
<< false
"true" == true;
<< false
null == undefined;
<< true
*/

/*
answer === 5;
<< true
answer === "5";
<< false

null === undefined;
<< false

NaN === NaN;
<< false
*/