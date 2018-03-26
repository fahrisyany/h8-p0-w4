
function changeMe(arr) {
    var bio = " "
    for(i=0; i<=arr.length-1;i++){
        console.log(i+1+". "+arr[i][0]+" "+arr[i][1]+":")

        var myObj={}
         myObj.firstName=arr[i][0]
         myObj.lastName=arr[i][1]
         myObj.gender=arr[i][2]
         if (arr[i][3])
         {myObj.age=2018-arr[i][3]}
         else{myObj.age=('invalid Birth Year')}


         console.log(myObj)
    }
}
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""
