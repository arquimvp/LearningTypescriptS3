"use strict";
/*
 Propiedades publicas, privadas y protegidas o en POO "Modificadores de acceso".

 Modificadores de acceso: se encargan de controlar el lugar donde se pueden ser
 accesadas las propiedades o metodos de nuestras clases

En Javascript es5 eso no existe, todos los metodos y propiedades son publicos.
*/
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
//Aqui podemos ver como actua el modificador "public", me permite cambiar la categoria de mi caricatura.
//Este modificador permite accesar desde cualquier parte de la aplicacion donde se tenga la clase definida.
dragonBZ.categoria = 'adultos';
//Aqui podemos ver como actua el modificador "protected": yo no puedo cambiar el nombre fuera de la clase.
//Este modificador solo permite cambiar las propiedades dentro de su clase o sus subclases (herencias, clases hijas).
dragonBZ.nombre = 'pedro';
//Aqui podemos ver como actua el modificador "private", me permite cambiar el valor de las propiedades solo dentro
//de las clases (dentro del cosntructor o alguna funcion de la clase), pero no en sus clases hijas o herencias.
dragonBZ.familiar = false;
console.log(dragonBZ);
