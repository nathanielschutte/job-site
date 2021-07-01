
const CANVAS_ELEMENT = 'game-canvas';
const RES_PATH = '/res/jobsite/';

const fps = 120;
const frameTime = 1000 / fps;

let frame = 0;
let timeLast = Date.now();

let rad = 100;
let xpos = 200;
let ypos = 200;
let t = 0;
let speed = 0.01;

let interval;

let images = {};

function canvasSetup(id) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    load();

    restart();
    interval = setInterval(loop, frameTime, ctx);
}

function load() {
    images['shroom'] = new Image();
    images['shroom'].src = RES_PATH + 'shroom.png';
}

function restart() {
    t = 0;
    frame = 0;
}

function loop(ctx) {
    //console.log('frame #', frame);

    ctx.drawImage(images['shroom'], xpos + Math.sin(t) * rad, ypos + Math.cos(t) * rad, 100, 100);
    t += speed;

    frame++;

    // Update fps tracker around every second
    if (frame % fps === 0) {
        trackFps();
    }
}

function trackFps() {
    let now = Date.now();
    let diff = now - timeLast;
    timeLast = now;

    let trackedFps = Math.round(fps / diff * 1000);

    let tracker = document.getElementById('track-fps');
    tracker.innerText = 'FPS: ' + trackedFps;
}


window.onload = function() {

    const socketOptions = {
        update: true,
        transports: ['websocket'],

    }

    const socket = io('http://localhost:3001', socketOptions);

    socket.on('connect', () => {
        console.log('connected to server');
    });

    socket.on('hello', (data) => {
        document.getElementById('hello-world').innerText = data;
    });

    canvasSetup(CANVAS_ELEMENT);
}