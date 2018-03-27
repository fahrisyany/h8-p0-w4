
function sorting(arrNumber) {

    var listSort = arrNumber.sort(function (a, b) { return b - a });

    return listSort
}



function getTotal(arrNumber) {
    var countHighest = 0

    if(arrNumber.length===0){
        return "''"    }

    for (var i = 0; i < arrNumber.length; i++) {
        var counter = 0
        if (arrNumber[0] === arrNumber[i]) {
            counter += 1
            //console.log(counter)
        } if (counter > 0) {
            countHighest += counter
        }

    }

    //console.log(arrNumber)

    return ("angka yang paling besar munculnya adalah-" + arrNumber[0] + '-dan jumlah kemunculan sebanyak-' + countHighest + " kali")

}





function mostFrequentLargestNumbers(arrNumber) {
   

    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
  //''
