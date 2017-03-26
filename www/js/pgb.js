function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}



function cardInfo() {

	info= 'To show information about this card please enter the button\n'

	+ 'Name : Mateusz\n'
	+ 'Last name : Dyjak\n'
	+ 'email address : mateuszdyjak5@gmail.com\n'
	+ 'Dean\'s group : KrDUIS 1011\n'
	+ 'Field of study : Computer Science' ;

navigator.notification.alert(info);

}
