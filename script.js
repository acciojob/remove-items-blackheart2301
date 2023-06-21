//your JS code here. If required.

const drop = document.querySelector('#colorSelect');
let output = selectElement.value;

function remove(){
     if(output=="Red" && drop.hasChildNodes()){
		 drop.removeChild(drop.children[0]);
	 }
	if(output=="Green" && drop.hasChildNodes()){ 
		 drop.removeChild(drop.children[1]);
	}
	if(output=="White" && drop.hasChildNodes()){
		 drop.removeChild(drop.children[2]);
	}	 
	if(output=="Black" && drop.hasChildNodes()){
		 drop.removeChild(drop.children[3]);
	}
}
