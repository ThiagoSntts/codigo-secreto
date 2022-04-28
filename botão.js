function codificador(texto){
    let textoCodificado = ""
    for(letra of texto){
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

var btnCripto = document.querySelector("#btn-cripto");

let textoCodificado = ""

btnCripto.addEventListener("click", function(a){
    a.preventDefault();

    var cripto = document.querySelector("#input-texto");

    var value = cripto.value;
    
    textoCodificado = codificador(value);

    document.getElementById("msg").value = textoCodificado
    document.getElementById("input-texto").value=""
});

function decodificador(texto){
    let textoDecodificado = ""
    for(let i = 0; i < texto.length; i ++){
        switch(texto[i]){
            case "a":
                if(texto.substring(i,i+2) == "ai"){
                    i++;
                }
                textoDecodificado += "a";
                break;
            case "e":
                if(texto.substring(i,i+5) == "enter"){
                    i+= 4;
                    }
                    textoDecodificado += "e";
                break;
            case "i":
                if(texto.substring(i,i+4) == "imes"){
                    i+= 3;
                    }
                    textoDecodificado += "i";
                break;
            case "o":
                if(texto.substring(i,i+4) == "ober"){
                    i+= 3;
                    }
                    textoDecodificado += "o";
                break;
            case "u":
                if(texto.substring(i,i+4) == "ufat"){
                    i+= 3;
                    }
                    textoDecodificado += "u";
                break;
            default:
                textoDecodificado += texto[i];
                break
        }
    }
    return textoDecodificado;
}

var botaoDescripto = document.querySelector("#btn-descripto");

let textoDecodificado = ''
botaoDescripto.addEventListener("click", function(a){
    a.preventDefault();

    var desCripto = document.querySelector("#input-texto");

    var value = desCripto.value;

    textoDecodificado =  decodificador(value)

    document.getElementById("msg").value = textoDecodificado
    document.getElementById("input-texto").value=""

});

document.getElementById("btn-copiar").addEventListener("click", function(){
    document.getElementById("msg").select();
    document.execCommand("copy");
});
