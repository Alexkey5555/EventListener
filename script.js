const btn = document.getElementById('btn');
const input = document.getElementById('text');
const square = document.getElementById('square');
const e_btn = document.getElementById('e_btn');
const range = document.getElementById('range');
const circle = document.getElementById('circle');
let value = '';
const addColor = function (event) {
    value = event.target.value;
};
const clickBtn = function (event) {
    square.style.backgroundColor = value;
};
const HeightWidth = function (event) {
    console.log(event.target.value);
    circle.style.height = event.target.value + '%';
    circle.style.width = event.target.value + '%';
};

input.addEventListener('input', addColor);
btn.addEventListener('click', clickBtn);
e_btn.addEventListener('click', function () {
    e_btn.style.display = 'none';
});
range.addEventListener('input', HeightWidth);





