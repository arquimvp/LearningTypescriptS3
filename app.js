"use strict";
/**
 * Interfaces:
 *    Las interfaces son contratos, son reglas para tipos de datos u objetos.
 *    Definen lo que esta dentro de un objeto (No es una instancia de una clase).
 *    Las interfaces solo existen en typescript, no se traspila nada en javascript.
 *
*/
// Sin interfaz (descomentar):
function encode(developer) {
    console.log("programando en: " + developer.language);
}
var developer = {
    name: 'Roberto',
    language: 'typescript'
};
encode(developer);
var prueba;
prueba = {
    otroY: 'f',
    x: 6,
    y: 6,
    o: 3,
    t: 2
};
var prueba2;
prueba2 = {
    otroX: {
        y: 'ff',
        x: 5
    }
};
//podemos acceder a la propiedad x:
prueba2.otroX.x;
function enviarDoctor(doctor) {
    console.log("enviando a: " + doctor.especialidad);
    doctor.opera('alejandra');
}
var newDoc = {
    especialidad: 'otorrinolaringologo',
    opera: function (p) {
        console.log("ha operado a " + p);
    }
};
enviarDoctor(newDoc);
//En este caso la clase Camioneta se ve obligada a implementar todo el contrato de la interfaz Vehiculo y adicionalmente
//podemos agregar mas propiedades a la clase.
//si se hereda de otra clase no es necesario implementar todas sus propiedades y metodos.
var Camioneta = /** @class */ (function () {
    function Camioneta(motorizacion, marca, categoria, hibrido) {
        this.motorizacion = motorizacion;
        this.marca = marca;
        this.categoria = categoria;
        this.hibrido = hibrido;
        this.plazas = 4;
    }
    Camioneta.prototype.correr = function (kmph) {
        console.log("corriendo a: " + kmph);
    };
    ;
    return Camioneta;
}());
var patriot = new Camioneta("gasolina", 'jeep', 'familiar', false);
var sum;
//con declaracion de funcion convencional:
sum = function (a, b) {
    return a + b;
};
var subs;
//con declaracion de funcion de flecha:
subs = function (a, b) { return a - b; };
console.log(sum(3, 5)); //8
console.log(subs(3, 5)); //-2
//# sourceMappingURL=app.js.map