let aceitar = true;

console.log('Pedir Uber');

const promessa = new Promise ((resolve, reject) => {
    
    if(aceitar) {
        return resolve('pedido aceito!');
    }
    return reject('pedido negado!');
});

console.log('Aguardando');

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro) )
    .finally(()=> console.log('finalizada'));
