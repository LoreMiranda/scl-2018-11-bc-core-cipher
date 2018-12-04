window.cipher = {
  encode: (fraseInicial, key) => {
    let texto="";
    for (let i=0; i< fraseInicial.length;i++){
      let sdotexto=fraseInicial.charCodeAt(i);
        if (sdotexto >=65 && sdotexto<=90){
        let code=(sdotexto-65+key)%26+65;
        texto+=String.fromCharCode(code);
      }
      
    }

    return texto;

    
  },
  decode: (fraseInicial, key) => {
    let texto="";
    for (let i=0; i< fraseInicial.length;i++){
      let sdotexto=fraseInicial.charCodeAt(i);
        if (sdotexto >=65 && sdotexto<=90){
        let code=(sdotexto-65-key)%26+65;
        if (code<65){
          code+=26;
        }
        texto+=String.fromCharCode(code);
      }
      
    }

    return texto;
  }

};
