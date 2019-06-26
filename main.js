//alert("Hola, papuhs")
//console.log ("Vamos a subir los archivos a git)
// var persona= 
// {
// nombre:"Axel",
// apellido:"Franco",
// cedula:"1234567895",
// edad:18
// }

// if (persona.edad >=18) 
// {
//  alert(persona.nombre +"" +" es mayor de edad y tiene " + persona.edad)	
// }


var arrayPeople=[
{nombre:"Padilla Shonnen",
edad:18,
cedula:"666",
PeliFavorita:"Chucky",
GeneroFavorito:"Terror"
},

{nombre:"Samael",
edad:15,
cedula:"123456",
PeliFavorita:"Chihiro",
GeneroFavorito:"Anime"
},

{nombre:"Jesse",
edad:18,
cedula:"456789",
PeliFavorita:"Titanic",
GeneroFavorito:"Drama"
}
]

for (var i = 0; i <= arrayPeople.length; i++) {

alert(arrayPeople[i].nombre+"\n"+arrayPeople[i].edad+"\n"+arrayPeople[i].cedula+"\n"+arrayPeople[i].PeliFavorita+"\n"+arrayPeople[i].GeneroFavorito+"\n")
if (arrayPeople[i].edad >=18 && arrayPeople[i].GeneroFavorito=="Terror") 
{
 alert("Te recomendamos estos estrenos:")
 alert("Camino hacia el terror, El resplandor, La llamada")
}
else if (arrayPeople[i].GeneroFavorito=="Anime")
{
 alert("Te recomendamos estos estrenos:")
 alert("Tenshi No Tamago, Nousicaa, Cuentos de Terramar")
}
else
{
 alert("Te recomendamos estos estrenos:")
 alert("Hachico, Rocki Balboa, Rango")	
}
}