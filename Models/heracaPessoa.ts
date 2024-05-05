//Como trabalhamos com Herença no Typescript??


//1º Criar uma Classe qq com seu Atrinutos
export class Pessoa {

//2º Aplica os niveis de Acessibilidade
    private firstName: string = "";
    private lastName: string = "";
    private email: string = "";
    private age: number;

    //3ºCria um Constrututor
    constructor(firstName: string, lastName: string, email: string, age: number){

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
}

//4ºFora do scopo dessa classe INSTANCIAMOS um objeto a partir da classe criado acima
let pessoa1 = new Pessoa("Julia", "Santos", "juju@yokut.com", 27)

//5º Jogamos no console do CMD td que esta contido no nosso construtor
console.log(pessoa1);

        /* Como criamos um novo objeto, herdando os msms atributos de uma classe ja criada??*/

//1º Criamos uma outra Classe especificando a palavra EXTENDS 
export class Admin extends Pessoa{
  
}

//2º Criamos um Obejto do tipo de Admin
let admin = new Admin("Carlos", "Paiva", "papa@gmail.com", 29)

//3º Jogamos no console do CMD td que esta contido no nosso construtor
console.log(admin);
