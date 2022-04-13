// Контекст выполнения

// Global execution environment
// Базовый. Если некий код находится не внутри какой-нибудь функции, значит этот код
// принадлежит глобальному контексту

// let a = 20;
//
// if(a) {
//     console.log('Example')
// }
//
// for(let i = 0; i <= 20; i++) {
//     console.log(i)
// }

// Function execution environment
// Функциональный. Каждый раз, когда вызывается функция, для неё создаётся новый контекст.

// function foo(a, b, c) {
//
//     function vova() {
//         console.log(123);
//     }
//     vova();
//
//     return a + b + c;
// }
//
// function bar(a, b, c) {
//     return (a ** b) + c;
// }
//
// foo(10, 20, 30);
// bar(2, 5, 10);


// Eval execution environment
// Eval. Код, выполняемый внутри функции eval, также имеет собственный контекст выполнения

// Метод eval() выполняет JavaScript код, представленный строкой.

// console.log(
//     eval('2 + 2 * 2')
// )

// const cycleString = 'for(let i = 0; i <= 20; i++) {console.log(i)}';
// eval(cycleString);


let bar = 10

function one() {

    function OneOne() {
        console.log(bar);
    }

    OneOne();

}

// one();



// function two () {
//     var b = 10;
//     let a = 10;
//     console.log(bar)
// }
//
// two();
// two.a;


let obj = {
    name: this,
    func: function () {
        console.log(this)
    }
}

console.log(obj)
console.log(obj.func())