
                                                            /* CRIANDO FUNCÇÕES EM TYPESCRIPT */


/* Como criar uma função?  SOMAR*/
export function somar(a:number, b:number): number {
    return  a + b;
}
console.log(somar(5,10));


/* Como criar uma função pra dar DESCONTO? */
export function addOptionalTax(c:number, d:number, tax:number = 0.5): number{

    return (c + d) - tax;
}

console.log(addOptionalTax(25,25, 5));
