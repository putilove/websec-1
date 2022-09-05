function calc(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)){
        alert('Внимание!\nВведите оба числа!');
        return;
    }
    var result1 = document.getElementById('result1');
    var result2 = document.getElementById('result2');
    var operation = document.getElementById('operation').value;
    var result;
    switch(operation){
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            if (num2 === 0) {
                alert("Внимание!\nНа ноль делить нельзя")
                break;
            }
            result = num1 / num2
            break;
    }
    result1.innerHTML = result2.innerHTML == '' ? ' ' : result2.innerHTML;
    result2.innerHTML = `${num1} ${operation} ${num2} = ${result}`;
}