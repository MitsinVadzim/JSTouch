function addWeight(){
	var weight = document.getElementById('field');
	var list = document.getElementById('list');
	element = list.getElementsByTagName("div")[0].cloneNode(false);
	element.appendChild(document.createTextNode(weight.value));
	element.setAttribute("onclick", "setLeftSide(this)");
	element.setAttribute("oncontextmenu", "setRightSide(this)");
	list.appendChild(element);
}

function setLeftSide(element){
	leftSide = document.getElementById('leftSide');
	secondElement = leftSide.getElementsByTagName("div")[0].cloneNode(false);
	secondElement.setAttribute("onclick", "toBringBack(this)");
	secondElement.innerHTML= element.textContent;
	leftSide.appendChild(secondElement);
	element.parentNode.removeChild(element);
	countWeight();
}

function setRightSide(element){
	leftSide = document.getElementById('rightSide');
	secondElement = leftSide.getElementsByTagName("div")[0].cloneNode(false);
	secondElement.setAttribute("onclick", "toBringBack(this)");
	secondElement.innerHTML= element.textContent;
	leftSide.appendChild(secondElement);
	element.parentNode.removeChild(element);
	countWeight();
}

function toBringBack(removeElement){
	list = document.getElementById('list');
	secondElement = list.getElementsByTagName("div")[0].cloneNode(false);
	secondElement.setAttribute("onclick", "setLeftSide(this)");
	secondElement.setAttribute("oncontextmenu", "setRightSide(this)");
	secondElement.innerHTML= removeElement.textContent;
	list.appendChild(secondElement);
	removeElement.parentNode.removeChild(removeElement);
	countWeight();
}

function countWeight(){
	var leftWeight= document.getElementsByClassName("leftWeight");
	var rightWeight = document.getElementsByClassName("rightWeight");
	var result = document.getElementById("result");
	var sumLeft = 0;
	var sumRight = 0;
	if(leftWeight.length === 1 || rightWeight.length === 1){
		result.innerHTML = "";
	}else{
		for (var i = leftWeight.length - 1; i >= 0; i--) {
			sumLeft = +sumLeft + +leftWeight[i].textContent;
		}
		for (var j = rightWeight.length - 1; j >= 0; j--) {
			sumRight = +sumRight + +rightWeight[j].textContent;
		}
		if(sumLeft == sumRight){
			result.innerHTML = "Штанга готова";
		}else{
			result.innerHTML = "";
		}
	}
}