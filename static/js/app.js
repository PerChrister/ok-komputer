const bankElement = document.getElementById('container-bank');
const workElement = document.getElementById('container-work');
const laptopElement = document.getElementById('container-laptops');
const orderElement = document.getElementById('container-laptop-order');
let featureElement = document.getElementById('feature');

function Laptop(name,features,description,price,imageUrl){
    this.name = name;
    this.features = features;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
}

let laptops = [];

const hp = new Laptop('HP Pavilion 15','i7, 256 SSD, 16 GB RAM','A really good laptop for the dystopia that is coming.','1000 KR',"../images/hp.jpg");
const lenovo = new Laptop('Lenovo IdeaPad 330','i5, 1 TB HDD, 8 GB RAM','This laptop is mostly used by the Karma Police and performs really well. Highly recommended!','1300 KR',"../images/lenovo.jpg");
const asus = new Laptop('Asus VivoBook 14','i5, 512 SSD, 8 GB RAM','A small yet high performing laptop recommended by Mr. Yorke himself.','1500 KR',"../images/asus.jpg");
const acer = new Laptop('Acer Aspire 3','i5, 256 SSD, 8 GB RAM','The perfect laptop with a good enough portable size and performance perfect for myxomatosis experiments.','1200 KR',"../images/acer.jpg");

laptops.push(hp);
laptops.push(lenovo);
laptops.push(asus);
laptops.push(acer);

let initialMoney = 0;
let initialWorkMoney = 0;
let sum = 0;
let startingBalance = 500;
let globalBankBalance = 0;
let hundreds = 0;
let komputers = laptops;
let price = 1000;
let chosenLaptop;

const bank =  
    `
    <div class='bank-class'>
        <p>Million Dollar Man's Bank</p>
            <div class='js-class'>
                <p>Banker: Mr. Magpie</p>
                <p>Starting balance: `+startingBalance+" Kr."+`</p>
                <p id='starting-loan'>Loan: 0 Kr. </p>
                <p id='loan-money'>Total Loan: </p>
                <button type='button' class='btn btn-info' onclick="loan()">Get a loan</button>
            </div>
    </div>
    `
;

 const work =  
    `
    <div class='work-class'>
        <p>Work </p>
            <div class='js-class'>
                <p>Pay: <p>
                <p id='work-money'>Total:  0 Kr. </p>
                <button type='button' class='btn btn-info' onclick='transfer()'>Bank</button>
                <button type='button' class='btn btn-info' onclick='goWork()'>Work</button>
            </div>
    </div>
    `
;

function loan(money){

    money = prompt("Please enter how much you would like to loan: ");
    if (money >= startingBalance*2){
        alert("You cannot loan double the amount of your balance!");
        money=0;
    } else {
        
    initialMoney = parseInt(money,10) + parseInt(startingBalance,10) ;

    document.getElementById("starting-loan").innerHTML = "Loan: " + parseInt(money,10) + " Kr.";
    
    document.getElementById("loan-money").innerHTML = "Total balance: " + initialMoney + " Kr.";
   
}
    
}
function increaseByHundred(){

    hundreds = initialWorkMoney += 100;

}
function goWork(){
    increaseByHundred()
    const newBalance = document.getElementById("work-money").innerHTML = "Total: " + hundreds + " Kr.";
}

function transfer(){

    let initialWorkMoneys = document.getElementById("loan-money");

    sum = parseInt(initialWorkMoney,10) + parseInt(initialMoney,10);
    
    const bankBalance = initialWorkMoneys.innerHTML =  "Total balance: " + parseInt(sum,10) + ' Kr.';

    globalBankBalance = bankBalance;
}

const laptopsDropDown = document.getElementById('laptop-options');
for (let i = 0; i < laptops.length; i++) {
    addLaptopToDropDown(laptops[i].name);
}

function addLaptopToDropDown(laptopName) {
    let laptopOption = document.createElement('option');
    laptopOption.innerText = laptopName;
    laptopsDropDown.appendChild(laptopOption);
    console.log(laptopsDropDown.appendChild(laptopOption).value);
}



const order =  
`
<div class='order-class'>
    <p>Chosen laptop: </p>
        <div class='js-class'>
            <p></p>
            <p>Features: <p>
            <p id ='laptop-price'>Price: `+price+`</p>
            <button type='button' class='btn btn-info' onclick='buyLaptop()'>Buy now</button>
        </div>
</div>
`;  


function buyLaptop(){
    if (globalBankBalance < price){
        alert("You cannot buy that laptop!");
    } else {
        alert("Thanks for your purchase!");
    }

}

orderElement.innerHTML = order;
bankElement.innerHTML = bank;
workElement.innerHTML = work;