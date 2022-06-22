console.log(users)

const date = new Date();
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];

const innerDate = document.getElementById('divDate');
innerDate.innerHTML = `
    <p class="text-center">${day}/${month}/${year}</p>
`

const card1 = () => {
    alert('Card 1')
}

const card2 = () => {
    alert('Card 2')
}

const card3 = () => {
    alert('Card 3')
}