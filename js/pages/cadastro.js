export function paginaCadastro() {
    return `
        <section class="section--cadastro">
            <h1>Cadastro</h1>

            <form id="form-cadastro">
                <fieldset>
                    <legend class="legend">
                        Insira seus dados
                    </legend>

                    <div class="campo">
                        <label for="nome">
                            Nome Completo
                        </label>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                        >
                    </div>

                    <div class="campo">
                        <label for="nascimento">
                            Data de Nascimento
                        </label>

                        <input
                            type="date"
                            id="nascimento"
                            name="nascimento"
                            required
                        >
                    </div>

                    <div class="campo">
                        <label for="cpf">CPF</label>

                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            placeholder="123.456.789-10"
                            pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                            title="Digite o CPF no formato 123.456.789-10"
                            required
                        >
                    </div>

                    <div class="campo">
                        <label for="telefone">Telefone</label>

                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            placeholder="(12)34567-8910"
                            pattern="\\([0-9]{2}\\)[0-9]{5}-[0-9]{4}"
                            title="Digite o telefone no formato (12)34567-8910"
                            required
                        >
                    </div>

                    <div class="campo">
                        <label for="email">E-mail</label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="exemplo@exemplo.com"
                            required
                        >
                    </div>

                    <div class="campo">
                        <label for="cep">CEP</label>

                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            placeholder="12345-678"
                            pattern="[0-9]{5}-[0-9]{3}"
                            title="Digite o CEP no formato 12345-678"
                            required
                        >
                    </div>

                    <div class="dupla">
                        <div class="campo">
                            <label for="cidade">Cidade</label>

                            <input
                                type="text"
                                id="cidade"
                                name="cidade"
                                required
                            >
                        </div>

                        <div class="campo">
                            <label for="estado">Estado</label>

                            <input
                                type="text"
                                id="estado"
                                name="estado"
                                maxlength="2"
                                placeholder="RJ"
                                required
                            >
                        </div>
                    </div>

                    <div class="campo">
                        <label for="endereco">Endereço</label>

                        <input
                            type="text"
                            id="endereco"
                            name="endereco"
                            required
                        >
                    </div>

                    <div class="campo">
                        <label for="mensagem">
                            Conte-nos mais sobre você
                        </label>

                        <textarea
                            id="mensagem"
                            name="mensagem"
                            placeholder="Descreva brevemente seu interesse em participar da ONG."
                        ></textarea>
                    </div>

                    <input type="submit" value="Enviar">
                </fieldset>
            </form>
        </section>
    `;
}