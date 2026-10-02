import {
    iniciarRoteador
} from "./router.js";

function salvarCadastro(dados) {

    const cadastros =
    JSON.parse(
        localStorage.getItem("cadastrosONG")
    ) || [];

    cadastros.push(dados);

    localStorage.setItem(
        "cadastrosONG",
        JSON.stringify(cadastros)
    );

    console.log('Total de registros:', cadastros.length);
}

function obterCadastros() {

    return JSON.parse(
        localStorage.getItem("cadastrosONG")
    ) || [];
}

function preencherFormularioComUltimoCadastro() {

    const cadastros = obterCadastros();

    if (cadastros.length === 0) {
        return;
    }

    const ultimoCadastro =
    cadastros[cadastros.length - 1];

    const formulario =
    document.getElementById("form-cadastro");

    if (!formulario) {
        return;
    }

    formulario.nome.value =
    ultimoCadastro.nome || "";

    formulario.nascimento.value =
    ultimoCadastro.nascimento || "";

    formulario.cpf.value =
    ultimoCadastro.cpf || "";

    formulario.telefone.value =
    ultimoCadastro.telefone || "";

    formulario.email.value =
    ultimoCadastro.email || "";

    formulario.cep.value =
    ultimoCadastro.cep || "";

    formulario.cidade.value =
    ultimoCadastro.cidade || "";

    formulario.estado.value =
    ultimoCadastro.estado || "";

    formulario.endereco.value =
    ultimoCadastro.endereco || "";

    formulario.mensagem.value =
    ultimoCadastro.mensagem || "";
}

function mostrarToast(mensagem) {
    const toast = document.getElementById("toast");

    toast.textContent = mensagem;
    toast.hidden = false;

    window.setTimeout(function () {
        toast.hidden = true;
    }, 3000);
}

function configurarEventosGlobais() {
    document.addEventListener("submit", function (evento) {
        if (evento.target.id !== "form-cadastro") {
            return;
        }

        evento.preventDefault();

        const formulario = evento.target;

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        const dados = {
            nome: formulario.nome.value,
            nascimento: formulario.nascimento.value,
            cpf: formulario.cpf.value,
            telefone: formulario.telefone.value,
            email: formulario.email.value,
            cep: formulario.cep.value,
            cidade: formulario.cidade.value,
            estado: formulario.estado.value,
            endereco: formulario.endereco.value,
            mensagem: formulario.mensagem.value
        };

        salvarCadastro(dados);

        mostrarToast(
            "Cadastro salvo com sucesso!"
        );

        formulario.reset();

    });

    document.addEventListener(
        "paginaCadastroCarregada",
        preencherFormularioComUltimoCadastro
    );
}

function aplicarMascaras() {

    const cpf =
    document.getElementById("cpf");

    const telefone =
    document.getElementById("telefone");

    const cep =
    document.getElementById("cep");

    if (cpf) {
        new Inputmask(
            "999.999.999-99"
        ).mask(cpf);
    }

    if (telefone) {
        new Inputmask(
            "(99)99999-9999"
        ).mask(telefone);
    }

    if (cep) {
        new Inputmask(
            "99999-999"
        ).mask(cep);
    }
}

function iniciarAplicacao() {
    configurarEventosGlobais();

    document.addEventListener(
        "paginaCadastroCarregada",
        aplicarMascaras
    );

    iniciarRoteador();

}

document.addEventListener("DOMContentLoaded", iniciarAplicacao);