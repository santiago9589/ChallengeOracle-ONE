
// obtengo lo que envia el usuario para encriptar

const inputToEncrypt = document.querySelector(".text-input"); // seleccion el input de texto
const buttonEncrypt = document.querySelector(".button-input_user"); // selecciono el boton de encriptar
const buttonDesncrypt = document.querySelector(".button-output_user"); // selecciono el boton de descriptar 
const outEncrypt = document.querySelector(".text-output"); // texto de salida de la encriptacion 
const copyButton = document.querySelector(".button-copy"); // boton de copiar text
const toChangeDisplay = document.querySelectorAll(".agg"); // cojunto de elementos a cambiar antes de escribir texto


// validador de mensaje
const validationMessage = (message) => {

    let expression = /^[a-z\sg]/ // solo letras minusculas y espacios
    if (!expression.test(message)) {
        alert("Error debe ingresar una expresion validad")
        return
    } else {
        return true
    }
}
// encriptador de mensaje
const encryptMessage = (message) => {


    let validationMessageReturn = validationMessage(message);
    let messageEncrypt = "";

    if (!validationMessageReturn) {
        alert("Error debe ingresar una expresion validad")
        return
    } else {
        for (let i = 0; i < message.length; i++) {

            switch (message[i]) {
                case "e":
                    messageEncrypt += "enter"
                    break;
                case "i":
                    messageEncrypt += "imes";
                    break;
                case "a":
                    messageEncrypt += "ai";
                    break;
                case "o":
                    messageEncrypt += "ober";
                    break;
                case "u":
                    messageEncrypt += "ufat";
                    break;
                default:
                    messageEncrypt += message[i];
                    break
            }
        }

        return messageEncrypt;


    }
}


// desencriptador de mensaje

const DsencryptMessage = (message) => {


    let validationMessageReturn = validationMessage(message);
    let messageDesncrypt = "";


    if (!validationMessageReturn) {
        alert("Error debe ingresar una expresion validad")
        return
    } else {
        for (let i = 0; i < message.length; i++) {

                if (message.includes("enter")) {

                    messageDesncrypt = message.replace(/enter/gs, "e")
                    copieM = messageDesncrypt
                } else {
                    if (message.includes("ober")) {

                        messageDesncrypt = message.replace(/ober/gs, "o")
                        message = messageDesncrypt
                    } else {
                        if (message.includes("ai")) {

                            messageDesncrypt = message.replace(/ai/gs, "a")
                            message = messageDesncrypt
                        } else {
                            if (message.includes("imes")) {

                                messageDesncrypt = message.replace(/imes/gs, "i")
                                 message = messageDesncrypt
                            } else {
                                if (message.includes("ufat")) {

                                    messageDesncrypt = message.replace(/ufat/gs, "u")
                                     message = messageDesncrypt
                                } else {
                                    messageDesncrypt = message;

                                }
                            }
                        }
                    }
                }
           
        }

        return messageDesncrypt
    }
}

// evento para leer lo que ingresa el usuario
inputToEncrypt.addEventListener("input", (e) => {
    let data = e.target.value;

    if (!data) {

        toChangeDisplay.forEach((element) => {
            element.classList.remove("missing")
            element.classList.add("add")
        })

        copyButton.classList.add("missing")

    } else {

        toChangeDisplay.forEach((element) => {
            element.classList.remove("add")
            element.classList.add("missing")
        })

        copyButton.classList.remove("missing")

    }
})

// evento al boton de encriptar
buttonEncrypt.addEventListener("click", () => {
    if (!inputToEncrypt.value) {
        return
    } else {
        if (validationMessage(inputToEncrypt.value)) {
            let dataEncrypt = encryptMessage(inputToEncrypt.value)
            outEncrypt.value = dataEncrypt;
            inputToEncrypt.value = ""
        } else {
            return
        }

    }

})

// evento al boton de desencriptar
buttonDesncrypt.addEventListener("click", () => {
    if (!inputToEncrypt.value) {
        return
    } else {
        if (validationMessage(inputToEncrypt.value)) {
            let dataDescrypt = DsencryptMessage(inputToEncrypt.value)
            outEncrypt.value = dataDescrypt;
            inputToEncrypt.value = ""
        } else {
            return;
        }

    }

})

// evento para copiar con el boton "copy"
const copyToClipBoard = () => {

    if (!outEncrypt) {
        return
    } else {
        navigator.clipboard.writeText(outEncrypt.value)
            .then(() => { alert(`Copied!`) })
            .catch((error) => { alert(`Copy failed! ${error}`) })

        outEncrypt.value = "";
    }

}

copyButton.addEventListener("click", () => copyToClipBoard())






