//Clases en ES6  (NO TYPESCRIPT):
//Recuerden que estamos trabajando en un archivo .js y aqui se permiten las asignaciones sin haber sido declaradas previamente.

class Camioneta{

  constructor(marca, traccion){
    this.marca = marca;
    this.traccion = traccion;
  }
}

/*
Una clase puede heredar los metodos y propiedades de otra clase.
En ES6 se utiliza la palabra reservada "extends" para la herencia.
*/

/** en el siguiente ejemplo solo heredo de Camioneta y automaticamente tengo acceso a sus propiedades */
class Pickup extends Camioneta {

}


//En este caso se puede instanciar un objeto a partir de una clase y argumentando los parametros.
let f150 = new Camioneta("ford","delantera");

/*En este caso se instancia de la superClase Camioneta, inicializando los valores que correponden al contrato 
  de la clase Camioneta y automaticamente los asimila acorde al contrato de la superclase "Camioneta".
*/
let acadia = new Pickup('pilot','integral');

/*Se puede instanciar sin tener que enviar los parametros de la super clase, aunque imprimiria undefined para los parametros*/
let frontier = new Pickup();


console.log(f150);
console.log(acadia);
console.log(frontier);


/** Si requiero agregar propiedades en una nueva clase que herede de Camioneta
 * Necesitare utlizar "super" la cual me servira para inicializar el contructor de la superclase,
 * Si no utilizo esta palabra, no podre agregar mas propiedades a mi nueva clase derivada.
 */

 //Definicion de una clase Suv con "super" para poder acceder al constructor de mi superclase:

class Suv extends Camioneta {
  //"super" dentro del constructor:
  constructor(m,t,b){

      /*La palabra super me permite accesar al constructor de la clase padre, 
        pero le debo enviar todas las propiedades existentes en la superclase:
      */
      super(m,t,b);
      
      //Ahora si puedo agregar mis propiedades necesarias:
    this.blindada = b;
     
  }
}


let terrain = new Suv('gmc','awd',true);


console.log(terrain);
