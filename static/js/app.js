const bankElement = document.getElementById('container-bank');
const workElement = document.getElementById('container-work');
const laptopElement = document.getElementById('container-laptops');
const orderElement = document.getElementById('container-laptop-order');

function Laptop(name,features,description,price,imageUrl){
    this.name = name;
    this.features = features;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
}

let laptops = [];

const hp = new Laptop('HP Pavilion 15','i7, 256 SSD, 16 GB RAM','A really good laptop for the dystopia that is coming.','10000 KR',"../images/hp.jpg");
const lenovo = new Laptop('Lenovo IdeaPad 330','i5, 1 TB HDD, 8 GB RAM','This laptop is mostly used by the Karma Police and performs really well. Highly recommended!','13000 KR',"../images/lenovo.jpg");
const asus = new Laptop('Asus VivoBook 14','i5, 512 SSD, 8 GB RAM','A small yet high performing laptop recommended by Mr. Yorke himself.','15000 KR',"../images/asus.jpg");
const acer = new Laptop('Acer Aspire 3','i5, 256 SSD, 8 GB RAM','The perfect laptop with a good enough portable size and performance perfect for myxomatosis experiments.','12000 KR',"../images/acer.jpg");

laptops.push(hp);
laptops.push(lenovo);
laptops.push(asus);
laptops.push(acer);

let initialMoney = 0;
let initialWorkMoney = 0;
let sum = 0;
let globalBankBalance = 0;
let hundreds = 0;
let komputers = laptops;

const bank =  
    `
    <div class='bank-class'>
        <p>Million Dollar Man's Bank</p>
            <div class='js-class'>
                <p>Banker: Mr. Magpie</p>
                <p>Balance: <p>
                <p id='loan-money'> 0 Kr. </p>
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
    
    document.getElementById("loan-money").innerHTML = parseInt(money,10) +  parseInt(globalBankBalance,10) + " Kr.";
   
    initialMoney = money;
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
    
    const bankBalance = initialWorkMoneys.innerHTML =  parseInt(sum,10) + ' Kr.';

    document.getElementById("work-money").innerHTML =  "Total: " +  "0 Kr.";

    globalBankBalance = bankBalance;
}

const laptopList =  
    `
    <div class='laptop-class'>
        <p>Laptops</p>
            <div class='js-class'> 
                <p>
                    <select id='select-id'>
                    </select>
                </p>
                <p>Features: <p>
            </div>
    </div>    
    `
;



const order =  
`
<div class='order-class'>
    <p>Chosen laptop: </p>
        <div class='js-class'>
            <p></p>
            <p>Features: <p>
            <button type='button' class='btn btn-info'>Buy now</button>
        </div>
</div>
`
;  

laptopElement.innerHTML = laptopList;
orderElement.innerHTML = order;
bankElement.innerHTML = bank;
workElement.innerHTML = work;