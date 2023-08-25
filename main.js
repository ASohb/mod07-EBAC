const form = document.getElementById("numeros");

let formEValido = false;

function validaForm() {
    const campoA = document.getElementById("campoA");
    const campoB = document.getElementById("campoB");
    
    if (campoB.value > campoA.value) {
        formEValido = true;
    } else {
        formEValido = false;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    validaForm();
    
    
    const containerMensagemSucesso = document.querySelector('.MensagemDeSucesso');
    const containerMensagemErro = document.querySelector('.MensagemDeErro');
    
    if (formEValido) {
        const mensagemSucesso = `O número <b>${campoB.value}</b> é maior que o número <b>${campoA.value}</b>`;
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';

        containerMensagemErro.style.display = 'none';
    } else {
        campoA.style.border = '1px solid red';
        containerMensagemErro.style.display = 'block';
        containerMensagemErro.innerHTML = 'O segundo número deve ser maior que o primeiro número.';
        containerMensagemSucesso.style.display = 'none';
    }
 
        
});

campoA.addEventListener('keyup',function(e){
    console.log(e.target.value);
     validaForm();
    if(!formEValido){
        campoA.classList.add('error');
    //nomeBeneficiario.style.border = '1px solid red';
    document.querySelector('.MensagemDeErro').style.display='block';
   }else{
   campoA.classList.remove('error');
    document.querySelector('.MensagemDeErro').style.display='none';
   }
})


