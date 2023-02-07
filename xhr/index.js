let btn = document.getElementById("btn")

const pedirData = (cb) => {
    let cartero = new XMLHttpRequest()
    //readystatechange es el evento de cambio estado de mi petición
    cartero.addEventListener("readystatechange",() => {
        //xhr.readyState es el que va del 1 a 4 indicando el estado de la petición
        // console.log(cartero.readyState)
        switch(cartero.readyState){
            case 1:
                console.log("se esta config")
                break;
            case 2:
                console.log("se esta enviando")
                break;
            case 3:
                console.log("El servidor ya recibio la petición")
                break;
            case 4:
                console.log("ya tenemos la respuesta")
                // console.log(cartero.responseText)
                console.log(cartero.status)

                cb(cartero.responseText)
                break;
            default:
                console.log("!")
        }
    })
    // .open es para configurar - estoy preparando mi carta
    cartero.open("GET", "https://reqres.in/api/users?page=2")
    //mandar la carta
    cartero.send()
}

btn.addEventListener("click",() => {
    pedirData((respuesta) => console.log(respuesta))
})