const manufracture = function (gifts, materials) {
    let cont = 0;
    const arraySolution = [];
    //recorremos el array gifts
    for(let i = 0; i<gifts.length; i++){
        let stringArray = gifts[i];
        for(let j = 0; j< materials.length; j++){
            // console.log("posicion " + j + " y " + materials[j])
            // console.log(materials + " con " + stringArray[j] + " -> " + materials.includes(stringArray[j]))
            if(stringArray.includes(materials[j])){
                // console.log(stringArray + " con " + materials[j] + j + " -> " + stringArray.includes(materials[j]))
                cont++;
                // console.log(cont);
                // break
                // console.log("fuera del include")
            }
            // console.log(cont, stringArray, stringArray.length)

            if(cont === stringArray.length) {
                // console.log("estamos dentro de if " + cont + " " +  stringArray.length + " son iguales")
                arraySolution.push(stringArray);
                //reseteamos
                cont = 0;
                // console.log("añadimos y reseteamos el contador a cero")
                // terminamos el for
                j = gifts.length
                // console.log("salimos del if")
            }
        }
    } 
    
    console.log(arraySolution)
    return arraySolution;
}

module.exports = manufracture;