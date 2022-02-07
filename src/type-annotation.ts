
// //Redundância de tipo
// const nome:String = 'teste'; //Qualquer tipo de string
// const idade:number = 30; // 10, 1.57, -5.55, 0xf00d....
// const adulto:boolean = true; //true ou false
// const simbolo:Symbol = Symbol('qualquer-simbol'); //symbol

const nome = 'teste'; //Qualquer tipo de string
const idade = 30; // 10, 1.57, -5.55, 0xf00d....
const adulto = true; //true ou false
const simbolo = Symbol('qualquer-simbol'); //symbol

//Arrays
const arrayNumeros: Array<number> = [1, 2, 3];
const arrayNumeros2: number[] = [1, 2, 3];
const arrayString: Array<string> = ['a', 'b'];
const arrayString2: string[] = ['a', 'b'];

//Objetos

const pessoa: { nome: string, idade: number, adulto?: boolean } = {
    nome: "Roberto Santin",
    idade: 29
}

console.log(pessoa.nome);


//Funções

function soma(x:number, y:number) : number {
    return x + y;
}

const soma2: (x: number, y:number) => number = (x, y) => x + y;