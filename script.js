function carregar(){
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${horas}:${minutos}`
    if (horas >= 5 && horas <= 12 ){
        img.src = "https://img.freepik.com/fotos-premium/cafe-e-sanduiche-de-manha-na-vista-para-a-montanha_34237-226.jpg"
        document.body.style.background = '#e2cd9f'
    } else if (horas > 12 && horas <= 18){
        img.src = "https://media-cdn.tripadvisor.com/media/photo-s/0f/34/3b/10/fim-de-tarde.jpg"
        document.body.style.background = '#b9846f'
    } else {
        img.src = "https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        document.body.style.background = '#515154'
    }
}