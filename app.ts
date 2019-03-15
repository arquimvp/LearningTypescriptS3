/*
 Herencia y metodos protegidos.
 */

//Abreviacion de propiedades en clases: Mucho codigo => menos codigo


//1. Mucho codigo:
class Desarrollador {

  public nombre: string;
  public perfil: string;

  constructor(nombre: string, perfil: string) {
    this.nombre = nombre;
    this.perfil = perfil;
  }

}

//2. Menos codigo:

class Developer {

  //De esta manera se pondran automaticamente las propiedades de name y profile a cualquier clase o variable del tipo Developer
  constructor(public name : string, private profile : string) { 
    // 9. Descomentar despues de usar el super en la clase Frontend:
    //console.log('constructor de Developer invocado en segundo termino');

  }


  // 11. Descomentar metodo y utilizarlo con ironFront:

  // public getName(): string{
  //   return this.name;
  // }

  // 15. poner en el metodo de getName:
  // console.log('getName Developer protegido');


}


let ironDev : Developer = new Developer('IronDev', 'Ionic');

console.log(ironDev);


/***************************************************************************************************************************** 
 * HERENCIA: Darle las propiedades y metodos a las clases hijas.
 */


 // 3. Aqui la clase Frontend extiende (hereda) de Developer:
class Frontend extends Developer {


// 8. Los constructores de clases heredadas deben contener un llamado super.
  // constructor(a:string, b:string){
  //   console.log('ahora si, esta invocando en primer lugar al constructor de la clase "Frontend"');
  //   super(a,b);  //Esta es la linea super que permite inicializar el constructor padre e invocar tambien metodos del padre.
  // }


  
  // 14. public getNombre():string{
    //console.log('getNombre Frontend (publico)');
  //   return super.getName();
  // }

}


//4. Creo una nueva instancia de Frontend (ironFront):
//  en este caso es importante observar que estoy utilizando el cosntructor de Developer, dado que Frontend no tiene constructor.
//  Si le quito los parametros a Frontend, mandaria error:

//5. Error:
//  let ironFront : Frontend = new Frontend();

//6. Correcto: (aunque toma el constructor de la clase padre o superclase, dado que Frontend no cuenta con su propio constructor):
let ironFront : Frontend = new Frontend("Ironfront", 'flutter');

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