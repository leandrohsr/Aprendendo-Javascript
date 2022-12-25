function verificar(){
    var ano = document.getElementById('ano')
    var resultado = document.getElementById('res')
    var data = new Date()
    var y = data.getFullYear()
    if(ano.value.length == 0 || ano.value > y){
        window.alert("[Erro] Verifique os dados indicados.")
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = y - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')//É a criação de uma tag de imagem pelo javascript.
        img.setAttribute('id', 'foto')//Aqui está colocando o id da tag criada acima.
        if (sexo[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menino.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'homem.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }
        } else if (sexo[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menina.png')
            }else if(idade < 18){
                img.setAttribute('src', 'jovem-f.png')
            }else if(idade < 60){
                img.setAttribute('src', 'mulher.png')
            }else{
                img.setAttribute('src', 'idosa.png')
            }
        }
        resultado.innerHTML = `Você é um ${genero} com ${idade} anos de idade.`
        resultado.appendChild(img)//Aqui joga a imagem para o HTML.
    }
  
}