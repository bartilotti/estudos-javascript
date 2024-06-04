function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()   
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#F28705'
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#594B02'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#054BA6'
    }


}