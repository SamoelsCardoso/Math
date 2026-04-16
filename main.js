console.log("adição- 1");
console.log("subtração- 2");
console.log("multiplicação- 3");
console.log("divisão- 4");
console.log("bhaskhara- B");
console.log("Hipotenusa- H")
console.log("Voltagem- V")
let Defdocal = prompt("qual o calculo desejado?(olhar no console para informações das palavras chave para definir as contas)");

switch(Defdocal){
    case"R":
    resistência
    break;
    case "I":
        amper
    break;
    case "P":
        potencia
    break;
    case "V":
        console.log("caso a gbrandeza não exista, deixar 0 no lugar dela.")
        let Iv = Number(prompt("Digite a corrente do sistema (em Amper)"))
        let Rv = Number(prompt("Digite a resistência do sistema (em Ohm)"))
        let Wv = Number(prompt("Digite a potência do sistema"))
        if (Wv == 0){
            const V = Rv*Iv
            console.log("A voltagem é de "+ V)
        }
        if (Iv == 0){
            const V = Math.sqrt(Wv*Rv)
            console.log("A voltagem é de "+ V)
        }
        if (Rv == 0){
            const V = Wv/Iv
            console.log("A voltagem é de "+ V)
        }

    break;
    case "H" :
    let cat1 = Number(prompt("digite o primeiro cateto."))
    let cat2 = Number(prompt("digite o segundo cateto"))
    const HIPO = (cat1*cat1)+(cat2*cat2)
    const HIPOcal = Math.sqrt(HIPO)
console.log ("a hipotenusa ao quadrado é "+ HIPO)
console.log("a hipotenusa é "+ HIPOcal)

    break;

case "B" :
let bhaa = Number(prompt("digite o A da função"));
let bhab = Number(prompt("digite o B da função"));
let bhac = Number(prompt("digite o C da função"));
const DELTA = (bhab*bhab)-4*(bhaa*bhac);
const BHASM = (-bhab+Math.sqrt(DELTA))/2*bhaa;
const BHASN = (-bhab-Math.sqrt(DELTA))/2*bhaa;
alert("("+BHASN+","+ BHASM+")");
break;

case "1" :
    let soma = 0;
    let n = Number(prompt("número de números a calcular"));
    for( i=0; i<n; i++ ) {
    var numero = Number(prompt("digite o número a somar/ser somado"));
    soma = soma + numero; 
    console.log("a soma total deu "+ soma)};
console.log("programa finalizado, favor recarregar a página para reiniciar a calculadora");
break;
    
case "2" :
    let sub = 0;
    let nu = Number(prompt("número de números a calcular"));
    for( i=0; i<nu; i++ ) {
    var numero = Number(prompt("digite o número a subtrair/ser subtraido"));
    sub = sub - numero; 
    console.log("a subtração  total deu "+ sub)};
console.log("programa finalizado, favor recarregar a página para reiniciar a calculadora");
break;

case "3" :
    console.log ("A conta de multiplicação foi selecionada, ela multiplica até 2 números.")
let numm1 = Number(prompt("digite o primeiro número a ser multiplicado"))
let numm = Number(prompt("digite o segundo número a ser multiplicado"))
const multres = numm1*numm
alert("a multiplicação dos números deu "+ multres)
console.log("programa finalizado, favor recarregar a página para reiniciar a calculadora");
break;


case "4" :
    console.log("A conta de divisão foi selecioanda, ela divide até 2 números");
    let numa = Number(prompt("digite o número a ser dividido"));
    let numb = Number(prompt("digite o número a dividir"));
    const divres = numa/numb;
    alert("a divisão dos números deu" + divres);
    break;
    }
