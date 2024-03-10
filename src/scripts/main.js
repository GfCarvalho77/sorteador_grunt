document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('form-sorteador').addEventListener('submit',function(evento){
        evento.preventDefault();//previne o refresh do formulário
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo=parseInt(numeroMaximo);//previne string

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio+1)


        //alert(numeroAleatorio);
        document.getElementById('resultado-valor').innerText=numeroAleatorio;
        document.querySelector('.resultado').style.display='block';

    })
})