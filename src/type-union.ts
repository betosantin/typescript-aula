function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return `${a}${b}`;
    }
}

console.log(add(10, '30'));