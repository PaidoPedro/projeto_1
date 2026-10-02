export function paginaNaoEncontrada() {
    return `
        <section class="section">
            <div class="container pagina-erro">
                <h1>Página não encontrada</h1>

                <p>
                    O endereço informado não corresponde a uma
                    página disponível.
                </p>

                <a href="#/inicio">
                    Voltar ao início
                </a>
            </div>
        </section>
    `;
}