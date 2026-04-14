let A = Number(prompt("digite o A da função"))
let B = Number(prompt("digite o B da função"))
let C = Number(prompt("digite o C da função"))


const DELTA = (B*B)-4*(A*C)
const BHASM = (-B+Math.sqrt(DELTA))/2*A
const BHASN = (-B-Math.sqrt(DELTA))/2*A
alert("("+BHASN+","+ BHASM+")")