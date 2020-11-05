const laptopElement = document.getElementById('container-laptops');
const orderElement = document.getElementById('container-laptop-order');

function Laptop(name,processor,hdd,ram,description,price){
    this.name = name;
    this.processor = processor;
    this.hdd = hdd;
    this.ram = ram;
    this.description = description;
    this.price = price;
}

let laptops = [];

const hp = new Laptop('HP Pavilion 15','i7','256 SSD','16 GB RAM','A really good laptop for the dystopia that is coming.','10000 KR');
const lenovo = new Laptop('Lenovo IdeaPad 330','i5','1 TB HDD','8 GB RAM','This laptop is mostly used by the Karma Police and performs really well. Highly recommended!','13000 KR');
const asus = new Laptop('Asus VivoBook 14','i5','512 SSD','8 GB RAM','A small yet high performing laptop recommended by Mr. Yorke himself.','15000 KR');
const acer = new Laptop('Acer Aspire 3','i5','256 SSD','8 GB RAM','The perfect laptop with a good enough portable size and performance perfect for myxomatosis experiments.','12000 KR');

laptops.push(hp);
laptops.push(lenovo);
laptops.push(asus);
laptops.push(acer);

const laptopList =  
    `
    <div class='laptop-class'>
        <p>Laptops</p>
            <div class='js-class'> 
                <p>
                    <select id="select-id">
                        <option>${laptops.name}</option>
                    </select>
                </p>
                <p>Features: <p>
            </div>
    </div>    
    `;

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
`;    

laptopElement.innerHTML = laptopList;
orderElement.innerHTML = order;