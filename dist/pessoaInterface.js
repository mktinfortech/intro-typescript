/* Como criarmos uma INTERFACE a partir de uma classe ja criada? */
//ºCriamos um método
var getPessoa = function (pesssoa) {
    return "".concat(pesssoa.firstName, " ").concat(pesssoa.lastName, ", age: ").concat(pesssoa.age);
};
//3ºCriamos um objeto
var pesssoa = {
    firstName: "Carlos",
    lastName: "Augusto",
    age: 30
};
//4º Chamamos no CMD as infor desejadas
console.log(getPessoa(pesssoa));
