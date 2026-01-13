function digitar(valor) {
  const visor = document.getElementById('input');
  // Adiciona o novo valor ao que já existe no visor
  visor.value = visor.value + valor;
}

function limpar() {
  // Limpa o visor deixando-o vazio
  document.getElementById('input').value = "";
}

function igual() {
  const visor = document.getElementById('input');
  try {
    // eval resolve a expressão matemática escrita no texto
    visor.value = eval(visor.value);
  } catch (e) {
    // Se a conta for impossível (tipo 5++2), mostra Erro
    visor.value = "Erro";
  }
}