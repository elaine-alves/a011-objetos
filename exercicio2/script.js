const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️
//a
console.log(filme.elenco[0]);
//b
//console.log(filme.elenco[3]);
// outra forma de fazer: 
console.log(filme.elenco.pop())
//c
console.log("Todas as transmissões de hoje:",filme.transmissoesHoje);
//d
console.log("Horário do filme no Canal Brasil:",filme.transmissoesHoje[1].horario);
