// Incrémenter le JS de la page d'inscription
const inputLastname = document.getElementById('LastnameInput');
const inputFirstname = document.getElementById('FirstnameInput');
const inputEmail = document.getElementById('EmailInput');
const inputPassword = document.getElementById('PasswordInput');
const inputValidatePassword = document.getElementById('ValidatePasswordInput');
const btnValidateInscription = document.getElementById('btn-validate-inscription');

btnValidateInscription.disabled = true;
inputLastname.classList.add("is-invalid");
inputFirstname.classList.add("is-invalid");
inputEmail.classList.add("is-invalid");
inputPassword.classList.add("is-invalid");
inputValidatePassword.classList.add("is-invalid");

inputLastname.addEventListener('keyup', validateForm);
inputFirstname.addEventListener('keyup', validateForm);
inputEmail.addEventListener('keyup', validateForm);
inputPassword.addEventListener('keyup', validateForm);
inputValidatePassword.addEventListener('keyup', validateForm);

function validateForm() {
	const lastnameOk = validateRequired(inputLastname);
	const firstnameOk = validateRequired(inputFirstname);
	const emailOk = validateMail(inputEmail);
	const passwordOk = validatePassword(inputPassword);
	const validatePasswordOk = validateConfirmationPassword(inputPassword, inputValidatePassword);

	if (lastnameOk && firstnameOk && emailOk && passwordOk && validatePasswordOk) {
		btnValidateInscription.disabled = false;
	} else {
		btnValidateInscription.disabled = true;
	}
}

function validateRequired(input) {
	if (input.value != '') {
		input.classList.add("is-valid");
		input.classList.remove("is-invalid");

		return true;
	} else {
		input.classList.add("is-invalid");
		input.classList.remove("is-valid");

		return false;
	}
}

function validateMail(input) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const mailUser = input.value;

	if (mailUser.match(emailRegex)) {
		input.classList.add("is-valid");
		input.classList.remove("is-invalid");

		return true;
	} else {
		input.classList.add("is-invalid");
		input.classList.remove("is-valid");

		return false;
	}
}

function validatePassword(input) {
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
	const passwordUser = input.value;

	if (passwordUser.match(passwordRegex)) {
		input.classList.add("is-valid");
		input.classList.remove("is-invalid");

		return true;
	} else {
		input.classList.add("is-invalid");
		input.classList.remove("is-valid");

		return false;
	}
}

function validateConfirmationPassword(inputPwd, inputConfirmPwd) {
	if (inputConfirmPwd.value === inputPwd.value) {
		inputConfirmPwd.classList.add("is-valid");
		inputConfirmPwd.classList.remove("is-invalid");

		return true;
	} else {
		inputConfirmPwd.classList.add("is-invalid");
		inputConfirmPwd.classList.remove("is-valid");

		return false;
	}
}
