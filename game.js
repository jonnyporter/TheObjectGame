var health = 100;

updatePanel(health);

function slap() {
	showHide('showSlap');
	health--;
	if (health < 0)
		health = 0;
	updatePanel(health);
}

function punch() {
	showHide('showPunch');
	health = health - 5;
	if (health < 0)
		health = 0;
	updatePanel(health);
}

function kick() {
	showHide('showKick');
	health = health - 10;
	if (health < 0)
		health = 0;
	updatePanel(health);
}

function potion() {
	health = health + 10;
	if (health > 100)
		health = 100;
	updatePanel(health);
}

function showHide(id) {
	document.getElementById(id).classList.remove("hide");
	
	var hide = function () {
		document.getElementById(id).classList.add("hide");
	}

	setTimeout(hide, 500)

}

function updatePanel(health) {
	document.querySelector('.panel-heading').innerHTML = health;
}

