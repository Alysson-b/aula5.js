let pergunta1 = prompt('telefonou para a vitima?')
let pergunta2 = prompt('esteve no local do crime')
let pergunta3 = prompt('mora perto da vitima')
let pergunta4 = prompt('devia para a vitima')
let pergunta5 = prompt('ja trabalhou com a vitima')


if(prompt < 2){
    console.log('suspeito')
}
else if(prompt >= 3  &&  prompt <= 4){
  console.log('Cúmplice')
}
else{
  console.log('assasino')
}

