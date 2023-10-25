


/*function bmiCalculator(weight, height) {
    const interpretation = weight / Math.pow(height, 2);
    if (interpretation < 18.5) {
        return "Your BMI is " + interpretation + " so you are underweight."
    }else if (interpretation > 18.5 && interpretation < 24.9) {
        return "Your BMI is " + interpretation + " so you have a normal weight."
    } else if(interpretation > 24.9) {
        return "Your BMI is " + interpretation + " so you are overweight."
    }
    return interpretation;
}
var bmi = bmiCalculator(100, 2);
console.log(bmi);
 

function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "The year is leap year";
            }
        } else if(year % 100 !== 0){
            return "The year is leap year";
        }
        
    }  else  {
        return "The year is not Leap year"
    }

}
var result = leapYear(2020);
console.log(result);




/* 
//BMI calculator
function bmiCalculator(weight, height) {
    const BMI = Math.round(weight / Math.pow(height, 2));
    return BMI
}
 var bmi = bmiCalculator(65, 1.8);
console.log("Your BMI is: " + bmi);


function changeLight(status){
      const bulb = document.getElementById("bulb");
      if (status === 'on'){
        bulb.src = "./assets/images/bulb on.png";
      } else if (status === 'off') {
        bulb.src = "./assets/images/bulb off.png";
      }
}

function getMilk(money, price) {   
    console.log("leave House");
    console.log("I can buy " + calcBottles(money, price) + " bottles of milk");
    console.log("Hello master, here is your " + calChange(money, price) + " change") ;
}

function calcBottles(money, price) {
    var numberOfBottle = Math.floor(money / price);
    return numberOfBottle;
}
function calChange(money, price) {
    var leftoverMoney = money % price;
    return leftoverMoney;
}
  
getMilk(10, 3);
*/