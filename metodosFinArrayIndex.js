// **Iteración #6: Métodos findArrayIndex**

// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto 
// y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. 
// Haz varios ejemplos y compruebalos.

const especies = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findNameEspecieAndIndex(index) {

    for (let valoresDeEspecies of especies) { // recorro el array de especies 

        if (valoresDeEspecies === especies[index]) { // le digo que compruebe el valor del array vs el puesto del nombre de la especie y que me genere nombr ey puesto

            console.log(valoresDeEspecies) // confirmo que especie está recorriendo y parada 
            console.log(especies.indexOf(valoresDeEspecies)); // aquí comprueba justo en que punto del array está esa especie

        }

    }
}

findNameEspecieAndIndex(1); // le digo un puesto que busque, una posición específica
findNameEspecieAndIndex(2); // le digo que busque sobre posición específica y me devuelva algo
findNameEspecieAndIndex(3); // le digo que busque sobre posición específica y me devuelva algo
findNameEspecieAndIndex(4); // me da undefined, ya que no existe