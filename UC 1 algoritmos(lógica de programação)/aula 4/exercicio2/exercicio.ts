const valorColesterol: string | null = prompt("Digite seu colesterol")

if(valorColesterol !== null){

const colesterol = parseFloat(valorColesterol)

if(colesterol < 180){

    console.log(`Saúde esta OK`)
}else{

     console.log(`Procure ajuda médica!`)
}


}