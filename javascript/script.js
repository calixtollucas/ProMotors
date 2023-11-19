class Cliente {

    #nomeUsuario;

    constructor(nomeUsuario, senha, email){
        this.#nomeUsuario = nomeUsuario,
        this.senha = senha,
        this.email = email
    }

    get getNomeUsuario(){
        return this.nomeUsuario;
    }
}

let clientes = [];
document.getElementById('btnSubmit').addEventListener("click", validaLogin())

const administrator = new Cliente('Admin','admin','admin@gmail.com');
clientes.push(administrator);



function validaLogin(){
    let usuario = document.getElementById('loginUsu');

    if (clientes.length>0) {
        console.log(toString(usuario.value) == clientes[0].getNomeUsuario())
    }
}