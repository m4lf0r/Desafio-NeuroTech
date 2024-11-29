const funcionario = {
    id: 789426,
    nome: "Bruna Cardoso Silva Soares",
    email: "bruna.cardoso@portodigital.com",
    contato: "(81) 98947-8531",
    foto: "imagem/image.png",
    tecnicas: "",
    certificacoes: "",
    experiencia: "",
    linkedin: ""
  };
  
  document.getElementById("fotoFuncionario").src = funcionario.foto;
  document.getElementById("idFuncionario").textContent = funcionario.id;
  document.getElementById("nomeFuncionario").textContent = funcionario.nome;
  document.getElementById("emailFuncionario").textContent = funcionario.email;
  document.getElementById("contatoFuncionario").textContent = funcionario.contato;
  document.getElementById("tecnicasFuncionario").textContent = funcionario.tecnicas;
  document.getElementById("certificacoesFuncionario").textContent = funcionario.certificacoes;
  document.getElementById("experienciaFuncionario").textContent = funcionario.experiencia;
  document.getElementById("linkedinFuncionario").textContent = funcionario.linkedin;
  document.getElementById("linkedinFuncionario").href = funcionario.linkedin;