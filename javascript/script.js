//CLASSES
class Cliente{ // Classe que representa os clientes
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

}
if(sessionStorage.getItem('usuLogado') === null){ //declarar um valor padrão para o usuário logado no sessionStorage
    sessionStorage.setItem('usuLogado', "")
}

if(localStorage.getItem('users')=== null){ //declarar um valor padrão para os cadastros dos usuários no localStorage
    let clientess = []
    localStorage.setItem('users',JSON.stringify(clientess));
}
let clienteLogado;

//--CADASTRO--
//variáveis de referência aos campos do formulário e ao formulário
const cadForm = document.querySelector('form#formCad');
const cadNome = document.querySelector('input#cadNome');
const cadSobrenome = document.querySelector('input#cadSobrenome');
const cadSexo = document.querySelector('select#cadSexo');
const cadEmail = document.querySelector('input#cadEmail');
const cadSenha = document.querySelector('input#cadSenha');
const cadConSenha = document.querySelector('input#cadConSenha');
const cadEstado = document.querySelector('select#cadEstado');
const cadCidade = document.querySelector('input#cadCidade');

// função de validação dos campos do cadastro
function validation(){
    let senhaMsg = document.querySelectorAll('span#senhaMsg');
    let emailMsg = document.querySelector('span#emailMsg');
    let validado = true;

    if(!cadEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){ //Regex para verificar se o email tem formato xxxxxxxxx@xxx.xxxx
        emailMsg.innerHTML = 'Por favor, digite um email válido';
        setTimeout(()=>{
            emailMsg.innerHTML = '';
        },6000)

        return false;
    }

    if(cadSenha.value != cadConSenha.value){ //verificar se o campo senha é idêntico ao campo campo confirmar Senha
            //Se os campos estiverem incorretos, muda o texto da mensagem de erro
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

//código para armazenar o cadastro feito no localStorage
if(cadForm){ //Se o formulário cadForm existe, então...
    cadForm.addEventListener('submit', (e)=>{ // função que é executada pós clicar em criar conta
        e.preventDefault()

        if(validation()){ //validation()

            let clientes = localStorage.getItem('users');
            let clientesP = JSON.parse(clientes);
            alert('Cadastrado com sucesso!');
            clientesP.push(new Cliente(cadNome.value, cadSobrenome.value, cadSexo.value, cadEstado.value, cadCidade.value, cadEmail.value, cadSenha.value))
            localStorage.setItem('users', JSON.stringify(clientesP))
                        
            window.location.href = 'login.html';
        }
    })
}


//--LOGIN--
//variavéis para os campos do login e o foemulário
const formLog = document.querySelector('form#formLogin');
const nomeUsuario = document.getElementById('loginUsu');
const senhaUsuario = document.getElementById('loginSenha');


//
if(formLog){ //se o formulário formLog existe, então...
    formLog.addEventListener('submit', e =>{
        e.preventDefault();
        let nomeValue = nomeUsuario.value;
        let senhaValue = senhaUsuario.value;

        //percorre o array armazenado no localStorage e compara os valores dos campos com seus respectivos atributos
        JSON.parse(localStorage.getItem('users')).forEach((element) =>{
            
            if(nomeValue == element.nome && senhaValue == element.senha){
                clienteLogado = element;
                sessionStorage.setItem('usuLogado', JSON.stringify(clienteLogado));
                alert('Logado com sucesso!');
                window.location.href = 'catalogo.html';
                return;
            } else {
                //Se os campos estiverem incorretos, muda o texto da mensagem de erro
                document.querySelector('span#loginMsg').innerHTML = 'Usuário não encontrado ou você não digitou os dados corretamente, tente novamente ou crie uma conta.'
                setTimeout(()=>{
                    document.querySelector('span#loginMsg').innerHTML = '';
                },4000)
                return;
            }
        })
    })
}


//FINANCIAMENTO

function selFinanc(src){
    //verifica se há algum usuário logado
    if(sessionStorage.getItem('usuLogado') == ""){
        alert('você precisa estar logado para fazer um financiamento');
        window.location.href = 'login.html'
        return;
    }
    //Armazena o caminho da imagem no localStorage para uso no financiamento.html
    localStorage.setItem('selectedCar', src);
    window.location.href = 'financiamento.html';
}