// Definindo as credenciais do usuário cadastrado
const usuarioCadastrado = {
    nomeUser: 'admin',
    senha: '1234'
  };
  
  // Função que valida o login
  function validarLogin(nomeUser, senha) {
    if (nomeUser === usuarioCadastrado.nomeUser && senha === usuarioCadastrado.senha) {
      return true;
    } else {
      return false;
    }
  }
  
  // Solicitando as credenciais ao usuário
  const nomeUser = prompt("Digite o nome de usuário:");
  const senha = prompt("Digite a senha:");
  
  // Verificando as credenciais e exibindo a mensagem de resultado
  if (validarLogin(nomeUser, senha)) {
    console.log("Login realizado com sucesso!");
  } else {
    console.log("Falha de autenticação. Nome de usuário ou senha inválidos.");
  }
  