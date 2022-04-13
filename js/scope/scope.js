// Global scope
// https://developer.mozilla.org/ru/docs/Glossary/Global_object
// https://www.w3schools.com/js/js_scope.asp

// var foo = "foobar";
// let foo2 = 123;
// console.log(window.foo2)
// foo === window.foo; // Возвращает: true
// //
// console.log(foo, window.foo, this.foo);
// // //
// function greeting() {
//     console.log("Hi!");
// }


// Functional scope / Local Scope
//
// function myFunction() {
//     // code here CAN use carName
//     const ExConstVar = 'some const variable'
//     let carName = "Volvo";
//     var ExVar = 'string';
//
//     function vova() {
//         console.log('vova')
//     }
// }
// //
// console.log(ExVar)
// console.log(carName, ExVar, ExConstVar, vova)


// Block Scope / ES6 JS Standart
// Переменные, объявленные с помощью ключевого слова var,
// НЕ могут иметь область видимости блока.

// Блочная видимость подразумевает объявление любых переменных
// (let, const) в {} - Функции, условия, Циклы ...

// console.log(y)
//
// let x;
// {
//     var y = 3;
//     x = 2;
//     const z = 15;
//     // console.log(x)
//     // console.log(z)
// }

// console.log(y)
// console.log(x)
// console.log(z)

// if(true) {
//     let alex = 321;
// }
//
// // console.log(vova)
// console.log(alex)