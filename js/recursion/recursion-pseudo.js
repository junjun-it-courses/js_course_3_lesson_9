function processDoll(doll) {

    // Базовый случай
    if ("нашли кусочек шоколада") {
        return "Ням-ням";
    } else if ("больше нету кукол") {
        return "Шоколад не найден"
    }


    // Рекурсивный вызов самой себя (функции)
    else {
        return processDoll("Кукла поменьше")
    }

}

processDoll();

// // Шоколад

// Большая матрешка
//     Матрешка поменьше 1
//         Матрешка поменьше 2
//             Матрешка поменьше 3
//                 Матрешка поменьше 4
//                     Матрешка поменьше 5
//                         Матрешка поменьше 6

let arr = ['vova', 'Alex', 'Ihor', 'Marat', 'Marat', 'vova', 'Alex', 'Ihor', 'Marat', 'Marat','vova', 'Alex', 'Ihor', 'Marat', 'Marat']

let obj = {
    name: 'vova',
    next: {
        name: 'Alex',
        next: {
            name: 'Ihor',
            next: {
                name: 'Marat',
                next: {
                    name: 'Marat',
                    next: {

                    }
                }
            }
        }
    }
}


// obj.next.next.name
function iterLinkedList(arg) {
    if(arg.name === 'Ihor') {
        return arg
    }

    iterLinkedList(arg.next)
}

iterLinkedList(obj)