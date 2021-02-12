// Test Score Application using Arrays
let scores = [];
let total = 0;
let count = 0;
let score = 0;

do {
    score = parseInt(prompt("Enter a test score between 0 and 100, enter -1 to terminate"));

    if (score >= 0 && score <= 100) {
        //total += score;
        //count++;
        //document.write(`<p>Score = ${score} Count is ${count}`);
		scores.push(score);
		document.write("Value recorded.");
    } else if (score != -1){
        alert("Your input was incorrect");
    }
}
while (score != -1);

for (let s of scores)
{
	document.write(`<p>Score = ${s} Count is ${count}</p>`);
	
	total += s;
	count++;
}

let average = parseInt(total / count);
const html = `<p><strong>Average = ${average}</strong></p>`;

document.write(html);
