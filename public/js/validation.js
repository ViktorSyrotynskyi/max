let email = document.getElementById("form5");
let button = document.getElementById("formbt");
let phone = document.getElementById("form4");
let name = document.getElementById("form3");
let address = document.getElementById("form2");

let nameLabel = document.getElementById('nameLabel');
let emailLabel = document.getElementById('emailLabel');
let phoneLabel = document.getElementById('phoneLabel');
let addressLabel = document.getElementById('addressLabel');

let invalidColor = "rgb(255, 0, 0)";
let normalColor = "rgb(117, 117, 117)";
let focusColor = "rgb(66, 133, 244)";

let nameRegExp = /^[a-zA-Z ]+$/;
let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let phoneRegExp = /^[\+][0-9]{12}$/;

function validation(regExp, formValue, formLabel) {
	if (regExp.test(formValue.value) == false) {
		formLabel.style.color = invalidColor;
	}
	else {
		formLabel.style.color = normalColor;
	}
}

function addressValidation() {
	if(address.value == '') {
		addressLabel.style.color = invalidColor;
	}	
	else {
		addressLabel.style.color = normalColor;
	}
}

button.onclick = function() {
	validation(nameRegExp, name, nameLabel);
	validation(emailRegExp, email, emailLabel);
	validation(phoneRegExp, phone, phoneLabel);
	addressValidation();
};

name.onfocus = function() {
	nameLabel.innerHTML = `Please enter your name (you can use only latters). Example: James Bond`;
	nameLabel.style.color = focusColor;
}

name.onblur = function() {
	nameLabel.innerHTML = 'Name';
	nameLabel.style.color = normalColor;
}

email.onfocus = function() {
	emailLabel.innerHTML = `Please enter your email. Example: qwerty123@gmail.com`;
	emailLabel.style.color = focusColor;
}

email.onblur = function() {
	emailLabel.innerHTML = 'Email';
	emailLabel.style.color = normalColor;
}

phone.onfocus = function() {
	phone.value = '+380';
	phoneLabel.innerHTML = `Please enter your phone number in format "+380XXXXXXXXX"`;
	phoneLabel.style.color = focusColor;
}

phone.onblur = function() {
	phoneLabel.innerHTML = 'Phone';
	phoneLabel.style.color = normalColor;
}

address.onfocus = function() {
	addressLabel.innerHTML = `Please enter your address.`;
	addressLabel.style.color = focusColor;
}

address.onblur = function() {
	addressLabel.innerHTML = 'Address';
	addressLabel.style.color = normalColor;
}
