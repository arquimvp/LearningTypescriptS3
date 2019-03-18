"use strict";
/*
 Metodos y propiedades estáticos:

  Las propiedades y metodos estaticos son aquellos que podemos llamar sin necesidad de instanciar la clase.

 */
var Developer = /** @class */ (function () {
    function Developer() {
        this.vidaSocial = true;
    }
    Developer.crearDeveloper = function () {
        return new Developer();
    };
    //Las propiedades estaticas no son accesibles en una instancia. Solo son accesibles haciendo referencia a la clase directamente.
    //son como una especia de contantes.
    Developer.perfil = 'fullstack';
    return Developer;
}());
//Aqui estoy llamando a la propiedad perfil de la clase sin necsidad de instanciar.
console.log(Developer.perfil);
// Aqui puedo instanciar apartir de un metodo estatico:
var devFS = Developer.crearDeveloper();
console.log(devFS);
var dev09 = new Developer();
console.log(dev09);
//# sourceMappingURL=app.js.map