var entry = [
  {
	  name: 'Pawel',
	  surname: 'Klasa',
	  number: '07816406630',
	  addres: '111 Ebbett Court, W3 6BX'
  },
  {
	name: 'Pawel',
	surname: 'Klasa',
	number: '07816406630',
	addres: '111 Ebbett Court, W3 6BX'
  },
  {
	  name: 'Jan',
	  surname: 'Klasa',
	  number: '0449598212476',
	  addres: 'Nozyno 60, 77-115'
  }
];

 var handlers = {
 	printName: function() {
 		var result = document.getElementById("name");
		//result = entry[0].name;
		result.innerHTML = entry[0].name;
		console.log(result.innerHTML);
    },
	printSurname: function() {
 		var result = document.getElementById("surname");
		//result = entry[0].name;
		result.innerHTML = entry[0].surname;
		console.log(result.innerHTML);

    }
};
