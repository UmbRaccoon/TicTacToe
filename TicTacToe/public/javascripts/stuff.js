var x0 = 166;
var x1 = 233;
var x2 = 100;
var x3 = 300;
var y0 = 100;
var y1 = 300;
var y2 = 166;
var y3 = 233;
var _id = "";
var _what = "";

function init(){
    this.canvas = document.getElementById('c');
    this.ctx = this.canvas.getContext('2d');

    //drawBoard(this.ctx);
    this.clear = function()
    {
        this.ctx.clearRect(0,0,400,400);
        drawBoard(this.ctx);
    }
    this.getVictory = function(line){
        if(line=0)
        {
            //0 3 6
            drawOnBoardById(this.ctx,0,"hroizantal");
            drawOnBoardById(this.ctx,3,"hroizantal");
            drawOnBoardById(this.ctx,6,"hroizantal");
        }
        else if(line == 1)
        {
            //1 4 7
            drawOnBoardById(this.ctx,1,"hroizantal");
            drawOnBoardById(this.ctx,4,"hroizantal");
            drawOnBoardById(this.ctx,7,"hroizantal");
        }
        else if(line == 2)
        {
            //1 4 7
            drawOnBoardById(this.ctx,2,"hroizantal");
            drawOnBoardById(this.ctx,5,"hroizantal");
            drawOnBoardById(this.ctx,8,"hroizantal");
        }
        else if(line == 3)
        {
            //1 4 7
            drawOnBoardById(this.ctx,0,"vertical");
            drawOnBoardById(this.ctx,1,"vertical");
            drawOnBoardById(this.ctx,2,"vertical");
        }
        else if(line == 4)
        {
            //1 4 7
            drawOnBoardById(this.ctx,3,"vertical");
            drawOnBoardById(this.ctx,4,"vertical");
            drawOnBoardById(this.ctx,5,"vertical");
        }
        else if(line == 5)
        {
            //1 4 7
            drawOnBoardById(this.ctx,6,"vertical");
            drawOnBoardById(this.ctx,7,"vertical");
            drawOnBoardById(this.ctx,8,"vertical");
        }
        else if(line == 6)
        {
            //1 4 7
            drawOnBoardById(this.ctx,0,"diag");
            drawOnBoardById(this.ctx,4,"diag");
            drawOnBoardById(this.ctx,8,"diag");
        }
        else
        {
            //1 4 7
            drawOnBoardById(this.ctx,2,"diag1");
            drawOnBoardById(this.ctx,4,"diag1");
            drawOnBoardById(this.ctx,6,"diag1");
        }

    }



    var getServer = function(id,what){

        _id = id;
        _what = what;


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

    var getId = function(id)
    {
        if(id)
            setId(id);
        else
            return "error";
    }

    var druwStuffById = function(ctx,id)
    {
        if(id=="")
            return "error";
    }

    var getInputFromMouse = function(x,y)
    {
        if(x<166&&x>100)
        {
            if(y<166 && y>100)
            {
                return 0;
            }
            else if(y<233 && y>166)
            {
                return 1;
            }
            else
            {
                return 2;
            }
        }
        else if(x>166 && x<233)
        {
            if(y<166 && y>100)
            {
                return 3;
            }
            else if(y<233 && y>166)
            {
                return 4;
            }
            else
            {
                return 5;
            }
        }
        else if(x>300 && x>233)
        {
            if(y<166 && y>100)
            {
                return 6;
            }
            else if(y<233 && y>166)
            {
                return 7;
            }
            else
            {
                return 8;
            }
        }

    }
    var drawX = function(ctx,x,y,x0,y0)
    {
        ctx.fillStyle = "BLACK";
        drawLine(ctx,x,y,x0,y0);
        drawLine(ctx,x,y0,x0,y);

    }
    var drawCircle = function(ctx,x,y)
    {
        ctx.fillStyle = "BLACK";
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 2, false);
        ctx.stroke();
    }
    var drawDiag = function(ctx,x,y,x0,y0)
    {
        ctx.fillStyle = "RED";
        drawLine(ctx,x,y,x0,y0);

    }
    var drawHor = function(ctx,x,y,x0,y0)
    {
        ctx.fillStyle = "RED";
        drawLine(ctx,(x+x0)/2,y,(x+x0)/2,y0);

    }
    var drawVertical = function(ctx,x,y,x0,y0)
    {
        ctx.fillStyle = "RED";
        drawLine(ctx,x,y/2,x0,y/2);

    }
    var drawDiag2 = function(ctx,x,y,x0,y0){
        ctx.fillStyle = "RED";
        drawLine(ctx,x0,y,x,y0);

    }
    var drawOnBoardById = function(ctx,id,what)
    {
        var myx = 0;
        var myy = 0;
        var myx0 = 0;
        var myy0 = 0;
        if(!id)
            return "error";
        if(!what)
            return "error";

        if(id=="0")
        {
            myx = 100;
            myy = 100;
            myx0 = 166;
            myy0 = 166;
            if(what=="oval")
                drawCircle(ctx,(myx+myx0)/2,(myy+myy0)/2);
            else if(what=="x")
                drawX(ctx,myx,myy,myx0,myy0);
            if(what=="vertical")
                drawVertivca(ctx,myx,myy,myx0,myy0);
            else if(what == "diagonal")
                drawDiag(ctx,myx,myy,myx0,myy0);
            else if(what == "diagonal1")
                drawDiag1(ctx,myx,myy,myx0,myy0);
            else if(what == "horizantal")
                drawHor(ctx,myx,myy,myx0,myy0);
        }
        if(id=="1")
        {
            myx = 100;
            myy = 166;
            myx0 = 166;
            myy0 = 233;
            if(what=="oval")
                drawCircle(ctx,(myx+myx0)/2,(myy+myy0)/2);
            else if(what=="x")
                drawX(ctx,myx,myy,myx0,myy0);
            if(what=="vertical")
                drawVertivca(ctx,myx,myy,myx0,myy0);
            else if(what == "diagonal")
                drawDiag(ctx,myx,myy,myx0,myy0);
            else if(what == "horizantal")
                drawHor(ctx,myx,myy,myx0,myy0);
            else if(what == "diagonal1")
                drawDiag1(ctx,myx,myy,myx0,myy0);
        }
        if(id=="2")
        {
            myx = 100;
            myy = 233;
            myx0 = 166;
            myy0 = 300;
            if(what=="oval")
                drawCircle(ctx,(myx+myx0)/2,(myy+myy0)/2);
            else if(what=="x")
                drawX(ctx,myx,myy,myx0,myy0);
            if(what=="vertical")
                drawVertivca(ctx,myx,myy,myx0,myy0);
            else if(what == "diagonal")
                drawDiag(ctx,myx,myy,myx0,myy0);
            else if(what == "horizantal")
                drawHor(ctx,myx,myy,myx0,myy0);
            else if(what == "diagonal1")
                drawDiag1(ctx,myx,myy,myx0,myy0);
        }
        if(id=="3")
        {
            myx = 166;
            myy = 100;
            myx0 = 233;
            myy0 = 166;
            if(what=="oval")
                drawCircle(ctx,(myx+myx0)/2,(myy+myy0)/2);
            else if(what=="x")
                drawX(ctx,myx,myy,myx0,myy0);
            if(what=="vertical")
                drawVertivca(ctx,myx,myy,myx0,myy0);
            else if(what == "diagonal")
                drawDiag(ctx,myx,myy,myx0,myy0);
            else if(what == "horizantal")
                drawHor(ctx,myx,myy,myx0,myy0);
            else if(what == "diagonal1")
                drawDiag1(ctx,myx,myy,myx0,myy0);
        }
        if(id=="4")
        {
            myx = 166;
            myy = 166;
            myx0 = 233;
            myy0 = 233;
            if(what=="oval")
                drawCircle(ctx,(myx+myx0)/2,(myy+myy0)/2);
            else if(what=="x")
                drawX(ctx,myx,myy,myx0,myy0);
            if(what=="vertical")
                drawVertivca(ctx,myx,myy,myx0,myy0);
            else if(what == "diagonal")
                drawDiag(ctx,myx,myy,myx0,myy0);
            else if(what == "horizantal")
                drawHor(ctx,myx,myy,myx0,myy0);
            else if(what == "diagonal1")
                drawDiag1(ctx,myx,myy,myx0,myy0);
        }
        if(id=="5")
        {
            myx = 166;
            myy = 233;
            myx0 = 233;
            myy0 = 300;
            if(what=="oval")
                drawCircle(ctx,(myx+myx0)/2,(myy+myy0)/2);
            else if(what=="x")
                drawX(ctx,myx,myy,myx0,myy0);
            if(what=="vertical")
                drawVertivca(ctx,myx,myy,myx0,myy0);
            else if(what == "diagonal")
                drawDiag(ctx,myx,myy,myx0,myy0);
            else if(what == "horizantal")
                drawHor(ctx,myx,myy,myx0,myy0);
            else if(what == "diagonal1")
                drawDiag1(ctx,myx,myy,myx0,myy0);
        }
        if(id=="6")
        {
            myx = 233;
            myy = 100;
            myx0 = 300;
            myy0 = 166;
            if(what=="oval")
                drawCircle(ctx,(myx+myx0)/2,(myy+myy0)/2);
            else if(what=="x")
                drawX(ctx,myx,myy,myx0,myy0);
            if(what=="vertical")
                drawVertivca(ctx,myx,myy,myx0,myy0);
            else if(what == "diagonal")
                drawDiag(ctx,myx,myy,myx0,myy0);
            else if(what == "horizantal")
                drawHor(ctx,myx,myy,myx0,myy0);
            else if(what == "diagonal1")
                drawDiag1(ctx,myx,myy,myx0,myy0);
        }
        if(id=="7")
        {
            myx = 233;
            myy = 166;
            myx0 = 300;
            myy0 = 233;
            if(what=="oval")
                drawCircle(ctx,(myx+myx0)/2,(myy+myy0)/2);
            else if(what=="x")
                drawX(ctx,myx,myy,myx0,myy0);
            if(what=="vertical")
                drawVertivca(ctx,myx,myy,myx0,myy0);
            else if(what == "diagonal")
                drawDiag(ctx,myx,myy,myx0,myy0);
            else if(what == "horizantal")
                drawHor(ctx,myx,myy,myx0,myy0);
            else if(what == "diagonal1")
                drawDiag1(ctx,myx,myy,myx0,myy0);
        }
        if(id=="8")
        {
            myx = 233;
            myy = 233;
            myx0 = 300;
            myy0 = 300;
            if(what=="oval")
                drawCircle(ctx,(myx+myx0)/2,(myy+myy0)/2);
            else if(what=="x")
                drawX(ctx,myx,myy,myx0,myy0);
            if(what=="vertical")
                drawVertivca(ctx,myx,myy,myx0,myy0);
            else if(what == "diagonal")
                drawDiag(ctx,myx,myy,myx0,myy0);
            else if(what == "horizantal")
                drawHor(ctx,myx,myy,myx0,myy0);
            else if(what == "diagonal1")
                drawDiag1(ctx,myx,myy,myx0,myy0);
        }
    }

    window.onclick = function(evt){
        var a = evt.pageX;
        var b = evt.pageY;
        var input = getInputFromMouse(a,b);
        $.post(
            'application/input', { squareId: input},
            function(data)
            {
                //data er það sem þú færð eftir að inputtið hefur (hugsanlega) verið sett inn
            }
        )
    }

    function Play(){
        $.get(
            'application/initialize',
            function(data)
            {

            }
        );
        var main = new init();
        main.clear();
    }
    window.onclick = function(evt){
        var a = evt.pageX;
        var b = evt.pageY;
        var input = getInputFromMouse(a,b);

        $.ajax({
            type: 'POST',
            url:'application/input',
            data: {squareId: input},
            success:  function(data)
            {
                if(data.isSucsess)
                    main.draw(data.renderSquareId,data.renderSymbol);
                if(data.isVictory)
                    main.getVictory(data.victoryLine);
            },
            dataType: JSON
        });
    };
}