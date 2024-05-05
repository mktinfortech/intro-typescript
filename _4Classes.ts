
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

    //Pegando o nome completo do USER por meio de um METDODO
    public getFullName(){
        return `${this.firstName} ${this.lastName}`
    }


};



//Instanciando*CriandoObjetos da Classe USER
let user1 = new User ("Erivaldo", "de Jesus", 36);

console.log(user1.getFullName());