var yourNumber = prompt('Enter Your Number')
var realNumber = +yourNumber
if (isNaN(realNumber)){
        console.log('Вы Ошиблись')
    }
else {
    var result = (realNumber % 2  == 0) ? "четное" : "нечетное";
    console.log(realNumber + ` Число ${result}.`)
}

