const bankElement = document.getElementById('container-bank');
const workElement = document.getElementById('container-work');
const laptopElement = document.getElementById('container-laptops');
const orderElement = document.getElementById('container-laptop-order');

const bank =  
    `
    <div class='bank-class'>
        <p>Million Dollar Man's Bank</p>
            <div class='js-class'>
                <p>Banker: Mr. Magpie</p>
                <p>Balance: <p>
                <p> Kr. </p>
                <button type='button' class='btn btn-info'>Get a loan</button>
            </div>
    </div>
    `;

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
    `;

const laptops =  
    `
    <div class='laptop-class'>
        <p>Laptops</p>
            <div class='js-class'>
                <p>
                    <select>
                        <option>OK Komputer</option>
                        <option>Kid A</option>
                        <option>In Rainbows</option>
                        <option>TKOL 10</option>
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
                <p>OK Computer</p>
                <p>Features: <p>
                <button type='button' class='btn btn-info'>Buy now</button>
            </div>
    </div>
    `;    

bankElement.innerHTML = bank;
workElement.innerHTML = work;
laptopElement.innerHTML = laptops;
orderElement.innerHTML = order;

