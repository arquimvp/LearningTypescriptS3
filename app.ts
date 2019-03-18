/** 
 * Interfaces:
 *    Las interfaces son contratos, son reglas para tipos de datos u objetos.
 *    Definen lo que esta dentro de un objeto (No es una instancia de una clase).
 *    Las interfaces solo existen en typescript, no se traspila nada en javascript.
 * 
*/

 
// Sin interfaz (descomentar):

function encode( developer : { language : string } ){

  console.log(`programando en: ${developer.language}`);

}

let developer = {
  name: 'Roberto',
  language: 'typescript'
}

encode(developer);


// Con interfaz:
/*

interface Developer {
  name: string,
  language: string
}

function encode( developer : Developer ){

  console.log(`programando en: ${developer.language}`);

}

let developer: Developer = {
  name: 'Roberto',
  language: 'typescript'
}

encode(developer);

*/

/* type vs interface
 * 
 *    El tipo es rigido y hasta ahi.
 *    Una interfaz puede ser usada en otros lugares, como en los extends o implements y los "type" no.
 * 
 */




//***************************************************************************************************************************** */
//Ejemplo de herencia con interfaces.
//Importante mencionar que la terminacion de cada linea dentro de la interfaz debe ser con ","

interface InterfaceR {
  o : number,
  t : number
}

interface InterfaceA {
  x: number,
  y: number
}

//Al heredar no es necesario implementar todo el contrato de la interfaz, como en el caso de implementar ("implements"), 
//al implemetar nos forzamos a implementar todo el contrato.

interface InterfaceB extends InterfaceA, InterfaceR {
  otroY: string
}

let prueba: InterfaceB;

prueba = {
  otroY:'f',
  x: 6,
  y: 6,
  o: 3,
  t: 2
}


//Lo anterior lo podriamos ejecutar con tipos, de la siguiente manera (una especie de herencia):
//
type TipoA = {
  x: number
  y: string
}

type TipoB = {
  otroX: TipoA
}


let prueba2 : TipoB;
prueba2 = {
      otroX:{
              y:'ff',
              x:5
            }
    }

//podemos acceder a la propiedad x:
prueba2.otroX.x;


/* class vs interface
 * 
 *    Ambas proporcionan un grupo de propiedades y metodos que describen un objeto. 
 *    Ambas las podemos extender (heredar) e implementar.
 *    Regla: "Una interfaz no puede implementar de otra interfaz"
 *    La interface no proporciona implementacion ni inicializacion de dichos objetos.
 *    Podemos usar ambas para escribir nuestras variables.
 *    Sin embargo, una clase es mucho mas robusta, en ellas podemos poner logica, ejecutar constructores, etc.
*/



//***************************************************************************************************************************** */
//Metodos en la interfaz:

interface Cirujano {
  especialidad: string,
  opera(paciente:string):void
}

function enviarDoctor(doctor:Cirujano){
  
  console.log(`enviando a: ${doctor.especialidad}`);
  doctor.opera('alejandra');

}


let newDoc: Cirujano = {
  especialidad: 'otorrinolaringologo',
  opera(p:string){
    console.log(`ha operado a ${p}`);
  }
}

enviarDoctor(newDoc);



//***************************************************************************************************************************** */
//Interfaces en las clases (IMPLEMENTS):
//Una clase puede implementar una interfaz, pero no extender de ella.
interface Vehiculo {
  motorizacion: string,
  marca: string,
  categoria: string,
  hibrido: boolean,
  correr(kmph:string):void
}

//En este caso la clase Camioneta se ve obligada a implementar todo el contrato de la interfaz Vehiculo y adicionalmente
//podemos agregar mas propiedades a la clase.
//si se hereda de otra clase no es necesario implementar todas sus propiedades y metodos.
class Camioneta implements Vehiculo {
  
  correr(kmph:string){
    console.log(`corriendo a: ${kmph}`);
  };
  
  plazas:number = 4;

  constructor(public motorizacion:string, public marca:string, public categoria:string, public hibrido:boolean){
    
  }

}

let patriot = new Camioneta("gasolina",'jeep','familiar',false);




//***************************************************************************************************************************** */
//Interfaces para las funciones:

interface ArithmeticOperation {
  (n1:number, n2:number):number
}

let sum : ArithmeticOperation;

//con declaracion de funcion convencional:
sum = function(a:number,b:number){
  return a + b;
}

let subs:ArithmeticOperation;

//con declaracion de funcion de flecha:
subs = (a:number,b:number) => a - b;

console.log(sum(3,5)); //8
console.log(subs(3,5)); //-2
