function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours() // Pega a hora atual
    msg.innerHTML = ` Agora são ${hora} horas. `;
    if(hora >=  0 && hora < 12){
        //Bom dia!
        img.src = "./img/fotomanha.png"
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){
        // Boa tarde!
        img.src = './img/fototarde.png'
        document.body.style.background = '#b9846f'
    }else {
        // Boa noite!
        img.src = './img/fotonoite.png'
        document.body.style.background = '#515154'

    }

}
