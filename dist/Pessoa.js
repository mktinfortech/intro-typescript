"use strict";
//Criando uma Classe e Aplicando Niveis de Acessibilidade
exports.__esModule = true;
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    //Criando Construtor
    function Pessoa(firstName, lastName, email, age) {
        this.fisrtName = "";
        this.lastName = "";
        this.email = "";
        this.fisrtName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    return Pessoa;
}());
exports.Pessoa = Pessoa;
//Instanciando um Obejto a partir da Classe Pessoa
var pessoa1 = new Pessoa("Erivaldo", "de Jesus", "rivaldo18@gmail.com", 36);
console.log(pessoa1);
