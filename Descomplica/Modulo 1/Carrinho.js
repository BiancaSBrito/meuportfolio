// Definindo a classe Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando.`;
    }
}

// Definindo a classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

// Definindo a classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

// Função para exibir erro na página
function exibirErro(mensagem) {
    const errorDiv = document.getElementById("error");
    errorDiv.innerText = mensagem;
}

// Função para criar instâncias de Gerente e Desenvolvedor
function criarFuncionarios() {
    try {
        const nomeGerente = document.getElementById("nomeGerente").value;
        const idadeGerente = parseInt(document.getElementById("idadeGerente").value);
        const cargoGerente = document.getElementById("cargoGerente").value;
        const departamentoGerente = document.getElementById("departamentoGerente").value;

        const nomeDev = document.getElementById("nomeDev").value;
        const idadeDev = parseInt(document.getElementById("idadeDev").value);
        const cargoDev = document.getElementById("cargoDev").value;
        const linguagemDev = document.getElementById("linguagemDev").value;

        // Verificando se os campos estão preenchidos corretamente
        if (!nomeGerente || !idadeGerente || !cargoGerente || !departamentoGerente) {
            throw new Error("Preencha todos os campos do gerente.");
        }

        if (!nomeDev || !idadeDev || !cargoDev || !linguagemDev) {
            throw new Error("Preencha todos os campos do desenvolvedor.");
        }

        // Criando instâncias
        const gerente = new Gerente(nomeGerente, idadeGerente, cargoGerente, departamentoGerente);
        const desenvolvedor = new Desenvolvedor(nomeDev, idadeDev, cargoDev, linguagemDev);

        // Exibindo informações na página
        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = `
            <p>${gerente.seApresentar()}</p>
            <p>${gerente.gerenciar()}</p>
            <p>${desenvolvedor.seApresentar()}</p>
            <p>${desenvolvedor.programar()}</p>
        `;
    } catch (error) {
        exibirErro(error.message);
    }
}

// Adicionando um evento ao botão de criação
document.getElementById("criarFuncionariosBtn").addEventListener("click", criarFuncionarios);
