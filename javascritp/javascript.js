var saludo="hola mundo"
console.log(saludo)
//comentarios
/*aqui va
nuestros comentarios
var nombre
var $nombre
var _nombre
var nombre1
var nombre_estudiante
como no se pude inscribir una variable
var 8nombre
tampoco se puede utilizar
palabras reservadas de javascritp
var if,while,case,for
¿como creamos nuestros archivosjs
*/
/* variables de javascrip
existen dos tipos
1.var= es una variable global que puede ser utilizada en toda la vida del programa en todo el alcance
2. let=> es una variable privada que se utiliza en una parte especifica del programa 
*/
{
let hello="hellow word"
}
a=7
console.log("El valor de a es:",7)
let b
b=6
console.log("El valor de b es:",6)
console.log(window)
console.log(window.a)
console.log(window.b)
/* variable tipo var*/
var musica="baladas"
console.log("Variable antes del bloque",musica)
{
    var musica="cumbia"
    console.log("variable dentro del bloque",musica)
}
console.log("Variable antes del bloque",musica)
console.log("*********let*********")
let musica2="salsa"
console.log("variable antes de entrar al bloque",musica2)
{
    let musica2="Merengue"
    console.log("Variable dentro de el bloque",musica2)
}
console.log("variable fuera del bloque",musica2)