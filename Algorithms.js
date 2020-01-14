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
            setTimeout(function () {
                console.log(unsorted[i]);
                //ctx.fillStyle = '#d32850';
                //ctx.fillRect(boxPosX + (boxWidth / unsorted.length) * i, boxPosY + boxHeight - (unsorted[i] / 100) * boxHeight, boxWidth / unsorted.length, (unsorted[i] / 100) * boxHeight);
                //ctx.fillRect(boxPosX + (boxWidth / unsorted.length) * (i + 1), boxPosY + boxHeight - (unsorted[i + 1] / 100) * boxHeight, boxWidth / unsorted.length, (unsorted[i + 1] / 100) * boxHeight);
            }, 2000);
            if (unsorted[i] > unsorted[i + 1]) {

                /*setInterval(function () {
                    /!*ctx.strokeStyle = 'white';
                    ctx.lineWidth = 1;
                    ctx.font = '36px arial';
                    ctx.strokeText(i.toString(), 50, 50);*!/


                }, 1000);*/
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
    //unsorted = [90,90, 100];
    displayArray(unsorted);
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
    //bubbleSort(unsorted);
    let sorted = false;
    let count = 0;
    (function theLoop (i) {
        setTimeout(function () {
            j = i - unsorted.length;
            let temp = 0;
            console.log(count);
            ctx.fillStyle = '#d32850';
            ctx.fillRect(boxPosX + (boxWidth / unsorted.length) * (j), boxPosY + boxHeight - (unsorted[j] / 100) * boxHeight, boxWidth / unsorted.length, (unsorted[j] / 100) * boxHeight);
            ctx.fillRect(boxPosX + (boxWidth / unsorted.length) * (j + 1), boxPosY + boxHeight - (unsorted[j + 1] / 100) * boxHeight, boxWidth / unsorted.length, (unsorted[j + 1] / 100) * boxHeight);
            if (unsorted[j] > unsorted[j + 1]) {
                setTimeout(function () {
                    count++;
                    temp = unsorted[j];
                    unsorted[j] = unsorted[j + 1];
                    unsorted[j + 1] = temp;
                    ctx.fillStyle = 'white';
                    ctx.fillRect(boxPosX + (boxWidth / unsorted.length) * (j), boxPosY, boxWidth / unsorted.length * 2, boxHeight);
                    ctx.fillStyle = '#d32850';
                    ctx.fillRect(boxPosX + (boxWidth / unsorted.length) * (j), boxPosY + boxHeight - (unsorted[j] / 100) * boxHeight, boxWidth / unsorted.length, (unsorted[j] / 100) * boxHeight);
                    ctx.fillRect(boxPosX + (boxWidth / unsorted.length) * (j + 1), boxPosY + boxHeight - (unsorted[j + 1] / 100) * boxHeight, boxWidth / unsorted.length, (unsorted[j + 1] / 100) * boxHeight);
                }, 250);

                setTimeout(function () {
                    ctx.fillStyle = '#2980b9';
                    ctx.fillRect(boxPosX + (boxWidth / unsorted.length) * (j), boxPosY + boxHeight - (unsorted[j] / 100) * boxHeight, boxWidth / unsorted.length, (unsorted[j] / 100) * boxHeight);
                    ctx.fillRect(boxPosX + (boxWidth / unsorted.length) * (j + 1), boxPosY + boxHeight - (unsorted[j + 1] / 100) * boxHeight, boxWidth / unsorted.length, (unsorted[j + 1] / 100) * boxHeight);

                }, 250);
            } else if (unsorted[j] <= unsorted[j + 1]) {
                setTimeout(function () {
                    ctx.fillStyle = '#2980b9';
                    ctx.fillRect(boxPosX + (boxWidth / unsorted.length) * (j), boxPosY + boxHeight - (unsorted[j] / 100) * boxHeight, boxWidth / unsorted.length, (unsorted[j] / 100) * boxHeight);
                    ctx.fillRect(boxPosX + (boxWidth / unsorted.length) * (j + 1), boxPosY + boxHeight - (unsorted[j + 1] / 100) * boxHeight, boxWidth / unsorted.length, (unsorted[j + 1] / 100) * boxHeight);
                }, 250)
            } else if (j === (unsorted.length - 2) && count === 0) {
                sorted = true;
            }
            if (++i && i < unsorted.length * 2 - 1) {          // If i > 0, keep going
                theLoop(i);       // Call the loop again, and pass it the current value of i
            } else if (count > 0 && sorted === false) {
                i = unsorted.length;
                count = 0;
                theLoop(i);
            }
        }, 500);
    })(unsorted.length);

}

