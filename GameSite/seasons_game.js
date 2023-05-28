// function monthOfSeasons() {
// let monthNum = Number(prompt('Хеееейоооу! Введи номер месяца и узнай время года, к которому он принадлежит!'))
// switch (monthNum) {
//     case 1:
//     case 2:
//     case 12:
//         console.log("Так это же ЗИМА!");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Так это же ВЕСНА!");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Так это же ЛЕТО!");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("Так это же ОСЕНЬ!");
//         break;
//     default:
//         console.log("Похоже, вышла ошибочка, друг! Попробуй еще раз :)");
//         break;
// }
// }

function monthOfSeasons() {
    let monthNum = Number(prompt('Хеееейоооу! Введи номер месяца и узнай время года, к которому он принадлежит!'))
    if (monthNum === 1 || monthNum === 2 || monthNum === 12) {
        console.log("Так это же ЗИМА!");
    } else if (monthNum >= 3 && monthNum <=5) {
        console.log("Так это же ВЕСНА!");
    } else if (monthNum >= 6 && monthNum <=8) {
        console.log("Так это же ЛЕТО!");
    } else if (monthNum >= 9 && monthNum <=11) {
        console.log("Так это же ОСЕНЬ!");
    } else {
        console.log("Похоже, вышла ошибочка, друг! Попробуй еще раз :)");
    }
}