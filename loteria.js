function generate(min, max, proibido){
    if(min > max){
        [max, min] = [min, max]

    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const ale = Math.floor(Math.random() * fator) + min
        if(proibido.includes(ale)){
            reject('repetiu')
        } else {
            resolve(ale)
        }
    
        

    })
}

async function lotery(num){
    try{
        const numeros = []
        for(let _ of Array(num).fill()){
            numeros.push(await generate(1, 60, numeros))
        }
        return numeros

    }catch(e){
        throw e
    }
}


lotery(6)
    .then(console.log)
    .catch(console.log)