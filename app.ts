/*
 Metodos y propiedades estáticos:

  Las propiedades y metodos estaticos son aquellos que podemos llamar sin necesidad de instanciar la clase.

 */


 class Developer {

  //Las propiedades estaticas no son accesibles en una instancia. Solo son accesibles haciendo referencia a la clase directamente.
  //son como una especia de contantes.
  static perfil : string = 'fullstack';
  
  vidaSocial:boolean = true;

  constructor(){
    
  }

  static crearDeveloper(){
    return new Developer();
  }
 }


//Aqui estoy llamando a la propiedad perfil de la clase sin necsidad de instanciar.
 console.log(Developer.perfil);
 
// Aqui puedo instanciar apartir de un metodo estatico:
 let devFS = Developer.crearDeveloper();

 console.log(devFS);

 let dev09 = new Developer();

 console.log(dev09);