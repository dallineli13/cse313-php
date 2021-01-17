const btn = document.querySelector('#alert-btn');
const colorBtn = document.querySelector('#color-btn');
const divs = document.querySelectorAll('div');

function handleClick() {
    alert('Clicked!!');
}

function handleHover(e) {
 const isBold = document.querySelector('b');

 if (!isBold) {
    const div = e.target;
    const text = e.target.textContent;
    div.innerHTML = `
    <b>${text}</b>
 `
} else {
    const div = e.target;
    const text = e.target.textContent;
    div.innerHTML = text;
}
 }

 function changeColor() {
     const firstDiv = document.querySelectorAll('div')[0];
     const color = document.querySelector('input').value;
     firstDiv.style.backgroundColor = color;
 }
 
btn.addEventListener('click', handleClick);
colorBtn.addEventListener('click', changeColor)
divs.forEach(div => div.addEventListener('mouseover', handleHover))
divs.forEach(div => div.addEventListener('mouseleave', handleHover))
