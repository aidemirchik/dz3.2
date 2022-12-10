let arr1 = ['привет, как у тебя дела?']
let arr2 = ['здравствуйте, как вы поживаете?']

function twoMass (arr1, arr2){
    if (arr1.length > arr2.length){
        return arr1;
    } else if (arr1.length < arr2.length){
        return arr2;
    } else {
        return arr1 = arr2
    }
}
console.log(twoMass(arr1, arr2));