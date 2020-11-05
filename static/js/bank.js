const bankElement = document.getElementById('container-bank');

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


bankElement.innerHTML = bank;