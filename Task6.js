let arr = [5, 5, 5, 5, 5]

if (arr.every ((val, i, arr) => val === arr[0] )){
    console.log(true);
}
else{
    console.log(false);
}