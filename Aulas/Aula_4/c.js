const dados = require('./data.js');
let clientes = dados();
let quantidade = 10;

for(cliente of clientes){
    for(pedido of cliente.pedidos){
        pedido.valor_total = quantidade*pedido.valor;
    }
}
module.exports = clientes;