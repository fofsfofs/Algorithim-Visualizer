const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#2c3e50';
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = 'white';
ctx.fillRect((width - width * 0.3) / 2, (height - height * 0.7) / 2, width * 0.3, height * 0.6);

class Sorting {
    constructor(name, size, range) {
        this.name = name;
        this.size = size;
        this.range = range;
    }
    get sortName() {
        return this.name;
    }
}

class Bubble extends Sorting {
    constructor(name, size, range) {
        super(name, size, range);
    }

    sort(unsorted) {
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
}

test = new Bubble("Bubble", 1, 2);
sorted = test.sort([5,4,3,2,1]);

ctx.strokeStyle = 'white';
ctx.lineWidth = 1;
ctx.font = '36px arial';
ctx.strokeText(sorted, 50, 50);
