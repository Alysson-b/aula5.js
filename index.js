function perguntar(){
  let perguntas = [ 
  'telefonou para a vitima?',
  'esteve no local do crime?' ,
  'mora perto da vitima?',
  'devia para a vitima?',
  'ja trabalhou com a vitima?'

]
  let respostas = [];

 for(let pergunta of perguntas){
  let resposta = prompt(pergunta + " (S/N)").toUpperCase();
  while(resposta !== 'S' && resposta !== 'N'){
    alert('resposta invalida, responda com S ou N.')
    resposta = prompt(pergunta + "(S/N)").toUpperCase();
  }
  respostas.push(resposta)
 }
 
 return respostas;
}



function veredito(respostas) {
  let respostasPositivas = respostas.filter(resposta => resposta === 'S').length;

  if(respostasPositivas === 2 ){
    return('Supeito')
  }else if(respostasPositivas >=3 && respostasPositivas <=4){
    return('Cúmplice')
  }else if(respostasPositivas === 5){
    return('Assasino')
  }else{
    return('inocente')
  }
} 

function main() {
  let respostas = perguntar();
  let resultado = veredito(respostas);
  alert('Voce é:' +  resultado);
}


main();

