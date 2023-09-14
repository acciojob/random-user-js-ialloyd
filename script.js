//your code here
const para=document.getElementsByTagName('p')[0];
const image=document.querySelector('img');
const buttons=document.querySelectorAll('button');
buttons.forEach(button=>button.addEventListener('click',(event)=>{

  if()
	
}))
async function displayData(){

	let response=await fetch('https://randomuser.me/api/');
	let data=await response.json();
	// image.src=data.results[0].picture.large;

	
	
}

//displayData();