const date = new Date();
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];

// Variables globales Saldo
var saldo;
var numCardPublic;

//  -   Menu Public
const atm = document.getElementById('rootAtm');
const div = document.createElement('div');

const limpiarCajero = () => {
    const divClear = ` `;
    atm.innerHTML = divClear;
}

//  -   Renderizar Tarjetas

const cardsDiv = document.getElementById('cardsDiv');

const renderCards = () => {
    for (let index = 0; index < users.length; index++) {
        const usuario = users[index];
        var card = `
            <div class="card" aria-hidden="true" data-bs-toggle="modal" data-bs-target="#cajero"  onclick="viewLogin(${usuario.card.numCard})">
                <div class="card-body">
                    <h5 class="card-title placeholder-glow">
                        Tarjeta de ${usuario.name}
                    </h5>
                    <p class="card-text placeholder-glow" id="pCardId${index}">
                        ${usuario.card.numCard}
                        <span class="placeholder col-7"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-6"></span>
                        <span class="placeholder col-8"></span>
                    </p>
                    <a href="#" tabindex="-1" class="btn btn-primary col-6">
                        ${usuario.card.pinAtm}
                    </a>
                </div>
            </div>
        `
        cardsDiv.innerHTML += card
        console.log(users[index].name)
    }
}

renderCards();

var viewLogin = (numCard) => {
    for (let index = 0; index < users.length; index++) {
        const usuario = users[index];

        const uiLogin = `
            <div class="col-sm-12">
                <h2 class="text-black text-center">Bienvenido</h2>
                <div id="divDate">
                    <p class="text-center">${day}/${month}/${year}</p>
                </div>
            </div>

            <div class="col-sm-12 bg-white shadow-lg pantallaAtm">
                <div class="d-grid gap-2 col-10 mx-auto">
                    <form id="pinForm">
                        <div class="mb-3">
                            <label for="pinTarjeta" class="form-label">Tarjeta</label>
                            <input type="number" class="form-control" id="numTarjeta" value="${usuario.card.numCard}">
                            <label for="pinTarjeta" class="form-label">Ingresa tu PIN</label>
                            <input type="password" class="form-control" id="pinTarjeta">
                        </div>
                        <button type="submit" class="btn btn-primary" id="btnPin" onclick="login(${usuario.card.numCard}, ${usuario.card.pinAtm})">Siguiente</button>
                    </form>
                </div>
            </div>
        `
        if (numCard == usuario.card.numCard) {
            atm.innerHTML = uiLogin;
            console.log(numCard, usuario.card.numCard)
        }
    }
}

const login = (card, pin) => {
    const userCard = document.getElementById('numTarjeta').value;
    const userPin = Number(document.getElementById('pinTarjeta').value);

    numCardPublic = card;

    if (userCard != card) {
        alert('Ingresa una tarjeta válida')
    } else if (userCard == card && userPin == pin){
        console.log('Succes')
        return findUser(numCardPublic), homeCajero();
    } else {
        console.log('Pin Incorrecto')
        alert('Ingresa el PIN Correcto')
    }
}

var userEncontradoPublic;

const findUser = (card) => {
    userEncontradoPublic = users.find((n) => n.card.numCard == card);
    return userEncontradoPublic;
}

const consultarSaldo = () => {
    saldo = userEncontradoPublic.card.saldo;
    console.log(saldo)
}

const saldoMinimo = 10;
const saldoMaximo = 900;

const ingresarMonto = () => {
    var montoAingresar = 0;
    let saldoAvalidar = saldo + montoAingresar;
    if (saldoAvalidar <= saldoMaximo) {
        saldo = saldoAvalidar;
    } else {
        alert('El Saldo no de tu cuenta no debe superar los ' + saldoMaximo)
    }
}

const retirarSaldo = () => {
    var montoAretirar = 0;
    let saldoAvalidar = saldo - montoAretirar;
    if (montoAretirar == 0) {
        alert('Ingresa un valor válido a retirar')
    } else if (saldoAvalidar <= saldoMinimo) {
        alert('No puedes dejar tu cuenta con ' + saldoMinimo)
    } else {
        saldo = saldoAvalidar
    }
}


const homeCajero = () => {

    consultarSaldo();

    var home = `
        <div class="col-sm-12">
            <h2 class="text-black text-center">Bienvenido</h2>
            <div id="divDate">
                <p class="text-center">${day}/${month}/${year}</p>
            </div>
        </div>
        <div class="bg-white shadow-lg pantallaAtm" id="">

            <div class="d-grid d-gap col-md-5 col-lg-4 col-sm-12 mx-auto">

                <div class="tarjeta background shadow">
                    <div class="rootTarjeta">
                        <div class="tarjetaHead">
                            <h1>${userEncontradoPublic.card.banco}</h1>
                        </div>
                        <div class="tarjetaBody">
                            <img src="../img/chip.png" class="chipImg" alt="">
                            <h2>${userEncontradoPublic.card.numCard}</h2>
                            <p>22/2025</p>
                        </div>
                        <div class="tarjetaFooter">
                            <h5>${userEncontradoPublic.name} ${userEncontradoPublic.lastname}</h5>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>$${userEncontradoPublic.card.saldo}</h3>
                </div>

            </div>

        </div>
    `
    atm.innerHTML = home;
    
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
