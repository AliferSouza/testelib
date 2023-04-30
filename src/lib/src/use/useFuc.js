export default function useFuc(...funcoes){
   var funcoes = [];
   function adicionarFuncao(f) {
      funcoes.push(f); // adiciona a função ao array
    }

    function executarFuncoes() {   
      for (var i = 0; i < funcoes.length; i++) {
        funcoes[i](); // executa a função
      }
    }

    return {
      adicionarFuncao: adicionarFuncao,
      executarFuncoes: executarFuncoes
    };

}

