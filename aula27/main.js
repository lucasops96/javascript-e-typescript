//Operador ternário
const pontuacaoUsuario = 2000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario =  null;
const corPadrão = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrão)