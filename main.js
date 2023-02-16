let year = Number(prompt("Enter any year"));

if(((year % 4 == 0) && (year % 100 !== 0 )) || (year % 400 == 0)){
       document.write(`${year} is a leap year`);
}
else{
      document.write(`${year} is a normal year`);
	 }