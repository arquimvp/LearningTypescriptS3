/*
 Propiedades publicas, privadas y protegidas o en POO "Modificadores de acceso".

 Modificadores de acceso: se encargan de controlar el lugar donde se pueden ser 
 accesadas las propiedades o metodos de nuestras clases

En Javascript es5 eso no existe, todos los metodos y propiedades son publicos.
*/

class Caricatura {

  //Public: si no se especifica por defecto es publico. Da igual si lo pones asi, pongamoslo.
  public categoria: string;
  
  //Protected: 
  protected nombre: string;

  //Private
  private estrellas: number;
  private familiar: boolean;

  constructor(c: string, n: string, e: number, f: boolean) {

    //This hace referencia al contexto de la clase.
    this.categoria = c;
    this.nombre = n;
    this.estrellas = e;
    this.familiar = f;

    //Aqui si puedes modificar cualquier propiedad de la clase aunque esten definidos como protected o private.

  }
}

let dragonBZ : Caricatura = new Caricatura('niños 12-14', 'dragon ball z', 5, true);

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



