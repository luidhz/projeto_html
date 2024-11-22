function mostraAvisoUm(){
    let nome = document.getElementById('nome').value
    console.log(nome)
    if(nome.trim().length>2){
        document.getElementById('avisoUm').innerHTML=""
    }else{
        document.getElementById('avisoUm').innerHTML="Mín. de 3 caracteres"
    }
}
function mostraAvisoDois(){
    let senha = document.getElementById('senha').value
    if(senha.trim().length>2){
        document.getElementById('avisoDois').innerHTML=""
    }else{
        document.getElementById('avisoDois').innerHTML="Mín. de 3 caracteres"
    }
}
function redireciona(){
    let nome = document.getElementById('nome').value
    let senha = document.getElementById('senha').value
    if(nome.trim().length>2 && senha.trim().length>2){
        alert('login feito com sucesso!')
        location.href = 'paginaDois.html'
    }
}