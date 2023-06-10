var cambioBody = function() {
    var bodyL = document.getElementById('body');
    if (bodyL.className == 'bodyL') {
        bodyL.className = 'bodyO'
    } else {
        bodyL.className = 'bodyL'
    }

};

var cambioContainer = function() {
    var containerL = document.getElementById('Container');
    if (containerL.className == 'container containerL') {
        containerL.className = 'container containerO'
    } else {
        containerL.className = 'container containerL'
    }

};

var cambioBlanco = function() {
    var Blanco = document.getElementById('Blanco');
    if (Blanco.className == 'main row Blanco') {
        Blanco.className = 'main row Gris'
    } else {
        Blanco.className = 'main row Blanco'
    }

};
var cambioBlanco2 = function() {
    var Blanco2 = document.getElementById('Blanco2');
    if (Blanco2.className == 'row Blanco2') {
        Blanco2.className = 'row Gris'
    } else {
        Blanco2.className = 'row Blanco2'
    }

};

var cambioBlanco3 = function() {
    var Blanco3 = document.getElementById('Blanco3');
    if (Blanco3.className == 'row Blanco3') {
        Blanco3.className = 'row Gris'
    } else {
        Blanco3.className = 'row Blanco3'
    }

};


var cambioWidgetP1 = function() {
    var WidgetP1 = document.getElementById('WidgetP1');
    if (WidgetP1.className == 'content_img col-xs-12 col-sm-6 col-md-3 Widget-1') {
        WidgetP1.className = 'content_img col-xs-12 col-sm-6 col-md-3 Widget-1O'
    } else {
        WidgetP1.className = 'content_img col-xs-12 col-sm-6 col-md-3 Widget-1'
    }

};

var cambioWidgetP2 = function() {
    var WidgetP2 = document.getElementById('WidgetP2');
    if (WidgetP2.className == 'content_img col-xs-12 col-sm-6 col-md-3 Widget-2') {
        WidgetP2.className = 'content_img col-xs-12 col-sm-6 col-md-3 Widget-2O'
    } else {
        WidgetP2.className = 'content_img col-xs-12 col-sm-6 col-md-3 Widget-2'
    }

};

var cambioWidgetP3 = function() {
    var WidgetP3 = document.getElementById('WidgetP3');
    if (WidgetP3.className == 'content_img col-xs-12 col-sm-6 col-md-3 Widget-3') {
        WidgetP3.className = 'content_img col-xs-12 col-sm-6 col-md-3 Widget-3O'
    } else {
        WidgetP3.className = 'content_img col-xs-12 col-sm-6 col-md-3 Widget-3'
    }

};

var cambioWidgetP4 = function() {
    var WidgetP4 = document.getElementById('WidgetP4');
    if (WidgetP4.className == 'content_img col-xs-12 col-sm-6 col-md-3 Widget-4') {
        WidgetP4.className = 'content_img col-xs-12 col-sm-6 col-md-3 Widget-4O'
    } else {
        WidgetP4.className = 'content_img col-xs-12 col-sm-6 col-md-3 Widget-4'
    }

};

var cambioWidgetP5 = function() {
    var WidgetP5 = document.getElementById('WidgetP5');
    if (WidgetP5.className == 'content_img col-xs-12 col-sm-6 col-md-3 Widget-5') {
        WidgetP5.className = 'content_img col-xs-12 col-sm-6 col-md-3 Widget-5O'
    } else {
        WidgetP5.className = 'content_img col-xs-12 col-sm-6 col-md-3 Widget-5'
    }

};

var cambioWidgetP6 = function() {
    var WidgetP6 = document.getElementById('WidgetP6');
    if (WidgetP6.className == 'content_img col-xs-12 col-sm-6 col-md-3 Widget-6') {
        WidgetP6.className = 'content_img col-xs-12 col-sm-6 col-md-3 Widget-6O'
    } else {
        WidgetP6.className = 'content_img col-xs-12 col-sm-6 col-md-3 Widget-6'
    }

};

var cambioWidgetP7 = function() {
    var WidgetP7 = document.getElementById('WidgetP7');
    if (WidgetP7.className == 'content_img col-xs-12 col-sm-6 col-md-3 Widget-7') {
        WidgetP7.className = 'content_img col-xs-12 col-sm-6 col-md-3 Widget-7O'
    } else {
        WidgetP7.className = 'content_img col-xs-12 col-sm-6 col-md-3 Widget-7'
    }

};

var cambioWidgetP8 = function() {
    var WidgetP8 = document.getElementById('WidgetP8');
    if (WidgetP8.className == 'content_img col-xs-12 col-sm-6 col-md-3 Widget-8') {
        WidgetP8.className = 'content_img col-xs-12 col-sm-6 col-md-3 Widget-8O'
    } else {
        WidgetP8.className = 'content_img col-xs-12 col-sm-6 col-md-3 Widget-8'
    }

};

//Función que convoca cada cambio en Proyectos
var cambioPro = function() {
    cambioBody();
    cambioContainer();
    cambioBlanco();
    cambioBlanco2();
    cambioBlanco3();
    cambioWidgetP1();
    cambioWidgetP2();
    cambioWidgetP3();
    cambioWidgetP4();
    cambioWidgetP5();
    cambioWidgetP6();
    cambioWidgetP7();
    cambioWidgetP8();
    cambioFooter();
};
//Acción aplicada al botón de la función de cambio
var botonProy = document.getElementById('botonProy');
botonProy.addEventListener('click', cambioPro);