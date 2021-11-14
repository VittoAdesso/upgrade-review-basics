// **Iteración #2: Mix Fors**

// Dado el siguiente javascript usa for of y 
// for in para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.


const users = [{
        name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 50 },
            rain: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'Mortadelo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 30 },
            shower: { format: 'ogg', volume: 55 },
            train: { format: 'mp3', volume: 60 },
        }
    },
    {
        name: 'Super Lopez',
        favoritesSounds: {
            shower: { format: 'mp3', volume: 50 },
            train: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'El culebra',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 67 },
            wind: { format: 'ogg', volume: 35 },
            firecamp: { format: 'mp3', volume: 60 },
        }
    },
]

//INICIO vARIABLES EN 0, PARA INCLUIRLAS EN LOS BUCLES FOR
let contador = 0;
let totalDeVolumen = 0;

for (let usuario of users) {

    for (let nombreSonido in usuario.favoritesSounds) {

        contador++; // LE DIGO QUE CADA VEZ QUE SE RECORRA ME SUME 1... 
        totalDeVolumen += usuario.favoritesSounds[nombreSonido].volume; // LE DIGO QUE CADA VEZ QUE PASE UN BUCLE. SUME EL VALODE UN OBJ
        // AHÍ LEE BIEN, llamo la variable creada del array usuario, y la propiedad del sonido, le digo que en el índice del recorrido, dame la propiedad de volumen eso me lo sumes
    }
}

// console.log(contador);
// console.log(totalDeVolumen);

console.log(totalDeVolumen / contador);