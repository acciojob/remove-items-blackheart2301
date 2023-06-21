//your JS code here. If required.
const drop= document.getElementbyId("colorSelect");

function remove(){
     if(drop.textContent=="Red"){
		 let choosen= drop.getElementbyId(first);
		 drop.removeChild('choosen');
	 }
	if(drop.textContent=="Green"){
		 let choosen= drop.getElementbyId(second);
		 drop.removeChild('choosen');
	}
	if(drop.textContent=="White"){
		let choosen= drop.getElementbyId(second);
		 drop.removeChild('choosen');
	}	 
	if(drop.textContent=="Black"){
		let choosen= drop.getElementbyId(second);
		 drop.removeChild('choosen');
	}
}
