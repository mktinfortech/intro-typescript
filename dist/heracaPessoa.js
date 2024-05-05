"use strict";
//Como trabalhamos com Herença no Typescript??
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Admin = exports.Pessoa = void 0;
//1º Criar uma Classe qq com seu Atrinutos
var Pessoa = /** @class */ (function () {
    //3ºCria um Constrututor
    function Pessoa(firstName, lastName, email, age) {
        //2º Aplica os niveis de Acessibilidade
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    return Pessoa;
}());
exports.Pessoa = Pessoa;
//4ºFora do scopo dessa classe INSTANCIAMOS um objeto a partir da classe criado acima
var pessoa1 = new Pessoa("Julia", "Santos", "juju@yokut.com", 27);
//5º Jogamos no console do CMD td que esta contido no nosso construtor
console.log(pessoa1);
/* Como criamos um novo objeto, herdando os msms atributos de uma classe ja criada??*/
//1º Criamos uma outra Classe especificando a palavra EXTENDS 
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(Pessoa));
exports.Admin = Admin;
//2º Criamos um Obejto do tipo de Admin
var admin = new Admin("Carlos", "Paiva", "papa@gmail.com", 29);
//3º Jogamos no console do CMD td que esta contido no nosso construtor
console.log(admin);
