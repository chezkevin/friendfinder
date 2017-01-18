var friends=[{
	name:"Ahmed",
	photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	scores:[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
},{
	name:"Scotty",
	photo:"scottypic",
	scores:[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
},{
	name:"Alan",
	photo:"alanpic",
	scores:[3, 2, 5, 4, 5, 1, 2, 5, 4, 1]
}]

bestMatch = function(index){
	var totalDifference=100;
	console.log("friends.length: " + friends.length);
	for (var i = 0; i < friends.length ; i++){
		var newDifference = 0;
		if (i != index){
			for (var j = 0; j < 10; j++){
				newDifference += Math.abs(friends[i].scores[j] - friends[index].scores[j]);
			}
			if (newDifference < totalDifference){
				totalDifference = newDifference;
				matchindex = i;
			}
		}
	}
	return matchindex;
}

bestMatch(1);