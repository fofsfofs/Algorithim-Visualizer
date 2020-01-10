const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#2c3e50';
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = 'white';
ctx.fillRect((width - width * 0.3) / 2, (height - height * 0.7) / 2, width * 0.3, height * 0.6);