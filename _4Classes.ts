
//Craiando uma Classe USER
export class User {
    firstName:string= "";
    lastName:string = "";
    age:number;

    //Criando um Construtor
    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }
};



//Instanciando*CriandoObjetos da Classe USER
let user1 = new User ("Erivaldo", "de Jesus", 36);




console.log(user1);