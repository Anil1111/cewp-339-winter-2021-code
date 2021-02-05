let investment = 0;
let rate = 0;
let years = 0;

function getNumber(message)
{
	let returnValue = 0;
	
	do {
	returnValue = parseFloat(prompt(message));
	} while (isNaN(returnValue));
	return returnValue;
}

investment = getNumber("Enter investment amount as a number 000.00");

/*
do {
investment = parseFloat(prompt("Enter investment amount as a number 000.00"));
} while (isNaN(investment));
*/

do {
rate = parseFloat(prompt("Enter rate as 00.00"));
} while (isNaN(rate));

do {
years = parseFloat(prompt("Enter number of years as 0"));
} while (isNaN(years));

let futureValue = investment;
for (let i = 1; i <= years; i++ ) {
    futureValue += futureValue * rate / 100;
}

document.write(`<p><label>Investment amount:
                </label> ${investment}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label>
                ${futureValue.toFixed(2)}</p>`);