var txt = "";
var items = 
	{
		name: 'Pawel',
		surname: 'Klasa'
	};


var handlers = {
	action: function() {
  document.getElementById("field").innerHTML = items;
	},
	print: function() {
		for (var x in items){
    document.getElementById("field").innerHTML = txt += items[x];
		}; 
	 }
};