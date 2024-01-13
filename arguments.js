// if you want to pass some arguments how you can do that
// i can have the the node arguments.js(filename) and now i can pass tht arguments which i want so i want to pass Infinity ans my name 
// using the process.argv function we can print th data in out terminal but without it, it is meaningless.
// So in this process.argv what we have is the first line we actually have the path of our node where we have installed the node.js
//  the second argument is actully the file name which we want to execute and 
// the third one is the argument that we want

// console.log(process.argv);
// it prints the arguments that we have passed in our terminal.

// console.log(process.argv.slice(2)[0]);
// it only prints the third line, that is the argument we have passed


// if i want to print all the three stuffs in order.
// process.argv.forEach((val, index) =>{
//     console.log(`${index}:${val}`);
// });

// but we don't want this name=infinity, we only want that if we have an argument dot name then we should be able to get the value as infinity
// So, for that there is a package that we can use and that is called the minimist.
// to install the package
// npm i minimist

const argNew = process.argv.slice(2)[0];
console.log(argNew);
console.log("hello");