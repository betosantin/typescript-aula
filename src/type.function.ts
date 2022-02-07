export function mapString(array: string[], callbackfn: CallableFunction): string[] {
    const newArray: string[] = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(callbackfn(array[i]));
    }

    return newArray;
}

const abc = ['a', 'b', 'c'];

const abcMap = mapString(abc, function (item: string) {
    return item.toUpperCase();
})

console.log(abcMap);