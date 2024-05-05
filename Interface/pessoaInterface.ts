
/* Como criarmos uma INTERFACE a partir de uma classe ja criada? */

//1ºCriamos uma intercafe
interface pessoaInterface{
    firstName: string;
    lastName: string;
    age: number;
}


//ºCriamos um método
const getPessoa = ( pesssoa: pessoaInterface): string => {
    return `${pesssoa.firstName} ${pesssoa.lastName}, age: ${pesssoa.age}`;
}

//3ºCriamos um objeto
let pesssoa = {
    firstName: "Carlos",
    lastName: "Augusto",
    age:30
}

//4º Chamamos no CMD as infor desejadas
console.log(getPessoa(pesssoa));