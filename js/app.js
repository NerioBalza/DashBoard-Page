class Botones{
    constructor(id_panel, id_boton, index){
        this.botonnav = document.getElementById(id_boton);
        this.panel = document.getElementById(id_panel);
        this.botonnav.numero = index;
        this.botonnav.addEventListener("click", change);   
    }
}
class Paneles{
    constructor(id_lienzo, color, id_parrafo){
        this.canvas = document.getElementById(id_lienzo);
        this.color = color;
        this.lienzo = this.canvas.getContext("2d");
        this.parrafo = document.getElementById(id_parrafo);
    }
    hacerGrafico(){
        this.graficar();
        this.lienzo.beginPath();
        this.lienzo.strokeStyle = this.color;
        this.lienzo.lineWidth = 2;
        var posaX =0;
        var posaY =250;
        var posbX = 25;
        var max = 240;
        var min = 75;
        var suma = 0;
        var posbY = Math.floor(Math.random() * (max - min + 1)) + min;
        for(var i = 0; i<10; i++){
            suma += posbY;
            this.lienzo.moveTo(posaX, posaY);
            this.lienzo.lineTo(posbX, posbY);
            posaX = posbX;
            posaY = posbY
            posbX +=25;
            var posbY = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        this.parrafo.innerHTML=suma*100;
        this.lienzo.stroke();
    }
    graficar(){
        this.lienzo.beginPath();
        this.lienzo.strokeStyle = "#CACACA";
        this.lienzo.lineWidth = 1;
        var posaX =0;
        var posaY = 0;
        var posbX = 250;
        var posbY = 0;
        for(var i = 0; i<10; i++){
            this.lienzo.moveTo(posaX, posaY);
            this.lienzo.lineTo(posbX, posbY);
            posaY+=25;
            posbY+=25;
        }
        posaY=0;
        posbX=0;
        for(var i = 0; i<10; i++){
            this.lienzo.moveTo(posaX, posaY);
            this.lienzo.lineTo(posbX, posbY);
            posaX+=25;
            posbX+=25;
        }
        this.lienzo.stroke();
    }
}

boton = [];
boton.push(new Botones("dashboard-panel", "buttonPanel", 0));
boton.push(new Botones("dashboard-money", "buttonMoney" , 1));
boton.push(new Botones("dashboard-comments", "buttonComment", 2));
boton.push(new Botones("dashboard-tools", "buttonTools", 3));
boton.push(new Botones("dashboard-config", "buttonConfig", 4));
new Paneles("revenue-c", "#38FF84", "revenue").hacerGrafico();
new Paneles("newuser-c", "#3F73C7", "newuser").hacerGrafico();
new Paneles("score-c", "#EDFF39", "score").hacerGrafico();
var menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", function(e){
    var menu = document.getElementById("menu");
    menu.classList.toggle("menuActive");
});

function change(){
    var bactivo = document.getElementsByClassName("menu-active");
    var pactivo = document.getElementsByClassName("dashboard-active");
    bactivo[0].classList.toggle("menu-active");
    pactivo[0].classList.toggle("dashboard-active");
    boton[this.numero].botonnav.classList.toggle("menu-active");
    boton[this.numero].panel.classList.toggle("dashboard-active");
}