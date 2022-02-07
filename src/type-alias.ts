type Idade = number;
type Pessoa = {
    nome: string,
    idade: Idade, 
    salario: number;
    corPreferida?: string;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magente' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
    nome: 'Roberto',
    idade: 30,
    salario: 5000
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
    return {...pessoa, corPreferida: cor};
}

console.log(setCorPreferida(pessoa, 'Azul'));

export default 1;