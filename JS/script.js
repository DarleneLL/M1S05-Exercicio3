function consultarPreco(){
    let produto = document.getElementById('produto').value;
    produto = produto.toLowerCase();
    switch (produto){
        case 'arroz':
            (document.getElementById('preco').value) = 5.5;
            break;
        case 'feijão':
            document.getElementById('preco').value = 10.0;
            break;
        case 'macarrão':
            document.getElementById('preco').value = 2.5;
            break;
        default:
            alert('Produto não cadastrado')
    }
}
let carrinho = [];
function comprarProduto(){
    let nomeProduto = document.getElementById('produto').value;
    let precoProduto = document.getElementById('preco').value;
    if (nomeProduto !== '' && precoProduto !== ''){
        let produto = {nome: nomeProduto, preco: precoProduto}
        carrinho.push(produto);
        let tbody = document.querySelector('#tabela-carrinho tbody');
        tbody.innerHTML = '';
        carrinho.forEach(produto =>{
            let tr = document.createElement('tr');
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let nomeProduto = document.createTextNode(produto.nome);
            let precoProduto = document.createTextNode(produto.preco);
            td1.appendChild(nomeProduto);
            td2.appendChild(precoProduto)
            tr.appendChild(td1);
            tr.appendChild(td2);
            document.getElementById("tabela-carrinho").getElementsByTagName("tbody")[0].appendChild(tr);
         })
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = 0 
    }else{
        alert('Favor informar um produto');
    }
    
}
    
//     if(produto && preco){
//         let produto = {nome: nomeProduto, preco: precoProduto}
//         carrinho.push(produto);
//         //seleciona o corpo da tabela
//         const tbody = document.querySelector('#tabela-carrinho tbody');
//         // Limpa a tabela
//         tbody.innerHTML = '';
//         // Adiciona cada produto do carrinho à tabela
//         carrinho.forEach(produto => {
//                 const tr = document.createElement('tr');
//                 tr.innerHTML = 
//                    `<td>${produto.nomeProduto}</td>
//                     <td>R$ ${produto.precoProduto.toFixed(2)}</td>`;
//                 tbody.appendChild(tr);
//              });// aqui
//         document.getElementById('produto').value = '';
//         document.getElementById('preco').value = '';

//         alert("Produto "+nomeProduto+" adicionado com sucesso");
//     }else{
//         alert('Favor informar um produto')
//     }
// }