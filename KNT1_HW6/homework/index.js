
function isEquals( a, b){
return a===b;
}

let a =3;
let b =3;
console.log(isEquals(a,b));
console.log('');



function isBigger(a, b){
    return a>b;
}


let c =5;
let d =-1;
console.log(isBigger(c,d));
console.log('');



function storeNames(){
    let names = new Array();

    for(let i =0; i<arguments.length; i++){
        names[i]=arguments[i];
    }
    return names;
}

console.log(storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy'));
console.log('');




function getDifference(a, b){

    if(a>b){
         return a-b;
}else{
    return b-a;
}
}


let f = 5;
let g = 3;
let h = 8;

console.log(getDifference(f,g));
console.log(getDifference(f,h));
console.log('');



function negativeCount(a){
let count = 0;

for (let i = 0; i < a.length; i++) {
    if(a[i]<0){
        count++;
    }
}
return count;
}


let arr = [4, 3, 2, 9];
let arr2 = [0, -3, 5, 7];

console.log(negativeCount(arr));
console.log(negativeCount(arr2));
console.log('');


function letterCount(a, b){
return a.split(b).length - 1;
}

console.log(letterCount('Marry', 'r'));
console.log(letterCount('Barny', 'y')); 
console.log(letterCount('', 'z'));     

console.log('');

function countPoints(points){
  
    let count = 0;

    for (let i = 0; i < points.length; i++) {

        let each = points[i].split(':');

        if (Number(each[0]) > Number(each[1])) {
            count += 3;
        } else if (Number(each[0]) === Number(each[1])) {
            count += 1;
        } else {
            count += 0;
        }
    }
    return count;
}

console.log(countPoints(['100:90', '110:98', '100:100', '95:46', '54:90', '99:44', '90:90', '111:100']));

