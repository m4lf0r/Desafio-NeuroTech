        const API_URL = "http://localhost:8080/employee";
        
        // Função para carregar dados na tabela
        async function carregarFuncionarios() {
            const resposta = await fetch(API_URL);
            const funcionarios = await resposta.json();

            const tabela = document.querySelector("tbody");
            tabela.innerHTML = ""; // Limpa a tabela

            funcionarios.forEach(funcionario => {
                const linha = `
                    <tr>
                        <td>${funcionario.id}</td>
                        <td>${funcionario.name}</td>
                        <td>${funcionario.email}</td>
                        <td>${funcionario.phone}</td>
                        <td>
                            <button onclick="removerFuncionario(${funcionario.id})" class="action-btn">Remover</button>
                            <button onclick="editarFuncionario(${funcionario.id})" class="edit-btn">Editar</button>
                            <button onclick="visualizarFuncionario(${funcionario.id})" class="view-btn">Visualizar</button>
                        </td>
                    </tr>
                `;
                tabela.innerHTML += linha;
            });
        }

        // Função para remover um funcionário
        async function removerFuncionario(id) {
            const resposta = await fetch(`${API_URL}/${id}`, {
                method: "DELETE"
            });

            if (resposta.ok) {
                alert("Funcionário removido com sucesso!");
                carregarFuncionarios(); // Recarrega a lista de funcionários
            } else {
                alert("Erro ao remover o funcionário.");
            }
        }

        // Função para abrir o modal de edição
        async function editarFuncionario(id) {
            const resposta = await fetch(`${API_URL}/${id}`);
            const funcionario = await resposta.json();

            // Preenche o formulário com os dados do funcionário
            document.getElementById("funcionario-id").value = funcionario.id;
            document.getElementById("name").value = funcionario.name;
            document.getElementById("email").value = funcionario.email;
            document.getElementById("phone").value = funcionario.phone;
            document.getElementById("competence").value = funcionario.competence;
            document.getElementById("certification").value = funcionario.certification;
            document.getElementById("experienceTime").value = funcionario.experienceTime;
            document.getElementById("linkedinUrl").value = funcionario.linkedinUrl;

            // Exibe o modal de edição
            abrirModal('editar-modal');
        }

        // Função para abrir o modal de visualização
        async function visualizarFuncionario(id) {
            const resposta = await fetch(`${API_URL}/${id}`);
            const funcionario = await resposta.json();

            // Preenche os dados do modal de visualização
            document.getElementById("visualizar-name").innerText = funcionario.name;
            document.getElementById("visualizar-email").innerText = funcionario.email;
            document.getElementById("visualizar-phone").innerText = funcionario.phone;
            document.getElementById("visualizar-competence").innerText = funcionario.competence;
            document.getElementById("visualizar-certification").innerText = funcionario.certification;
            document.getElementById("visualizar-experienceTime").innerText = funcionario.experienceTime;
            document.getElementById("visualizar-linkedinUrl").innerText = funcionario.linkedinUrl;

            // Exibe o modal de visualização
            abrirModal('visualizar-modal');
        }

        // Função para abrir o modal
        function abrirModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        }

        // Função para fechar os modais
        function fecharModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.style.display = "none";
        }

        // Fecha o modal ao clicar fora dele
        window.onclick = function(event) {
            const modalEditar = document.getElementById("editar-modal");
            const modalVisualizar = document.getElementById("visualizar-modal");
            if (event.target === modalEditar) {
                fecharModal('editar-modal');
            }
            if (event.target === modalVisualizar) {
                fecharModal('visualizar-modal');
            }
        }

        // Função para salvar as alterações no formulário de edição
        document.getElementById("modal-form").addEventListener("submit", async (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            const id = document.getElementById("funcionario-id").value;
            const updatedFuncionario = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                competence: document.getElementById("competence").value,
                certification: document.getElementById("certification").value,
                experienceTime: document.getElementById("experienceTime").value,
                linkedinUrl: document.getElementById("linkedinUrl").value
            };

            const resposta = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedFuncionario)
            });

            if (resposta.ok) {
                alert("Funcionário atualizado com sucesso!");
                fecharModal('editar-modal'); // Fecha o modal de edição
                carregarFuncionarios(); // Recarrega os dados da tabela
            } else {
                alert("Erro ao atualizar o funcionário.");
            }
        });

        // Carregar os dados ao abrir a página
        carregarFuncionarios();