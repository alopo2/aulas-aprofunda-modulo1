const nome = "Angela"; 
const idade = 40; 
const admin = false;

const alunas = ["Juliana", "Roberta", "Lais"];

const modulos = {
    primeiraSemana: {
        nome: "Introdução ao JavaScript",
        aulas: ["Aula 1", "Aula 2", "Aula 3"]
    },
    segundaSemana: {
        nome: "JavaScript Avançado",
        aulas: ["Aula 4", "Aula 5", "Aula 6"]
    }
}

let valorNulo = null;
let valorIndefinido;


const temperatura = 5;

if (temperatura > 30) {
    console.log("Está quente! "); 
} else if(temperatura >= 15 && temperatura <= 30) {
    console.log("Está agradável! ");
} else if (temperatura < 15) {
    console.log("Está frio! ");
}

for (let iterador = 0; iterador < 5; iterador++) {
    console.log("Iteração número: " + iterador);
}