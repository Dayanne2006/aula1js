/*Variáveis e Tipos de Dados*/


let nome = "Dayanne";
console.log(nome);

let idade = 18;
let altura = 1.70;
console.log("Tenho " + idade + " anos e " + altura + " metros de altura.");


let estudando = true;

if (estudando) {
  console.log("Estou estudando JavaScript!");
} else {
  console.log("Não estou estudando no momento.");
}


/*Operadores*/
    console.log("A soma de 5 + 3 ->");
    console.log(5 + 3);

    console.log("O resto da divisao de 3/3 ->");
    console.log(3/3);

    let userAge = prompt ("Quantos anos você tem?");
    userAge = Number (userAge);
    if (userAge >=18){
      console.log("Você é maior de idade!");
    } else {
       console.log ("Você é menor de idade!");
    }


    /*Condições*/ 
     userAge =  Number(prompt("Digite um números"));

    if (userAge %2 == 0){
      console.log("O número é par.");
    } 
    else {
       console.log ("O número é ímpar.");
    }

    let idadeUsuario = Number(prompt("Digite sua idade:"));
    if (idadeUsuario >= 18) {
      console.log ("Você pode dirigir.");
    } else {
     console.log ("Você não pode dirigir.");
   
    }
     let nota = Number(prompt("Digite sua nota (0 a 10):"));
     if (nota < 5) {
      console.log("Reprovado!");
     } else if (nota >= 5 && nota < 7) {
      console.log("Recuperação!");
     }
     else if (nota >= 7 && nota <= 10) {
      console.log("Aprovado!");
     }
      


     /*Laços de Repetição*/
       for (let x = 1; x <= 10; x++) {
        console.log(x);
       }

        let numeroM = parseInt(prompt("Digite um número para ver a tabuada:"));
       for (let i = 1; i <= 10; i++) {
       console.log(numeroM + " x " + i + " = " + (numeroM * i));
       }
           
       let senha  = prompt("Digite a senha:");
        while (senha !== "1234") {
       alert("Senha incorreta! Tente novamente.");
       senha = prompt("Digite a senha:");
        }
        alert("Acesso permitido!");
      


        /*Funções */
        function soma(num1, num2) {  // sem ;
        return num1 + num2;
             }
        let resultado = soma(8, 5);
       console.log("A soma é: " + resultado);



        function saudacao(nome) { 
         return "Olá, " + nome + "! ";
           }
        console.log(saudacao("Dayanne"));

        function calculoMedia (num1, num2, num3) {
         return (num1 + num2 + num3) / 3;
         }
        console.log(calculoMedia(7, 8, 9));


        /*Arrays */
        let nomes = ["Dayanne", "Kalen", "Lelezinha", "Amandinha", "Natalia"];
        console.log("Primeiro nome:", nomes[0]);
        console.log("Último nome:", nomes[nomes.length - 1]);
       
        nomes.push("Fernanda");
        console.log("lista de nomes atualizada:", nome);
        for (let j = 0; j < nomes.length; j++) {
        console.log(`nome ${j + 1}: ${nomes[j]}`);
        }

        /* Objetos */
       let carro = {
       marca: "Toyota",
       modelo: "Corolla",
       ano: 2022
       };

       console.log(carro);
       console.log(`O carro é um ${carro.marca} ${carro.modelo}, ano ${carro.ano}.`);

      let aluno = {
      nome: "Dayanne",
      idade: 18,
     notas: [8, 9, 7]
     };

     let media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3;

     console.log("Nome:", aluno.nome);
     console.log("Média:", media);
       


     let produtos = [
      { nome: "Victoria's Secret Bare Vanilla", preco: 131 },
      { nome: "Rush Victorias Secret", preco: 185 },
      { nome: "Victorias Secret Coconut Passion Shimmera", preco: 161 },
      ];



      for (let i = 0; i < produtos.length; i++) {
      console.log("Nome:", produtos[i].nome);
      console.log("Preço R$:", produtos[i].preco);
      console.log("----------------------");
     }
  

     /*Eventos DOM */
     let botao = document.getElementById("botaoCor");

botao.addEventListener("click", function() {
  if (document.body.classList.contains("black")) {
    document.body.classList.remove("black");
    document.body.classList.add("rosa");
  } else {
    document.body.classList.remove("rosa");
    document.body.classList.add("black");
  }
});









     


  


    
    

