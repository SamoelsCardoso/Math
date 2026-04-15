
console.log("adição");
console.log("subtração");
console.log("multiplicação");
console.log("divisão");
console.log("bhaskara");
let Defdocal = prompt("qual o calculo desejado?(olhar no terminal para informações das palavras para definir as contas)");


if(Defdocal == "bhaskara"){
let bhaa = Number(prompt("digite o A da função"));
let bhab = Number(prompt("digite o B da função"));
let bhac = Number(prompt("digite o C da função"));
const DELTA = (bhab*bhab)-4*(bhaa*bhac);
const BHASM = (-bhab+Math.sqrt(DELTA))/2*bhaa;
const BHASN = (-bhab-Math.sqrt(DELTA))/2*bhaa;
alert("("+BHASN+","+ BHASM+")");
}

if(Defdocal == "adição"){
    console.log("a conta de soma foi selecionada, ela calcula até 5 números.");
let numa = Number(prompt("digite o primeiro número"));
let numb = Number(prompt("digite o segundo número"));
let numc = Number(prompt("digite o terceiro número"));
let numd = Number(prompt("digite o quarto número"));
let nume = Number(prompt("digite o quinto número"));
const somares = numa+numb+numc+numd+nume;
alert("a soma dos números deu "+ somares);

}

if(Defdocal == "subtração"){
    console.log("A conta de subtração foi selecionada, ela subtrai até 5 números")
let numa = Number(prompt("digite o primeiro número"));
let numb = Number(prompt("digite o segundo número"));
let numc = Number(prompt("digite o terceiro número"));
let numd = Number(prompt("digite o quarto número"));
let nume = Number(prompt("digite o quinto número"));
const subres = numa-numb-numc-numd-nume
alert("a subtração dos números é "+ subres)
}
