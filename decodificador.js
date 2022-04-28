
 function codificador(texto){
    let textoCodificado = ""

    let newText = texto.toLowerCase()
    for(letra of newText){
        switch(letra){
            case "a":
                textoCodificado += "ai";
                break;
            case "e":
                textoCodificado += "enter";
                break;
            case "i":
                textoCodificado += "imes";
                break;
            case "o":
                textoCodificado += "ober";
                break;
            case "u":
                textoCodificado += "ufat";
                break;
            default:
                textoCodificado += letra;
                break
        }
    }
    
    return textoCodificado
}

function decodificador(texto){
    let textoDecodificado = ""
    let newText = texto.toLowerCase()

    for(let i = 0; i < newText.length; i ++){
        switch(newText[i]){
            case "a":
                if(newText.substring(i,i+2) == "ai"){
                    i++;
                }
                textoDecodificado += "a";
                break;
            case "e":
                if(newText.substring(i,i+5) == "enter"){
                    i+= 4;
                    }
                    textoDecodificado += "e";
                break;
            case "i":
                if(newText.substring(i,i+4) == "imes"){
                    i+= 3;
                    }
                    textoDecodificado += "i";
                break;
            case "o":
                if(newText.substring(i,i+4) == "ober"){
                    i+= 3;
                    }
                    textoDecodificado += "o";
                break;
            case "u":
                if(newText.substring(i,i+4) == "ufat"){
                    i+= 3;
                    }
                    textoDecodificado += "u";
                break;
            default:
                textoDecodificado += newText[i];
                break
        }
    }
    return textoDecodificado;
}