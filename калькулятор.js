jQuery('document').ready(function(){


	
	

	
	console.log(0);
	

$.ajax('https://wert2024.github.io/Robota1/', {
	success: function(){
		console.log('I get response');
		 document.querySelector('.btn').onclick = function () {
 let count = document.getElementById('count');
 let value = count.innerHTML;
 ++value;
 console.log(value);
 document.getElementById('count').innerHTML = value;
 }
 }
});
	
	
	/*
 document.querySelector('.btn').onclick = function () {
 let count = document.getElementById('count');
 let value = count.innerHTML;
 ++value;
 console.log(value);
 document.getElementById('count').innerHTML = value;
 }
*/
 



 


//------------------------------------------
  
	/*
	//сервер работает
console.log(0);

$.ajax('https://jsonplaceholder.typicode.com/posts', {
	success: function(){
		console.log('I get response');
		document.querySelector('.btn').onclick = function () {
 let count = document.getElementById('count');
 let value = count.innerHTML;
 ++value;
 console.log(value);
 document.getElementById('count').innerHTML = value;
 }
console.log('I get response2');
	}
});

console.log(1);	
console.log(2);
console.log(3);	
console.log(4);
console.log(5);      
*/      
 
     
     
     });
 
     
     



  
     










