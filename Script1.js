function Verify() {
    const Password = document.getElementById("InPass").value;
    const Login = document.getElementById("InName").value;
    const Logs = [{ log: "Ice", pass: "123" }, { log: "Mori", pass: "456" }, { log: "Monrah", pass: "789" }]
    const msg1 = document.getElementById("txt2");
    const msg2 = document.getElementById("txt3");
    const user = Logs.find(item => item.log === Login);

    if (!user) {
        msg1.innerHTML = "Usuário Inválido";
        msg2.innerHTML = "Senha Inválida";
        document.getElementById('InPass', 'InName').value = '';
        return;
    }
    else {
        msg1.innerHTML = "Usuário Válido"
        document.getElementById('InPass', 'InName').value = '';
    }

    if (user.pass === Password) {
        msg2.innerHTML = "Senha Válida";
        document.getElementById('InPass', 'InName').value = '';
    }
    else {
        msg2.innerHTML = "Senha Inválida";
        document.getElementById('InPass', 'InName').value = '';
    }
}