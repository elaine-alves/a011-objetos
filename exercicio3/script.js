const pokemon1 = {nome:"Bulbasaur",tipo:"Grama",nivel:5};
console.log(pokemon1);

//a
const copiaPokemon1 = {...pokemon1,nome:"Squirtle",tipo:"Água"};
console.log(copiaPokemon1);

//b
pokemon1.ataque = [];
pokemon1.ataque.push([{nome:"Investida", dano:40, tipo:"Normal", precisao:100}]);

//c
copiaPokemon1.ataque = [];
copiaPokemon1.ataque = {...pokemon1.ataque};

//d
pokemon1.ataque2 = [];
pokemon1.ataque2.push([{nome:"Folha Navalha", dano:45, tipo:"Grama", precisao:100}]);

//e
copiaPokemon1.ataque2 = [];
copiaPokemon1.ataque2.push([{...pokemon1.ataque2,nome:"Jato de Água", dano:40, tipo:"Água", precisao:100}]);

