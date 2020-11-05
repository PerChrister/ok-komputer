const bankElement = document.getElementById('container-bank');
const workElement = document.getElementById('container-work');


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
    `
;

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

bankElement.innerHTML = bank;
workElement.innerHTML = work;