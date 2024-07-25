function encriptar() {

    let text = document.getElementById("texto").value;
  
    
    let messageTitle = document.getElementById("titulo-mensaje");
    let messageParagraph = document.getElementById("parrafo");
    let dollImage = document.getElementById("muñeco");
  
    
    let encryptedText = text
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    
    if (text.length !== 0) {
      
      document.getElementById("texto").value = encryptedText;
  
      
      messageTitle.textContent = "Texto encriptado con éxito";
      messageParagraph.textContent = "";
      dollImage.src = "./img/encriptado.jpg";
    } else {
      
      dollImage.src = "./img/muñeco.png";
      messageTitle.textContent = "Ningún mensaje fue encontrado";
      messageParagraph.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
  
      
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
  }