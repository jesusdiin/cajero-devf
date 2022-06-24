const date = new Date();
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];


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
                        <button type="submit" class="btn btn-primary" id="btnPin" onclick="login()">Siguiente</button>
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

const login = () => {
    const userPin = Number(document.getElementById('pinTarjeta').value);
    console.log(userPin)

    if (userPin == usuario.card.pinAtm) {
        console.log('Success')
        // homeCajero(usuario);
        console.log(usuario.card)
    } else {
        console.log('Pin Incorrecto')
        alert('Ingresa el PIN Correcto')
    }
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



//  -   For Interfaz
for (let index = 0; index < users.length; index++) {

    var usuario = users[index];
    console.log(usuario)





    const homeCajero = () => {
        
    }

}


//  -   For Validacion
// for (let index = 0; index < users.length; index++) {

// }


