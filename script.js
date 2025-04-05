//your JS code here. If required.
let flag = false;

function confirmation(){
	flag = true;
	if(flag){
		alert(`You clicked OK. Proceeding...`)
	}else{
		setTimeout(()=>{
			alert(`You clicked Cancel. Exiting...`)
		},2000)
	}
}

document.querySelector('#btn').addEventListener("click" , confirmation)

