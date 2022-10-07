//Dados Iniciais
let currentColor = 'black';
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

//Eventos
    document.querySelectorAll('.colorArea .color').forEach(item=> {
    item.addEventListener('click', colorClickEvent);
});

screen.addEventListener('mousedown', mouseDOwnEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);
document.querySelector('.clear').addEventListener('click', clearScreen);

//Funções
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;
    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function mouseDOwnEvent(e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft; //Pegar o tamanho do eixo horizontal.
    mouseY = e.pageY - screen.offsetTop; //Pegar o tamanho do eixo vertical.
};

function mouseMoveEvent(e) {
    if(canDraw) {
        draw(e.pageX, e.pageY);
    };
};

function mouseUpEvent() {
    canDraw = false;
};

function draw(x, y) {
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    //desenhar
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
};

function clearScreen() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.width);
};