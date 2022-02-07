//Array<T> - T[]
export function multiplicarArgs(...args: Array<number>){
    return args.reduce((ac, valor) => ac * valor, 1);
}

console.log(multiplicarArgs(1, 2, 3));

const result = multiplicarArgs(1, 2, 3);

console.log(result);

export function concatenaString(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase());
}

console.log(concatenaString('a', 'b', 'c'));
console.log(toUpperCase('a', 'b', 'c'));