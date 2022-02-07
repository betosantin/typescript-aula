const body = document.querySelector('body');

// mais aconselhavél realizar o teste
if (body) {
    body.style.background = 'red';
}

// non-null assertion - Não recomendável
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// type-assertion - Usar caso tenha certeza que existe o retorno
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';