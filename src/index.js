
document.getElementById("btncode").addEventListener("click", () => {
     let encryptText = (document.getElementById("fraseInicial").value).toUpperCase();
     let offset = document.getElementById("key").value;
     offset = parseInt(offset);
     document.getElementById("descifrado").innerHTML = (cipher.encode(encryptText, offset));
 
 })
 
 
 
 
 document.getElementById("btnuncode").addEventListener("click", () => {
 
     let encryptText = (document.getElementById("fraseInicial").value).toUpperCase();
     let offset = document.getElementById("key").value;
     offset = parseInt(offset);
     document.getElementById("descifrado").innerHTML = cipher.decode(encryptText, offset);
 
 })
