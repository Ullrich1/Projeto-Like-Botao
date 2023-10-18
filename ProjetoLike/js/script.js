quantidadeDeLikes = 0
function adicionarLike(){
  quantidadeDeLikes = quantidadeDeLikes + 1
  if (quantidadeDeLikes <= 1){
    like = " Like"
  }else{
    like = " Likes"
  }

  botao.innerHTML = quantidadeDeLikes + like  
}
