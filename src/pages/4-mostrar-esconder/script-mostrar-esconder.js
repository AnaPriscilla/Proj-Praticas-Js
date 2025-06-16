 function mostrarTexto() {
            const paragrafo = document.getElementById("texto");
            
            if (paragrafo.style.display === "none"){
                paragrafo.style.display = "block";
            } else {
                paragrafo.style.display = "none";
            }
    }

function mostrarTexto2() {
      const paragrafo = document.getElementById("texto2");

      paragrafo.classList.toggle("escondido");
    }

 /* Minhas anotações   
    É o mesmo principio do desafio anterior que fiz da cor de background,
    aqui uso uma condicional. Porém, a diferença é no uso do style.diplay,
    pois lá no css utilizo a propriedade display: none para vir como padrão vazio 
    e aqui como condição é none e ao clicar mostrar (block) e ao clinar novamente none.

    No primeiro clique não aparece, somente no segundo e dali em diante fica normal, vou entender como ajustar.

    ----------------
    Aprendi a usar .classList.toggle("nome-da-classe"), que adiciona a classe se ela não estiver lá, ou remove se já estiver
    e descobri que é muito usada com bibliotecas como React, Vue, e outras. 
 */