class ValidaFormulario{
    constructor(){
        //selecionar o formulario
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    ///metodos 
    eventos(){
        this.formulario.addEventListener('submit', e =>{
       this.handleSubmit(e); 
        });/// e=>(evento) função de callback para não perdr o this
    }

    //criando metodo
    handleSubmit(e){
    e.preventDefault();///para que o formulario não seja enviado
    // console.log('Formulario não enviado');
    ////começar a validar os campos se estiverem em branco
    const campoValido = this.camposValidos();
    const senhaValida = this.senhasValidas();
    }


///criar novo metodo para senha
// senhasValidas(){
//     let valid = true;
//     const senha =  this.formulario.querySelectorAll('.senha');
//     const confimarSenha =  this.formulario.querySelectorAll('.confirmarSenha');

//     return valid;
// }

camposValidos() {
        let valid = true;///formulario pode ou não ser enviado 
        for(let errorText of this.formulario.querySelectorAll('.error-text')){
           errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
        ///criar uma variavel para selecionar campo e mostrar erro
        const label = campo.previousElementSibling.innerText;
        // console.log(campo);
       if(!campo.value){
           this.criaErro(campo, `campo "${label}" não pode ficar em branco. `);
           valid = false;//mudando a minha o estado variavel
           }
        //////VALIDANDO CPF 
        // if(campo.classList.contains('cpf')) {
        //     if(!this.validaCPF(campo)) valid = false;
        // ////se for dif de val false
        //     }

        //   //////VALIDADO USUARIO 
        // if (campo.classList.contains('usuario')) {
        //     if (!this.validaUsuario(campo)) valid = false;
        //     }
        }
        return valid;
        //se ele passa por tudo, da valid no final
    }
    // validaUsuario(campo){
    //     const usuario = campo.value;
    //     let valid = true;
    //     if (usuario.length < 3 || usuario.length > 12){
    //         this.criaErro(campo, 'usuario deve ter entre 3 e 12 caracteres.');
    //         valid = false;
    //     } 
    //     ////expressão regular 
        
    //     {
    //         this.criaErro(campo, 'usuario pode conter letras e/ou números');
    //         valid = false;
    //     }
    //     return valid;
    // }

    // validaCPF(campo) {
    //     const cpf = new ValidaCPF(campo.value);
    //     if(!cpf.valida()){
    //     this.criaErro(campo, 'CPF invalido.');
    //     return false;
    // }
    //     return true;
    // }

  

    //criar um metodo de erro 
    criaErro(campo, msg) {
        //qual campo o erro ocorreu?
        const div = document.createElement('div');///coloca dentro de uma div
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
        //A propriedade classList é somente leitura,
        // no entanto, você pode modificá-la usando os 
        //métodos add () e remove ().

        //qual campo o erro ocorreu?
       // afterend(depois que o campo acabar)
    }

}

const valida = new ValidaFormulario();


function message(){
    Swal.fire({
        title: "Inscrição realizada com sucesso!",
        icon: "success",
        showConfirmButton: true,
        confirmButtonText: `Fechar`,
    }).then((resp) => {
        if(resp.isConfirmed){
            // window.location.href = 'home.html';
        }
{}    })
}
