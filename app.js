"use strict";
/*
 Clases Abstractas: Son aquellas clases que no se pueden instanciar. Solo puedo heredarlas a otras clases.
 al declararlas se debe anteponer la palabra reservada abstract
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
var Engineer = /** @class */ (function () {
    function Engineer(name, profile) {
        this.name = name;
        this.profile = profile;
    }
    return Engineer;
}());
//Con una clase abstracta no puedo hacer lo siguiente:
//let designer = new Engineer('juan', 'designer');
//Pero si puedo hacer lo siguiente:
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Developer;
}(Engineer));
//Ahora puedo instanciar a Developer:
var ux = new Developer('mirna', 'mireles');
console.log(ux);
//# sourceMappingURL=app.js.map