// initialize

let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let count = 0;
const btn = document.getElementById('increment-btn');
const saveBtn = document.getElementById('save-btn');
saveBtn.onclick = save;
btn.onclick = increment;

function increment() {
    count++;
    countEl.textContent = count;
}

function save (){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}
