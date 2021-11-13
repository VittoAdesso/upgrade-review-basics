/* Dado el siguiente javascript usa:
1.  forof para recorrer el array de películas,
2.  genera un nuevo array con las categorías de las películas e 
3. imprime por consola el array de categorías.
4. Para filtrar las categorías 
4.1 puedes ayudarte de la función.includes() */

/* Iteración #1: Mix for e includes */

const movies = [
    { title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura'] },
    { title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción'] },
    { title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller'] },
    { title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación'] },
]


for (let categoriasMovies of movies) {

    // const nuevo = categoriasMovies.categories.map(nuevo => nuevo.includes('comedia')); // verifico que contenga una palabra especifica 

    const nuevo = categoriasMovies.categories.map(nuevo1 => {
        return nuevo1
    })

    console.log(nuevo)

}