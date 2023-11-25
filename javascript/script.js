//CLASSES
class Cliente{
    nome;
    sobrenome;
    sexo
    estado;
    cidade;
    email;
    senha;
    constructor(nome, sobrenome, sexo, estado, cidade, email, senha){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.sexo = sexo,
        this.estado = estado,
        this.cidade = cidade,
        this.email = email,
        this.senha = senha
    }

    //getters and setters
    // get getNome(){
    //     return this.#nome;
    // }
    // get getSobrenome(){
    //     return this.#sobrenome;
    // }
    // get getSexo(){
    //     return this.#sexo;
    // }
    // get getEstado(){
    //     return this.#estado;
    // }
    // get getCidade(){
    //     return this.#cidade;
    // }
    // get getEmail(){
    //     return this.#email;
    // }
    // get getSenha(){
    //     return this.#senha;
    // }
}
const clientes = [];
let clienteLogado;

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

function validation(){
    let senhaMsg = document.querySelectorAll('span#senhaMsg');
    let emailMsg = document.querySelector('span#emailMsg');
    let validado = true;

    if(!cadEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailMsg.innerHTML = 'Por favor, digite um email válido';
        setTimeout(()=>{
            emailMsg.innerHTML = '';
        },6000)

        return false;
    }

    if(cadSenha.value != cadConSenha.value){
            senhaMsg.forEach((element)=>{
                element.innerHTML = 'Certifique-se que a senha é a mesma em ambos os campos'
                setTimeout(()=>{
                    element.innerHTML = '';
                },6000)
            })

            return false;
        }

        return true;
}

if(cadForm){
    cadForm.addEventListener('submit', (e)=>{
        e.preventDefault()

        if(validation()){
            alert('Cadastrado!');
            clientes.push(new Cliente(cadNome.value, cadSobrenome.value, cadSexo.value, cadEstado.value, cadCidade.value, cadEmail.value, cadSenha.value))
            console.log(clientes);
            localStorage.setItem('users',JSON.stringify(clientes));
            
            window.location.href = 'login.html';
        }

    })
}


//--LOGIN--
//variavéis
const formLog = document.querySelector('form#formLogin');
const nomeUsuario = document.getElementById('loginUsu');
const senhaUsuario = document.getElementById('loginSenha');

if(formLog){
    formLog.addEventListener('submit', e =>{
        e.preventDefault();
        let nomeValue = nomeUsuario.value;
        let senhaValue = senhaUsuario.value;

        JSON.parse(localStorage.getItem('users')).forEach((element) =>{
            
            if(nomeValue == element.nome && senhaValue == element.senha){
                clienteLogado = element;
                localStorage.setItem('usuLogado', JSON.stringify(clienteLogado))
                alert('Logado com sucesso!');
                window.location.href = 'catalogo.html'
                return;
            } else {
                document.querySelector('span#loginMsg').innerHTML = 'Usuário não encontrado ou você não digitou os dados corretamente, tente novamente ou crie uma conta.'
                setTimeout(()=>{
                    document.querySelector('span#loginMsg').innerHTML = '';
                },4000)
                return;
            }
        })
    })
}