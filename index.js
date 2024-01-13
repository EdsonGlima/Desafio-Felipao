//variável com o nome do heroi
let nomeHeroi = "Chewie"
let msg = "Ajude nosso herói " + nomeHeroi + " a mudar de nivel"
let msg1 = "Nesse momento " + nomeHeroi + " ainda não possui nível,\nChewie foi desafiado para um jogo de advinhação contra um monstro,vamos ajuda-lo?"
let msgMstr = "Eu sou o ORACLE....Acabei de Pensar em um número entre 0 e 15.000, será que você advinha " + nomeHeroi + "?"
console.log(msg)
//console.log(msg1)
console.log(msgMstr)
//console.log(valorHeroi)
// variável que recebe um valor randomico para o Oracle
let oracle = parseInt(Math.random() * 10000)
//let valorHeroi = parseInt(Math.random() *10000)

//variável que recebe um valor randomico para o nosso heroi.
let valorHeroi =parseInt(Math.random() *11000);
//console.log("O valor do nosso Heroi foi " + valorHeroi)
//console.log("O valor do nosso Monstro foi " + monstro)
let xpResulst = ""
if (String |valorHeroi<1000) {
    xpResulst = `${nomeHeroi}seu XP agora nível de Ferro`
}if(String |valorHeroi>1001 ||String |valorHeroi==2000){
    xpResulst = `${nomeHeroi}seu XP agora nível Bronze`  
}if(String |valorHeroi>2001 ||String |valorHeroi==5000){
    xpResulst = `${nomeHeroi}seu XP agora nível Prata`
}if(String |valorHeroi>5001 ||String |valorHeroi==7000){
    xpResulst = `${nomeHeroi}seu XP agora nível Ouro`
}if(String |valorHeroi>7001 ||String |valorHeroi ==8000){
    xpResulst = `${nomeHeroi}seu XP agora nível Platina`
}if(String |valorHeroi>8001 ||String |valorHeroi ==9000){
    xpResulst = `${nomeHeroi}seu XP agora nível Ascendente`
}if(String |valorHeroi>9001 ||String |valorHeroi ==10000){
    xpResulst = `${nomeHeroi}seu XP agora nível Imortal`
}if(String |valorHeroi>10000){
    xpResulst = `${nomeHeroi} PARABÉNS VOCÊ ATINGIU O NÍVEL RADIANTE`
}
setTimeout(
    ()=>{
        console.log("O valor do nosso Heroi foi " + valorHeroi)
        console.log(xpResulst)
    },
    2 *1000
)
//console.log(xpResulst)

