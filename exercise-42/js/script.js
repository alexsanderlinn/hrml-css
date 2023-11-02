function inputname() {
    let name = prompt("Please enter your code");
    if (name === null || name === "" ) {
        document.getElementById("name").innerHTML = "Aluno: Inválido";
        document.getElementById("code").innerHTML = "Código: Inválido";
    } else{
        if(name === "1001") { //Aluno: Alexsander Linn//
            document.getElementById("name").innerHTML = "Aluno: Alexsander Linn";
            document.getElementById("code").innerHTML = `Código: ${name}`;
        } else {
            if(name === "1002") { //Aluno: João Reis//
                document.getElementById("name").innerHTML = "Aluno: João Reis";
                document.getElementById("code").innerHTML = `Código: ${name}`;
            } else {
                if(name === "1003") { //Aluno: Mariana Silva//
                    document.getElementById("name").innerHTML = "Aluno: Mariana Silva";
                    document.getElementById("code").innerHTML = `Código: ${name}`;
                } else {
                    document.getElementById("name").innerHTML = "Aluno: Inválido";
                    document.getElementById("code").innerHTML = "Código: Inválido";
                }
            }
        }
    }
}