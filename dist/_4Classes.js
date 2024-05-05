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
    return User;
}());
exports.User = User;
;
var user1 = new User("Erivaldo", "de Jesus", 36);
console.log(user1);
