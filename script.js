//your JS code here. If required.
let userName=document.querySelector("#username");
let password=document.querySelector("#password");
let checkbox=document.querySelector("#checkbox");
let btn=document.querySelector("#submit");
let existing=document.querySelector("#existing");
function onload(){
	existing.style.display="none";
if(localStorage.getItem("credentials"))
{
	existing.style.display="block";
}
}
existing.addEventListener("click",()=>{
if(localStorage.getItem("credentials"))
{let obj=JSON.parse(localStorage.getItem("credentials"))
alert(`Logged in as ${obj.username}`);	
}
})
btn.addEventListener("click",()=>{
	if(checkbox.checked){
		if(userName.value&&password.value)
		{
let credential={username:userName.value,password:password.value};
localStorage.setItem("credentials",JSON.stringify(credential));
alert(`Logged in as ${userName.value}`);
		}
	}
else{
if(userName.value&&password.value)
		{
	localStorage.removeItem("credentials");
alert(`Logged in as ${userName.value}`);
			existing.style.display="none";
		}

}
	
})
onload();