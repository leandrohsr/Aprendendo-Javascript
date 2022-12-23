function horas(){
    var moment = document.getElementById("hora")
    var horas = new Date()
    var hour = horas.getHours()
    if(hour < 12){
        moment.innerHTML = `Bom dia! Agora são ${hour} horas.`
    }else if(hour >= 12 && hour < 18){
        moment.innerHTML = `Boa tarde! Agora são ${hour} horas.`
    }else if(hour >= 18 && hour <= 0){
        moment.innerHTML = `Boa noite! Agora são ${hour} horas.`
    }else{
        moment.innerHTML = 'Hora inválida.'
    }
}