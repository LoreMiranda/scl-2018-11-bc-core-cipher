window.cipher = {
  encode: (fraseInicial, key) => {
      let texto = "";
      for (let i = 0; i < fraseInicial.length; i++) {
          let sdoTexto = fraseInicial.charCodeAt(i);
          if (sdoTexto >= 65 && sdoTexto <= 90) {
              let code = (sdoTexto - 65 + key) % 26 + 65;
              texto += String.fromCharCode(code);
          } else {
              texto += String.fromCharCode(sdoTexto);
          }
      }
      return texto;
  },
  decode: (fraseInicial, key) => {
      let texto = "";
      for (let i = 0; i < fraseInicial.length; i++) {
          let sdoTexto = fraseInicial.charCodeAt(i);
          if (sdoTexto >= 65 && sdoTexto <= 90) {
              let code = (sdoTexto + 65 - key) % 26 + 65;
              texto += String.fromCharCode(code);
          } else {
              texto += String.fromCharCode(sdoTexto);
          }
      }
      return texto;
  }
};