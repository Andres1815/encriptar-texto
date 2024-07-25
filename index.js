function encriptar() {

    let text = document.getElementById("texto").value;
  
    
    let messageTitle = document.getElementById("titulo-mensaje");
    let messageParagraph = document.getElementById("parrafo");
    let dollImage = document.getElementById("muñeco");
  
    
    let encriptar = text
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    
    if (text.length !== 0) {
      
      document.getElementById("texto").value = encriptar;
  
      
      messageTitle.textContent = "Texto encriptado con éxito";
      messageParagraph.textContent = "";
      dollImage.src = "./img/encriptado.jpg";
    } else {
      
      dollImage.src = "./img/imagenD.jpg";
      messageTitle.textContent = "Ningún texto fue encontrado";
      messageParagraph.textContent = "Ingresa el texto que deseas encriptar";
  
      
      
    }

  }

  
  function desencriptar() {
    let text = document.getElementById("texto").value;
    let titleMessage = document.getElementById("titulo-mensaje");
    let paragraph = document.getElementById("parrafo");
    let doll = document.getElementById("muñeco");
  
    let desencriptar = text
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  
    if (text.length !== 0) {
      document.getElementById("texto").value = desencriptar;
      titleMessage.textContent = "Texto desencriptado con éxito";
      paragraph.textContent = "";
      doll.src = "./img/desencriptado.jpg";
    } else {
      doll.src = "./img/sticker_25.webp";
      titleMessage.textContent = "Ningún texto fue encontrado";
      paragraph.textContent = "Ingresa el texto que deseas desencriptar";
     
    }
  }

  function copiar() {
    let textArea = document.getElementById("texto");
    textArea.select();
    document.execCommand("copy");
  
    let titleMessage = document.getElementById("titulo-mensaje");
    titleMessage.textContent = "Texto copiado con éxito";
    
  }
  
  
  

