type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number }

type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
    //teste: 'Teste', Não pode informar nada diferente do que foi definido no TYPE
    nome: 'Met',
    sobrenome: 'Sobre',
    idade: 30,
};

console.log(pessoa);

type AB = 'A' | 'B'
type AC = 'A' | 'C'
type AD = 'A' | 'D'
type Interseccao = AB & AC & AD; //A interseção dos 3 conjuntos é 'A'

export { pessoa };