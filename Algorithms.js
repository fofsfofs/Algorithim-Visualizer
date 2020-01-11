const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let unsorted = [];
//background
ctx.fillStyle = '#2c3e50';
ctx.fillRect(0, 0, width, height);

//sorting box
boxPosX = (width - width * 0.3) / 2;
boxPosY = (height - height * 0.7) / 2;
boxWidth = width * 0.3;
boxHeight = height * 0.6;
resetBox();

function resetBox() {
    ctx.fillStyle = 'white';
    ctx.fillRect(boxPosX, boxPosY, boxWidth, boxHeight);
}

function bubbleSort(unsorted) {
    let count = 0;
    let bool = false;
    let temp = 0;
    while (!bool) {
        for (let i = 0; i <unsorted.length - 1; i++) {
            if (unsorted[i] > unsorted[i + 1]) {
                count++;
                temp = unsorted[i];
                unsorted[i] = unsorted[i + 1];
                unsorted[i + 1] = temp;
            } else if (i === (unsorted.length - 2) && count === 0) {
                bool = true;
            }
        }
        count = 0;
    }
    return unsorted;
}

function initializeArray() {
    let formArray = document.getElementById("frm1");
    let array = Array(parseInt(formArray.elements[0].value)).fill(1);
    unsorted = array.map(function (num) {
        return num * (Math.floor(Math.random() * 100) + 1);
    });
    displayArray(unsorted);
    /*ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    ctx.font = '36px arial';
    ctx.strokeText(, 50, 50);*/
}

function displayArray(array) {
    resetBox();
    ctx.fillStyle = '#2980b9';
    let i;
    for (i = 0; i < array.length; i++) {
        ctx.fillRect(boxPosX + (boxWidth / array.length) * i, boxPosY + boxHeight - (array[i] / 100) * boxHeight, boxWidth / array.length, (array[i] / 100) * boxHeight);
    }
}

function sort() {
    displayArray(bubbleSort(unsorted));
}

