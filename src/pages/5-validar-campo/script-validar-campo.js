 function validarCampo() {
            const nome = document.getElementById("nome").value;
            const mensagem = document.getElementById("mensagem");

            if(nome === "") {
                mensagem.textContent = "Por favor, digite seu nome no campo!";
                mensagem.className = "erro";
            } else {
                mensagem.textContent = `Olá! Seja bem-vindo(a), ${nome}!`;
                mensagem.className = "resultado";
            }
    }

 /* Minhas anotações   
 Pratiquei:
 Capturar valor de um nput, usando o input.value
 e também a verificar se o campo esta vazio através da condição if(valor === "") e a mostrar 
 mensagens diferentes utilizando o textContent
 */