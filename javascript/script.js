
//classes
class Cliente{
    #nomeUsuario;
    #email;
    #senha;
    constructor(nomeUsuario, email, senha){
        this.#nomeUsuario = nomeUsuario,
        this.#email = email,
        this.#senha = senha
    }

    //getters and setters
    get getNomeUsuario(){
        return this.#nomeUsuario;
    }
    get getEmail(){
        return this.#email;
    }
    get getSenha(){
        return this.#senha;
    }
}
//variavéis
const clientes = [];
const c1 = new Cliente('Lucas','lucas@gmail.com','1234');
const c2 = new Cliente('Arthur', 'arthur@gmail.com','5678')
const c3 = new Cliente('Dayanne','day@gmail.com','1432');
const c4 = new Cliente('AnnaKlara','klara@gmail.com','1234');
const form = document.querySelector('form#formLogin');
const nomeUsuario = document.getElementById('loginUsu');
const senhaUsuario = document.getElementById('loginSenha');

clientes.push(c1);
clientes.push(c2);
clientes.push(c3);
clientes.push(c4);

form.addEventListener('submit', e =>{
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