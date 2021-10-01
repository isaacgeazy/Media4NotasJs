let n1 = parseFloat(window.prompt("Primeira nota")|| 0);
let n2 = parseFloat(window.prompt("Segunda nota") || 0) ;
let n3 = parseFloat(window.prompt("Terceira nota") || 0);
let n4 = parseFloat(window.prompt("Quarta nota") || 0);

const media = ((n1 + n2 + n3 + n4) / 4);

if (n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0 ||
    n1 > 10 || n1 > 10 || n2 > 10 || n3 > 10 ||
    n4 > 10) {
    window.alert("Aceito apenas números de 0 á 10");

} else if (media < 5) {
    window.alert(`Você ficou com média ${media}. Resultado: Reprovado`)
} else if (media >= 5 && media <= 6) {
    window.alert(`Você ficou com média ${media}. Resultado: Em recuperação`)
} else {
    window.alert(`Você ficou com média ${media}. Resultado: Aprovado`)
}