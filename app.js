"use strict";
/*
  Clases y contructores en typescript.
  Las clases en typescript son muy parecidas en su definicion a las clases en ES6,
  pero en su comportamiento, propiedades y metodos es mas parecido a java, C#, vb etc.

  Constructor: Es una simple funcion que se ejecuta cuando se crea una nueva instancia de determinada clase.
  Me sirve para sobreescribir variables
  p.e:

  let peli: Pelicula = new Pelicula();

  Los parentesis depues de pelicula, indican una funcion.

*/
/*
  - Es importante saber que no se puede usar "let" directamente dentro de una clase, ese tipo de
    defincion solo va dentro de metodos o funciones.
  - Tambien se debe tener en cuenta que si la clase no cuenta con un constructor será necesario
    asignar las variables (propiedades) inmediatamente en su definicion.
  - Si cuentas con un constructor puedes asignar las variables directo en la declaracion o en el constructor.
*/
//Definicion de una clase basica en typescript sin constructor, las propiedades de la clase se asignan mientras se declaran.
var Pelicula = /** @class */ (function () {
    function Pelicula() {
        this.categoria = '';
        this.nombre = '';
        this.estrellas = 2;
        this.familiar = true;
    }
    return Pelicula;
}());
var drStrange = new Pelicula();
console.log(drStrange);
//Definicion de una clase basica con constructor, el constructor reemplazara las propiedades de la clase.
var Caricatura = /** @class */ (function () {
    function Caricatura(c, n, e, f) {
        //This hace referencia al contexto de la clase.
        this.categoria = c;
        this.nombre = n;
        this.estrellas = e;
        this.familiar = f;
    }
    return Caricatura;
}());
var dragonBZ = new Caricatura('niños 12-14', 'dragon ball z', 5, true);
console.log(dragonBZ);
