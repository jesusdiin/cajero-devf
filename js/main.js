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
const botonA = document.getElementById('botonA')
}





//  -   Renderizar Tarjetas

const cardsDiv = document.getElementById('cardsDiv');

for (let index = 0; index < users.length; index++) {
    var card = `
        <div class="card" id="card${index}" aria-hidden="true" data-bs-toggle="modal" data-bs-target="#cajero" onclick="viewLogin();">
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
                    Tarjeta de ${users[index].name}
                </h5>
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                </p>
                <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
            </div>
        </div>
    `
    console.log(`Usuario: ${users[index].name} - Num. Tarjeta: `);
    cardsDiv.innerHTML += card
    // for (let j = 0; j < users[index].cards.length; j++) {
    //     console.log(`${users[index].cards[j].numCard} - PIN: ${users[index].cards[j].pinAtm}`)
    // }
}

//  -   LOGIN

const viewLogin = () => {
    var uiLogin = `
    <p>Login</p>
    `
    atm.innerHTML = uiLogin;
}