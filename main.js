function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function calculate() {
    const display = document.getElementById("display");
    try {
        let expression = display.value.replace(/,/g, '');
        let result = eval(expression);
        display.value = Number(result).toLocaleString("en-US", { maximumFractionDigits: 10 });
    } catch (error) {
        display.value = "Erro";
    }
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}