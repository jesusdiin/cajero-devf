const users = [
    {
        name: 'Jesús',
        lastname: 'Hernández',
        avatar: '', 
        cards: [{
            banco: 'devfbank',
            numCard: 555444333222111,
            saldo: 5766,
            pinAtm: 4657,
            retiroSinTarjeta: {
                habilitado: true,
                referencia: 476768,
                saldo: 567
            }
        },
        {
            banco: 'bancomer',
            numCard: 555444333222000,
            saldo: 5766,
            pinAtm: 4657,
            retiroSinTarjeta: {
                habilitado: true,
                referencia: 476768,
                saldo: 567
            }
        }
        ]
    },
    {
        name: 'Carlos',
        lastname: 'Slim',
        avatar: '',
        cards: [{
                banco: 'bancomer',
                numCard: 555444333222555,
                saldo: 5776766,
                pinAtm: 4455,
                retiroSinTarjeta: {
                    habilitado: false,
                    referencia: null,
                    saldo: null
                }
            }
        ]
    },
    {
        name: 'Pedro',
        lastname: 'Smit',
        avatar: '', 
        cards: [{
            banco: 'devfbank',
            numCard: 555444333222111,
            saldo: 5766,
            pinAtm: 4657,
            retiroSinTarjeta: {
                habilitado: true,
                referencia: 476768,
                saldo: 567
            }
        },
        {
            banco: 'bancomer',
            numCard: 555444333222000,
            saldo: 5766,
            pinAtm: 4657,
            retiroSinTarjeta: {
                habilitado: true,
                referencia: 476768,
                saldo: 567
            }
        }
        ]
    }
]

// console.log(users[0].cards)
// for (let index = 0; index < users.length; index++) {
//     console.log(`Usuario: ${users[index].name} - Num. Tarjeta: `);
//     for (let j = 0; j < users[index].cards.length; j++) {
//         console.log(`${users[index].cards[j].numCard} - PIN: ${users[index].cards[j].pinAtm}`)
//     }
// }