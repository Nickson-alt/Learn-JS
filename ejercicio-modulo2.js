/*Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con
propiedades: titulo, autor, fecha, url)*/

// Ejercicio original

let usuario,
    nombre = "Nickson",
    edad = 19;
    "¿Eres desarrollador?" = True,
    fecha_nacimiento = new Date(2003, 05, 14),
    Libro_favorito = "El ego es el enemigo";

    /* CORRECION
Declarar lista:
const lista = []
*/

const mylista = [
    "Nickson",
    19,
    new Date(2003, 05, 14),
    {
        titulo: "El ego es el enemigo",
        autor: "Ryan Holiday",
        fecha: new Date(2016, 06, 14),
        url: "https://www.amazon.com/-/es/Ryan-Holiday-ebook/dp/B077Y89TV1"
    },
];
// Ejercicio correcto:
const lista = [
    "Gorka",
    34,
    true,
    new Date(1987, 10, 20),
    { 
        titulo: "El monje que vendió su Ferrari",
        autor: "Robin S. Sharma",
        fecha: new Date(1996, 0, 1),
        url: "https://www.amazon.es/dp/B0062XBS32/"
    },    
];