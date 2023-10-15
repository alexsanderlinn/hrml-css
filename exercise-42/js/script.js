function inputname() {
    let name = prompt("Please enter your code");
    if (name === null || name === "" ) {
        document.getElementById("name").innerHTML = "Inválido";
        document.getElementById("code").innerHTML = "Inválido";
    } else{
        if(name === "1001") {
            document.getElementById("name").innerHTML = "Alexsander Linn";
            document.getElementById("code").innerHTML = name;
        } else {
            if(name === "1002") {
                document.getElementById("name").innerHTML = "Teste Aluno 1";
                document.getElementById("code").innerHTML = name;
            }
        }
    }
}