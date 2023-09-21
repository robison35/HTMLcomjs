const form = document.getElementById('form-confirm');


form.addEventListener('submit', function(e){

    e.preventDefault();

    const messagesucess = 'formulario enviado com sucesso! Verificando: <b> ValorA menor que ValorB!</B>';

    let ValA = parseFloat(document.getElementById('valor-a').value);

    let ValB = parseFloat(document.getElementById('valor-b').value);

    if (ValB > ValA){

        const containermessagesucess = document.querySelector('.success-message');

        containermessagesucess.innerHTML = messagesucess;

        containermessagesucess.style.display = 'block';

        document.querySelector('.error-message').style.display = 'nenhum';



        ValA = ' ';

        ValB = ' ';

    } else {

        document.querySelector('.error-message').style.display = 'block';

    }    

})