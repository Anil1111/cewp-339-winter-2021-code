// Validate incoming password against regex's

function validate_pass(pass)
{
	const check_numeric = /[0-9]/;
	const check_character = /[a-zA-Z]/;
	const check_special = /[\$#%@]/;
	const check_min = /.{8,}/;
	const check_max = /^.{0,20}$/;
	
	if (!(
		check_numeric.test(pass) &&
		check_character.test(pass) &&
		check_special.test(pass) &&
		check_min.test(pass) &&
		check_max.test(pass)))
		{ 
			return false;
		}

	return true;
}

document.write(validate_pass("Ap4le%ff"));
