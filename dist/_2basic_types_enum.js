/*Tipos em TypeScript
   -> String
   -> Number
   -> Boolean
   -> Enums
*/
var roles;
(function (roles) {
    roles[roles["Gerente"] = 1] = "Gerente";
    roles[roles["Supervisor"] = 2] = "Supervisor";
    roles[roles["Controller"] = 3] = "Controller";
    roles[roles["Vendedor"] = 4] = "Vendedor";
    roles[roles["Recepcionista"] = 5] = "Recepcionista";
})(roles || (roles = {}));
;
console.log(roles);
