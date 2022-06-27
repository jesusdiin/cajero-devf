const users = [
    {
        name: 'Jesús',
        lastname: 'Hernández',
        card: {
            banco: 'devfbank',
            numCard: 555444333222111,
            saldo: 677,
            pinAtm: 4657,
            retiroSinTarjeta: {
                habilitado: true,
                referencia: 476768,
                saldo: 567
            }
        }
    },
    {
        name: 'Carlos',
        lastname: 'Slim',
        card: {
            banco: 'devfbank',
            numCard: 555444333222000,
            saldo: 345,
            pinAtm: 8800,
            retiroSinTarjeta: {
                habilitado: true,
                referencia: 476768,
                saldo: 567786
            }
        }
    },
    {
        name: 'Pedro',
        lastname: 'Smit',
        card: {
            banco: 'devfbank',
            numCard: 555444333222666,
            saldo: 576,
            pinAtm: 1111,
            retiroSinTarjeta: {
                habilitado: true,
                referencia: 476768,
                saldo: 567
            }
        }
    },
    {
        name: 'Carmen',
        lastname: 'Rosalía',
        card: {
            banco: 'devfbank',
            numCard: 555444333222777,
            saldo: 12,
            pinAtm: 1010,
            retiroSinTarjeta: {
                habilitado: true,
                referencia: 476768,
                saldo: 567
            }
        }
    }
]

// console.log(users[0].cards)
// for (let index = 0; index < users.length; index++) {
//     console.log(`Usuario: ${users[index].name} - Num. Tarjeta: `);
//     for (let j = 0; j < users[index].cards.length; j++) {
//         console.log(`${users[index].cards[j].numCard} - PIN: ${users[index].cards[j].pinAtm}`)
//     }
// }`

