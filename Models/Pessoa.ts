
//Criando uma Classe e Aplicando Niveis de Acessibilidade

import { User } from "../_4Classes";

export class Pessoa {
    private fisrtName: string = "";
    private lastName: string = "";
    private email:string = "";
    private age: number;


    //Criando Construtor
    constructor(firstName: string, lastName: string, email: string, age:number){
        this.fisrtName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }

}

//Instanciando um Obejto a partir da Classe Pessoa
let pessoa1 = new Pessoa("Erivaldo", "de Jesus", "rivaldo18@gmail.com", 36);

console.log(pessoa1);