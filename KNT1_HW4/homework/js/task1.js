const limitOfAmount = 1000;
const limitOfYears =1;
const limitOfPercentage = 100;
const limitFixed = 2;

let TotalProfit=0;

let InputMoney = Number(prompt('Input initial amount of money (from 1000):'));


while(!Number.isInteger(InputMoney)||InputMoney< limitOfAmount){
alert('Invalid input data of initial amount of money');
InputMoney = Number(prompt('Input initial amount of money:'));
}



let years = Number(prompt('Input number of years (from 1):'));

while(!Number.isInteger(years)|| years< limitOfYears){
    alert('Invalid input data of years');
    years = Number(prompt('Input number of years:'));
    }


let percentage = Number(prompt('Input percentage of a year (less than 100):'));

while(!Number.isInteger(percentage)||percentage > limitOfPercentage || percentage<=0){
        alert('Invalid input data of percentage');
        percentage = Number(prompt('Input percentage of a year:'));
        }


let TotalAmount = InputMoney;

for (let i = 1; i<=years; i++){

    TotalProfit+=TotalAmount*percentage/limitOfPercentage;
    TotalAmount = InputMoney+TotalProfit;

    if(i===years){
alert('Initial amount: '+InputMoney+'\nNumber of years: '+years+'\nPercentage of year: '+
percentage+'\n\nTotal profit: '+TotalProfit.toFixed(limitFixed)+'\nTotal amount: '+TotalAmount.toFixed(limitFixed));
    }
}

