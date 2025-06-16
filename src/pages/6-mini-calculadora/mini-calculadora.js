
function somarNumeros() {
        const num1 = document.getElementById("numero1").value;
        const num2 = document.getElementById("numero2").value;
        const mensagem = document.getElementById("resultado");

        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) {
                mensagem.textContent = "Digite números válidos.";
                mensagem.className = "erro";
        } else {
                const somar = n1 + n2;
                mensagem.textContent = `Resultado: ${somar}`;
                mensagem.className = "resultado";
        }
}


 /* Minhas anotações   
 Pratiquei:

 */