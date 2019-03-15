"use strict";
/*
 Metodos publicos, privados y protegidos.
 Al igual que con las propiedades de una clase, es el alcance de vision de nuestro metodo o funcion.

*/
var Caricatura = /** @class */ (function () {
    function Caricatura(c, n, e, f) {
        this.categoria = c;
        this.nombre = n;
        this.estrellas = e;
        this.familiar = f;
    }
    //Metodo public: accesible desde cualquier parte de la aplicaicion:
    Caricatura.prototype.imprimeCaricatura = function () {
        var description = this.nombre + " " + this.categoria;
        console.log(description);
    };
    //Ahora creamos un metodo private: accesible desde la misma clase unicamente:
    Caricatura.prototype.cambiarCategoria = function (categoria) {
        if (categoria) {
            this.categoria = categoria;
            return true;
        }
        else {
            return false;
        }
        //Aqui se debe observar que typescript al igual que otros lenguajes valida que en cualquier caso se este retornando algo.
        //Por esa razon se debe poner un return en el else del if.
    };
    //Este metodo publico, es la forma, puente, canal etc, a traves del cual puedo ejecutar un metodo privado desde una instancia de clase externa.
    Caricatura.prototype.cambiaCategoriaConMetodoPublico = function (categoria) {
        return this.cambiarCategoria(categoria);
    };
    return Caricatura;
}());
// Inatanciamos un objeto drafonBZ a apartir de la clase Caricatura:
var dragonBZ = new Caricatura('niños 12-14', 'dragon ball z', 5, true);
//Imprimimos el objeto
console.log(dragonBZ);
//Aqui mando a llamar al metodo publico de mi clase Caricatura:
dragonBZ.imprimeCaricatura();
//Aqui intento mandar llamar al metodo privado "cambiarCategoria" pero no me lo permite por ser private y limitarse a su clase.
//dragonBZ.cambiarCategoria('');
//Aqui mandaré a llamar a un metodo publico de la clase Caricatura, a su vez ese metodo madara a llamar al metodo
//que no pude llamar debido a que esta como private.
console.log(dragonBZ.cambiaCategoriaConMetodoPublico('princesas')); // true
console.log(dragonBZ);
//Los metodos protegidos, lo revisamos en el tema de Herencia en typescript.
