"use strict";
/*
 gets y sets: son una manera de accesar a las propiedades de una manera controlada.
 */
/**
 * Cuando se utilizan gets y sets, por convencion el nombre de las propiedades de una clase se recomienda utilizar el prefijo _
 * Esto es debido a que el nombre del get o set debe ser diferente al nombre de la propiedad.
 * Todos los gets y sets son publicos, aunque podemos omitir el modificador.
 *
 * @class Developer
 */
var Developer = /** @class */ (function () {
    function Developer(perfil) {
        if (perfil === void 0) { perfil = ''; }
        this._perfil = perfil;
    }
    Object.defineProperty(Developer.prototype, "perfil", {
        //metodo get  
        get: function () {
            if (this._perfil) {
                return this._perfil;
            }
            else {
                return "el desarrollador no tiene un perfil";
            }
        },
        //metodo set
        set: function (perfil) {
            if (perfil === 'javaDev') {
                throw new Error('La clase Developer no admite javaDev');
            }
            this._perfil = perfil;
        },
        enumerable: true,
        configurable: true
    });
    return Developer;
}());
var devIos = new Developer('ios');
console.log(devIos.perfil);
devIos.perfil = 'android';
console.log(devIos.perfil);
//tú puedes omitir usar gets y sets y puedes utilizar funciones comunes, sin embargo, utilizando una funcion comun, 
//utilizarias el set así:
//devIos.setPerfil('javaDev');
//en lugar de:
devIos.perfil = 'javaDev';
console.log(devIos.perfil);
//# sourceMappingURL=app.js.map