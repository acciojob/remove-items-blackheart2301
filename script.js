//your JS code here. If required.
function remove(){
    const drop = document.querySelector('#colorSelect');
    drop.remove(drop.selectedIndex);
}

/*"OR"
function remove(){
	$("#colorSelect option[value=""]").remove();
}*/
