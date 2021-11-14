// **Iteración #5: Función swap**

// Crea una función llamada `swap()` 
// que reciba un array y dos parametros que sean indices del array. 
// La función deberá intercambiar la posición de los valores de los indices
//  que hayamos enviado como parametro. Retorna el array resultante.


const swap = (arr, index1, index2) => arr.map((val, idx) => {
    if (idx === index1) return arr[index2];
    if (idx === index2) return arr[index1];
    return val;
});


let usandoSwap = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']; // array original

const arraySwapped = swap(usandoSwap, 1, 3); // llamo al array, le digo cuales son los indices que quiero cambiar 
console.log(usandoSwap); // veo el array original 
console.log(arraySwapped); // veo el array modificado, los string movidos de posición