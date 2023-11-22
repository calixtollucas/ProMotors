
//classes
class Cliente{
    #nome;
    #sobrenome;
    #sexo
    #estado;
    #cidade;
    #email;
    #senha;
    constructor(nome, sobrenome, sexo, estado, cidade, email, senha){
        this.#nome = nome,
        this.sobrenome = sobrenome,
        this.sexo = sexo,
        this.estado = estado,
        this.cidade = cidade,
        this.#email = email,
        this.#senha = senha
    }

    //getters and setters
    get getNome(){
        return this.#nome;
    }
    get getSobrenome(){
        return this.#sobrenome;
    }
    get getSexo(){
        return this.#sexo;
    }
    get getEstado(){
        return this.#estado;
    }
    get getCidade(){
        return this.#cidade;
    }
    get getEmail(){
        return this.#email;
    }
    get getSenha(){
        return this.#senha;
    }
}
const clientes = [];

//--CADASTRO--
//variáveis
const formCad = document.querySelector('form#cadForm');


//--LOGIN--
//variavéis
const formLog = document.querySelector('form#formLogin');
const nomeUsuario = document.getElementById('loginUsu');
const senhaUsuario = document.getElementById('loginSenha');

formLog.addEventListener('submit', e =>{
    e.preventDefault();
    let nomeValue = nomeUsuario.value;
    let senhaValue = senhaUsuario.value;

    clientes.forEach(element => { 
        if((nomeValue == element.getNomeUsuario || nomeValue == element.getEmail) && senhaValue == element.getSenha){
            alert('logado com sucesso!');
        }
    });

    window.location.href = 'index.html';
})