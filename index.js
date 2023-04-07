class Produto{
  constructor() {
  this.id = 1;
  this.arrayProduto = [];
  }
adicionar() {
 let produto = this.lerdados(); 

 if(this.validaCampos(produto)){
  this.adicionar(produto);
 }
  this.listaTabela();
}

listaTabela(){
    let tbody = document.getElementById('tbody');
    tbody.innerText = ''; 
    for(let i = 0; i < this.arrayProduto.length; i++){
    let tr = tbody.insertRow();

    let td_id = tr.insertCell();
    let td_produto = tr.insertCell();
    let td_valor = tr.insertCell();

    td_id.innerText = this.arrayProduto[i].id;
    td_produto.innerText = this.arrayProduto[i].nomeProduto;
    td_valor.innerText = this.arrayProduto[i].valor;
    }
}

recebedor(produto) {
  this.arrayProduto.push(produto);
  this.id++;
}

lerdados() {
  let produto = {}

  produto.nomeProduto = document.getElementById('produto').value;
  produto.valor = document.getElementById('valor').value;

  return produto;
}

validaCampos(produto) {
  let msg = '';
  if(produto.nomeProduto == ''){
      msg += 'Informe o produto \n'
  }
  if(valor.nomeProduto == ''){
      msg += 'Informe o valor \n'
  }
  if(msg != ''){
      alert(msg);
      return false
  }
}

excluir() {
  alert('Produtos excluidos');
}

}
var produto = new Produto();
