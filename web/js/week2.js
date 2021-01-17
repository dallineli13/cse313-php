const img = document.querySelector('.wrap');
const ydg = document.querySelector('#ydg');

function handleHover() {
    ydg.classList.toggle('hidden');
}

function getClub() {
    let club;
    const input = parseInt(document.querySelector('input').value);
    const div = document.querySelector('#club')
    console.log(typeof(input))
    if(input === null) {
        club = 'Please enter a yardage... this isnt magic'
    } else if (input <= 100) {
        club = 'Sand Wedge'
    } else if (input >= 140 && input < 160) {
        club = '9 Iron'
    } else if (input >= 100 && input < 140) {
        club = 'Pitching Wedge'
    } else if (input >= 160 && input < 190) {
        club = '7 Iron'
    } else if (input >= 190 && input < 220) {
        club = '3 Wood'
    } else if (input > 220) {
        club = 'Driver'
    } else {
        club = 'Not Valid... enter a number'
    } 
    div.textContent = club;
}

img.addEventListener('mouseenter', handleHover)
img.addEventListener('mouseleave', handleHover)