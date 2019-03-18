/*
 Clases Abstractas: Son aquellas clases que no se pueden instanciar. Solo puedo heredarlas a otras clases.
 al declararlas se debe anteponer la palabra reservada abstract
 */

 abstract class Engineer {

  constructor(public name : string, public profile : string){

  }

 }

 //Con una clase abstracta no puedo hacer lo siguiente:
 //let designer = new Engineer('juan', 'designer');

 //Pero si puedo hacer lo siguiente:
 class Developer extends Engineer {

 }

 //Ahora puedo instanciar a Developer:

 let ux = new Developer('mirna','mireles');

 console.log(ux);