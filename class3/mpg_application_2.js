"use strict";

let enter_again = "y";

do
{
	const miles = parseFloat(prompt("Enter miles driven"));
	
	const gallons = parseFloat(prompt("Enter gallons of gas used"));
	
	if (miles > 0 && gallons > 0)
	{
		const mpg = parseFloat(miles/gallons);
		const html = `Miles: ${miles}, Gallons: ${gallons}, MPG: </label>${mpg.toFixed(2)}<br/>`;
		document.write(html);
	}
	else
	{
		alert("Enter a non zero value please.");
	}
	
	enter_again = prompt("Would you like to enter another entry?", "y");
	
}
while (enter_again.toUpperCase() == "Y");