document.getElementById("filtro").setAttribute('value', localStorage.getItem('filtro') || " ");/*getitem pego o valor e o setitem =seto*/
function preencher(value) {
    localStorage.setItem('filtro', value);

}





fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => {
        if (response.status === 200) { /*o site ta funcionando */
            console.log("SUCESSO");
            return response.json();
        }
        else {
            console.log("ERRO");
        }
    })
    .then(pokemons => {
        console.log(pokemons);/*pokemons=resultado api*/
        // document.getElementById("pokelist").innerHTML = JSON.stringify(pokemons); /*exibe na tela pelo id*/ 
        localStorage.setItem('pokebolinha', JSON.stringify(pokemons.results));
        pokemons.results.map(pokemon => { /*pokemons.results =resultado da lista*/
            const elemento = document.createElement("li");
            elemento.innerText = pokemon.name;
            document.getElementById("pokelist").appendChild(elemento);

        })
    })
    .catch(erro => {

        JSON.parse(localStorage.getItem('pokebolinha')).map(pokemon => { /*pokemons.results =resultado da lista*/
            const elemento = document.createElement("li");
            elemento.innerText = pokemon.name;
            document.getElementById("pokelist").appendChild(elemento);
                /*seta depois de salvo com a internet*/
        })
        console.log(localStorage.getItem('pokebolinha'));
    })







