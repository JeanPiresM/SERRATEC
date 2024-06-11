const fetchData = () => {
    const promise = new Promise((resolve, reject) =>{
        setTimeout(()=>{
          resolve( console.log('Dentro do setTimeout'));
        },1)
    })
}

fetchData();


console.log("Olá");
console.log("Hello");