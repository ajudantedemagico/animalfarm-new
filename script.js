function play(playerChoice) {
  const computerChoice = Math.random() < 0.5 ? 'cooperate' : 'betray';

  let message = `Você escolheu <strong>${traduzir(playerChoice)}</strong>. Os animais escolheram <strong>${traduzir(computerChoice)}</strong>.<br><br>`;
  let scores = getScores(playerChoice, computerChoice);

  message += `Resultado: Você recebe <strong>${scores.player}</strong> ponto(s) e os animais recebem <strong>${scores.computer}</strong>.`;

  document.getElementById('result').innerHTML = message;
}

function getScores(player, computer) {
  if (player === 'cooperate' && computer === 'cooperate') return { player: 3, computer: 3 };
  if (player === 'cooperate' && computer === 'betray') return { player: 0, computer: 5 };
  if (player === 'betray' && computer === 'cooperate') return { player: 5, computer: 0 };
  if (player === 'betray' && computer === 'betray') return { player: 1, computer: 1 };
}

function traduzir(choice) {
  return choice === 'cooperate' ? 'Cooperar' : 'Trair';
}
