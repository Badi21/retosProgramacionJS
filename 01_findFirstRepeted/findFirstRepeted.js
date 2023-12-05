const findFirstRepeated = function(gifts) {

    // creamos un array de objetos elementos repetidos
    const listOfRepeted = [];

    // obtenemos la logitud del array sin elementos repetidos
    const lenghtArray = new Set(gifts).size

    // longitud elementos no repetidos es menor de la repetidos, significa que hay elementos repetidos
    if(lenghtArray < gifts.length){
        let valueAux = 0;
        for(let i = 0; i < gifts.length; i++){
            // guardamos el valor en aux
            valueAux = gifts[i];
            let posicion = i;

            // seguimos recorriendo desde la posicion siguiente
            for(let j = posicion+1; j < gifts.length; j++){
                // comprobamos si el valor y alguna de la siguientes posiciones es igual
                if(valueAux === gifts[j]){

                    // si es igual, creamos un objeto con el valor y la posicion de la primera vez que sea ha encontrado un elemento igual
                    listOfRepeted.push({value: valueAux, pos: j+1})
                    // terminamos de recorrer porque solo queremos la primera posicion en la que se repite
                    break
                }
            }
        }
    } else {
        // no hay elementos repetidos
        return -1
    }

    // ordenaos el array de objetos por el valor pos, para obtener el elemento que primera vez se ha repetido
    let listOfRepetedSort = listOfRepeted.sort((a, b) => a.pos - b.pos)
    // devolvemos el primer elemento del array ordenado 
    return listOfRepetedSort[0].value
}

module.exports = findFirstRepeated;