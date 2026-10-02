import {
    paginaInicio
} from "./pages/inicio.js";
import {
    paginaProjetos
} from "./pages/projetos.js";
import {
    paginaCadastro
} from "./pages/cadastro.js";
import {
    paginaNaoEncontrada
} from "./pages/naoEncontrada.js";

const rotas = {
    "/inicio": {
        titulo: "ONG - Início",
        componente: paginaInicio
    },

    "/projetos": {
        titulo: "ONG - Projetos",
        componente: paginaProjetos
    },

    "/cadastro": {
        titulo: "ONG - Cadastro",
        componente: paginaCadastro
    }
};

function obterDadosDaRota() {
    const hash = window.location.hash;

    if (!hash || hash === "#" || hash === "#/") {
        return {
            caminho: "/inicio",
            secao: null
        };
    }

    const hashSemSustenido = hash.slice(1);

    const [caminho,
        consulta] = hashSemSustenido.split("?");

    const parametros = new URLSearchParams(consulta || "");

    return {
        caminho,
        secao: parametros.get("secao")
    };
}

function fecharMenuMobile() {
    const menuMobile = document.getElementById("menu-mobile");

    if (menuMobile) {
        menuMobile.checked = false;
    }
}

function atualizarLinkAtivo(caminhoAtual) {
    const links = document.querySelectorAll(".menu a");

    links.forEach(function (link) {
        link.classList.remove("ativo");

        const destino = link.getAttribute("href");

        if (destino === `#${caminhoAtual}`) {
            link.classList.add("ativo");
        }
    });
}

function moverParaSecao(secao) {
    if (!secao) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        return;
    }

    const elemento = document.getElementById(secao);

    if (elemento) {
        elemento.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}

function moverFocoParaTitulo() {
    const titulo = document.querySelector("#app h1");

    if (!titulo) {
        return;
    }

    titulo.setAttribute("tabindex", "-1");
}

export function renderizarRota() {
    const app = document.getElementById("app");

    const {
        caminho,
        secao
    } = obterDadosDaRota();

    const rotaEncontrada = rotas[caminho];

    if (rotaEncontrada) {
        app.innerHTML = rotaEncontrada.componente();

        if (caminho === "/cadastro") {

            requestAnimationFrame(() => {

                document.dispatchEvent(
                    new CustomEvent(
                        "paginaCadastroCarregada"
                    )
                );

            });

        }

        document.title = rotaEncontrada.titulo;
    } else {
        app.innerHTML = paginaNaoEncontrada();
        document.title = "ONG - Página não encontrada";
    }

    fecharMenuMobile();
    atualizarLinkAtivo(caminho);
    moverFocoParaTitulo();

    requestAnimationFrame(function () {
        moverParaSecao(secao);
    });
}

export function iniciarRoteador() {
    window.addEventListener("hashchange", renderizarRota);

    if (!window.location.hash) {
        window.location.hash = "#/inicio";
        return;
    }

    renderizarRota();
}