let cars = new Map(
    [
        ['BMW', '6000000'],
        ['Porsche', '10000000'],
        ['Kia', '3500000'],
        ['Lada', '1500000']
    ]
);
cars.forEach(function(value, key){
    console.log(`Ключ - ${key} , Значение - ${value}`);
});