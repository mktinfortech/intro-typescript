"use strict";
exports.__esModule = true;
exports.User = void 0;
//Craiando uma Classe USER
var User = /** @class */ (function () {
    //Criando um Construtor
    function User(firstName, lastName, age) {
        this.firstName = "";
        this.lastName = "";
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    //Pegando o nome completo do USER por meio de um METDODO
    User.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return User;
}());
exports.User = User;
;
//Instanciando*CriandoObjetos da Classe USER
var user1 = new User("Erivaldo", "de Jesus", 36);
console.log(user1.getFullName());
