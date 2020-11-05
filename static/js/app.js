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

function loan(){
    let money = prompt("Please enter how much you would like to loan: ");
    
	document.getElementById("loan-money").innerHTML = money + " Kr.";
}

 const work =  
    `
    <div class='work-class'>
        <p>Work </p>
            <div class='js-class'>
                <p>Pay: <p>
                <p> Kr. </p>
                <button type='button' class='btn btn-info'>Bank</button>
                <button type='button' class='btn btn-info'>Work</button>
            </div>
    </div>
    `
;

const laptopList =  
    `
    <div class='laptop-class'>
        <p>Laptops</p>
            <div class='js-class'> 
                <p>
                    <select id='select-id'>
                    <option>${hp.name}</option>
                    <option>${lenovo.name}</option>
                    <option>${asus.name}</option>
                    <option>${acer.name}</option>
                    </select>
                </p>
                <p>Features: <img src='${hp.image}'></img><p>
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

console.log(laptops)

laptopElement.innerHTML = laptopList;
orderElement.innerHTML = order;
bankElement.innerHTML = bank;
workElement.innerHTML = work;