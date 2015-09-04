var player = {
	name: "ninja",
	hits: 0,
	health: 100,
};

player.name = prompt("Enter your name");
if (player.name == null || player.name == '')
	player.name = "ninja";

naming(player.name);
updatePanel(player.health, player.hits);

function slap() {
	showHide('showSlap');
	player.hits++;
	updateHealth(player, -1);
	updatePanel(player.health, player.hits);
}

function punch() {
	showHide('showPunch');
	player.hits++;
	updateHealth(player, -5);
	updatePanel(player.health, player.hits);
}

function kick() {
	showHide('showKick');
	player.hits++;
	updateHealth(player, -10);
	updatePanel(player.health, player.hits);
}

function potion() {
	updateHealth(player, 100);
	updatePanel(player.health, player.hits);
}

function reset() {
	updateHealth(player, 100);
	player.hits = 0;
	updatePanel(player.health, player.hits);

}

function updateHits(player, hitNum) {
	if (player.hits < 0)
		player.hits = 0;
}

function updateHealth(player, damage) {
	player.health = player.health + damage;
	if (player.health < 0)
		player.health = 0;
	if (player.health > 100)
		player.health = 100;
}

function naming(playerName) {
	document.getElementById('playerName').innerHTML = "name: " + player.name;
}

function updatePanel(health, hits) {
	document.getElementById('hits').innerHTML = "hits: " + hits;
	var progressBar = document.querySelector('.progress-bar');
	progressBar.innerHTML = health;
	progressBar.style.width = health + "%";
}

function showHide(id) {
	document.getElementById(id).classList.remove("hide");
	
	var hide = function () {
		document.getElementById(id).classList.add("hide");
	}

	setTimeout(hide, 500)

}