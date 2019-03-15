"use strict";
/*
 Herencia y metodos protegidos.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Abreviacion de propiedades en clases: Mucho codigo => menos codigo
//1. Mucho codigo:
var Desarrollador = /** @class */ (function () {
    function Desarrollador(nombre, perfil) {
        this.nombre = nombre;
        this.perfil = perfil;
    }
    return Desarrollador;
}());
//2. Menos codigo:
var Developer = /** @class */ (function () {
    //De esta manera se pondran automaticamente las propiedades de name y profile a cualquier clase o variable del tipo Developer
    function Developer(name, profile) {
        // 9. Descomentar despues de usar el super en la clase Frontend:
        //console.log('constructor de Developer invocado en segundo termino');
        this.name = name;
        this.profile = profile;
    }
    return Developer;
}());
var ironDev = new Developer('IronDev', 'Ionic');
console.log(ironDev);
/*****************************************************************************************************************************
 * HERENCIA: Darle las propiedades y metodos a las clases hijas.
 */
// 3. Aqui la clase Frontend extiende (hereda) de Developer:
var Frontend = /** @class */ (function (_super) {
    __extends(Frontend, _super);
    function Frontend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Frontend;
}(Developer));
//4. Creo una nueva instancia de Frontend (ironFront):
//  en este caso es importante observar que estoy utilizando el cosntructor de Developer, dado que Frontend no tiene constructor.
//  Si le quito los parametros a Frontend, mandaria error:
//5. Error:
//  let ironFront : Frontend = new Frontend();
//6. Correcto: (aunque toma el constructor de la clase padre o superclase, dado que Frontend no cuenta con su propio constructor):
var ironFront = new Frontend("Ironfront", 'flutter');
console.log(ironFront);
//7. Una vez que has codificado hasta aqui, es hora de implementar el llamdo super en el constructor de la clase "Frontend":
//Ve y descomenta el codigo del constructor en clase Frontend
/*
  10 - Crearemos un metodo en la clase Developer para poder heredarlo a la clase Frontend:
  ve al codigo de la clase Developer.
  Una vez descomentado el metodo de getName, yo puedo ejecutar el metodo a traves de ironFront!!!
*/
//console.log(ironFront.getName());
/**
 * 12. PROTECTED!!! Cambiar el metodo getName a protected en la clase Developer.
 * esto con la finalidad de poder acceder a un metodo protected desde una subclase que es una de las 2 unicas formas
 * de accesar a ese tipo de metodos protegidos, llamandolos desde la misma clase o subclases.
 *
 */
/**
 * 13. Ahora en mi clase Frontend voy  generar una metodo publico ('getNombre') que va a llamar al metodo protected (getName)
 * de la clase Developer.
 * Esto lo puedo realizar agregando el super() en el metodo getNombre de la clase Frontend:
 *
 *
 *
 *
 */ 
