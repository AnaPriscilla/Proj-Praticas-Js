
 function alterarCor() {
        const cor = document.getElementById("cor");
        //cor.style.backgroundColor = "red";

        //Desafio extra alternar as cores
        if (cor.style.backgroundColor === "violet"){
                cor.style.backgroundColor = "turquoise";
        } else {
                cor.style.backgroundColor = "violet";
        }
}


/* Minhas anotações   
 Pratiquei:
 Usar o .style para alterar o estilo css com o js
 Alterei nesse caso o backgroundColor, mas também posso 
 alterar o tamanho da fonte (usando fontSize), a cor do texto (usando color)...
 */