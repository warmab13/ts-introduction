export const name = 'Alonso';
console.log("🚀 ~ file: 01-types.ts:2 ~ name", name)

export const age: number = 35;
export const isValid: boolean = true;

export const templateString = `Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores /$ ${name}
expresiones ${ 1 + 1 }
numeros ${ age }
booleanos: ${isValid}`;

console.log(templateString)