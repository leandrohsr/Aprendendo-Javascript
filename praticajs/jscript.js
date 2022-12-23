function horaDia() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var sem = new Date()
    var hora = sem.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12){
        foto.src = 'manha.png'
    }else if(hora >= 12 && hora <= 18){
        foto.src = 'tarde.png'
        document.body.style.background = '#C8B992'
    }else{
        foto.src = 'noite.png'
        document.body.style.background = '#000D37'
    }
}