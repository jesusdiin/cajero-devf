console.log(users)

const date = new Date();
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];


//  -   Menu Public

const atm = document.getElementById('rootAtm');
const div = document.createElement('div');

const limpiarCajero = () => {
    const divClear = ` `;
    atm.innerHTML = divClear;
}

const retiroSinTarjeta = () => {
    const botonesPublic = `
        <div class="col-sm-12">
            <h2 class="text-black text-center">Bienvenido</h2>
            <div id="divDate">
                <p class="text-center">${day}/${month}/${year}</p>
            </div>
        </div>
        <div class="col-sm-12 bg-white shadow-lg pantallaAtm">
            <div class="d-grid gap-2 col-10 mx-auto">
                <a href="#" class="btn btn-primary">Retirar sin Tarjeta</a>
                <a href="#" class="btn btn-primary">Ingresar una tarjeta</a>
                <a href="#" class="btn btn-danger" data-bs-dismiss="modal" onclick="limpiarCajero();">Salir</a>
            </div>
        </div>
    `
    div.innerHTML = botonesPublic
    atm.appendChild(div);
}


//  -   Renderizar Tarjetas

const cardsDiv = document.getElementById('cardsDiv');

for (let index = 0; index < users.length; index++) {

    var card = `
        <div class="card" id="card${index}" aria-hidden="true" data-bs-toggle="modal" data-bs-target="#cajero"  onclick="viewLogin()">
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                    Tarjeta de ${users[index].name}
                </h5>
                <p class="card-text placeholder-glow">
                    ${users[index].card.numCard}
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                </p>
                <a href="#" tabindex="-1" class="btn btn-primary col-6">
                    ${users[index].card.pinAtm}
                </a>
            </div>
        </div>
    `

    var viewLogin = () => {
        var uiLogin = `
            <div class="col-sm-12">
                <h2 class="text-black text-center">Bienvenido</h2>
                <div id="divDate">
                    <p class="text-center">${day}/${month}/${year}</p>
                </div>
            </div>
        
            <div class="col-sm-12 bg-white shadow-lg pantallaAtm">
                <form id="pinForm">
                    <div class="mb-3">
                        <label for="pinTarjeta" class="form-label">Ingresa el PIN de la tarjeta ${users[index].card.numCard}</label>
                        <input type="password" class="form-control" id="pinTarjeta">
                    </div>
                    <button type="submit" class="btn btn-primary" id="btnPin" onclick="login()">Siguiente</button>
                </form>
            </div>
        `

        div.innerHTML = uiLogin
        atm.appendChild(div)
    }

    var login = () => {
        const userPin = Number(document.getElementById('pinTarjeta').value);
        console.log(userPin)

        if (userPin != users[index].card.pinAtm) {
            console.log('Pin Incorrecto')
        } else {
            console.log('Success')
        }

    }





    console.log(`Usuario: ${users[index].name} - Num. Tarjeta: ${users[index].card.numCard} `);
    cardsDiv.innerHTML += card
    

}

    // for (let j = 0; j < users[index].cards.length; j++) {
    //     console.log(`${users[index].cards[j].numCard} - PIN: ${users[index].cards[j].pinAtm}`)
    // }


//  -   LOGIN
