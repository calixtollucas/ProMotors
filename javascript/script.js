
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
        this.#sobrenome = sobrenome,
        this.#sexo = sexo,
        this.#estado = estado,
        this.#cidade = cidade,
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
const cadForm = document.querySelector('form#formCad');
const cadNome = document.querySelector('input#cadNome');
const cadSobrenome = document.querySelector('input#cadSobrenome');
const cadSexo = document.querySelector('select#cadSexo');
const cadEmail = document.querySelector('input#cadEmail');
const cadSenha = document.querySelector('input#cadSenha');
const cadConSenha = document.querySelector('input#cadConSenha');
const cadEstado = document.querySelector('select#cadEstado');
const cadCidade = document.querySelector('input#cadCidade');

cadForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    let senhaMsg = document.querySelectorAll('span.senhaMsg');

    if(cadSenha.value != cadConSenha.value){
            senhaMsg.forEach((element)=>{
                element.innerHTML = 'Certifique-se que a senha é a mesma em ambos os campos'
                setTimeout(()=>{
                    element.innerHTML = '';
                },6000)
            })
            alert('entrou!')
        }
})

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