var  mk11 = document.getElementsByClassName('moving')[0];
var  warzone = document.querySelector('#warzone');
var  gta = document.querySelector('#gta');
var  gow = document.querySelector('#gow');
var  list_item = document.querySelector('.details');
var  list_notif = document.querySelector('.list-notif');
var  home_content = document.querySelector('.home-content');
var  list_notif_icon = document.getElementsByClassName('list-notif-icon');
var  home_header = document.querySelector('.home-header');
var  home = document.querySelector('.home');
var  details = document.querySelector('.details');
var  alert_epilepsie = document.querySelector('.alert-epilepsie');
var  logo = document.querySelector('.logo');

gow.addEventListener('mouseenter', () => {

	console.log('ok');

	list_item.style.transform = 'translateX(-300px)';
});

mk11.addEventListener('mouseenter', () => {

	console.log('ok');

	list_item.style.transform = 'translateX(-300px)';
});


warzone.addEventListener('mouseenter', () => {

	console.log('ok');

	list_item.style.transform = 'translateX(300px)';
});


list_notif.addEventListener('mouseenter', () => {


	home_content.style.transform = 'translateY(400px)';
	home.classList.add('collapse');
	home_header.classList.add('active');

	Array.from(list_notif_icon).forEach(element => {
  		element.style.fontSize = "45px";
  		element.style.color = 'white';
  		/*element.style.backgroundColor = 'white' ;*/
	})

});

details.addEventListener('mouseenter', () => {


	home_content.style.transform = 'translateY(0px)';
	home.classList.remove('collapse');
	home_header.classList.remove('active');

	Array.from(list_notif_icon).forEach(element => {
  		element.style.fontSize = "25px";
  		element.style.color = 'white';
  		/*element.style.backgroundColor = 'white' ;*/
	})
});


/*Lancement du systeme*/


/*1- Le logo*/


/*2- lancement alert epilepsie*/

setTimeout( () => {
	logo.style.display ="none"; //on cache le logo
	alert_epilepsie.style.display ="flex"; //on affiche celui ci
} , 5000)


/*3- on affiche les jeux*/
setTimeout( () => {
	alert_epilepsie.style.display ="none"; //on affiche celui ci
	home.style.display ="block"; //on affiche celui ci
	home_content.style.display ="block"; //on affiche celui ci
} , 10000)


