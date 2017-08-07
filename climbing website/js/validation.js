var validation=0;
var name=0;
var email=0;
var text=0;
 $('#fullname').on('blur', function() {
		var input = $(this);
		var name_length = input.val().length;
		if(name_length >= 5 && name_length <= 40){
			input.css('border-color','green');
			name=1;
		}
		else{
			input.css('border-color','red');
			name=0;
		}
});

  $('#email').on('blur', function() {
		var input = $(this);
		var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		if(pattern.test(input.val())){
			input.css('border-color','green');
			email=1;
		}
		else{
			input.css('border-color','red');
			email=0;
		}
});

$('#textarea').on('blur', function() {
		var input = $(this);
		var text_length = input.val().length;
		if(text_length >= 5){
			input.css('border-color','green');
			text=1;
		}
		else{
			input.css('border-color','red');
			text=0;

		}
});

$('form button').on('click', function(event) {
		validation=0;
		validation=name+email+text;
		if(validation!=111){
			event.preventDefault();
			alert("Uzupełnij prawidłowo miejsca oznaczone na czerwono.");
		}
		else{
			alert("Wiadomość została wysłana.");
		}
});
