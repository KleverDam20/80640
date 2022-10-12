function leer(){
    return document.getElementById("todo").value
}

function agregar(){
    nodo = document.createElement("li")
    //texto = document.createTextNode("Hola")
    texto = document.createTextNode(leer())
    console.log(texto)
    nodo.appendChild(texto)
    nodo.setAttribute("id",leer())
    document.getElementById("lista").appendChild(nodo)
}

function buscar(){
    //busca por id
    ListaTodo = document.getElementsByTagName("li")

    if (document.getElementById(leer())==null) {
           console.log("no existe")
    }
    else{
        alert("Ya existe we")
    }    
}