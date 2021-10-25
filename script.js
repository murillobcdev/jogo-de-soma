document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        resultado();
    }
}, false);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Delete') {
        verificar();
    }
}, false);

function resultado() {
    var n1 = parseInt(document.querySelector(".numero1").innerHTML);
    var n2 = parseInt(document.querySelector(".numero2").innerHTML);
    var somaRes = n1 + n2;
    var r = parseInt(document.querySelector(".resultadoUsuario").value);

    if (isNaN(r)) {
        document.querySelector(".resultadoUsuario").classList.add("campoVazio");
        document.querySelector(".header").classList.add("titulo");
        document.querySelector(".header").innerHTML = "O campo não pode ficar vazio e nem ter letras!";
        setTimeout(verificar, 1250);
    } else {
        testarResultado(r, somaRes);
    }
}

function testarResultado(r, somaRes) {
    if (r == somaRes) {
        document.querySelector(".resultadoUsuario").classList.remove("errou", "campoVazio");
        document.querySelector(".resultadoUsuario").classList.add("acertou");
        console.log(`${somaRes} é igual a ${r}.`);
        setTimeout(verificar, 1000);
    } else {
        document.querySelector(".resultadoUsuario").classList.remove("acertou", "campoVazio");
        document.querySelector(".resultadoUsuario").classList.add("errou");
        console.log(`${somaRes} não é igual a ${r}.`);
        setTimeout(verificar, 1000);
    }
}

function verificar() {

    document.querySelector(".resultadoUsuario").value = "";
    document.querySelector(".resultadoUsuario").classList.remove("acertou", "errou", "campoVazio");
    document.querySelector("span").innerHTML = "Some os dois números, coloque no campo e aperte Enter!";
    document.querySelector("span").classList.remove("titulo");
    document.querySelector(".resultadoUsuario").focus();

    var r1 = Math.floor(Math.random() * 25);
    var r2 = Math.floor(Math.random() * 25);

    document.querySelector(".numero1").innerHTML = r1;
    document.querySelector(".numero2").innerHTML = r2;
}
verificar();