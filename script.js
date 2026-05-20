//your JS code here. If required.
let userName=document.querySelector("#username");
let password=document.querySelector("#password");
let checkbox=document.querySelector("#checkbox");
let btn=document.querySelector("#submit");
let existing=document.querySelector("#existing");
function onload(){
	
}
btn.addEventlistener("click",()=>{
	if(checkbox.checked){
		if(userName.value&&password.value)
		{
let credential={username:userName.value,password:password.value};
localStorage.setItem("credentials",JSON.stringify(credential));

		}
	}



	
})