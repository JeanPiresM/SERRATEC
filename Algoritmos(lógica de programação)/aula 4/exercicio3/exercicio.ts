const valorVenda: string | null = prompt("Digite o quanto você vendeu este mês")

if(valorVenda !== null){

const venda = parseFloat(valorVenda)

if(venda >= 100000){
  
     let bateuMeta = venda * 0.04
    console.log(`Você receberá uma comissão de ${bateuMeta} `)



}else{

 let naoBateu = venda * 0.02
console.log(`Você receberá apenas ${naoBateu}`)

}

}