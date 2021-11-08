let acertos = 0;
let erros = 0;

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

function verificar() {

    let r1 = Math.floor(Math.random() * 25);
    let r2 = Math.floor(Math.random() * 25);

    document.querySelector(".resultadoUsuario").value = "";
    document.querySelector(".resultadoUsuario").classList.remove("acertou", "errou", "campoVazio");
    document.querySelector("span").innerHTML = "Some os dois números, coloque no campo e aperte Enter!";
    document.querySelector("span").classList.remove("titulo");
    document.querySelector(".resultadoUsuario").focus();

    document.querySelector(".numero1").innerHTML = r1;
    document.querySelector(".numero2").innerHTML = r2;
}

verificar();

function resultado() {
    let n1 = parseInt(document.querySelector(".numero1").innerHTML);
    let n2 = parseInt(document.querySelector(".numero2").innerHTML);
    let somaRes = n1 + n2;
    let r = parseInt(document.querySelector(".resultadoUsuario").value);

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
        console.log(`${somaRes} é igual a ${r}`);
        acertos++;
        document.querySelector(".acertos").innerHTML = `Acertos: ${acertos}`;
        setTimeout(verificar, 1000);
    } else {
        document.querySelector(".resultadoUsuario").classList.remove("acertou", "campoVazio");
        document.querySelector(".resultadoUsuario").classList.add("errou");
        console.log(`${somaRes} não é igual a ${r}`);
        erros++;
        document.querySelector(".erros").innerHTML = `Erros: ${erros}`;
        setTimeout(verificar, 1000);
    }
}
