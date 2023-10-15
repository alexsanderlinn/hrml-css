function inputname() {
    let name = prompt("Please enter your code");
    if (name === null || name === "" ) {
        document.getElementById("name").innerHTML = "Inválido";
        document.getElementById("code").innerHTML = "Inválido";
    } else{
        if(name === "1001") { //Aluno: Alexsander Linn//
            document.getElementById("name").innerHTML = "Alexsander Linn";
            document.getElementById("code").innerHTML = name;
        } else {
            if(name === "1002") { //Aluno: João Reis//
                document.getElementById("name").innerHTML = "João Reis";
                document.getElementById("code").innerHTML = name;
            } else {
                if(name === "1003") { //Aluno: Mariana Silva//
                    document.getElementById("name").innerHTML = "Mariana Silva";
                    document.getElementById("code").innerHTML = name;
                } else {
                    document.getElementById("name").innerHTML = "Inválido";
                    document.getElementById("code").innerHTML = "Inválido";
                }
            }
        }
    }
}