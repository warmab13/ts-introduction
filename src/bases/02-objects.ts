export const pokemonIds = [1,2,30,34,66];


console.log(pokemonIds);


interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur'
}

export const charmander: Pokemon = {
    id: 3,
    name: "Charmander"
}

export const pokemons: Pokemon[] = [];

pokemons.push(bulbasaur, charmander);

console.log(pokemons);
