const numeros= [2,4,6,8,10];

var acum=0;
var acum2=0
var media1=0;
var media2=0;

for (let i = 0; i < numeros.length; i++) {

    acum+=numeros[i];
    
}
media1=acum/5;

/* -----------numeral a*/
console.log('la media de los numeros es '+media1);

/*-------------Numeral b*/
numeros[5]=12;
for (let i = 0; i < numeros.length; i++) {

    acum2+=numeros[i];
    
}
media2=acum2/6;
console.log('la media de los numeros es '+media2);
/**** */




const numeros= [2,4,6,8,10,12];
media=0;

media=average(numeros);


function average(numeros){
   

    var acum=0;
   
    
  
var dim=numeros.length;

for (let i = 0; i < numeros.length; i++) {

    acum+=numeros[i];
    
}
return (acum/dim)

}

console.log('La media del numero es '+ media);