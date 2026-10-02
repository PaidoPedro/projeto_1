export function paginaProjetos() {
    return `
        <section class="section">
            <div class="container">
                <h1>Projetos Sociais</h1>

                <div class="cards">
                    <article class="card" id="edu">
                        <h2>
                            Educação para Todos

                            <span class="badge badge--success">
                                Ativo
                            </span>
                        </h2>

                        <img src="img/educacao.png" width="400"
                                alt="Crianças participando de projeto de reforço escolar.">

                        <p>
                            Projeto voltado ao reforço escolar.
                        </p>
                    </article>

                    <article class="card" id="capacitacao">
                        <h2>Capacitação Profissional</h2>

                        <img src="img/capacitacao.png" width="400"
                                alt="Participantes realizando curso de capacitação profissional.">

                        <p>
                            Cursos e oficinas para jovens e adultos.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container voluntariado">
                <article id="voluntariado">
                    <h2>Seja um Voluntário</h2>

                    <img src="img/voluntarios.png" width="400"
                        alt="Voluntários participando de ação solidária comunitária.">

                    <p>
                        Os interessados podem atuar em atividades
                        educacionais, campanhas solidárias e eventos
                        comunitários.
                    </p>

                    <a href="#/cadastro" class="btn">Junte-se a nós!</a>
                </article>
            </div>
        </section>
    `;
}
