const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const subject = document.getElementById('sub').value;
const message = document.getElementById('mes').value;
//const form = document.getElementById('form');

function formValidate(){
	var error =document.getElementById('error');	
   if(name==''||name==null){
		error.innerHTML='Name is required';
        return false;		
	}
	
	
	if(message.length()==0||message.length()==null||message.length()>1){
		error.innerHTML='please write your comment with length no more than 300  '; 
        return false;		
	}
		
	}