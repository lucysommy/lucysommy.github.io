let firstNum = parseFloat (prompt("Input first Number: "));
let secNum = parseFloat(prompt("Input second Number :"));

let operator =prompt("Enter operator(+, -, /, *,)");
let result= 0;

if(isNaN(firstNum) || isNaN(secNum)){
    alert("wrong input! Input a valid number")
}else{
    if(operator == '+'){
        result = firstNum + secNum;
    }else if(operator == '-'){
        result = firstNum - secNum;
    }else if(operator == '*'){
        result = firstNum * secNum;
    }else if(operator == '/'){
        result = firstNum / secNum;
    }
    document.write(firstNum + operator + secNum + '=' + result)
}