/* eslint-disable guard-for-in */
function reverseNumber(num) {
  const ten = 10;
  const min1 = -1;
  let isMinus=false;
  let newNumber = 0;
  let temp = 0;

  if(num<0){
    isMinus=true;
    num*=min1;
  }

  let division = num;
  let count = 1 ;

  while (division > ten - 1) {
    division = division / ten;
    count*=ten;
  }

  division = num;
  while(count>=1){
      temp= division%ten;
      division = Math.floor(division/ten);
      newNumber = temp*count +newNumber;
      count/=ten;
  }

  if(isMinus){
    newNumber*=min1;
  }
  return newNumber;
}


function forEach(arr, func) {

  for(let i = 0; i < arr.length; i++){
   arr[i]= func(arr[i]);
  }
}


function map(arr, func) {
forEach(arr,func);
return arr;
}



function filter(arr, func) {

  let temp = new Array(arr.length);

  for(let i = 0; i<arr.length; i++){
    temp[i]=arr[i];
  }

  let newArr = new Array();
  forEach(arr,func);

  for(let i = 0, j=0; i<arr.length; i++){
    if(arr[i]===true){
      newArr[j]=temp[i];
      j++;
    }
  }
  return newArr;
}


function getAdultAppleLovers(data) {

  let numb = 18;
  return map(filter(filter(data, function(el){
  return el.age>numb;
}), function(el){
  return el.favoriteFruit ==='apple';
}), function(el){
    return el.name;
  });


}


function getKeys(obj) {
  let arr = new Array();

    for (let key in obj){
      arr.push(key);
    }
       
  return arr;
}


function getValues(obj) {

  let arr = new Array();

  for (let key in obj){
    arr.push(obj[key]);
  }
    
return arr;
}


function showFormattedDate(dateObj) {
let month = dateObj.toLocaleString('en', {month: 'short'});
let day = dateObj.getDate();
let year = dateObj.getFullYear();

return 'It is '+day+' of '+month+', '+year;
}


//task1

let numb1 = 12345;
let numb2 = -56789;
console.log(reverseNumber(numb1));
console.log(reverseNumber(numb2));
console.log('');

//task2

forEach([2,5,8], function(el) {
   console.log(el);
  });
console.log('');

//task3

console.log(map([2, 5, 8], function(el) {
  return el + 3;
 }));
 console.log(map([1, 2, 3, 4, 5], function (el) {
    return el * 2; 
  }) );

console.log('');

//task4


console.log(filter([2, 5, 1, 3, 8, 6], function(el) {
   return el > 3;
  }));
  console.log('');
 console.log(filter([1, 4, 6, 7, 8, 10], function(el) {
    return el % 2 === 0;
  }));
  console.log('');

  //task5

  const data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'age': 39,
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'age': 38,
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'age': 2,
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'age': 17,
      'eyeColor': 'green',
      'name': 'Weiss',
      'favoriteFruit': 'banana'
    }
  ];
  
  console.log(getAdultAppleLovers(data));
  console.log('');
  //task6

  console.log(getKeys({keyOne: 1, keyTwo: 2, keyThree: 3}));
  console.log('');

  //task7

console.log(getValues({keyOne: 1, keyTwo: 2, keyThree: 3}));
console.log('');
//task8

console.log(showFormattedDate(new Date('2018-08-27T01:10:00')));

