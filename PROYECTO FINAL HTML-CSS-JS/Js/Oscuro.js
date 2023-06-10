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

var cambioWidget1 = function() {
    var Widget1 = document.getElementById('Widget1');
    if (Widget1.className == 'col-xs-12 col-sm-6 col-md-3 EquipoTrabajo Widget-1') {
        Widget1.className = 'col-xs-12 col-sm-6 col-md-3 EquipoTrabajo Widget-1O'
    } else {
        Widget1.className = 'col-xs-12 col-sm-6 col-md-3 EquipoTrabajo Widget-1'
    }

};

var cambioWidget2 = function() {
    var Widget2 = document.getElementById('Widget2');
    if (Widget2.className == 'col-xs-12 col-sm-6 col-md-3 EquipoTrabajo Widget-2') {
        Widget2.className = 'col-xs-12 col-sm-6 col-md-3 EquipoTrabajo Widget-2O'
    } else {
        Widget2.className = 'col-xs-12 col-sm-6 col-md-3 EquipoTrabajo Widget-2'
    }

};

var cambioWidget3 = function() {
    var Widget3 = document.getElementById('Widget3');
    if (Widget3.className == 'col-xs-12 col-sm-6 col-md-3 EquipoTrabajo Widget-3') {
        Widget3.className = 'col-xs-12 col-sm-6 col-md-3 EquipoTrabajo Widget-3O'
    } else {
        Widget3.className = 'col-xs-12 col-sm-6 col-md-3 EquipoTrabajo Widget-3'
    }

};

var cambioWidget4 = function() {
    var Widget4 = document.getElementById('Widget4');
    if (Widget4.className == 'col-xs-12 col-sm-6 col-md-3 EquipoTrabajo Widget-4') {
        Widget4.className = 'col-xs-12 col-sm-6 col-md-3 EquipoTrabajo Widget-4O'
    } else {
        Widget4.className = 'col-xs-12 col-sm-6 col-md-3 EquipoTrabajo Widget-4'
    }

};


//Función que convoca cada cambio en Index
var cambio = function() {
    cambioBody();
    cambioContainer();
    cambioBlanco();
    cambioBlanco2();
    cambioBlanco3();
    cambioWidget1();
    cambioWidget2();
    cambioWidget3();
    cambioWidget4();
    cambioFooter();
};

//Acción aplicada al botón de la función de cambio
var boton = document.getElementById('boton');
boton.addEventListener('click', cambio);