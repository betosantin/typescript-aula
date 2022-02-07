function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: "Roberto",
    sobreNome: "Santin",

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobreNome);
    }
};

semRetorno(pessoa.nome, pessoa.sobreNome);

pessoa.exibirNome();

export { pessoa };