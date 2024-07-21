const form = document.getElementById('form')

function validaNome(nomeTodo){
    const nomeComoArray = nomeTodo.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const nomeCompleto = document.getElementById('nomeCompleto');
    if (!validaNome(nomeCompleto.value)) {
        alert('Preencha o nome completo')
    } else{
        alert('Mensagem enviada com sucesso.')
        location.reload(true)
    }
})