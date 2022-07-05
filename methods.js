function replace(){
    var nome = `José Ângelo Stefânio Antônio   `;
    console.log(`Nome original: ${nome}`);
    console.log(`Removendo espaços no final da linha: ${nome.trim()}`);

    // conta a quantidade de caracteres
    console.log(nome.length)
    console.log(nome.trim().length)

    // Converte tudo em minúscula
    console.log(nome.trim().toLowerCase())

    // Converte tudo em maiuscula
    console.log(nome.trim().toUpperCase())

    // Replace -> procurar na string strings a serem procuradas e substituir por outra coisa(SÓ A PRIMEIRA STRING)
    console.log(nome.trim().replace(`o`, `W`))

    // ReplaceAll -> procura TODAS as strings pra substituir. 
    console.log(nome.trim().replaceAll(`o`, `W`).replaceAll(`ô`, `W`))

    // IndexOf -> diz em qual indice da string está o primeiro caractere de uma string procurada
    console.log(nome.indexOf(`elo`)) 
}
replace();