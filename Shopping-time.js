function shoppingTime(memberId, money) {
var jualan=[
    ["sepatu stucatti",1500000],
    ['sepatu zoro', 500000],
    ['Baju H&N', 250000],
    ['sweater uniklooh',175000],
    ['casing headphone',50000],
]

var purchased=[]
var change = 0
var myObj={}
myObj.memberId=memberId,
myObj.money=money,
myObj.listPurchased= purchased;



    if (memberId === ''){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
        else if(money < 50000){
            return 'Mohon maaf uang tidak cukup'
        }
        else if(memberId===undefined && money===undefined){
            return "Mohon maaf, toko X hanya berlaku untuk member saja"
        }else
        {  
         for(i=0;i<jualan.length;i++){


            if(money>=jualan[i][1]){

                purchased.push(jualan[i][0])
                money= money - jualan[i][1]



            }
        }


    } 
 myObj.changeMoney = money;  


return myObj

}        







  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
//     //{ memberId: '1820RzKrnWn08',
//     // money: 2475000,
//     // listPurchased:
//     //  [ 'Sepatu Stacattu',
//     //    'Baju Zoro',
//     //    'Baju H&N',
//     //    'Sweater Uniklooh',
//     //    'Casing Handphone' ],
//     // changeMoney: 0 }
 console.log(shoppingTime('82Ku8Ma742', 170000));
//   //{ memberId: '82Ku8Ma742',
//   // money: 170000,
//   // listPurchased:
//   //  [ 'Casing Handphone' ],
//   // changeMoney: 120000 }
   console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
   console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
   console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
