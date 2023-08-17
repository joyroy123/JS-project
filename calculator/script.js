function calculator(NewValue){
    document.getElementById("myResult").value += NewValue;
}

function DeleteMe(){
    document.getElementById("myResult").value = "";
}

function Answer(){
    var a = document.getElementById("myResult").value;
    var b = eval(a);
    document.getElementById("myResult").value = b;
}