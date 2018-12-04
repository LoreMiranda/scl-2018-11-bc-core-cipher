//window.onload = {
//declaracion de variables y arreglos vacios

/*let message;
let string = [];
let code = [];
let n;
let j;
let newCode = [];

function encodeText() //funcion que codifica el texto
{
 message = document.getElementById("fraseInicial").value; //message guarda el valor del texto ingresado por el usuario
  n = document.getElementById("key").value; //n guarda el numero que se recorre el desencriptado
  for(j = 0; j < message.length; j++){ //for que recorre el message
  	  string.push((message.charCodeAt(j))-65+n%26+65); //se convierte cada letra de message en ASCII y se hace el recorrido con la llave del usuario, asi mismo se guarda el mensaje en ASCII en un arreglo string
      code.push(String.fromCharCode(string[j])); //se convierte cada elemento ASCII de string en alfanumerico, y se guarda en code
      }
      newCode = code.join("");
      document.getElementById("cifrado").innerHTML = (newCode.toUpperCase()); //coloca el mensaje encriptado en un recuadro abajo
  
 /* console.log(string); muestra codigo ASCII
 console.log(code); muestra mensaje encriptado */
      /*string = []; //vacia la cadena
      code = []; //vacia la cadena
}
/*function decodeText() //funcion que decodifica el texto
{
  message = document.getElementById("fraseInicial").value; //message guarda el valor del texto ingresado por el usuario
  n = document.getElementById("key").value; //n guarda el numero que se recorre el desencriptado
  for(j = 0; j < message.length; j++){ //for que recorre el message
  	  string.push((message.charCodeAt(j))+65-n%26-65); //se convierte cada letra de message en ASCII y se hace el recorrido con la llave del usuario, asi mismo se guarda el mensaje en ASCII en un arreglo string
  	  code.push(String.fromCharCode(string[j])); //se convierte cada elemento ASCII de string en letras, y se guarda en code
      }
      newCode = code.join("");
      document.getElementById("descifrado").innerHTML = (newCode.toUpperCase()); //coloca el mensaje desencriptado en un recuadro abajo
 
 /* console.log(string); muestra codigo ASCII
 console.log(code); muestra mensaje desencriptado */
     /* string = []; //vacia la cadena
      code = []; //vacia la cadena
}*/



function encodeText(){
     let encryptText = document.getElementById("fraseInicial").value;
     let offset = document.getElementById("key").value;
     offset=parseInt(offset);
     document.getElementById("descifrado").innerHTML=cipher.encode(encryptText, offset);



}
function uncodeText(){

     let encryptText = document.getElementById("fraseInicial").value;
     let offset = document.getElementById("key").value;
     offset=parseInt(offset);
     document.getElementById("descifrado").innerHTML=cipher.decode(encryptText, offset);
}
