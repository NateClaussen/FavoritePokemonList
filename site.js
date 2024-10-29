const pokeTable = document.createElement("table");

class Pokemon {
	constructor(name, type, weight, height, nickname, description) {
		this.name = name;
		this.type = type;
		this.weight = weight;
		this.height = height;
		this.nickname = nickname;
		this.description = description;
		this.image = getPicture(type);
	}
}

document.getElementById("seedButton").onclick = seedData;
function seedData() {
	addRow(
		new Pokemon(
			"Beedrill",
			"bug",
			65,
			"3'3",
			"Poison Bee Pokemon",
			"Flies at high speed and attacks using the large, venomous stingers on its forelegs and tail"
		)
	);
	addRow(
		new Pokemon(
			"Dark Gyrados",
			"dark",
			518.1,
			"21'04",
			"Atrocious Pokemon",
			"Rarely seen in the wild, Huge and vicious, it is capable of destroying entire cities in a rage"
		)
	);
	addRow(
		new Pokemon(
			"Garchomp",
			"dragon",
			209.4,
			"6'03",
			"Mach Pokemon",
			"It is said that when one runs at high speeds, its wings create blades of wind that can fell nearby trees"
		)
	);
	addRow(
		new Pokemon(
			"Pikachu",
			"electric",
			13.2,
			"1'04",
			"Mouse Pokemon",
			"It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs."
		)
	);
	addRow(
		new Pokemon(
			"Sylveon",
			"fairy",
			51.8,
			"3'03",
			"Intertwining Pokemon",
			"It sends a soothing aura from its ribbonlike feelers to calm fights"
		)
	);
	addRow(
		new Pokemon(
			"Arceus",
			"fighting",
			705.5,
			"10'06",
			"Alpha Pokemon",
			"It is said to have emerged from an egg in a place where there was nothing, then shaped the world"
		)
	);
	addRow(
		new Pokemon(
			"Infernape",
			"fire",
			121.3,
			"3'11",
			"Flame Pokemon",
			"It uses unique fighting moves with fire on its hands and feet. It will take on any opponent."
		)
	);
	addRow(
		new Pokemon(
			"Fearow",
			"flying",
			83.8,
			"3'11",
			"Beak Pokemon",
			"With its huge and magnificent wings, it can keep aloft without ever having to land for rest"
		)
	);
	addRow(
		new Pokemon(
			"Gengar",
			"ghost",
			89.3,
			"4'11",
			"Shadow Pokemon",
			"On the night of a full moon, if shadows move on their own and laugh, it must be Gengar's doing."
		)
	);
	addRow(
		new Pokemon(
			"Serperior",
			"grass",
			138.9,
			"10'10",
			"Regal Pokemon",
			"They raise their heads to intimidate opponents but only give it their all when fighting a powerful opponent."
		)
	);
	addRow(
		new Pokemon(
			"Gligar",
			"ground",
			143,
			"3'07",
			"Flyscorpio Pokemon",
			"It spends its days hanging from cliffs, swooping down on any prey it spots form its high vantage point"
		)
	);
	addRow(
		new Pokemon(
			"Eiscue",
			"ice",
			1962,
			"4'02",
			"Penguin Pokemon",
			"It drifted on the flow of ocean waters from a frigid place. It keeps its head iced constantly to make sure it stays nice and cold."
		)
	);
	addRow(
		new Pokemon(
			"Eevee",
			"normal",
			14.3,
			"1'00",
			"Evolution Pokemon",
			"It has the ability to alter the composition of its body to suit its surrounding environment"
		)
	);
	addRow(
		new Pokemon(
			"Toxicroak",
			"poison",
			97.9,
			"4'03",
			"Toxic Mouth Pokemon",
			"It has a poison sac at its throat. When it croaks, the stored poison is churned for greater potency."
		)
	);
	addRow(
		new Pokemon(
			"Ghastly",
			"psychic",
			0.02,
			"4'03",
			"Gas Pokemon",
			"It's sadi that gas emanating from a graveyard was possessed by the grievances of the deceased and thus became a pokemon."
		)
	);
	addRow(
		new Pokemon(
			"Onix",
			"rock",
			463.0,
			"28'10",
			"Snake Pokemon",
			"It essentially lives underground. It searches for food while burying its way through the ground at 50 miles per hour"
		)
	);
	addRow(
		new Pokemon(
			"Aggron",
			"steel",
			793.7,
			"6'11",
			"Iron Armon Pokemon",
			"While seeking iron for food, it digs tunnels by breaking through bedrock with its steel horns"
		)
	);
	addRow(
		new Pokemon(
			"Squirtle",
			"water",
			19.8,
			"1'08",
			"Tiny Turtle Pokemon",
			"It shelters itself in its shell then strikes back with spouts of water at every opportunity"
		)
	);
	window.scrollTo(0, document.body.scrollHeight);
}

window.onload = function () {
	createTable();
};

document.getElementById("addButton").onclick = function () {
	addRow(GetNewPokemon());
	window.scrollTo(0, document.body.scrollHeight);
	document.getElementById("pokeForm").reset();
};

function GetNewPokemon() {
	let pName = document.getElementById("pName").value;
	let pType = document.getElementById("pType").value;
	console.log(pType);
	let pWeight = document.getElementById("pWeight").value;
	let pHeight = document.getElementById("pHeight").value;
	let pNickName = document.getElementById("pNickName").value;
	let pDesc = document.getElementById("pDesc").value;
	return new Pokemon(pName, pType, pWeight, pHeight, pNickName, pDesc);
}

function addRow(p) {
	let tr = document.createElement("tr");
	let td = document.createElement("td");
	let image = document.createElement("img");
	image.setAttribute("src", p.image);
	td.appendChild(image);
	tr.appendChild(td);
	td = document.createElement("td");
	td.textContent = p.name;
	tr.appendChild(td);
	td = document.createElement("td");
	td.textContent = p.type;
	tr.appendChild(td);
	td = document.createElement("td");
	td.textContent = p.height;
	tr.appendChild(td);
	td = document.createElement("td");
	td.textContent = p.weight;
	tr.appendChild(td);
	td = document.createElement("td");
	td.textContent = p.nickname;
	tr.appendChild(td);
	td = document.createElement("td");
	td.textContent = p.description;
	tr.appendChild(td);
	pokeTable.appendChild(tr);
}

function createTable() {
	let PokemonDiv = document.getElementById("PokemonTable");
	let tr = document.createElement("tr");
	let th = document.createElement("th");
	tr.appendChild(th);
	th = document.createElement("th");
	th.textContent = "Name";
	tr.appendChild(th);
	th = document.createElement("th");
	th.textContent = "Type";
	tr.appendChild(th);
	th = document.createElement("th");
	th.textContent = "Height";
	tr.appendChild(th);
	th = document.createElement("th");
	th.textContent = "Weight";
	tr.appendChild(th);
	th = document.createElement("th");
	th.textContent = "Nickname";
	tr.appendChild(th);
	th = document.createElement("th");
	th.textContent = "Descriptions";
	tr.appendChild(th);
	pokeTable.append(tr);
	PokemonDiv.appendChild(pokeTable);
}

function getPicture(type) {
	switch (type) {
		case "bug":
			return "images/BugTypeLogo.png";
		case "dark":
			return "images/DarkTypeLogo.png";
		case "dragon":
			return "images/DragonTypeLogo.png";
		case "electric":
			return "images/ElectricTypeLogo.png";
		case "fairy":
			return "images/FairyTypeLogo.png";
		case "fighting":
			return "images/FightingTypeLogo.png";
		case "fire":
			return "images/FireTypeLogo.png";
		case "flying":
			return "images/FlyingTypeLogo.png";
		case "ghost":
			return "images/GhostTypeLogo.png";
		case "grass":
			return "images/GrassTypeLogo.png";
		case "ground":
			return "images/GroundTypeLogo.png";
		case "ice":
			return "images/IceTypeLogo.png";
		case "normal":
			return "images/NormalTypeLogo.png";
		case "poison":
			return "images/PoisonTypeLogo.png";
		case "psychic":
			return "images/PsychicTypeLogo.png";
		case "rock":
			return "images/RockTypeLogo.png";
		case "steel":
			return "images/SteelTypeLogo.png";
		case "water":
			return "images/WaterTypeLogo.png";
		default:
			return "";
	}
}
