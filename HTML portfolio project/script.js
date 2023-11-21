let products = [
  "iphone 15 pro Max",
  "iphone 15 pro",
  "iphone 13", 
  "iphone 13 Pro",
  "iphone 13 Pro Max",
  "iphone 12",
  "iphone 12 Pro",
  "OnePlus 10 Pro",
  "OnePlus 9",
  "Nokia G20",
  "Samsung Galaxy S20",
  "Samsung Galaxy S21",
  "Samsung Galaxy S22",
  "Sony Xperia 10",
  "Xiaomi Redmi 9A",
];

let favorites = [];
function productLists() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = products[i];
    productList.appendChild(listItem);
  }
 
}

function addProduct() {
  const productList = document.getElementById("productList");
  let inputsValue = document.getElementById("inputValue").value.trim();
  const newListItem = document.createElement("li");
  newListItem.textContent = inputsValue;
  productList.appendChild(newListItem);
  products.push(inputsValue);
  document.getElementById("inputValue").value = '';

  /*let newProducts = [
    "Google Pixel 6 Pro", 
    "Motorola Moto G31", 
    "Honor X7"
  ];

  newProducts.forEach(product => {
    let newListItem = document.createElement("li");
    newListItem.textContent = product;
    productList.appendChild(newListItem);
    products.push(product);
  })*/
}
// Task 2. remove "Xiaomi Redmi 9A", "Google Pixel 6 Pro" from the list
function removeItems() {
  const productList = document.getElementById("productList");
  const removeItem = [
    "Xiaomi Redmi 9A", 
    "Google Pixel 6 Pro"
  ];
  products = products.filter(product => !removeItem.includes(product));
  productList.innerHTML = "";

  products.forEach(product => {
    let newListItem = document.createElement("li");
    newListItem.textContent = product;
    productList.appendChild(newListItem);
  })
}

function Galaxy_only() {
  const productList = document.getElementById("productList");
  products = products.filter((x) => x.includes("Galaxy"));
  productList.innerHTML = "";
  products.forEach(product => {
    let newListItem = document.createElement("li");
    newListItem.textContent = product;
    productList.appendChild(newListItem);
  })
}

function favoriteItems() {
  const favoriteList = document.getElementById("favorites");
  favoriteList.innerHTML = "";
  let favorite = [
    "Google Pixel 6 Pro", 
    "OnePlus 10 Pro", 
    "iPhone 13 Pro Max"
  ]
  favorite.forEach(product => {
    let newListItem = document.createElement("li");
    newListItem.textContent = product;
    favoriteList.appendChild(newListItem);
    favorites.push(product);
  });
  favorites = favorites.filter((favorite) => favorite !== "OnePlus 10 Pro");
  displayFavorites();
}

function displayFavorites() {
  const favoriteList = document.getElementById("favorites");
  favoriteList.innerHTML = ""; // Clear the list

  favorites.forEach(product => {
    let newListItem = document.createElement("li");
    newListItem.textContent = product;
    favoriteList.appendChild(newListItem);
  });
}

const proProducts = products.filter(product => product.includes("Pro"));
// Displaying products with "Pro" in their names using forEach loop
const filterProduct = products.map((product) => {
  if (product.includes("iphone")) {
    return "iOS";
  } else {
    return "Android";
  }
})
console.log(filterProduct);







/* 
You want to buy something from an online shop. 
The seller charges different prices for shipping cost based on location. 
The shipping cost is 5€ for EU,  15€ for US & Canada, 20€ else where. 
Write a function that takes the cost of the product and location. 
It should print the amount of money you have to pay as:
"You have to pay a total of 35€, 30€ for the product and 5€ for shipping"

function onlineShop() {
  let country = document.getElementById("shopping").value.toLowerCase();
  let price = parseFloat(document.getElementById("price").value);
  let output = document.getElementById("result");
  let shippingCost;

  if(country === "eu") {
    shippingCost = price + 5;
    output.innerHTML = "You have to pay a total of " + shippingCost + "€, " + price + "€ for the product and 5€ for shipping";
  } else if(country === "usa" || country === "canada") {
    shippingCost = price + 15;
    output.innerHTML = "You have to pay a total of " + shippingCost + "€, " + price + "€ for the product and 15€ for shipping";
  } else {
    shippingCost = price + 20; 
    output.innerHTML = "You have to pay a total of " + shippingCost + "€, " + price + "€ for the product and 20€ for shipping";
  }
}
let words = ["Apple", "Banana", "orange"];
const capitalization = words.slice(1, 3);
console.log(capitalization);

/*
 Write a function that takes a ph value and 
returns whether the value is acidic, neutral or alkaline. 
(PH value < 7 is acidic, 7 is neutral, > 7 alkaline)


function phCalculator() {
  let phvalues = parseFloat(document.getElementById("phValue").value);
  if (phvalues >= 0 && phvalues <= 14) {
    if (phvalues < 7 ) {
    document.getElementById("result").innerHTML = "It is Acidic!";
    } else if (phvalues > 7) {
      document.getElementById("result").innerHTML = "It is Alkaline!";
    } else {
      document.getElementById("result").innerHTML = "It is Neutral!";
    } 
  } else {
    document.getElementById("result").innerHTML = "ph should be between 0 and 14";
  }
  
}

//function
function great(name, callback) {
  console.log("Hi " + name);
  callback();
}
//callBack function
function callMe() {
  console.log("I am callBack function")
}

//passing functions as an argument
great("Eliyas", callMe);


function Person(name, age, workPermit, language) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = workPermit;
    this.language = language;
}
//Objects of the same type are created by calling the constructor function with the new keyword:

const bellBoy = new Person("John", 26, true, ["French", "English"]);
const bellBoy2 = new Person("Timothy", 46, true, ["French", "English"]);

document.getElementById("demo").innerHTML = `My name is ${bellBoy.name}`;




const calculate_area = function(radius) {
  return Math.PI * radius * radius;
}
const calculate_diameter = function(radius) {
  return 2 * radius;
}
// a reasuable function to calculate area, diameter and etc
function calculate() {
  let inputValues = document.getElementById("radius").value;
  let inputs = inputValues.split(", ").map(Number);

  let result_container = document.getElementById("results");
  result_container.innerHTML = ""

  for(let i = 0; i < inputs.length; i++) {
    let radius = inputs[i];
    let areaResult = calculate_area(radius).toFixed(2);
    let diameterResult = calculate_diameter(radius);

    let listItem = document.createElement("li");
    listItem.innerHTML = `Radius: ${radius}, Area: ${areaResult}, Diameter: ${diameterResult}`;
    result_container.appendChild(listItem);
    
  }
  //document.getElementById("results").innerHTML = results_area.join(', ');
  //document.getElementById("results").innerHTML = results_diameter.join(', ');
  
}




function multiply(num1, num2) {
  return num1 * num2;
}
function add(num1, num2) {
  return num1 + num2;
}

function calculator(num1, num2, operator) {    
  return operator(num1, num2)
}
console.log(calculator(2, 3, multiply)); // asking the calculator to multiply 2 and 3 using the multiply function.




let selector = document.querySelector("button");

function randomNumber(num) {
  return Math.floor(Math.random() * (num + 1));
};

selector.addEventListener("click", () => {
  let randomColor = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
  document.body.style.backgroundColor = randomColor;
})


document.getElementById("myP").addEventListener("click", 
function() {
  myDisplay("text p")
});
document.getElementById("myDiv").addEventListener("click", function() {
  myDisplay("text div")
});

function myDisplay(text) {
  document.getElementById("demo").innerHTML += text + "<br>";
}






function diceRoller() {
  let number = Math.floor(Math.random() * 6) + 1;
  let number1 = Math.floor(Math.random() * 6) + 1;

  document.getElementById("diceImage1").src = "./assets/images/dice" + number + ".png";
  document.getElementById("diceImage2").src = "./assets/images/dice" + number1 + ".png";

  if (number > number1) {
    document.getElementById("diceResult").innerHTML = "Player 1 wons";
  } else if (number < number1) {
    document.getElementById("diceResult").innerHTML = "Player 2 wons";
  } else {
    document.getElementById("diceResult").innerHTML = "Try again";
  }
}

function findEvenNumbers(...n) {
   let outPuts = [];
   
    for (let i = 0; i < n.length; i++) {
        if ( n[i] % 2 === 0) {
          outPuts.push(n[i]);
        }
    }
    return outPuts;
}
let evenNum = findEvenNumbers(2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(evenNum);

function findAvarageNumber(...n) {
    let num = 0;
    for (let i = 0; i < n.length; i++) {
         num = num + i;
    }
    return num / 2;
}
let output = findAvarageNumber(2, 3, 4, 5, 6);
console.log(output);


function findMiddleNumber(...n) {
    let num = Math.floor(n.length / 2);
    return n[num];
}
let result = findMiddleNumber(2, 3, 4, 5, 6);
console.log(result);



function fibonacciCalculator() {
    let sequenceNumbers = [];
    let inputValue = parseInt(document.getElementById("fname").value);
    for (let i = 0; i <= inputValue; i++) {
      
      if (i === 0) {
        sequenceNumbers.push(0);
        
      } else if (i === 1) {
        sequenceNumbers.push(1);
      } else {
        sequenceNumbers.push(sequenceNumbers[i - 1] + sequenceNumbers[i - 2]);
      }
     
    }
    document.getElementById("values").innerHTML = sequenceNumbers.join(", ");
}

function fibonacciGenerator(n) {
    var fibona = [];
    for (let i = 0; i < n; i++) {
        if(i === 0) {
            fibona.push(0);
        } else if (i === 1){
            fibona.push(1)
        } else {
            fibona.push(fibona[i-1] + fibona[i-2]);
        }
       
    } 
    return fibona;
}
output = fibonacciGenerator(9);
console.log(output);
function whosPaying(names) {
    var randomNumber = Math.floor(Math.random() * names.length);
    let randomPayer = names[randomNumber]
    
    return randomPayer + " is going to buy lunch today!";
  
}
const lunchPayer = whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);
console.log(lunchPayer);
function whosPay() {
      let lists = document.getElementById("inputNames").value;
      let listName = lists.split(" ");
      let randomNumber = Math.floor(Math.random() * listName.length);
      document.getElementById("payList").innerHTML = listName[randomNumber] + " is today lunch payer!";
    }
     
    let num = [];
    let i = 1;
    function calculateFizz() {
      if (i % 3 === 0 && i % 5 === 0){
        document.getElementById("fizzNum").innerHTML += " FizzBuzz<br> ";
      } else if (i % 3 === 0) {
        document.getElementById("fizzNum").innerHTML += " Fizz<br> ";
      } else if (i % 5 === 0) {
        document.getElementById("fizzNum").innerHTML += " buzz<br> ";
      } else {
        document.getElementById("fizzNum").innerHTML += i + "<br>";
      }
      i++;
    }
    
     
    var name = ["eliyas", "bonu", "esayas", "amanuel"];
    var userName = prompt("enter name: ");
    if (name.includes(userName)) {
      alert("hey, Welcom");
    } else {
      alert("you are not in our list");
    }
    
    
    function loveCalculator() {
      var person1 = document.getElementById("person1Input").value;
      var person2 = document.getElementById("person1Input").value;
      if (person1 == "" || person2 == ""){
        alert ("Please enter both names");
        } else {
          var loveScore = Math.random() * 100;
          loveScore = (loveScore + 1).toFixed();
          document.getElementById("result").innerHTML = "Love score: "+loveScore+"%";
        

        }

function bmiCalculator(weight, height) {
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