function validarLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === 'teste' && senha === '123') {
        window.location.href = 'Nada/Nada.html';
    } else {
        document.getElementById("textErrado").innerHTML = "E-Mail ou Senha incorretos";
        setTimeout (function() {
            document.getElementById("textErrado").innerHTML = "";
        }, 2000)
    }
}