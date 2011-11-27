//Author: Javascript gui: Arnthor, Jquery post/get: Axel
var x0 = 166;
var x1 = 233;
var x2 = 100;
var x3 = 300;
var y0 = 100;
var y1 = 300;
var y2 = 166;
var y3 = 233;
var main;
var victory;
function init(){
    this.canvas = document.getElementById('c');
    this.ctx = this.canvas.getContext('2d');
    this.draw = function(id,player)
    {
        if(player==1)
            drawOnBoardById(this.ctx,id,"x");
        else if(player==2)
            drawOnBoardById(this.ctx,id,"oval");
    }
    this.getVictory = function(line){
        this.ctx.lineWidth = 3;
        if(line==0)
        {

            //0 3 6
            drawOnBoardById(this.ctx,0,"hor");
            drawOnBoardById(this.ctx,3,"hor");
            drawOnBoardById(this.ctx,6,"hor");
        }
        else if(line == 1)
        {
            //1 4 7
            drawOnBoardById(this.ctx,1,"hor");
            drawOnBoardById(this.ctx,4,"hor");
            drawOnBoardById(this.ctx,7,"hor");
        }
        else if(line == 2)
        {
            //1 4 7
            drawOnBoardById(this.ctx,2,"hor");
            drawOnBoardById(this.ctx,5,"hor");
            drawOnBoardById(this.ctx,8,"hor");
        }
        else if(line == 3)
        {
            //1 4 7
            drawOnBoardById(this.ctx,0,"ver");
            drawOnBoardById(this.ctx,1,"ver");
            drawOnBoardById(this.ctx,2,"ver");
        }
        else if(line == 4)
        {
            //1 4 7
            drawOnBoardById(this.ctx,3,"ver");
            drawOnBoardById(this.ctx,4,"ver");
            drawOnBoardById(this.ctx,5,"ver");
        }
        else if(line == 5)
        {
            //1 4 7
            drawOnBoardById(this.ctx,6,"ver");
            drawOnBoardById(this.ctx,7,"ver");
            drawOnBoardById(this.ctx,8,"ver");
        }
        else if(line == 6)
        {
            //1 4 7
            drawOnBoardById(this.ctx,0,"diag");
            drawOnBoardById(this.ctx,4,"diag");
            drawOnBoardById(this.ctx,8,"diag");
        }
        else if(line == 7)
        {
            //1 4 7
            drawOnBoardById(this.ctx,2,"diag2");
            drawOnBoardById(this.ctx,4,"diag2");
            drawOnBoardById(this.ctx,6,"diag2");
        }
        this.ctx.lineWidth = 1;

    }
    //drawBoard(this.ctx);
    this.clear = function()
    {
        this.ctx.clearRect(0,0,400,400);
        drawBoard(this.ctx);
    }

}

//helper function borrowed from http://www.html5laboratory.com
var drawLine =function (contextO, startx, starty, endx, endy) {
    contextO.beginPath();
    contextO.moveTo(startx, starty);
    contextO.lineTo(endx, endy);
    contextO.closePath();
    contextO.stroke();
}

var drawBoard = function(ctx){
    drawLine(ctx,x0,y0,x0,y1);
    drawLine(ctx,x1,y0,x1,y1);
    drawLine(ctx,x2,y2,x3,y2);
    drawLine(ctx,x2,y3,x3,y3);
}

var getInputFromMouse = function(x,y)
{
    var m = -1;
    if(x<166&&x>100)
    {
        if(y<166 && y>100)
        {
            m = 0;
        }
        else if(y<233 && y>166)
        {
            m = 3;
        }
        else
        {
            m = 6;
        }
    }
    else if(x>166 && x<233)
    {
        if(y<166 && y>100)
        {
            m = 1;
        }
        else if(y<233 && y>166)
        {
            m = 4;
        }
        else
        {
            m=7;
        }
    }
    else if(x<300 && x>233)
    {
        if(y<166 && y>100)
        {
            m= 2;
        }
        else if(y<233 && y>166)
        {
            m = 5;
        }
        else
        {
            m = 8;
        }
    }
    return m;
}
var drawX = function(ctx,x,y,x0,y0)
{
    ctx.strokeStyle = "BLUE";
    drawLine(ctx,x,y,x0,y0);
    drawLine(ctx,x,y0,x0,y);
    ctx.strokeStyle = "BLACK";

}
var drawCircle = function(ctx,x,y)
{
    ctx.strokeStyle = "RED";
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.strokeStyle = "BLACK";
}
var drawDiag = function(ctx,x,y,x0,y0)
{

    drawLine(ctx,x,y,x0,y0);

}
var drawHor = function(ctx,x,y,x0,y0)
{

    drawLine(ctx,(x+x0)/2,y,(x+x0)/2,y0);

}
var drawVertical = function(ctx,x,y,x0,y0)
{
    var a= (y+y0)/2;
    drawLine(ctx,x,a,x0,a);

}
var drawDiag1 = function(ctx,x,y,x0,y0){

    drawLine(ctx,x0,y,x,y0);

}
var drawOnBoardById = function(ctx,id,what)
{

    var myx = 0;
    var myy = 0;
    var myx0 = 0;
    var myy0 = 0;


    if(id==0)
    {
        myx = 100;
        myy = 100;
        myx0 = 166;
        myy0 = 166;
        if(what=="oval")
            drawCircle(ctx,(myx+myx0)/2,(myy+myy0)/2);
        else if(what=="x")
            drawX(ctx,myx,myy,myx0,myy0);
        if(what=="ver")
            drawVertical(ctx,myx,myy,myx0,myy0);
        else if(what == "diag")
            drawDiag(ctx,myx,myy,myx0,myy0);
        else if(what == "diag2")
            drawDiag1(ctx,myx,myy,myx0,myy0);
        else if(what == "hor")
            drawHor(ctx,myx,myy,myx0,myy0);
    }
    if(id==3)
    {
        myx = 100;
        myy = 166;
        myx0 = 166;
        myy0 = 233;

        if(what=="oval")
            drawCircle(ctx,(myx+myx0)/2,(myy+myy0)/2);
        if(what=="x")
            drawX(ctx,myx,myy,myx0,myy0);
        if(what=="ver")
            drawVertical(ctx,myx,myy,myx0,myy0);
        if(what == "diag")
            drawDiag(ctx,myx,myy,myx0,myy0);
        if(what == "hor")
        {

            drawHor(ctx,myx,myy,myx0,myy0);
        }
        if(what == "diag2")
            drawDiag1(ctx,myx,myy,myx0,myy0);
    }
    if(id==6)
    {

        myx = 100;
        myy = 233;
        myx0 = 166;
        myy0 = 300;
        if(what=="oval")
            drawCircle(ctx,(myx+myx0)/2,(myy+myy0)/2);
        else if(what=="x")
            drawX(ctx,myx,myy,myx0,myy0);
        if(what=="ver")
            drawVertical(ctx,myx,myy,myx0,myy0);
        else if(what == "diag")
            drawDiag(ctx,myx,myy,myx0,myy0);
        else if(what == "hor")
            drawHor(ctx,myx,myy,myx0,myy0);
        else if(what == "diag2")
            drawDiag1(ctx,myx,myy,myx0,myy0);
    }
    if(id==1)
    {
        myx = 166;
        myy = 100;
        myx0 = 233;
        myy0 = 166;
        if(what=="oval")
            drawCircle(ctx,(myx+myx0)/2,(myy+myy0)/2);
        else if(what=="x")
            drawX(ctx,myx,myy,myx0,myy0);
        if(what=="ver")
            drawVertical(ctx,myx,myy,myx0,myy0);
        else if(what == "diag")
            drawDiag(ctx,myx,myy,myx0,myy0);
        else if(what == "hor")
            drawHor(ctx,myx,myy,myx0,myy0);
        else if(what == "diag2")
            drawDiag1(ctx,myx,myy,myx0,myy0);
    }
    if(id==4)
    {
        myx = 166;
        myy = 166;
        myx0 = 233;
        myy0 = 233;
        if(what=="oval")
            drawCircle(ctx,(myx+myx0)/2,(myy+myy0)/2);
        else if(what=="x")
            drawX(ctx,myx,myy,myx0,myy0);
        if(what=="ver")
            drawVertical(ctx,myx,myy,myx0,myy0);
        else if(what == "diag")
            drawDiag(ctx,myx,myy,myx0,myy0);
        else if(what == "hor")
            drawHor(ctx,myx,myy,myx0,myy0);
        else if(what == "diag2")
            drawDiag1(ctx,myx,myy,myx0,myy0);
    }
    if(id==7)
    {
        myx = 166;
        myy = 233;
        myx0 = 233;
        myy0 = 300;
        if(what=="oval")
            drawCircle(ctx,(myx+myx0)/2,(myy+myy0)/2);
        else if(what=="x")
            drawX(ctx,myx,myy,myx0,myy0);
        if(what=="ver")
            drawVertical(ctx,myx,myy,myx0,myy0);
        else if(what == "diag")
            drawDiag(ctx,myx,myy,myx0,myy0);
        else if(what == "hor")
            drawHor(ctx,myx,myy,myx0,myy0);
        else if(what == "diag2")
            drawDiag1(ctx,myx,myy,myx0,myy0);
    }
    if(id==2)
    {
        myx = 233;
        myy = 100;
        myx0 = 300;
        myy0 = 166;
        if(what=="oval")
            drawCircle(ctx,(myx+myx0)/2,(myy+myy0)/2);
        else if(what=="x")
            drawX(ctx,myx,myy,myx0,myy0);
        if(what=="ver")
            drawVertical(ctx,myx,myy,myx0,myy0);
        else if(what == "diag")
            drawDiag(ctx,myx,myy,myx0,myy0);
        else if(what == "hor")
            drawHor(ctx,myx,myy,myx0,myy0);
        else if(what == "diag2")
            drawDiag1(ctx,myx,myy,myx0,myy0);
    }
    if(id==5)
    {
        myx = 233;
        myy = 166;
        myx0 = 300;
        myy0 = 233;
        if(what=="oval")
            drawCircle(ctx,(myx+myx0)/2,(myy+myy0)/2);
        else if(what=="x")
            drawX(ctx,myx,myy,myx0,myy0);
        if(what=="ver")
            drawVertical(ctx,myx,myy,myx0,myy0);
        else if(what == "diag")
            drawDiag(ctx,myx,myy,myx0,myy0);
        else if(what == "hor")
            drawHor(ctx,myx,myy,myx0,myy0);
        else if(what == "diag2")
            drawDiag1(ctx,myx,myy,myx0,myy0);
    }
    if(id==8)
    {
        myx = 233;
        myy = 233;
        myx0 = 300;
        myy0 = 300;
        if(what=="oval")
            drawCircle(ctx,(myx+myx0)/2,(myy+myy0)/2);
        else if(what=="x")
            drawX(ctx,myx,myy,myx0,myy0);
        if(what=="ver")
            drawVertical(ctx,myx,myy,myx0,myy0);
        else if(what == "diag")
            drawDiag(ctx,myx,myy,myx0,myy0);
        else if(what == "hor")
            drawHor(ctx,myx,myy,myx0,myy0);
        else if(what == "diag2")
            drawDiag1(ctx,myx,myy,myx0,myy0);
    }
}

window.onclick = function(evt){
    var a = evt.pageX;
    var b = evt.pageY;
    var input = getInputFromMouse(a,b);

    if (input > -1 && victory == false)
    {
        $.ajax({
            type: 'POST',
            url:'application/input',
            data: {squareId: input},
            dataType: 'json',
            success:  function(data)
            {
                if(data.isSuccess)
                    main.draw(data.renderSquareId,data.renderSymbolId);
                if(data.isVictory)
                {
                    main.getVictory(data.victoryLine);
                    victory = true;
                }
            }

        });
    }
}

function Play(){
    $.get(
        'application/initialize',
        function(data)
        {
            victory = false;
            main = new init();
            main.clear();
        }
    );

}
function clearBoard(){

}