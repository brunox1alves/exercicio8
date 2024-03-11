
  // Array para armazenar os números
  var numeros = [];

  // Função para solicitar números e exibir resultados
  function obterNumeros() {
    var input;

    do {
      input = prompt("Digite um número (ou algo diferente para finalizar):");

      // Verificar se o input é um número, não está em branco e não é nulo
      if (input !== null && input.trim() !== "") {
        if (!isNaN(input)) {
          numeros.push(parseFloat(input));
        } else {
          alert("Erro: Digite um número válido ou algo diferente para finalizar.");
        }
      }
    } while (input !== null && !isNaN(input) && input.trim() !== "");

    // Verificar se há números para exibir
    if (numeros.length > 0) {
      // Ordena os números em ordem crescente
      numeros.sort(function(a, b) {
        return a - b;
      });

      // Exibe os números em ordem crescente
      alert("Números em Ordem Crescente: " + numeros.join(', '));
    } else {
      alert("Nenhum número foi inserido.");
    }
  }

  // Chama a função para obter números quando a página estiver carregada
  window.onload = obterNumeros;

