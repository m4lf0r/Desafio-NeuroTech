const API_URL = "http://localhost:8080/employee";

        document.getElementById('cadastroForm').addEventListener('submit', async (event) => {
            event.preventDefault(); // Previne o envio padrão do formulário

            const dados = {
                name: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('contato').value,
                competence: document.getElementById('competencias').value,
                certification: document.getElementById('certificacoes').value,
                experienceTime: document.getElementById('experiencia').value,
                linkedinUrl: document.getElementById('linkedin').value,
            };

            try {
                await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(dados)
                });
                alert("Funcionário cadastrado com sucesso!");
                document.getElementById('cadastroForm').reset(); // Limpa o formulário
            } catch (error) {
                console.error("Erro ao cadastrar funcionário:", error);
                alert("Erro ao cadastrar funcionário.");
            }
        });