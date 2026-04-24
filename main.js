function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function calcular() {
    const display = document.getElementById("display");
    try {
        let expressão = display.value.replace(/,/g, '');

        expressão = expressão.replace(/\^/g, '**');
        expressão = expressão.replace(/√\(/g, 'Math.sqrt(');
        expressão = expressão.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');
        expressão = expressão.replace(/%(\d+(\.\d+)?)/g, '/100*$1');
        expressão = expressão.replace(/%/g, '/100');

        let resultado = eval(expressão);
        display.value = Number(resultado).toLocaleString("en-US", { maximumFractionDigits: 10 });
    } catch (error) {
        display.value = "Erro";
    }
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}