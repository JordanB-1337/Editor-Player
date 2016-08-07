var canvas = document.getElementById('player'); /*define canvas*/
var ctx = canvas.getContext('2d'); /*make 2d canvas*/
var fps = 25; /*frames per seconds*/
var ucode; /* Var that will hold users code */
var code;
var errorcode; /* Errorcode reported to the user */
var sprites = {}; /* An Object for all the sprites. Just trust me on the whole object thing please*/
function Sprite(name, x, y, direction) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.walk = function(steps) { /*walking in the direction the sprite is facing*/
        this.x = (this.x + (Math.sin(this.direction) * steps)); /*x for walking*/
        this.y = (this.y + (Math.cos(this.direction) * steps)); /*y for walking*/
        return { /*returns the new x and y in a object */
            x: this.x,
            y: this.y
        }
    };
    this.changeX = function(x) {
        this.x = this.x + x; /*Changes x*/
        return this.x; /*returns the new x*/
    };
    this.changeY = function(y) {
        this.y = this.y + y; /*Changes y*/
        return this.y; /*returns the new y*/
    };
    this.setX = function(x) {
        this.x = x; /*Set x*/
        return this.x; /*returns the new x*/
    };
    this.setY = function(y) {
        this.y = y; /*Sets y*/
        return this.y; /*returns the new y*/
    };
    this.turn = function(degrees) {
        this.direction = (this.direction + degrees) % 360; /*Turn Sprite in direction*/
        if (this.direction < 0) {
            this.direction = 0;
        }
        return this.direction; /*returns the direction*/
    };
    this.turnTo = function(angle) {
        this.direction = angle % 360; /*Turn Sprite towards direction*/
        if (this.direction < 0) {
            this.direction = 0;
        }
        return this.direction; /*returns the direction*/
    };
    this.pointTo = function(x, y) {
        this.direction = (Math.atan2(x - this.x, y - this.y)) * (180 /
            Math.PI); /* Math to point*/
        return this.direction /* return new direction */
    };
}

function makeSprite(name, x, y, direction) {
        this[name] = new Sprite(name, x, y, direction); /* Add spirtes*/
    }
function runCode() {
    eval(editor.getValue())
onload(); /*run onload(); which will be a user command.*/
code = setInterval(function() { /*Uses var code so we can have a kill button */
    try {
        eval(ucode); /*users code*/
    } catch (err) {
        console.log(err);
        errorcode = err; /* Send error to client */
        clearInterval(code); /* Stop code from running */
    }
}, 1000 / fps); /*set framerate*/
}
